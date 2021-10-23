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
  removeChannel = () => {
    this.setState((state) => ({
      ...state,
      channel: [],
    }));
  };
  diseaseHandler = (message) => {
    this.addDisease(message);
  };

  rateHandle = (message) => {
    var msg;
    if (message < 3) {
      msg = this.createChatBotMessage(
        "Hmm... there is a problem. Please can you give me a feedback ?"
      );
      this.setChatbotState("feedback");
    } else {
      msg = this.createChatBotMessage("excellent");
      this.setChatbotState("normal");
    }
    this.setChatbotMessage(msg);
  };

  sendFeedback = (message) => {
    var msg;
    Axios.post("http://127.0.0.1:5000/sendFeedback", {
      feedback: message,
    }).then((response) => {
      console.log(response.data);
      msg = this.createChatBotMessage("Thank you for feedback");
      this.setChatbotMessage(msg);
    });
  };

  predictHandler = (message) => {
    var msg;
    Axios.post("http://127.0.0.1:5000/predict", { diseases: message }).then(
      (response) => {
        console.log(message);
        if (response.data.members == 0) {
          msg = this.createChatBotMessage(
            "Please re-enter 4 symptoms or change the order of symptoms"
          );
          // this.setChatbotState("predict");
          this.removeDisease();
        } else {
          msg = this.createChatBotMessage(response.data.members);
          this.setChatbotState("normal");
          this.removeDisease();
        }
        console.log(response.data.members);
        this.setChatbotMessage(msg);
      }
    );
  };
  findDoctor = (message) => {
    var msg;
    Axios.post("https://xyronchatbot.azurewebsites.net/getDoc", { specialist: message }).then(
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
    Axios.post("https://xyronchatbot.azurewebsites.net/reply", { msg: message }).then(
      (response) => {
        console.log(response.data.members);
        if (response.data.members == "predict") {
          this.setChatbotState("predict");
          msg = this.createChatBotMessage("Please Enter 4 symptoms");
          this.setChatbotMessage(msg);
        } else if (response.data.members == "findDoctor") {
          this.setChatbotState("findDoctor");
          msg = this.createChatBotMessage("Please enter the specialist ?");
          this.setChatbotMessage(msg);
        } else if (response.data.members == "covidLocalCurrent") {
          this.setChatbotState("covidLocalCurrent");
          console.log("covidLocalCurrent");
          this.getCovidData("covidLocalCurrent");
        } else if (response.data.members == "covidLocalToday") {
          this.setChatbotState("covidLocalToday");
          console.log("covidLocalToday");
          this.getCovidData("covidLocalToday");
        } else if (response.data.members == "covidGlobalCurrent") {
          this.setChatbotState("covidGlobalCurrent");
          console.log("covidGlobalCurrent");
          this.getCovidData("covidGlobalCurrent");
        } else if (response.data.members == "thanks") {
          this.setChatbotState("thanks");
          console.log("thanks");
          msg = this.createChatBotMessage(
            "You are welcome ! If you are satisfied with our service please rate us",
            {
              widget: "rating",
            }
          );
          this.setChatbotMessage(msg);
        } else {
          msg = this.createChatBotMessage(response.data.members);
          this.setChatbotMessage(msg);
        }
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
    console.log(docID);
    this.setState((state) => ({
      ...state,
      channel: [state.doctors[docID]],
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
      "-0" +
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
    var msg;
    Axios.post("http://127.0.0.1:5000/channelDoc", { channel: chObject }).then(
      (response) => {
        console.log(message);
        if (response.data.er == 1) {
          msg = this.createChatBotMessage(
            "Please can you select a another time"
          );
          this.setChatbotMessage(msg);
        } else {
          console.log(response.data);
          this.setChatbotState("normal");
          msg = this.createChatBotMessage(
            "Your channel details have been recorded..."
          );
          this.setChatbotMessage(msg);
        }
      }
    );
  };
  getCovidData = (message) => {
    var msg;
    Axios.get("https://www.hpb.health.gov.lk/api/get-current-statistical").then(
      (response) => {
        // console.log(response.data.data.update_date_time);

        // msg = this.createChatBotMessage(response.data.members);
        // this.setChatbotMessage(msg);
        if (message == "covidLocalCurrent") {
          this.setState((state) => ({
            ...state,
            covidLocalCurrent: [
              ...state.covidLocalCurrent,
              response.data.data.update_date_time,
              response.data.data.local_total_cases,
              response.data.data.local_total_number_of_individuals_in_hospitals,
              response.data.data.local_recovered,
              response.data.data.local_deaths,
            ],
          }));
          msg = this.createChatBotMessage(
            "Here is the current situation of Sri Lanka",
            { widget: "covidLocalCurrent" }
          );
          this.setChatbotMessage(msg);
        } else if (message == "covidLocalToday") {
          this.setState((state) => ({
            ...state,
            covidLocalToday: [
              ...state.covidLocalToday,
              response.data.data.update_date_time,
              response.data.data.local_new_cases,
              response.data.data.local_new_deaths,
            ],
          }));
          msg = this.createChatBotMessage(
            "Here is the today situation of Sri Lanka",
            { widget: "covidLocalToday" }
          );
          this.setChatbotMessage(msg);
        } else if (message == "covidGlobalCurrent") {
          this.setState((state) => ({
            ...state,
            covidGlobalCurrent: [
              ...state.covidGlobalCurrent,
              response.data.data.update_date_time,
              response.data.data.global_total_cases,
              response.data.data.global_new_cases,
              response.data.data.global_deaths,
              response.data.data.global_new_deaths,
              response.data.data.global_recovered,
            ],
          }));
          msg = this.createChatBotMessage(
            "Here is the today situation in global",
            { widget: "covidGlobalCurrent" }
          );
          this.setChatbotMessage(msg);
        }
        // else {
        //   console.log(response.data.doc);
        //   this.setState((state) => ({ ...state, doctors: response.data.doc }));
        //   this.setChatbotState("normal");
        //   msg = this.createChatBotMessage("Ok sure", { widget: "doctors" });
        //   this.setChatbotMessage(msg);
        // }
      }
    );
  };
}

export default ActionProvider;
