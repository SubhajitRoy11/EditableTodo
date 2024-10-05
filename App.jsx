import { useState } from 'react'
import './App.css'
import Todo from "./Todo";
import Form from './Form';
import Button from './Button';
import Input from './Input';
import EditableTodo from './EditableTodo'
import Sample from './Sample';
import DynamicInput from './DynamicInput'

function App() {
  // let arr=["kkr","rcb","mi","csk"];
  // let res=arr.map((k,indx)=><h1 key={indx}>{k} index is {indx}</h1>);

  // let arr1=[1,2,3,4];
  // let double=arr1.map((k)=>k*2);
  // console.log(double);

  // let [allvalues,setValues]=useState({firstName:"Subhajit",lastName:"Roy"});
  //   function update(){
  //   setValues({...allvalues,firstName:"Debjit"});
  // }

  


  return (
    <div className="app">
      {/* <h1>{res}</h1> */}
      {/* <h1>Hello, my first name is {allvalues.firstName} and last name is {allvalues.lastName}</h1>
      <button onClick={update}>Click me</button> */}
      {/* <ol>
        {items.map((item)=>(
        <li key={item.id}>
          {item.value}
        </li>
        ))}
      </ol>
        <button onClick={addItems}>update</button> */}

        {/* <Todo/> */}
        {/* <Button/> */}
        {/* <Form/> */}
        {/* <Input/> */}
        {/* <EditableTodo/> */}
        {/* <Sample/> */}
        <DynamicInput/>
        

    </div>
  )
}

export default App
