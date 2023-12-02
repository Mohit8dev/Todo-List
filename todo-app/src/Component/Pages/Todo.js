import React, { useEffect, useState } from 'react';
import '../Pages/todo.css';

const getItemsFromLocalStorage = () => {
    const list = localStorage.getItem("lists");
    if (list) {
        return JSON.parse(list);
    }else{
        return [];
    }
}

const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items ,setItems] = useState(getItemsFromLocalStorage());

    const addItem = () =>{
        if(!inputData){
            alert('Input cannot be empty');
        }else{
        setItems([...items, inputData]);
        setInputData("");
        }
    }
    const compeltedTodo = (element, id) => {
        if(element){
        let newLocalStorageList = JSON.parse(localStorage.getItem('completed')) || [];
            newLocalStorageList.push(element);
            localStorage.setItem('completed', JSON.stringify(newLocalStorageList));
        }
        const updatedItems = items.filter((element, index) =>{
            return index != id;
        })
        setItems(updatedItems);
    }
    const deleteItem = (id) =>{
        const updatedItems = items.filter((element, index) =>{
            return index != id;
        })
        setItems(updatedItems);
    }
    const removeAll = () => {
        setItems([]); 
    }

    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(items));
    },[items]);

    return (
        <>  
        <div className='main-container'>
            <div className='content'>
                <figure className='size'>
                <p><i className="fa-solid fa-pencil"></i></p>
                <figcaption>Todo List :</figcaption>
                </figure>
                <div className='addItems'>
                    <input type='text' placeholder='Add Tasks' 
                    value={inputData} 
                    onChange={(e) => setInputData(e.target.value)}/>
                    <button onClick={() =>{addItem()}}>Add</button>
                </div>
                <div className='Show-Items'>
                    {
                        items.map((element, index) => {     
                            return (
                            <div className='Each-items' key={index}>
                            <h3>{element}</h3>
                            <button  onClick={() => deleteItem(index)}><i className="fa-solid fa-trash-can" title='Delete Item' ></i></button>
                            <button onClick={() =>{compeltedTodo(element, index)}} style={{color : "lightgreen"}}><i class="fa-solid fa-check"></i></button>
                            </div>
                            )
                        })
                    }
                    
                    <div className='Delete-all'>
                        <button onClick={removeAll}><span>Remove All</span></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Todo;

