import React from "react";

const TaskStatusHeader = ({ title }) => {
  return (
    <div className="flex justify-between items-center px-4">
      <div className="flex justify-start items-center ">
        {title === "Incomplete" && (
          <div className="h-[30px] w-[30px] bg-[red] mr-1 rounded rounded-l-xl"></div>
        )}
        {title === "To-Do" && (
          <div className="h-[30px] w-[30px] bg-blue-500 mr-1 rounded rounded-l-xl"></div>
        )}
        {title === "Doing" && (
          <div className="h-[30px] w-[30px] bg-[#d6d640] mr-1 rounded rounded-l-xl"></div>
        )}
        {title}
      </div>
      <div className="cursor-pointer bg-[#d6d5d5] px-3 py-1 rounded-sm">
        <p className="text-lg">0</p>
      </div>
    </div>
  );
};

export default TaskStatusHeader;
