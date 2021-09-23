class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
    this.disease = false;
    this.num = 0;
  }

  parse(message) {
    var siz = this.state.currentState.length - 1;

    if (
      this.state.currentState[siz] == "predict" &&
      this.state.sympthoms.length < 4
    ) {
      this.actionProvider.addDisease(message);
      if (this.state.sympthoms.length == 3) {
        this.actionProvider.predictHandler(this.state.sympthoms);
      }
    } else {
      this.actionProvider.helloHandler(message);
    }

    // var len = this.state.messages.length;
    // // console.log(this.state);
    // if (len == 1000) {
    //   console.log(this.state.messages[2 * len - 3].message);
    // }
    // // console.log(this.state.currentState[this.state.currentState.length - 1]);
    // this.num += 1;
    // this.num = this.num + 1;
    // // console.log(this.num);
  }
}

export default MessageParser;