import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../Utils/helper";

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
    <div className="">
      <div className="h-[630px] ml-2 p-2 border border-black bg-slate-100 rounded-l overflow-y-scroll flex flex-col-reverse ">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <div>
        <form
          className=" mt-2 ml-2 p-2 border border-black rounded-md"
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
            className="px-2 w-[630px]"
            type="text"
            value={livemessage}
            onChange={(e) => {
              setLivemessage(e.target.value);
            }}
          />
          <button className="px-2 mx-2 bg-green-100">Send</button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
