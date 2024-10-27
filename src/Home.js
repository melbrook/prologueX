import React from "react";
import messages from "./data";
import "./App.css";
let formattedMessages = '';
let linebreak = document.createElement('br');
let myRegex = "(^\\.[^\\.]|[^\\.]\\.[^\\.]|[^\\.]\\.$)";
let substitution = "$&\n";

function Home() {

  const alternatingColor = ['#61dafb', '#a9a9a9'];
  const classUsed = ['kar', 'al'];

  const getMessages = () => {
    const messageList = [];

    for (let i = 0; messageList.length < messages.length; i++) {
        messageList.push(messages[i]);      
    }
    return messageList;
  };

  let myMessageArr = getMessages();

  const allMessages = myMessageArr.map((message, index) => {
    let formattedMessage = message.text;
    //let formattedMessage = message.text.split(".").join("<br/>");

    return (
          <div
          className={index % 2 ? 'bubble-a' : 'bubble-k'}>
            <span className="bubble-text">
            {formattedMessage}
            </span>
          </div>
    );
  });



  return (
    <>
      <section className="section home">
         <ul className="messages-list">{allMessages}</ul>
      </section>
    </>
  );
}

export default Home;