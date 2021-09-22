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

  addMethod = (method) => {
    this.setState((state) => ({
      ...state,
      to: [...state.to, method],
    }));
  };

  removeMethod = () => {
    this.setState((state) => ({
      ...state,
      method: [],
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

  methodHandler = (to, from, method) => {
    // var msg;
    // Axios.post("http://127.0.0.1:5000/predict", { diseases: message }).then(
    //   (response) => {
    //     console.log(message);
    //     msg = this.createChatBotMessage(response.data.members);
    //     this.setChatbotMessage(msg);
    //     console.log(response.data.members);
    //   }
    // );
  };



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
      this.addMethod('bus') ;
    }
    if ( wrds.includes('train') ) {
      this.addMethod('train') ;
    }

  };




  helloHandler = (message) => {
    var msg;
    Axios.post("http://127.0.0.1:5000/reply", { msg: message }).then(
      (response) => {
        // console.log(response.data.members);
        this.stationHandler(message)
        if (response.data.members == "travel") {
          this.setChatbotState("travel");
          // console.log(message);
          // this.stationHandler(message)
          msg = this.createChatBotMessage("What is the starting point?");
          this.removeDisease();
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
