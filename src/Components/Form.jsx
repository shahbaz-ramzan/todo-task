import React, { useState } from 'react';


function Form() {
  const [inputValues, setInputValues] = useState({ name: '',status:"" });
  const [employe, setEmploye] = useState([]);
  const [id,setId]=useState(0)

  const handleChange = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const handleAdd = () => {
    setEmploye([...employe, inputValues]);
    setInputValues({ name: '',status:""});
    setId(id+1)
  };
  const handleDelete = index =>{
   
   console.log('index',index)

   const temp=employe.filter((e,ind)=>ind!==index)
   setEmploye(temp)
   
    // setEmploye(oldValues => {
    //   return oldValues.filter(employe => index !==index)
      
    // })
    // alert("you clicked delete button");

    


  }

   const handleStatus = index  => {
     
    if(employe[index].status){
      console.log(employe[index].status=false) 
    }
    else{
      console.log(employe[index].status=true)
    }
    
  

   }

   const handleCheck = index => {
      
   }




  return (
    <div>
      <form>
      
      
        <label>
        Name:
          <input type="text" name="name" value={inputValues.name} onChange={handleChange} />
        </label>

        <label>
        Status:
          <input type="text" name="status" value={inputValues.status} onChange={handleChange} />
        </label>
      </form>
      <button onClick={handleAdd} style={{fontSize:"30px"}}>Add</button>
      <ul>
        {employe.map((person, index) => (
          <li key={index}>  Id : {index+1} , Name: {person.name},Status: {person.status} 
          <button style={{}} onClick={() => handleDelete(index)}>Delete</button>
          <button onClick={() => handleStatus(index)}>Statusbtn</button>
          <label>
            <input type="checkbox" name='checkbox' onChange={handleCheck}/>
          </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
