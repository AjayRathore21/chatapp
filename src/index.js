import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // wrapping in custom authContext to provide login user to the chatapp
  <AuthContextProvider>
    {/* wrapping in custom ChatContext to provide login user chats to the chatapp  */}
    <ChatContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);
