import React from "react";

const TaskStatusHeader = ({ status }) => {
  const { cardCount, title, color } = status;
  return (
    <div className="flex justify-between items-center px-4">
      <div className="flex items-center">
        <div
          className={`h-[30px] w-[30px] mr-1 rounded-l-xl ${
            color || "bg-gray-300"
          }`}
        ></div>
        {title}
      </div>
      <div className="cursor-pointer bg-[#d6d5d5] px-3 py-1 rounded-sm">
        <p className="text-lg">{cardCount}</p>
      </div>
    </div>
  );
};

export default TaskStatusHeader;
