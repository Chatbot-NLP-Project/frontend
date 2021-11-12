/* eslint-disable eqeqeq */
import Axios from "axios";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.num = 0;
  }

  // set a message to chatbot interface
  setChatbotMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };

  // set chatbot state
  setChatbotState = (s) => {
    this.setState((state) => ({
      ...state,
      currentState: [...state.currentState, s],
    }));
  };

  // add a disease to the sympthoms array
  addDisease = (dis) => {
    this.setState((state) => ({
      ...state,
      sympthoms: [...state.sympthoms, dis],
    }));
  };

  // remove diseases from sympthoms array
  removeDisease = () => {
    this.setState((state) => ({
      ...state,
      sympthoms: [],
    }));
  };

  // remove channel details from channel array
  removeChannel = () => {
    this.setState((state) => ({
      ...state,
      channel: [],
    }));
  };
  diseaseHandler = (message) => {
    this.addDisease(message);
  };
  // handel rate funationality after user rate
  rateHandle = (message) => {
    var msg;
    if (message < 3) {
      msg = this.createChatBotMessage(
        "Hmm... there is a problem. Please can you give me a feedback ?"
      );
      this.setChatbotState("feedback");
    } else {
      msg = this.createChatBotMessage("Thank You.");
      this.setChatbotState("normal");
    }
    this.setChatbotMessage(msg);
  };

  // send user feedback to database
  sendFeedback = (message) => {
    var msg;
    var feedback = {
      userID: JSON.parse(localStorage.getItem("user"))["user_id"],
      msg: message,
    };
    Axios.post("https://xyronhealthcarebot.azurewebsites.net/sendFeedback", {
      feedback: feedback,
    }).then((response) => {
      console.log(response.data);
      msg = this.createChatBotMessage("Thank you for feedback.");
      this.setChatbotMessage(msg);
      this.setChatbotState("normal");
    });
  };

  // call predict disease funtion in backend
  predictHandler = (message) => {
    var msg;
    Axios.post("https://xyhealthbot.azurewebsites.net/predict", {
      diseases: message,
    }).then((response) => {
      console.log(message);
      if (response.data.disease == 0) {
        msg = this.createChatBotMessage(
          "Sorry I can't make any predictions. Please re-enter 4 symptoms or change the order of symptoms."
        );
        this.removeDisease();
      } else {
        if (response.data.Precaution_1 == 0) {
          msg = this.createChatBotMessage(response.data.disease);
        } else {
          msg = this.createChatBotMessage(response.data.disease, {
            widget: "moreinfo", // set widget for more information
          });
          this.setState((state) => ({
            ...state,
            disease: [
              response.data.disease,
              response.data.description,
              response.data.Precaution_1,
              response.data.Precaution_2,
              response.data.Precaution_3,
            ],
          }));
        }

        this.setChatbotState("normal");
        this.removeDisease();
      }
      console.log(response.data);
      this.setChatbotMessage(msg);
    });
  };

  // get doctor details from databse
  findDoctor = (message) => {
    var msg;
    Axios.post("https://xyronhealthcarebot.azurewebsites.net/getDoc", {
      specialist: message,
    }).then((response) => {
      console.log(message);
      if (response.data.er == 1) {
        msg = this.createChatBotMessage("Please re-enter the specialty");
        this.setChatbotMessage(msg);
      } else {
        console.log(response.data.doc);
        this.setState((state) => ({ ...state, doctors: response.data.doc }));
        this.setChatbotState("normal");
        msg = this.createChatBotMessage("Ok sure", { widget: "doctors" }); // set doctor details as widgets
        this.setChatbotMessage(msg);
      }
    });
  };

  // get clinic information of national hospital
  getNationalClinic = (clinic) => {
    var msg;
    Axios.post("https://xyronhealthcarebot.azurewebsites.net/getClinic", {
      clinicType: clinic,
    }).then((response) => {
      console.log(clinic);
      if (response.data.er == 1) {
        msg = this.createChatBotMessage("No data available in this time");
        this.setChatbotMessage(msg);
      } else {
        console.log(response.data.clinic);
        this.setState((state) => ({
          ...state,
          clinic: response.data.clinic,
        }));
        msg = this.createChatBotMessage("Ok sure.", { widget: "clinic" });
        this.setChatbotMessage(msg);
      }
      this.setChatbotState("normal");
    });
  };

  // get clinic information of eye hospital
  getEyeClinic = (clinic) => {
    var msg;
    Axios.post("https://xyronhealthcarebot.azurewebsites.net/getEyeClinic", {
      clinicType: clinic,
    }).then((response) => {
      console.log(clinic);
      if (response.data.er == 1) {
        msg = this.createChatBotMessage("No data available in this time");
        this.setChatbotMessage(msg);
      } else {
        console.log(response.data.clinic);
        this.setState((state) => ({
          ...state,
          clinic: response.data.clinic,
        }));
        msg = this.createChatBotMessage("Ok sure.", { widget: "clinic" });
        this.setChatbotMessage(msg);
      }
      this.setChatbotState("normal");
    });
  };

  // pass user message to backend (chatbot model) get the response
  helloHandler = (message) => {
    var msg;
    Axios.post("https://xyronhealthcarebot.azurewebsites.net/reply", {
      msg: message,
    }).then((response) => {
      console.log(response.data.members);
      // change state of chatbot to predict state
      if (response.data.members == "predict") {
        this.setChatbotState("predict");
        msg = this.createChatBotMessage("Please Enter 4 symptoms");
        this.setChatbotMessage(msg);
        // change state of chatbot to findDoctor
      } else if (response.data.members == "findDoctor") {
        this.setChatbotState("findDoctor");
        msg = this.createChatBotMessage("Please enter the speciality ?");
        this.setChatbotMessage(msg);
        // change state of chatbot to covidLocalCurrent
      } else if (response.data.members == "covidLocalCurrent") {
        this.setChatbotState("covidLocalCurrent");
        console.log("covidLocalCurrent");
        this.getCovidData("covidLocalCurrent");
        // change state of chatbot to covidLocalToday
      } else if (response.data.members == "covidLocalToday") {
        this.setChatbotState("covidLocalToday");
        console.log("covidLocalToday");
        this.getCovidData("covidLocalToday");
        // change state of chatbot to covidGlobalCurrent
      } else if (response.data.members == "covidGlobalCurrent") {
        this.setChatbotState("covidGlobalCurrent");
        console.log("covidGlobalCurrent");
        this.getCovidData("covidGlobalCurrent");
        // change state of chatbot to clinic
      } else if (response.data.members == "clinic") {
        this.setChatbotState("clinic");
        console.log("clinic");
        msg = this.createChatBotMessage("Please select the Hospital.", {
          widget: "hospital",
        });
        this.setChatbotMessage(msg);
        // change state of chatbot to thanks
      } else if (response.data.members == "thanks") {
        this.setChatbotState("thanks");
        console.log("thanks");
        msg = this.createChatBotMessage(
          "You are welcome ! If you are satisfied with our service please rate us.",
          {
            widget: "rating",
          }
        );
        this.setChatbotMessage(msg);
      } else {
        msg = this.createChatBotMessage(response.data.members);
        this.setChatbotMessage(msg);
      }
    });
  };

  // render calender widget after the user select the channeling doctor
  selectDoctor = (docID) => {
    console.log(docID);
    this.setState((state) => ({
      ...state,
      channel: [state.doctors[docID]],
    }));
    const msg2 = this.createChatBotMessage("Sure. Please select the date.", {
      widget: "calender", // set calender widget
    });
    this.setChatbotState("channel");
    this.setChatbotMessage(msg2);
  };

  // handel the selecting channeling time
  selectTime = (value) => {
    const msg1 = this.createChatBotMessage(
      "Please enter time between 9.00 AM - 4.00 PM.",
      { widget: "time" } // set clock widget
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
    this.setChatbotState("time");

    this.setChatbotMessage(msg1);
  };

  // send channeling details to backend
  channelDoctor = (chObject) => {
    var msg;
    Axios.post("https://xyronhealthcarebot.azurewebsites.net/channelDoc", {
      channel: chObject,
    }).then((response) => {
      if (response.data.er == 1) {
        msg = this.createChatBotMessage(
          "Please can you select a another time.",
          { widget: "time" }
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
    });
  };

  // get covid-19 data from government website
  getCovidData = (message) => {
    var msg;
    Axios.get("https://www.hpb.health.gov.lk/api/get-current-statistical").then(
      (response) => {
        //  user asking for current covid-19 situation in sri lanka
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
            "Here is the current situation of Sri Lanka.",
            { widget: "covidLocalCurrent" }
          );
          this.setChatbotMessage(msg);
          //  user asking for today covid-19 situation in sri lanka
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
            "Here is the today situation of Sri Lanka.",
            { widget: "covidLocalToday" }
          );
          this.setChatbotMessage(msg);
          //  user asking for current covid-19 situation in globaly
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
            "Here is the today situation in global.",
            { widget: "covidGlobalCurrent" }
          );
          this.setChatbotMessage(msg);
        }
      }
    );
  };
}

export default ActionProvider;
