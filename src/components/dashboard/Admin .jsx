import React from 'react'
import { Header } from '../sections/Header'
import { Form } from '../sections/Form'
import { DesignedTask } from '../sections/DesignedTask '

export const Admin  = (props) => {
  return (
    <div className=' h-full  p-7 bg-[#141313] '>
        <Header changeUser={props.changeUser}/>
        <Form />
        <DesignedTask /> 
    </div>
  )
}
