//Define responses in action provider and use the message parser to device which response to activate
//The message parser controls what happens when the user sends a message.
//The only method that the message parser needs to implement is the "parse" method. 
//This method is called inside the chatbot when it receives a message from the user.
// the actionprovider is given to the messageparser, so that the messageparser can 
//invoke the correct actions after the message is parsed.
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
    this.disease = false;
    this.num = 0;
  }

  parse(message) {
    console.log(this.state)
    var siz = this.state.currentState.length - 1;
    console.log("Message Parser called");
    console.log(this.state);
    // console.log(this.state.packageTypes[0]);
    const lowercase = message.toLowerCase();
    // if (lowercase.includes("ssss") || lowercase.includes("js")) {
      
    // } else 
    if(lowercase.includes("complaint") || lowercase.includes("complaints")) {
      this.actionProvider.handleComplaint(JSON.parse(localStorage.getItem("user"))["sim_type"])

    } else if (lowercase.includes("options") || lowercase.includes("option") || lowercase.includes("menu")){
      this.actionProvider.viewGeneralOptions();

    } else if ((lowercase.includes("my") && (lowercase.includes("package") || lowercase.includes("packages"))) || (lowercase.includes("activated") && (lowercase.includes("package") || lowercase.includes("packages")))){
      this.actionProvider.viewActivatedPackages();

    } else if ((lowercase.includes("current") && (lowercase.includes("balance") || lowercase.includes("bal"))) || (lowercase.includes("my") && (lowercase.includes("balance") || lowercase.includes("bal")))){
      this.actionProvider.getCurrentBalance();

    } else if ((lowercase.includes("dialog") && lowercase.includes("mobitel")) || (lowercase.includes("dialog") && lowercase.includes("hutch")) || (lowercase.includes("dialog") && lowercase.includes("airtel")) || (lowercase.includes("hutch") && lowercase.includes("mobitel")) || (lowercase.includes("airtel") && lowercase.includes("mobitel")) || (lowercase.includes("airtel") && lowercase.includes("hutch"))){
      this.actionProvider.helloHandler("2 or more providers called");

    } else if (lowercase.includes("dialog") && (lowercase.includes("packages") || lowercase.includes("package"))){
      this.actionProvider.handleProvider("Dialog");

    } else if (lowercase.includes("mobitel") && (lowercase.includes("packages") || lowercase.includes("package"))){
      this.actionProvider.handleProvider("Mobitel");

    } else if (lowercase.includes("hutch") && (lowercase.includes("packages") || lowercase.includes("package"))){
      this.actionProvider.handleProvider("Hutch");

    } else if (lowercase.includes("airtel") && (lowercase.includes("packages") || lowercase.includes("package"))){
      this.actionProvider.handleProvider("Airtel");

    } else if (this.state.currentState == "complaint"){
      this.actionProvider.handleSubject(message);

    } else if (this.state.currentState == "subject"){
      this.actionProvider.makeComplaint(message, this.state.subject);
    }
    else {
      this.actionProvider.helloHandler(message);
    }
  }
}

export default MessageParser;
