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
  findDoctor = (message) => {
    var msg;
    Axios.post("http://127.0.0.1:5000/getDoc", { specialist: message }).then(
      (response) => {
        console.log(message);
        // msg = this.createChatBotMessage(response.data.members);
        // this.setChatbotMessage(msg);
        if (response.data.er == 1) {
          msg = this.createChatBotMessage("Please re-enter the specialty");
          this.setChatbotMessage(msg);
        } else {
          console.log(response.data.doc);
          this.setState((state) => ({ ...state, doctors: response.data.doc }));
          this.setChatbotState("normal");
          msg = this.createChatBotMessage("Ok sure", { widget: "doctors" });
          this.setChatbotMessage(msg);
        }
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
        } else if (response.data.members == "findDoctor") {
          this.setChatbotState("findDoctor");
          msg = this.createChatBotMessage("Please enter the specialist ?");
        } else {
          msg = this.createChatBotMessage(response.data.members);
          console.log("Sandaruan");
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

  selectDoctor = (docID) => {
    // const msg1 = this.createChatBotMessage("Sure wait a minite");
    // this.setChatbotMessage(msg1);
    this.setState((state) => ({
      ...state,
      channel: [state.doctors[docID - 1]],
    }));
    const msg2 = this.createChatBotMessage("Sure. Please select the date", {
      widget: "calender",
    });
    this.setChatbotState("channel");
    this.setChatbotMessage(msg2);
  };

  selectTime = (value) => {
    const msg1 = this.createChatBotMessage(
      "Sure wait a minite and please enter time (9.00 AM - 4.00 PM)"
    );
    var date =
      value.getFullYear() +
      "-" +
      (value.getMonth() + 1) +
      "-" +
      value.getDate();

    console.log(date);
    this.setState((state) => ({
      ...state,
      date: [date],
    }));

    this.setChatbotMessage(msg1);
  };
  channelDoctor = (message, chObject) => {
    const msg2 = this.createChatBotMessage("Thank You");
    // this.setChatbotState("channel");
    this.setChatbotState("normal");
    console.log(chObject);

    this.setChatbotMessage(msg2);
  };
}

export default ActionProvider;