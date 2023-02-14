import React, { useState } from "react";
import "./style.css";

function Form() {
  const [inputValues, setInputValues] = useState({ name: "", status: false });
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState(0);

  const handleChange = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const handleAdd = () => {
    setTodo([...todo, inputValues]);
    // setInputValues({ name: "", status: "" });
    setId(id + 1);
  };
  const handleDelete = (index) => {
    console.log("index", index);

    const temp = todo.filter((e, ind) => ind !== index);
    setTodo(temp);
  };

  const handleStatus = (index,task) => {
   
        let temp = [...todo];
        setTodo(temp);
        task.status = !task.status;
        console.log("DATA = ", todo);
     

    // if(todo[index].status){

    //   console.log(todo[index].status=false)
    // }
    // else{
    //   console.log(todo[index].status=true)
    // }
  };

  return (
    <div>
      <form className="todo">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={inputValues.name}
            onChange={handleChange}
          />
        </label>
      </form>
      <button onClick={handleAdd} style={{ fontSize: "30px" }}>
        Add
      </button>
      <ul>
        {todo.map((task, index) => {
          // debugger
          return (
            <li className={task.status == true ? "active" : null} key={index}>
              {" "}
              Id : {index + 1} , Name: {task.name},Status: {task.status}
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleStatus(index,task)}>Statusbtn</button>
              {task.status}
              <label>
                <input type="checkbox" name="checkbox" />
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Form;
