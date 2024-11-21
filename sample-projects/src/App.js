import { useEffect, useState } from "react";

const App=()=>{

  const[toDos,setTodos]=useState([]);

  useEffect(()=>{

    const fetchData=async()=>{
      const data=await fetch('https://dummyjson.com/todos');
 const result=await data.json();
 console.log(result);
 setTodos(result.todos)
      // setTodos([data.json()]);

    }

    fetchData();

  },[])

  return(
    <div>
      <table>
        {toDos.map((el)=><tr key={el.id}><td>{el.id}</td><td style={{border:"1px solid black"}}>{el.todo}</td></tr>)}
      </table>
    </div>
  )

}

export default  App;