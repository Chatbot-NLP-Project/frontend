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

  helloHandler = (message) => {
    var msg;
    Axios.post("http://127.0.0.1:5000/reply", { msg: message }).then(
      (response) => {
        console.log(response.data.members);
        if (response.data.members == "predict") {
          this.setChatbotState("predict");
          msg = this.createChatBotMessage("Please Enter 4 symptoms");
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
