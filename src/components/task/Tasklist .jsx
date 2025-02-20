import React, { useContext, useEffect, useState } from "react";
import { Accepted_task } from "./Accepted_task ";
import { New_task } from "./New_task ";
import { FailedTask } from "./FailedTask ";
import { Completed_task } from "./Completed_task ";
import { AuthContext } from "../context/Authprovider";

export const Tasklist = ({ data }) => {
  const [FullData, setFulldata] = useContext(AuthContext);



  const handleCompletion = (taskId) => {
    setFulldata((prevData) => {
      const updatedEmployees = prevData.employees.map((employee) => {
        if (employee.firstName === data.firstName) {
          return {
            ...employee,
            taskCount: {
              ...employee.taskCount,
              completed: Math.max(0, employee.taskCount.completed + 1),
              active: Math.max(0, employee.taskCount.active - 1),
            },
            tasks: employee.tasks.map((task, idx) =>
              idx === taskId
                ? { ...task, active: false, completed: true }
                : task
            ),
          };
        }
        return employee;
      });

      return {
        ...prevData,
        employees: updatedEmployees,
      };
    });
  };



  const handleFailingTask = (taskId) => {
    setFulldata((prevData) => {
      const updatedEmployees = prevData.employees.map((employee) => {
        if (employee.firstName === data.firstName) {
          return {
            ...employee,
            taskCount: {
              ...employee.taskCount,
              failed: Math.max(0, employee.taskCount.failed + 1),
              active: Math.max(0, employee.taskCount.active - 1),
            },
            tasks: employee.tasks.map((task, idx) =>
              idx === taskId
                ? { ...task, active: false, failed: true }
                : task
            ),
          };
        }
        return employee;
      });

      return {
        ...prevData,
        employees: updatedEmployees,
      };
    });
  };


  const handleAcceptance = (taskId) => {
    setFulldata((prevData) => {
      const updatedEmployees = prevData.employees.map((employee) => {
        if (employee.firstName === data.firstName) {
          return {
            ...employee,
            taskCount: {
              ...employee.taskCount,
              active: Math.max(0, employee.taskCount.active + 1),
              newTask: Math.max(0, employee.taskCount.newTask - 1),
            },
            tasks: employee.tasks.map((task, idx) =>
              idx === taskId
                ? { ...task, active: true, newTask: false }
                : task
            ),
          };
        }
        return employee;
      });

      return {
        ...prevData,
        employees: updatedEmployees,
      };
    });
  };
  return (
    <div
      className="flex gap-4 overflow-x-auto h-[55%] mt-16 py-5 w-full items-center"
      id="tasklist"
    >
      {FullData.employees
        .filter((employee) => employee.firstName === data.firstName) // Filter employees first
        .flatMap((employee) => 
          employee.tasks.map((task, idx) => {
            if (task.active) {
              return (
                <Accepted_task
                  key={`${employee.firstName}-task-${idx}`}
                  data={task}
                  onComplete={() => handleCompletion(idx)}
                  onFail={()=>  handleFailingTask(idx)}
                />
              );
            }
            if (task.newTask) {
              return (
                <New_task
                  key={`${employee.firstName}-task-${idx}`}
                  data={task}
                  onAccept={() => handleAcceptance(idx)}
                />
              );
            }
            if (task.completed) {
              return (
                <Completed_task
                  key={`${employee.firstName}-task-${idx}`}
                  data={task}
                />
              );
            }
            if (task.failed) {
              return (
                <FailedTask
                  key={`${employee.firstName}-task-${idx}`}
                  data={task}
                />
              );
            }
            return null;
          })
        )}
    </div>
  );
};
