class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
    this.disease = false;
    this.num = 0;
  }

  parse(message) {
    var siz = this.state.currentState.length - 1;
    if ( this.state.currentState[siz] == "travel"){
      this.actionProvider.fromHandler(message, this.state);
    } 
    else if ( this.state.currentState[siz] == "travelFrom"){
      this.actionProvider.fromHandler(message, this.state);
    }
    else{
    this.actionProvider.messageHandler(message, this.state);
    }

  }

  // parse(message) {
  //   var siz = this.state.currentState.length - 1;
  //   console.log(this.state); 
  //   if (
  //     this.state.currentState[siz] == "travel" &&
  //     this.state.to.length == 1 
  //   ) { if (this.state.from.length == 1)        
  //         { 
  //           this.actionProvider.methodsHandler(this.state.to, this.state.from, this.state.method);
  //       } else {
  //     // ask where to start from
  //   }    
  //    } 
  //   else {
  //     this.actionProvider.messageHandler(message);
  //   }
  // }
}

export default MessageParser;