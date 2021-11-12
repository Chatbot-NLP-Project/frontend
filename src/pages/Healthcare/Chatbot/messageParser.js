/* eslint-disable eqeqeq */
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
    this.disease = false;
    this.num = 0;
  }

  parse(message) {
    var siz = this.state.currentState.length - 1;
    console.log(this.state);
    //  if chatbot state is predict then user input take as diseases
    if (message.toLowerCase() == "quit") {
      const msg = this.actionProvider.createChatBotMessage(
        "Thank for chatting with Xyron Healthcare Chatbot."
      );
      this.actionProvider.setChatbotState("normal");
      this.actionProvider.setChatbotMessage(msg);
      // user send empty message then if handel
    } else if (
      this.state.currentState[siz] == "predict" &&
      this.state.sympthoms.length < 4
    ) {
      // add user input diseases to the disease array
      this.actionProvider.addDisease(message);
      if (this.state.sympthoms.length == 3) {
        this.actionProvider.predictHandler(this.state.sympthoms);
      }
      // if the chatbot state is findDoctor call relavent action provider action
    } else if (this.state.currentState[siz] == "findDoctor") {
      this.actionProvider.findDoctor(message);
      // if the chatbot state is feedback call relavent action provider action
    } else if (this.state.currentState[siz] == "feedback") {
      this.actionProvider.sendFeedback(message);
      // if the chatbot state is channel call relavent action provider action
    } else if (this.state.currentState[siz] == "channel") {
      const msg = this.actionProvider.createChatBotMessage(
        "Please select the date."
      );
      this.actionProvider.setChatbotMessage(msg);
      // if the chatbot state is time call relavent action provider action
    } else if (this.state.currentState[siz] == "time") {
      const msg = this.actionProvider.createChatBotMessage(
        "Please select the time."
      );
      this.actionProvider.setChatbotMessage(msg);
      // user send empty message then if handel
    } else if (message == "") {
      const msg =
        this.actionProvider.createChatBotMessage("I cant understand."); // console.log(cha);
      this.actionProvider.setChatbotMessage(msg);
    } else {
      this.actionProvider.helloHandler(message);
    }
  }
}

export default MessageParser;
