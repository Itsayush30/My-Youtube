import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../Utils/helper";
import { AiOutlineSend } from "react-icons/ai";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [livemessage, setLivemessage] = useState("");

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API POLLING (use fetch and convert to jason)
      console.log("API POLL");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className=" box-border overflow-y-scroll flex flex-col-reverse h-96 ">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <div>
        <form
          className=" bg-white flex p-2 gap-2 rounded-xl items-center"
          onSubmit={(e) => {
            e.preventDefault();

            dispatch(
              addMessage({
                name: "Ayush Gupta",
                message: livemessage,
              })
            );
            setLivemessage("");
          }}
        >
          <input
            className="outline-none border-b-2 w-full border-blue-200"
            type="text"
            placeholder="Type....."
            value={livemessage}
            onChange={(e) => {
              setLivemessage(e.target.value);
            }}
          />
          <button className="bg-none border-none">
            <AiOutlineSend className="w-10 cursor-pointer" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
