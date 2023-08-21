import React,{useState} from 'react'
import InputArea from './InputArea'
import ToDoItem from './ToDoItem'
import './App.css'

const App = () => {
    const [items,setItems]=useState([]);
    function addItem(inputText){
        setItems((prevalue) =>{
            return [...prevalue,inputText]
        });
    }

function delItem(id){
    setItems((prevalue)=>{
        return prevalue.filter((item,index)=>{
            return index!==id;
        });
        
    });
}
  return (
    <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
      <InputArea addItem={addItem}/>
       <div>
            <ul>
                {
                    items.map((TodoItem,index)=>{
                        return <ToDoItem key={index} text={TodoItem} id={index} delItem={delItem}/>
                        
                    })
                }
                </ul>
        </div>
    </div>
  )
}

export default App
