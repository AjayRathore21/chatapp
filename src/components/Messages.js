import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {  // find compined id of both user in firebase and retun if exist else create
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);  // when chat change useEffect will execute

  console.log(messages);

  return (
    <div className="messages">
      {messages.map((m) => (       // mapping on the messgage arrr
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
