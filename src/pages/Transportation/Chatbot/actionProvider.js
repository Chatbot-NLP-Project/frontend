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

  addDisease = (dis) => {
    this.setState((state) => ({
      ...state,
      sympthoms: [...state.sympthoms, dis],
    }));
  };

  removeDisease = () => {
    this.setState((state) => ({
      ...state,
      sympthoms: [],
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

  diseaseHandler = (message) => {
    this.addDisease(message);
  };

  predictHandler = (message) => {
    var msg;
    Axios.post("http://127.0.0.1:5000/predict", { diseases: message }).then(
      (response) => {
        console.log(message);
        msg = this.createChatBotMessage(response.data.members);
        this.setChatbotMessage(msg);
        console.log(response.data.members);
      }
    );
  };

  // Transportation Only


  methodHandler = (to, from, mode) => {
    console.log(to, from , mode);
    // Axios.post("http://127.0.0.1:5000/travel", { to: to, from: from, mode: mode, }).then(
    //   (response) => {
    //     console.log(response);
    //     msg = this.createChatBotMessage(response.data.members);
    //     this.setChatbotMessage(msg);
    //     console.log(response.data.members);
    //   }
    // );


    // clear current state, from to and method
  };

  fromHandler = (message, state) => {
    var msg;
    console.log(message);
    console.log(state.from.length);
    if (state.from.length != 0) {
      this.methodHandler(state.to[0], state.from[0], message.toLowerCase())
    } else {
      console.log('came to else');
      this.addMode(message)
      this.setChatbotState("travelFrom")
      msg = this.createChatBotMessage('What are you starting the journey from? ');
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
  };

  messageHandler = (message, state) => {
    var msg;
    Axios.post("http://127.0.0.1:5000/reply", { msg: message }).then(
      (response) => {
        if (response.data.members == "travel") {
          console.log(response.data.members);
          this.setChatbotState("travel");
          this.stationHandler(message);
          // if from is not set, ask to set from
          // if (!from) {
          //   msg = this.createChatBotMessage("What is the starting point?");
          // }
          // call database and get available options
          // this.methodHandler(to, from);
          // display options
          msg = this.createChatBotMessage('What\'s your preferred method? bus or train? ');
        } else {
          msg = this.createChatBotMessage(response.data.members);
        }
        this.setChatbotMessage(msg);
      }
    );
  };

  // Axios.get("http://127.0.0.1:5000/chat").then((response) => {
  //   console.log(response.data.members[0]);
  //   msg = this.createChatBotMessage(response.data.members[1]);
  //   this.setChatbotMessage(msg);
  // });
  // var n = msg.toString();
  // handleJavascriptQuiz = () => {
  //   const msg = this.createChatBotMessage("Please Enter three symptom");
  //   this.setChatbotMessage(msg);
  // };
}

export default ActionProvider;