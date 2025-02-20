import React, { useContext } from "react";
import { AuthContext } from "../context/Authprovider";

export const DesignedTask = () => {
  let [Data] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="bg-[#2a2a2a] mb-2 py-2 px-4 flex justify-between rounded border-[3px] pl-2 border-[#00000080]">
        <h2 className="text-lg font-medium w-1/5 text-[#f0f0f0]">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 text-[#f0f0f0]">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 text-[#f0f0f0]">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 text-[#f0f0f0]">Completed</h5>
        <h5 className="text-lg font-medium w-1/5 text-[#f0f0f0]">Failed</h5>
      </div>

      <div>
        {Data.employees.map((elem, idx) => (
          <div
            key={idx}
            className="border-2 border-[#4CAF50] mb-2 py-2 px-4 flex justify-between rounded bg-[#2e2e2e] hover:bg-[#383838]"
          >
            <h2 className="text-lg font-medium w-1/5 text-[#f0f0f0]">{elem.firstName}</h2>
            <h3 className="text-lg font-medium w-1/5 text-[#00bcd4]">{elem.taskCount.newTask}</h3>
            <h5 className="text-lg font-medium w-1/5 text-[#ffc107]">{elem.taskCount.active}</h5>
            <h5 className="text-lg font-medium w-1/5 text-[#4CAF50]">{elem.taskCount.completed}</h5>
            <h5 className="text-lg font-medium w-1/5 text-[#f44336]">{elem.taskCount.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
