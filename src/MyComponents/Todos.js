import React from 'react'
import {TechItem} from './todo'

export const Todos = (props) => {
  let todosStyle ={
    minHeight:"52vh"
  }
    return ( 
        <>
        <div className="todoCont" style={todosStyle}>
          <h3 className="text-center text-uppercase border ">Tech Items to Learn</h3>
          {/* {console.log(props)} */}
            
          {props.tech.length == 0 ? <h4 className="text-center bg-success">No Techs in the Tech-Stack</h4>: props.tech.map((item)=> <TechItem tech ={item} key={item.tech} onDelete={props.onDelete}/>)}
          
         </div>
              
          

        {/* <TechItem tech ={props.tech[0]}/> */}
      </>
        
    )
}