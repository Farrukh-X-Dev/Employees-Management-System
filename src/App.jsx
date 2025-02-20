import React, { useContext, useEffect, useState } from "react";
import { Login } from "./components/author/Login ";
import { Employee } from "./components/dashboard/Employee ";
import { Admin } from "./components/dashboard/Admin ";
import { AuthContext } from "./components/context/Authprovider";

export const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [error, setError] = useState(false);
 
    let [FixedData] = useContext(AuthContext);
    
    


  useEffect(()=>{
    const logggedinUser = localStorage.getItem('Current_User')
    if (logggedinUser) {
      const userdata = JSON.parse(logggedinUser)
      setUser(userdata.role);
      setLoggedInUserData(userdata.data);
      
    }
  },[])
  
  const  validation = (email, password) => {
     if (email === "Admin@gmail.com" && password === "123") {
       setUser("Admin");
       localStorage.setItem("Current_User", JSON.stringify({ role: "Admin" }));
       setError(false);
     } else if (FixedData) {
       const employee = FixedData.employees.find(
         (e) => email === e.email && password === e.password
       );
       if(employee ){
       setUser("employee");
       setLoggedInUserData(employee)
       setError(false);
       localStorage.setItem("Current_User", JSON.stringify({ role: "employee" , data:employee}));
     }else{
       setError(true)
     }
   } 
 }
  return (
      <>

    
      {!user ? <Login error={error} functionn={validation} /> : ''}
      {user === "Admin" ? <Admin changeUser={setUser}  /> : (user === "employee" ? <Employee changeUser={setUser} EmployessData={loggedInUserData  } /> : null)}
    
    
    </>
  );
};
