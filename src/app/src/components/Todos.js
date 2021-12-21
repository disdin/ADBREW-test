import { useEffect, useState } from "react";
import MakeTodo from "./MakeTodo";
import { getTodos } from "../service/api";
import Todo from "./Todo";

const Todos = () => {
  const [Todos, setTodos] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await getTodos();
      console.log(response.data);
      setTodos(response.data);
    };
    getData();
  }, [toggle]);
  return (
    <div>
      <h1 style={{"color":"#ccccd3"}}>List of TODOs</h1>
      <div className="todoContainer">{Todos && Todos.map((temp,i) => <Todo key={i} todo={temp}/>)}</div>

      <MakeTodo setToggle={setToggle} />
    </div>
  );
};

export default Todos;
