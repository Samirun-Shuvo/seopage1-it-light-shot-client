import React from "react";
import Card from "./Card";
import TaskStatusHeader from "./TaskStatusHeader";
import { taskStatuses } from "../utils/taskStatuses";

const Banner = () => {
  return (
    <div className="container bg-slate-100 h-[85vh] my-8 w-full flex overflow-x-auto space-x-4 px-4">
      {taskStatuses.map((status, statusIndex) => (
        <div
          key={statusIndex}
          className="flex-none w-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden"
        >
          <TaskStatusHeader status={status} />
          <div className="overflow-y-auto h-[70vh] p-2">
            {status.tasks && // Ensure tasks exist
              status.tasks.map((task, cardIndex) => (
                <Card key={cardIndex} cardIndex={cardIndex} task={task} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
