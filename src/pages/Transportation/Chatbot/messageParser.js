class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
    this.disease = false;
    this.num = 0;
  }

  // Direct the user message to the correct function of action provider
  parse(message) {
    var siz = this.state.currentState.length - 1;
    if (message.toLowerCase() == "quit") {
      const msg = this.actionProvider.createChatBotMessage(
        "Thank for chatting with Xyron Tranport Chatbot."
      );
      this.actionProvider.setChatbotState("normal");
      this.actionProvider.clearStates();
      this.actionProvider.setChatbotMessage(msg); 
    } 
    else if ( this.state.currentState[siz] == "travel"){
      this.actionProvider.fromHandler(message, this.state);
    } 
    else if ( this.state.currentState[siz] == "travelFrom"){
      this.actionProvider.fromHandler(message, this.state);
    }
    else if ( this.state.currentState[siz] == "travelTo"){
      this.actionProvider.toHandler(message, this.state);
    }
    else if ( this.state.currentState[siz] == "complaint"){
      this.actionProvider.complaintHandler(message, this.state);
    }
    else{
    this.actionProvider.messageHandler(message, this.state);
    }
  }
}

export default MessageParser;