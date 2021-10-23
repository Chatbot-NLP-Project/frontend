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
    if(lowercase.includes("complaint")) {
      this.actionProvider.handleComplaint(JSON.parse(localStorage.getItem("user"))["sim_type"])

    } else if (lowercase.includes("options")){
      this.actionProvider.viewGeneralOptions();

    // } 
    // else if (lowercase.includes("packages") || lowercase.includes("package")){
    //   this.actionProvider.handleDataPackage();

    } else if (this.state.currentState == "complaint"){
      this.actionProvider.handleSubject(message);

    }else if (this.state.currentState == "subject"){
      this.actionProvider.makeComplaint(message, this.state.subject);
    }
    else {
      this.actionProvider.helloHandler(message);
    }
  }
}

export default MessageParser;
