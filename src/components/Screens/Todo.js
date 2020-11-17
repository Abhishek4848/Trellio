import React, { useState, useEffect } from 'react';
import './Todo.css';


function Todo(){
    const [todoData, setTodoData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false)

    const addItem = (e) =>{
        e.preventDefault();
        if (error) return;
        const tempData = [...todoData];
        tempData.push(textInput)
        setTodoData(tempData)
        setTextInput("")
    }

    //this hook displays a error message when the input characters exceed 25
    //Displays nothing if characters<25
    useEffect(() => {
        if(textInput.length > 25)setError(true);
        else setError(false)
    },[textInput])
    
    const removeItem =(index) => {
        let newData = [...todoData]
        newData.splice(index,1)
        setTodoData(newData)
    }
    
    const editItem = (index) => {
        if(error) return;
        let newData = [...todoData]
        newData[index] = textInput;
        setTodoData(newData)
    }

    return(
        <div>
        <header className="header">
            <h1>TODO</h1>
        </header>
            <div className="inp1">
            <form onSubmit={addItem}>
                <label className="inputLabel1">
                    Add Item:
                    <input type="text" value = {textInput} onChange={(e) =>setTextInput(e.target.value)} placeholder="Enter task" className="inputfield1"/>
                </label>
                <input type = "submit" value = "submit" className="submitbtn1"/>    
            </form>
            </div>
            {error ? alert("Enter a short task name !!"): null}
            {
                 todoData.map((item,index) =>{
                     return(
                    <section class="card-list1">
                        <article class="card1" key={index}>
                          <header class="card-header1">
                            <p className="date">{new Date().toLocaleString()}
                            </p>
                            <h2 className="item">{item}</h2>
                          </header>
                            <p>Author</p>
                            <p>Jeff Delaney</p>
                          <div class="tags1">
                            <button onClick ={()=>editItem(index)} className="editbtn1">Edit</button>
                            <button onClick={() => removeItem(index)} className="deletebtn1">Delete</button>
                          </div>
                        </article>
                    </section>
                    )
                })
            }
        </div>
    )
}

export default Todo;