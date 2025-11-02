import React from "react";

export default function Button(props) {
  return (
    <div>
      <button
        className={`px-[10px] rounded-sm  ${props.className} ${props.color} ${props.fontColor}`}
      >
        {props.buttonName}
      </button>
    </div>
  );
}
