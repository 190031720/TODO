import { useState } from 'react';
import './addList.css';

    

function AddList({ addTodo })
{  
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
      }; 

    return(
        <>
        <input 
        type="text" 
        className="addList" 
        placeholder="Add Your Task Here"
        value={value} 
        onChange={e => setValue(e.target.value)}
        
        />
        <button  onClick={handleSubmit}>+</button>
        

        </>


    )

}
 
export default AddList;