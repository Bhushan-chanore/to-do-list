import React, { useState } from "react";
import "./App.css"

import { X } from "lucide-react";

const App=()=>{

  const [listname , setlistname] = useState("");

  // for creating and used array
  const [array , changearray] = useState([]);

  const listEvent = (event) =>{
    setlistname(event.target.value);
    // event.target.value = it is used to getting data from input field
  }

  const  changethings =() =>{
    changearray((olditem)=>{
      return([...olditem , listname])
    })

    // after showing input field must be empty
    setlistname("");
  }


  const deletitem = (id) =>{
console.log("delet");

changearray((olditem) =>{
   return olditem.filter(( _, index)=>{

    return index!==id;

  })
})
  }
  return(
    <>
    <div className="main_cont">
      <div className="center_div">

        <h1 className="heading">TO-DO LIST</h1>
        <input type="text" placeholder="Enter the Schedule" value={listname} onChange={listEvent}/>
        <button className="btn" onClick={changethings}>+</button>

        <ol>
          {/* <li>{listname}</li>  */}
          {/* to add value below of input field then we used map (array) */}
           {/* done here work */}
           {
            array.map((itemval , index) =>{
              return(
                
               <div className="data" key={index}>
               <X className="icon" onClick={()=>deletitem(index)}/>
                <li id={index} key={index}>{itemval}</li>
               </div>
                
              )
            })
           }

        </ol>

      </div>
      </div>
    </>
  )
}

export default App;





