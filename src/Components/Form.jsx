import React, { useState ,useEffect} from "react";
import "./style.css";

function Form() {
  const [inputValues, setInputValues] = useState({ name: "", status: false });
  const [todo, setTodo] = useState([]);
  const [id, setId] = useState(0);

  // handle change

  const handleChange = (event) => {
    setInputValues({ status: false, name: event.target.value });
  };

  //  handle Add

  const handleAdd = () => {
    if (inputValues.name === "") {
      alert("Please Enter The Name");
    } else {
      setTodo([...todo, inputValues]);
      setInputValues({ name: "", status: false });
      setId(id + 1);
    }
  };

  //  handle Delete

  const handleDelete = (index) => {
    console.log("index", todo);

    const temp = todo.filter((e, ind) => ind !== index);
    console.log("new list", temp);
    setTodo(temp);
  };

  // handle Check

  const handleCheck = (index, task) => {
    const temp = [...todo];
    temp[index].status = !task.status;
    setTodo(temp);
  };
  




useEffect(() => {
  if(todo.length!==0){
    localStorage.setItem('todo', JSON.stringify(todo));

  }
}, [todo]);

useEffect(() => {
  const todo=JSON.parse(localStorage.getItem('todo'));
  if(todo){
    setTodo(todo);
    
  }
},[]);

// console(setTodo);
  return (
    <div>
      <form className="todo">
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={inputValues.name}
            onChange={handleChange}
          />
        </label>
      </form>

      <button onClick={handleAdd} style={{ fontSize: "30px" ,backgroundColor:"blue" ,border:"2px solid black"}}>
        Add
      </button>

      <ul>
        {console.log("RENDER", todo)}

        {todo.map((task, index) => {
          return (
            <li className={task.status === true ? "active" : null} key={index}>
              {" "}
              Id : {index + 1} , Name: {task.name}, Status:{" "}
              {task.status.toString()}
              <button onClick={() => handleDelete(index)} style={{backgroundColor:"red" ,border:"2px solid black"}}>Delete</button>
              <label>
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={task.status}
                  onChange={() => handleCheck(index, task)}
                />
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Form;
