// import React from 'react'
import React ,{useState} from 'react'

function List() {
  const[task, setTask]= useState(["Hello react", "Hello j.s", "hello world "])
  const [newTask, setNewTask]= useState("")
  function handleInputChange(event){
    setNewTask( event.target.value)


  }
  function addTask() {
    if (newTask.trim()!==""){
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
   
  }
  function deleteTask(index){
    const upDateTask= task.filter((_,i)=>i!==index)
    setTask(upDateTask)
    

  }
  function moveTask(index){
    if(index>0){
      const temp=task[index]
      task[index]=task[index-1]
      task[index-1]=temp
      setTask([...task])
    }

  }
  function moveTaskDown(index){
    if(index<task.length-1){
      const temp=task[index]
      task[index]=task[index+1]
      task[index+1]=temp
      setTask([...task])
    }

  }
 return(
<div className='To-do- list'>
  <h1>To-Do-List</h1>
  <div>
    <input type="text" placeholder='Enter a task'
    value={newTask}
    onChange={ handleInputChange}
     />
     <button className='add-button' onClick={addTask}>Add Task</button>
  </div>
  <ol>
  {task.map((task, index) => (
    <li key={index}>
      <span className='Text'>{task}</span>
      <button
       className='delete-button' onClick={()=>deleteTask(index)}
       >Delete button</button>
         <button
       className='move-Button' onClick={()=>moveTask(index)}
       >Up</button>
         <button
       className='move-Button' onClick={()=>moveTaskDown(index)}
       >Down</button>
       
    </li>
  ))}
</ol>
  

</div>
 )
}

export default List
