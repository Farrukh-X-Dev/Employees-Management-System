
import React from "react";
import { Header } from "../sections/Header";
import { TaskBox } from "../sections/TaskBox ";
import { Tasklist } from "../task/Tasklist ";

export const Employee = ( props) => {
  return (
    <div className="bg-[#1C1C1C] h-screen p-10">
      <Header changeUser={props.changeUser} data={props.EmployessData} />
      <TaskBox data={props.EmployessData} />
      <Tasklist data={props.EmployessData} />
    </div>
  );
};

