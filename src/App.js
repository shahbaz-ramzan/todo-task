import './Components/style.css'
import Form from './Components/Form';


function App() {
  // const task = "Write email to usman";[].
  // const taskList = ["Write email to usman","Write email to usman2"]
  // // localStorage.setItem("Task",task)
  // localStorage.setItem("Task2",JSON.stringify(taskList))
  // // console.log(typeof(JSON.parse(localStorage.getItem("Task2"))));
  // // console.log(typeof(localStorage.getItem("Task2")));
  // // localStorage.removeItem("Task");
  // const obj = {task1: "asd",task2: "bcd"}
  // localStorage.setItem("Task2",JSON.stringify(obj))
  // const list=[].push();
  // localStorage.setItem("List",list);
  
  return (
    <div className="App">
      <header className="App-header">
      <h1 >Todo App</h1>
      <Form />
      </header>
    </div>
  );
}


export default App;
