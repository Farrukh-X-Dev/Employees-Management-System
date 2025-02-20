import React, { useEffect, useState } from "react";

export const Header = (props) => {
    const [username, setUsername] = useState()
    useEffect(() => {
        if (props.data){
            setUsername(props.data.firstName)
        }else {
            setUsername('Admin')
        }
    }, [])
 const LogOut=()=>{
    localStorage.removeItem('Current_User')
    props.changeUser('')
 }
 
return(
    <div className="flex justify-between items-end ">   
        <div className="text-2xl "> Hello , <br /> <span className="text-4xl font-semibold " > {username}  👋🏻 </span></div>
        <button type="button" className=" bg-red-600 hover:bg-red-700 px-5 py-2 rounded-md text-white text-lg font-semibold " onClick={LogOut}    >  Log Out</button>
    </div>
    )
}
