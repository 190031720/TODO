import { useState } from 'react';
import './addList.css';



function AddList({ addTodo }) {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (

        <div className='AL'>
            <form class="d-flex" role="search">
                <input
                    type="text"
                    className="addList"
                    placeholder="Add Your Task Here"
                    value={value}
                    onChange={e => setValue(e.target.value)}

                />
                <button type="button" class="btn-light" onClick={handleSubmit}>+</button>

            </form>


        </div>




    )

}

export default AddList;