import React from "react";

const Action_Button = (props) => {
  return (
    <>
      <button className="border h-[2.5rem] border-sky-400 bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-3xl text-sm">
        {props.text}
      </button>
    </>
  );
};

export default Action_Button;
