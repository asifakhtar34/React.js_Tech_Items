import React from 'react'

export const TechItem = ({tech, onDelete}) => {
    return ( 
        <>
        <div className="tech">


           <h3 className="my-10">{tech.tech}</h3>
           <p>{tech.desc}</p>
           <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(tech)}}>Delete</button>
        </div>
           </>
    )
}