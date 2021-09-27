import Axios from "axios";
import MessageParser from "./messageParser";
//this is used to update internal state of the chatbot
//The actionprovider controls what kind of action that the chatbot is going to 
//perform. The actionprovider is given the createChatBotMessage and createClientMessage 
//functions in the constructor, which you can use to create a new responses.
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage
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

  //Display internet service providers
  handleDataPackage = () => {
    const message = this.createChatBotMessage(
      "I have data package details about Mobitel, Dialog, Hutch and Airtel",
      {
        widget: "InternetProvider"
      }
    );
    this.setChatbotMessage(message);
  };
  //Display Package Types
  handleProvider = (type) => {
    Axios.post("http://127.0.0.1:5000/getPackageTypes", {
      provider: type
    }).then((response) => {
      this.setState((state) => ({
        ...state,
        provider : type,
        packageTypes: response.data.packageTypes
      }));
      const message = this.createChatBotMessage(
        `${type} Plans and Rates`,
        {
          widget: "packageTypess"
        }
      );
      this.setChatbotMessage(message);
    })
    
  };
  //Display packages of package type
  selectPackageType = (package_type, provider) => {
    Axios.post("http://127.0.0.1:5000/getPackages", {
      provider: provider,
      packageType: package_type
    }).then((response) => {
      this.setState((state) => ({
        ...state,
        packageType : package_type,
        packages: response.data.packages
      }));
      const message = this.createChatBotMessage(
        `${package_type}`,
        {
          widget: "packages"
        }
      );
      this.setChatbotMessage(message);
    })
  };

  //Display package info
  getPackageInfo = (packageName, packageType, provider) => {
    Axios.post("http://127.0.0.1:5000/getPackage", {
      packageName: packageName,
      packageType: packageType,
      provider: provider
    }).then((response) => {
      console.log(response.data.packageDetails)
      this.setState((state) => ({
        ...state,
        packageDetails : response.data.packageDetails
      }));
      const message = this.createChatBotMessage(
        `${provider} -> ${packageType} -> ${packageName}`,
        {
          widget: "packageDetails"
        }
      );
      this.setChatbotMessage(message);
    })
  };

  //Display package info
  activateDataPackage = (packageName, provider) => {
    console.log("activateDataPackage")
    console.log(provider)
    Axios.post("http://127.0.0.1:5000/activateDataPackage", {
      packageName: packageName,
      provider: provider,
      userID: JSON.parse(localStorage.getItem("user"))["user_id"]
    }).then((response) => {
      const message = this.createChatBotMessage(
        `${response.data.res}`
      );
      this.setChatbotMessage(message);
    })
  };

  //Display current balance
  getCurrentBalance = () => {
    console.log("getCurrentBalance")
    Axios.post("http://127.0.0.1:5000/getCurrentBalance", {
      userID: JSON.parse(localStorage.getItem("user"))["user_id"]
    }).then((response) => {
      this.setState((state) => ({
        ...state,
        user : response.data.user
      }));
      const message = this.createChatBotMessage(
        ``,
        {
          widget: "balance"
        }
      );
      this.setChatbotMessage(message);
    })
  }

  //Normal chatbot message handler
  helloHandler = (message) => {
    var msg;
    Axios.post("http://127.0.0.1:5000/reply", { msg: message }).then(
      (response) => {
        console.log("Hello Handler called, Response :");
        console.log(response.data.reply);
        if (response.data.reply == "predict") {
          this.setChatbotState("predict");
          msg = this.createChatBotMessage("Please Enter 4 symptoms");
          this.removeDisease();
        } else {
          msg = this.createChatBotMessage(response.data.reply);
        }
        this.setChatbotMessage(msg);
      }
    );
  };


}

export default ActionProvider;

// findDoctor = (message) => {
//   var msg;
//   Axios.post("http://127.0.0.1:5000/getDoc", { specialist: message }).then(
//     (response) => {
//       console.log(message);
//       // msg = this.createChatBotMessage(response.data.members);
//       // this.setChatbotMessage(msg);
//       if (response.data.er == 1) {
//         msg = this.createChatBotMessage("Please re-enter the specialty");
//         this.setChatbotMessage(msg);
//       } else {
//         console.log(response.data.doc);
//         this.setState((state) => ({ ...state, doctors: response.data.doc }));
//         this.setChatbotState("normal");
//         msg = this.createChatBotMessage("Ok sure", { widget: "doctors" });
//         this.setChatbotMessage(msg);
//       }
//     }
//   );
// };

// channelDoctor = (message, chObject) => {
//   const msg2 = this.createChatBotMessage("Thank You");
//   // this.setChatbotState("channel");
//   this.setChatbotState("normal");
//   console.log(chObject);

//   this.setChatbotMessage(msg2);
// };

// predictHandler = (message) => {
//   var msg;
//   Axios.post("http://127.0.0.1:5000/predict", { diseases: message }).then(
//     (response) => {
//       console.log(message);
//       msg = this.createChatBotMessage(response.data.members);
//       this.setChatbotMessage(msg);
//       console.log(response.data.members);
//     }
//   );
// };


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

  // selectDoctor = (docID) => {
  //   // const msg1 = this.createChatBotMessage("Sure wait a minite");
  //   // this.setChatbotMessage(msg1);
  //   this.setState((state) => ({
  //     ...state,
  //     channel: [state.doctors[docID - 1]],
  //   }));
  //   const msg2 = this.createChatBotMessage("Sure. Please select the date", {
  //     widget: "calender",
  //   });
  //   this.setChatbotState("channel");
  //   this.setChatbotMessage(msg2);
  // };

  // selectTime = (value) => {
  //   const msg1 = this.createChatBotMessage(
  //     "Sure wait a minite and please enter time (9.00 AM - 4.00 PM)"
  //   );
  //   var date =
  //     value.getFullYear() +
  //     "-" +
  //     (value.getMonth() + 1) +
  //     "-" +
  //     value.getDate();

  //   console.log(date);
  //   this.setState((state) => ({
  //     ...state,
  //     date: [date],
  //   }));

  //   this.setChatbotMessage(msg1);
  // };