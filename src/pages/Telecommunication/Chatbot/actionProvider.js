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
    this.createClientMessage = createClientMessage;
  }

  // Set chatbot Message
  setChatbotMessage = (message) => {
    this.setState((state) => ({
      ...state, // Remain other states as it is
      messages: [...state.messages, message],
    }));
  };

  // Change chatbot State
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
        widget: "InternetProvider", // Show this widget
      }
    );
    this.setChatbotMessage(message);
  };
  //Display Package Types
  handleProvider = (type) => {
    Axios.post("http://127.0.0.1:5000/getPackageTypes", {
      provider: type,
    }).then((response) => {
      this.setState((state) => ({
        ...state,
        provider: type,
        packageTypes: response.data.packageTypes, // Add package types got from backend to the state
      }));
      const message = this.createChatBotMessage(`${type} Plans and Rates`, {
        widget: "packageTypess",
      });
      this.setChatbotMessage(message);
    });
  };
  //Display packages of package type
  selectPackageType = (package_type, provider) => {
    Axios.post("http://127.0.0.1:5000/getPackages", {
      provider: provider,
      packageType: package_type,
    }).then((response) => {
      this.setState((state) => ({
        ...state,
        packageType: package_type, // Selected package
        packages: response.data.packages, // Add packages got from backend to the state
      }));
      const message = this.createChatBotMessage(`${package_type}`, {
        widget: "packages",
      });
      this.setChatbotMessage(message);
    });
  };

  //Display package info
  getPackageInfo = (packageName, packageType, provider) => {
    Axios.post("http://127.0.0.1:5000/getPackage", {
      packageName: packageName,
      packageType: packageType,
      provider: provider,
    }).then((response) => {
      // console.log(response.data.packageDetails)
      this.setState((state) => ({
        ...state,
        packageDetails: response.data.packageDetails, // Add package details got from backend to the state
      }));
      const message = this.createChatBotMessage(
        `${provider} -> ${packageType} -> ${packageName}`,
        {
          widget: "packageDetails",
        }
      );
      this.setChatbotMessage(message);
    });
  };

  //Display package info
  activateDataPackage = (packageName, provider) => {
    // console.log("activateDataPackage")
    // console.log(provider)
    Axios.post("http://127.0.0.1:5000/activateDataPackage", {
      packageName: packageName,
      provider: provider,
      userID: JSON.parse(localStorage.getItem("user"))["user_id"],
    }).then((response) => {
      const message = this.createChatBotMessage(`${response.data.res}`);
      this.setChatbotMessage(message);
    });
  };

  //Display current balance
  getCurrentBalance = () => {
    // console.log("getCurrentBalance")
    Axios.post("http://127.0.0.1:5000/getCurrentBalance", {
      userID: JSON.parse(localStorage.getItem("user"))["user_id"],
    }).then((response) => {
      this.setState((state) => ({
        ...state,
        user: response.data.user,
      }));
      const message = this.createChatBotMessage(``, {
        widget: "balance",
      });
      this.setChatbotMessage(message);
    });
  };

  //Handle complaints
  handleComplaint = (provider) => {
    console.log("complaint")
    this.setState((state) => ({
      ...state,
      currentState: "complaint",
    }));
    const message = this.createChatBotMessage(
      `Your internet service provider is ${provider}. We will send your complaint as an email to the relevant authorities`
    );
    this.setChatbotMessage(message);
    const message2 = this.createChatBotMessage(`Enter the complaint subject`);
    this.setChatbotMessage(message2);
  };

  //Handle subject of complaint
  handleSubject = (msg) => {
    this.setState((state) => ({
      ...state,
      currentState: "subject",
      subject: msg,
    }));
    const message = this.createChatBotMessage(
      `Enter the complaint email body. Enter whatever issue you have about your internet connection`
    );
    this.setChatbotMessage(message);
  };

  //Display current balance
  makeComplaint = (msg, subject) => {
    Axios.post("http://localhost:5000/makeComplaint", {
      subject: subject,
      body: msg,
      userID: JSON.parse(localStorage.getItem("user"))["user_id"],
    }).then((response) => {
      this.setState((state) => ({
        ...state,
        currentState: "normal",
        subject: "",
      }));
      const message = this.createChatBotMessage(`${response.data.res}`);
      this.setChatbotMessage(message);
    });
  };

  //View Complaints
  viewComplaints = () => {
    Axios.post("http://127.0.0.1:5000/viewComplaint", {
      userID: JSON.parse(localStorage.getItem("user"))["user_id"]
    }).then((response) => {
      if (response.data.Null == 0) {
        this.setState((state) => ({
          ...state,
          complaints: response.data.complaints,
        }));
        const message = this.createChatBotMessage(
          ``,
          {
            widget: "complaint",
          }
        );
        this.setChatbotMessage(message);
      } else {
        const message = this.createChatBotMessage(
          `There are no complaints`
        );
        this.setChatbotMessage(message);
      }
      
    });
  };

  //View all activated packages
  viewActivatedPackages = () => {
    console.log("view activated packages")
    Axios.post("http://127.0.0.1:5000/viewActivatedPackages", {
      userID: JSON.parse(localStorage.getItem("user"))["user_id"],
    }).then((response) => {
      if (response.data.Null == 0) {
        this.setState((state) => ({
          ...state,
          activatedPackages: response.data.activatedPackages,
        }));
        const message = this.createChatBotMessage(
          `Here are the activated packages`,
          {
            widget: "activatedPackages",
          }
        );
        this.setChatbotMessage(message);
      } else {
        const message = this.createChatBotMessage(
          `There are no activated packages`
        );
        this.setChatbotMessage(message);
      }
    });
  };

  //Display date to select to display data packages
  displayCalendarForPackages = (msg, subject) => {
    this.setState((state) => ({
      ...state,
      currentState: "dateSelection",
    }));
    console.log("clicked calender")
    const message = this.createChatBotMessage(`Select a date`, {
      widget: "calendar",
    });
    this.setChatbotMessage(message);
  };

  //View all activated packages by date
  viewDataPackagesByDate = (value) => {
    var month =
      parseInt(value.getMonth() + 1) >= 10
        ? "-" + (value.getMonth() + 1)
        : "-0" + (value.getMonth() + 1);
    var day =
      parseInt(value.getDate()) >= 10
        ? "-" + value.getDate()
        : "-0" + value.getDate();
    var date = value.getFullYear() + month + day;
    Axios.post("http://127.0.0.1:5000/viewActivatedPackagesByDate", {
      userID: JSON.parse(localStorage.getItem("user"))["user_id"],
      date: date,
    }).then((response) => {
      console.log(response.data);
      if (response.data.Null == 0) {
        this.setState((state) => ({
          ...state,
          activatedPackages: response.data.activatedPackages,
        }));
        const message = this.createChatBotMessage(
          `Here are the activated packages for ${date}`,
          {
            widget: "activatedPackages",
          }
        );
        this.setChatbotMessage(message);
      } else {
        const message = this.createChatBotMessage(
          `There are no activated packages`
        );
        this.setChatbotMessage(message);
      }
    });
  };

  //View LKR Price per USD
  viewLKRValue = () => {
    Axios.post("http://127.0.0.1:5000/getMoneyValue")
    .then((response) => {
      console.log("viewLKRValue")
      console.log(response.data)
      this.setState((state) => ({
        ...state,
        pricesLKR: response.data.prices,
      }));
      const message = this.createChatBotMessage(
        ``,
        {
          widget: "LKRValue",
        }
      );
      this.setChatbotMessage(message);
    });
  };

    //View Currency values per USD
    viewCurrencyValues = () => {
      Axios.post("http://127.0.0.1:5000/getMoneyValue")
      .then((response) => {
        this.setState((state) => ({
          ...state,
          pricesCurrency: response.data.prices,
        }));
        const message = this.createChatBotMessage(
          ``,
          {
            widget: "currencyValues",
          }
        );
        this.setChatbotMessage(message);
      });
    };

      //View CryptoCurrency Values
      viewCryptoCurrencyPrice = () => {
        Axios.post("http://127.0.0.1:5000/getCryptoPrice")
        .then((response) => {
          this.setState((state) => ({
            ...state,
            pricesCrypto: response.data.prices,
          }));
          const message = this.createChatBotMessage(
            ``,
            {
              widget: "cryptoPrice",
            }
          );
          this.setChatbotMessage(message);
        });
      };


      
  //View CryptoCurrency Values
  viewCryptoCurrencyPriceInLKR = () => {
    Axios.post("http://127.0.0.1:5000/getCryptoPriceLKR")
    .then((response) => {
      this.setState((state) => ({
        ...state,
        prices: response.data.prices,
      }));
      const message = this.createChatBotMessage(
        ``,
        {
          widget: "cryptoPriceLKR",
        }
      );
      this.setChatbotMessage(message);
    });
  };

//View General Options
viewGeneralOptions = () => {
    const message = this.createChatBotMessage('',
      {
        widget: "options",
      }
    );
    this.setChatbotMessage(message);

};

sendFeedback = (message, rating) => {
  var msg;
  Axios.post("http://127.0.0.1:5000/sendFeedback", {
    userID: JSON.parse(localStorage.getItem("user"))["user_id"],
    feedback: message,
    rating: rating
  }).then((response) => {
    this.setState((state) => ({
      ...state,
      currentState: "normal"
    }));
    msg = this.createChatBotMessage("Thank you for your feedback");
    this.setChatbotMessage(msg);
  });
};
rateHandle = (message) => {
  var msg;
  if (message <= 3) {
    msg = this.createChatBotMessage(
      "Hmm... I want to improve. Please can you give me a feedback?"
    );
    this.setState((state) => ({
      ...state,
      currentState: "feedback",
      rating: message
    }));
  } else {
    msg = this.createChatBotMessage("Excellent");
    this.setState((state) => ({
      ...state,
      currentState: "normal",
    }));
  }
  this.setChatbotMessage(msg);
};

// Rate chatbot when the option is clicked
rateChatbot = () => {
  var msg;
  msg = this.createChatBotMessage(
    "I value your feedbacks and ratings. Select a rating for me",
    {
      widget: "rating",
    }
  );
  this.setChatbotMessage(msg);
}

  //Normal chatbot message handler
helloHandler = (message) => {
  var msg;
  if (message == "feedback") {
    msg = this.createChatBotMessage(
      "You are welcome ! If you are satisfied with our service please rate us",
      {
        widget: "rating",
      }
    );
    this.setChatbotMessage(msg);
    
  } else { 
    Axios.post("http://xyrontelecom.azurewebsites.net/reply", { msg: message }).then(
    (response) => {
      console.log("Hello Handler called, Response :");
      console.log(response.data.reply);

      if (message == "2 or more providers called") {
        msg = this.createChatBotMessage("I couldn't understand it, it is beyond my understandings");

      } else if (response.data.reply == "balance") {
        console.log("balance if");
        msg = "";
        this.getCurrentBalance();

      } else if (response.data.reply == "package") {
        msg = this.createChatBotMessage("Select provider");
        this.handleDataPackage();

      } else if (response.data.reply == "complaint") {
        this.handleComplaint(
          JSON.parse(localStorage.getItem("user"))["sim_type"]
        );

      } else {
        msg = this.createChatBotMessage(response.data.reply);
      }

      this.setChatbotMessage(msg);
      }
    );
    }
  }
}

export default ActionProvider;
