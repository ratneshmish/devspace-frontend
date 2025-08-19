import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";

const Chat = () => {
  const { firstName, targetId } = useParams();
  const userdata = useSelector((store) => store.user);
  const userId = userdata?._id;

  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const socketRef = useRef(null);

  useEffect(() => {
    if (!userId) return;

    const socket = createSocketConnection();
    socketRef.current = socket;

    socket.emit("joinchat", { targetId, userId });

    socket.off("messageReceived");
    socket.on("messageReceived", ({ text, senderId }) => {
      if (senderId === userId) return;
      setMessage((prev) => [...prev, { text, senderId }]);
    });

    return () => {
      socket.off("messageReceived");
      socket.disconnect();
    };
  }, [userId, targetId]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    socketRef.current.emit("sendMessage", { userId, targetId, text: newMessage });
    setMessage((prev) => [...prev, { text: newMessage, senderId: userId }]);
    setNewMessage("");
  };

  return (
    <div className="bg-black text-gray-200 py-5 min-h-screen flex justify-center items-center">
      <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl p-6 flex flex-col items-center border border-white/20 shadow-lg 
                      hover:shadow-yellow-500/30 hover:scale-[1.02] transition duration-500 w-full max-w-md min-h-screen">
        <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br from-yellow-400/20 via-white/10 to-transparent pointer-events-none" />

        <h2 className="font-semibold text-lg text-yellow-400 text-center mb-4">
          Chat with {firstName}
        </h2>

        <div className="overflow-y-auto w-full flex-1 px-2 space-y-4 scrollbar-none">
          {message.map((msg, index) => (
            <div
              key={index}
              className={msg.senderId === userId ? "chat chat-end" : "chat chat-start"}
            >
              <div className="chat-bubble">{msg.text}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 w-full flex gap-2">
          <input
            type="text"
            placeholder="Type something..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 px-3 py-2 rounded-xl bg-black/30 border border-white/20 text-white focus:outline-none"
          />
          <button
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
