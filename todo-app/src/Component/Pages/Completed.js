import { useState, useEffect } from "react";
import '../Pages/completed.css';

const getItemsFromLocalStorage = () => {
    const list = localStorage.getItem('completed');
    if (list) {
        return JSON.parse(list);
    }else{
        return [];
    }
}


const Completed = () => {
const [items, setItems] = useState(getItemsFromLocalStorage()); 

useEffect(() => {
    localStorage.setItem('completed', JSON.stringify(items));
},[items]);

const deleteItem = (id) =>{
    const updatedItems = items.filter((element, index) =>{
        return index != id;
    })
    setItems(updatedItems);
}

const removeAll = () => {
    setItems([]); 
}

    return (
        <div className="completed-container">
            <div className="completed-content">
                <h1 className="text-center">Completed Tasks</h1>   
                <div className="show-items"> 
                    {items.map((element, index) => {
                        return (
                            <div className="completed-items" key={index}>
                                <p>{element}</p>
                                <button  onClick={() => deleteItem(index)}><i className="fa-solid fa-trash-can" title='Delete Item' ></i></button>
                            </div>
                        )
                    })}
                    <div className='Delete-all'>
                        <button onClick={removeAll}><span>Remove All</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Completed;