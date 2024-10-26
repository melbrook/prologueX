import React from "react";
import messages from "./data";

function Home() {

  const getMessages = () => {
    const messageList = [];

    for (let i = 0; messageList.length < messages.length; i++) {
        messageList.push(messages[i]);      
    }
    return messageList;
  };

  let myMessageArr = getMessages();

  const allMessages = myMessageArr.map((message) => {
    return (
          <div
            style={{
              display: "flex",
              marginInline: "auto",
            }}
          >
            {message.text}
          </div>
    );
  });

  return (
    <>
      <section className="section home">
        <hr className="horizontal-line" />
         <ul className="messages-list">{allMessages}</ul>
      </section>
    </>
  );
}

export default Home;