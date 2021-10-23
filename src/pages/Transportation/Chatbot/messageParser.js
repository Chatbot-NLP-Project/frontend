class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
    this.disease = false;
    this.num = 0;
  }

  parse(message) {
    console.log(this.state);
    var siz = this.state.currentState.length - 1;
    if ( this.state.currentState[siz] == "travel"){
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