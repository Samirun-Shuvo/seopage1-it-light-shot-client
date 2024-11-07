import React from "react";
import Card from "./Card";
import TaskStatusHeader from "./TaskStatusHeader";

const Banner = () => {
  return (
    <div className="container bg-slate-100 h-[85vh] my-8 w-full flex overflow-x-auto space-x-4 px-4">
      <div className="flex-none w-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        <TaskStatusHeader title="Incomplete"></TaskStatusHeader>
        <div className="overflow-y-auto h-[70vh] p-2">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="flex-none w-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        <TaskStatusHeader title="To-Do"></TaskStatusHeader>
        <div className="overflow-y-auto h-[70vh] p-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="flex-none w-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        {<TaskStatusHeader title="Doing"></TaskStatusHeader>}
        <div className="overflow-y-auto h-[70vh] p-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="flex-none w-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        {<TaskStatusHeader title="Under Review"></TaskStatusHeader>}
        <div className="overflow-y-auto h-[70vh] p-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="flex-none w-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        {<TaskStatusHeader title="Completed"></TaskStatusHeader>}
        <div className="overflow-y-auto h-[70vh] p-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="flex-none w-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        {<TaskStatusHeader title="Overdue"></TaskStatusHeader>}
        <div className="overflow-y-auto h-[70vh] p-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Banner;
