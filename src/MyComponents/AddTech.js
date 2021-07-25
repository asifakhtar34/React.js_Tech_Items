import React from 'react';
import {useState} from 'react';



export const AddTech = (props) => {
    
  const [tech, settech] = useState("")
  const [desc, setdesc] = useState("")
  const [warning, setwarning] = useState("")
//   console.log(props.newTechList)

  const addTech = (e)=>{
      e.preventDefault()
      if(tech =="" || desc ==""){
        // return  console.log("empty")
          return setwarning("Both Tech & tech description should be filled")
      }
      setwarning("")
    settech("")
    setdesc("")
    // e.target.reset()
    
    
    const newTech ={tech: tech, desc: desc}
   
    props.add([newTech,...props.newTechList]);
    // props.onDelete();

  }

    return ( 
        <>
          <h3 className="text-center">ADD NEW TECH</h3>
          <h5 className="text-center text-danger">{warning}</h5>
          <div className="container">
          <form onSubmit={addTech} >
  <div className="mb-3">
    <label  className="form-label">Tech</label>
    <input type="text" value={tech} onChange={(e)=>settech(e.target.value) } className="form-control" id="title" aria-describedby="emailHelp"/>
    </div>
   
  <div className="mb-3">
    <label  className="form-label">Tech-Description</label>
    <input type="text" value={desc} onChange={(e)=>setdesc(e.target.value) } className="form-control" id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-success btn-sm ">Add Tech</button>
</form>
</div>
          
             
         </>
        
    )
}