import React, { useContext, useState } from "react";
import { AuthContext } from "../context/Authprovider";

export const Form = () => {
  const [Data, setData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [Name, setName] = useState("");
  const [category, setCategory] = useState("");

  const FormHandler = (e) => {
    e.preventDefault();
  
    const tasks = {
      taskTitle,
      description,
      date,
      Name,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };
  
    const updatedEmployees = Data.employees.map((employee) => {
      if (Name === employee.firstName) {
        return {
          ...employee, 
          tasks: [...employee.tasks, tasks], 
          taskCount: {
            ...employee.taskCount, 
            newTask: employee.taskCount.newTask + 1, 
          },
        };
      }
      return employee; 
    }
  );
  setData({ ...Data, employees: updatedEmployees });
  
  
  
    setTaskTitle("");
    setDescription("");
    setDate("");
    setName("");
    setCategory("");
  };
  
  return (
    <div className="p-5 mt-7 rounded bg-[#1C1C1C] h-1/2">
      <form
        className="flex  justify-between items-start w-full  font-[550]"
        onSubmit={FormHandler}
      >
        <div className="w-1/2  ">
          <h1 className="text-sm text-gray-300 mb-1 mt-1 "> Task Title</h1>
          <input
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
            value={taskTitle}
            type="text"
            placeholder="Make a UI design"
            className=" border-[1px] border-gray-600 w-4/5 px-2 py-2 text-sm rounded outline-none bg-transparent"
          />

          <h1 className="text-sm text-gray-300 mt-1 mb-1">Date</h1>
          <input
            onChange={(e) => {
              setDate(e.target.value);
            }}
            value={date}
            type="date"
            className="border-[1px] border-gray-600 w-4/5 px-2 py-2 text-sm rounded outline-none bg-transparent"
          />

          <h1 className="text-sm text-gray-300 mt-1 mb-1">Assign To</h1>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={Name}
            type="text"
            placeholder="Employ name"
            className=" border-[1px] border-gray-600 w-4/5 px-2 py-2 text-sm rounded outline-none bg-transparent "
          />

          <h1 className="text-sm text-gray-300 mt-1 mb-1">Category</h1>
          <input
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            value={category}
            type="text"
            placeholder="Design , Development , etc ..."
            className=" border-[1px] border-gray-600 w-4/5 px-2 py-2 text-sm rounded outline-none bg-transparent "
          />
        </div>
        <div className=" w-2/5">
          <h1 className="text-sm text-gray-300 mt-1 mb-1"> Task Description</h1>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            name="description"
            rows="10"
            cols="30"
            placeholder="Enter task description..."
            className=" border-[1px] border-gray-600 w-full h-44 px-2 py-2 text-sm rounded outline-none bg-transparent resize-none "
          ></textarea>

          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded text-sm mt-4 w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};
