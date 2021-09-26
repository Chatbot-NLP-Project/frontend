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
    console.log(this.state.packageTypes[0]);
    const lowercase = message.toLowerCase();
    if (lowercase.includes("javascript") || lowercase.includes("js")) {
      this.actionProvider.handleJavascriptQuiz();
    }
    else if (
      this.state.currentState[siz] == "predict" &&
      this.state.sympthoms.length < 4
    ) {
      this.actionProvider.addDisease(message);
      if (this.state.sympthoms.length == 3) {
        this.actionProvider.predictHandler(this.state.sympthoms);
      }
    } else if (this.state.currentState[siz] == "findDoctor") {
      this.actionProvider.findDoctor(message);
    } else if (this.state.currentState[siz] == "channel") {
      const cha = {
        name: this.state.channel[0].name,
        hospital: this.state.channel[0].hospital,
        date: this.state.date[0],
        time: message,
      };
      this.actionProvider.channelDoctor(message, cha);
    } else {
      this.actionProvider.helloHandler(message);
    }
  }
}

export default MessageParser;
