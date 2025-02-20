import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/Authprovider";

export const TaskBox = ({ data }) => {
  const [Data] = useContext(AuthContext); 
  const employee = Data?.employees?.find((emp) => emp.firstName === data.firstName); 
  const taskCount = employee?.taskCount || data.taskCount; 
  const [newtask, setNewtask] = useState(taskCount.newTask);
  const [active, setActive] = useState(taskCount.active);
  const [completed, setCompleted] = useState(taskCount.completed);
  const [failed, setFailed] = useState(taskCount.failed);


  useEffect(() => {
    if (taskCount) {
      setNewtask(Math.max(0, taskCount.newTask)); 
      setActive(Math.max(0, taskCount.active)); 
      setCompleted(Math.max(0, taskCount.completed)); 
      setFailed(Math.max(0, taskCount.failed));
    }
  }, [taskCount]); 


  return (
    <div className="flex justify-between gap-5 screen mt-10">
      <div className="rounded-xl py-6 px-9 w-[45%] bg-blue-400 p-10">
        <h2 className="text-3xl font-[650]">{newtask}</h2>
        <h3 className="text-xl font-[550]">New Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-orange-400 p-10">
        <h2 className="text-3xl font-[650]">{active}</h2>
        <h3 className="text-xl font-[550]">Accepted Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-green-400 p-10">
        <h2 className="text-3xl font-[650]">{completed}</h2>
        <h3 className="text-xl font-[550]">Completed Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-red-400 p-10">
        <h2 className="text-3xl font-[650]">{failed}</h2>
        <h3 className="text-xl font-[550]">Failed Task</h3>
      </div>
    </div>
  );
};
