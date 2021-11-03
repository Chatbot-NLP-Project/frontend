import Axios from "axios";
import MessageParser from "./messageParser";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.num = 0;
  }

  setChatbotMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };

  setChatbotState = (s) => {
    this.setState((state) => ({
      ...state,
      currentState: [...state.currentState, s],
    }));
  };

  addFrom = (station) => {
    this.setState((state) => ({
      ...state,
      from: [...state.from, station],
    }));
  };

  removeFrom = () => {
    this.setState((state) => ({
      ...state,
      from: [],
    }));
  };

  addTo = (station) => {
    this.setState((state) => ({
      ...state,
      to: [...state.to, station],
    }));
  };

  removeTo = () => {
    this.setState((state) => ({
      ...state,
      to: [],
    }));
  };

  addMode = (mode) => {
    this.setState((state) => ({
      ...state,
      mode: [...state.mode, mode],
    }));
  };

  removeMode = () => {
    this.setState((state) => ({
      ...state,
      mode: [],
    }));
  };

  addModeDescription = (modeDescription) => {
    this.setState((state) => ({
      ...state,
      modeDescription: [...state.mode, modeDescription],
    }));
  };

  removeModeDescription = () => {
    this.setState((state) => ({
      ...state,
      modeDescription: [],
    }));
  };

  addComplaintDetails = (complaintDetails) => {
    this.setState((state) => ({
      ...state,
      complaintDetails: [...state.mode, complaintDetails],
    }));
  };

  removeComplaintDetails = () => {
    this.setState((state) => ({
      ...state,
      complaintDetails: [],
    }));
  };

  clearStates = () => {
    this.removeFrom();
    this.removeTo();
    this.removeMode();
    this.removeModeDescription();
    this.removeComplaintDetails();
  }

  // Transportation Only

  sendComplaint = (mode, description, details) => {
    let body = 'The following complaint has been made by an passenger. \n ';
    body += '\n\"' + details + '\"\n';
    body += '\nUser has described the transportation method he\'s reffering to as followed. \n'
    body += '\n\"' + description + '\"\n';

    let email = "gkkpathirana@gmail.com";
    let subject = "User Complaint"

    if(mode == 'bus'){
      // email = "info@ntc.gov.lk"
      email = "gkkpathirana@gmail.com";
    } else if (mode == 'train'){
      // email = "gmr@railway.gov.lk"
      email = "gkkpathirana@gmail.com";
    }

    let msg;
    Axios.post("https://xyrontransport.azurewebsites.net/sendEmail", { email: email, subject: subject, message: body, }).then(
      (response) => {
        console.log(response);
      }
    ).catch((error) => {
      console.log(error);
    });
  }

  complaintHandler = (message, state) => {
    var msg;
    var reply  = this.replyFilter(message);
      if (reply == 'yes'){
        if (state.mode.length != 0){
          if (state.mode == 'bus'){
            msg = this.createChatBotMessage("What is the bus registration plate's number? Route number and route name? Tell me as you know in a single message.");
          } else if (state.mode == 'train') {
            msg = this.createChatBotMessage("What train is this?");
          } 
        } else {
          this.addMode('unidentified');
          msg = this.createChatBotMessage("Tell me some details about the transportation method you're using in a single message.");
        }
        // this.setChatbotState("normal");
        this.setChatbotMessage(msg);
      } else if (reply == 'no') {
        msg = this.createChatBotMessage('I\'m sorry about the bad experience. 🙁');
        this.setChatbotMessage(msg);
        this.setChatbotState("normal");
      } else if (state.mode[0] != '' && state.modeDescription.length == 0) {
        this.addModeDescription(message);
        msg = this.createChatBotMessage('Please briefly explain your experience in a single message.');
        this.setChatbotMessage(msg);
      } else {
        if (message != ''){
          this.addComplaintDetails(message);
          this.sendComplaint(state.mode[0], state.modeDescription[1], message);
          msg = this.createChatBotMessage('Okay, your situation will be looked into. Thank you for informing us.');
          this.setChatbotMessage(msg);
          this.clearStates();
          this.setChatbotState("normal");
        }
      }
  }

  replyFilter = (reply) => {
    const yes = ['yes','yeah','yep','aye','alright','sure','indeed','absolutely', 'of course', 'by all means'];
    const no = ['no', 'nope', 'not at all', 'never', 'of course not','nah']
    var wrds = reply.split(' ').map(v => v.toLowerCase());

    if (wrds.includes('to')){
      wrds.shift();
      return wrds[0];
    }
    else if (wrds.includes('from')){
      wrds.shift();
      return wrds[0];
    }
    else if (wrds.includes('by')){
      wrds.shift();
      return wrds[0];
    }
    else if (reply in yes){
      return 'yes';
    }
    else if (reply in no){
      return 'no';
    }
    else {
      return reply.toLowerCase();
    }
  }

  methodHandler = (to, from, mode) => {
    var msg;
    Axios.post("https://xyrontransport.azurewebsites.net/travel", { to: to, from: from, mode: mode, }).then(
      (response) => {
        if (response.data.er == 1) {
          this.setChatbotState("normal");
          msg = this.createChatBotMessage("Sorry. Entered locations could not be found. Try with different locations.");
          this.setChatbotMessage(msg);
          this.clearStates();
        } else {
          console.log(response.data.methods);
          this.setState((state) => ({ ...state, methods: response.data.methods }));
          this.setChatbotState("normal");
          msg = this.createChatBotMessage("Ok here's what i have found.", { widget: "methods" });
          this.setChatbotMessage(msg);
          this.clearStates();
        }
      }
    );
  };

  fromHandler = (message, state) => {
    var reply = this.replyFilter(message)
    var msg;
    if (state.from.length != 0) {
      if (reply == 'bus' || reply == 'train'){
      // if (message.toLowerCase() == 'bus' || message.toLowerCase() == 'train'){
          this.addMode(reply);
          if(state.to.length != 0) {
            this.methodHandler(state.to[0], state.from[0], reply)
          } else {
            this.setChatbotState('travelTo');
            msg = this.createChatBotMessage('Where do you want to go to?');
            this.setChatbotMessage(msg);
          }
      } else {
        msg = this.createChatBotMessage('Sorry I didn\'t get that. Please eneter bus or train. ');
        this.setChatbotMessage(msg);
      }
    }
    else if (state.mode.length != 0) {
      this.addFrom(reply);
      if(state.to.length != 0){
        this.methodHandler(state.to[0], reply, state.mode[0])
      } else {
        this.setChatbotState('travelTo');
        msg = this.createChatBotMessage('Where do you want to go to?');
        this.setChatbotMessage(msg);
      }
    } else {
        if (reply == 'bus' || reply == 'train'){
            this.addMode(reply)
            this.setChatbotState("travelFrom")
            msg = this.createChatBotMessage('Where are you starting the journey from? ');
            this.setChatbotMessage(msg);
        } else {
          msg = this.createChatBotMessage('Sorry I didn\'t get that. Please eneter bus or train. ');
          this.setChatbotMessage(msg);
        }
    }
  }

  toHandler = (message, state) => {
    var msg;
    var reply = this.replyFilter(message);
    console.log(reply);
    console.log(state);
    if (reply != '') {
      this.addTo(reply);
      this.methodHandler(reply, state.from[0], state.mode[0]);
    } else {
      msg = this.createChatBotMessage('Sorry I didn\'t get that. Please enter the destination point again ');
      this.setChatbotMessage(msg);
    }   
  }

  stationHandler = (message) => {
    var wrds = message.split(' ').map(v => v.toLowerCase());
    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    for (let i = 0; i < wrds.length; i++) {
      if (wrds[i] == 'to' && countOccurrences(wrds, 'to') >1) { 
        wrds.splice(i, 1);
        console.log(wrds);
        break; 
      }
    }
    if ( wrds.includes('from') ) {
      this.addFrom(wrds[wrds.indexOf('from') + 1]) ;
    }
    if ( wrds.includes('to') ) {
      this.addTo(wrds[wrds.indexOf('to') + 1]) ;
    }
    if ( wrds.includes('bus') ) {
      this.addMode('bus') ;
    }
    if ( wrds.includes('train') ) {
      this.addMode('train') ;
    }
  };

  reservationHandler = (message) => {
    var msg;
    var wrds = message.split(' ').map(v => v.toLowerCase());
    var linkBus = [
      {
        lnkName: 'Reserve bus ticket',
        lnkSite: 'busseat.lk',
        lnkLink: 'https://busseat.lk/'
      },
      {
        lnkName: 'Reserve train ticket',
        lnkSite: 'railway.gov.lk',
        lnkLink: 'http://www.railway.gov.lk/web/index.php?option=com_content&view=article&id=61&Itemid=68&lang=en'
      },
    ]

    if ( wrds.includes('bus') ) {
      this.setState((state) => ({ ...state, links: linkBus.slice(0,1) }));
    }
    else if ( wrds.includes('train') ) {
      this.setState((state) => ({ ...state, links: linkBus.slice(1,2) }));
    } else {
      this.setState((state) => ({ ...state, links: linkBus }));
    }
  };

  messageHandler = (message, state) => {
    var msg;
    Axios.post("https://xyrontransport.azurewebsites.net/reply", { msg: message }).then(
      (response) => {
        if (response.data.members == "travel") {
          this.setChatbotState("travel");
          this.stationHandler(message);
          msg = this.createChatBotMessage('What\'s your preferred method? bus or train? ');
        } else if (response.data.members == "complaint"){
          this.setChatbotState("complaint");
          this.stationHandler(message);
          msg = this.createChatBotMessage('Do you want to make a complaint? ');
        } else if (response.data.members == "reserve") {
          this.createChatBotMessage(this.reservationHandler(message))
          msg = this.createChatBotMessage("Make your reservation from here.", { widget: "links" });
        } else if (response.data.members == "schedule") {
          msg = this.createChatBotMessage("Get train schedule details from here.", { widget: "schedules" });
        }
        else {
          msg = this.createChatBotMessage(response.data.members);
        }
        this.setChatbotMessage(msg);
      }
    );
  };
}
  
export default ActionProvider;