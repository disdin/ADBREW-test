import { useState } from "react";
import { postTodo } from "../service/api";

const MakeTodo = ({setToggle}) => {
  const [data, setData] = useState("");

  const addTodo = async() => {
    // console.log(data);
    var response=await postTodo({"todo":data})
    console.log(response);
    setData('')
    setToggle(prev => !prev);
}
  return (
    <div>
      <h1 style={{"color":"#ccccd3"}}>Create a ToDo</h1>
      <form>
        <div>
          <input
            type="text"
            placeholder="Write Here"
            onChange={(e) => setData(e.target.value)}
            value={data}
            style={{paddingLeft:10,fontSize:15,width:300}}
          />
        </div>
        <div style={{ marginTop: "5px" }}>
          <button style={{color: "black",background: "#FFFFFF",borderRadius: 4,padding: "2px 20px",fontWeight:600,cursor:"pointer",marginTop:15,fontSize:15}} onClick={(e) => addTodo(e)}>
            Add ToDo!
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeTodo;
