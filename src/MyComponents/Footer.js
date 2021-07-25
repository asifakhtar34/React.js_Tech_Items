import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position:"relative",
        bottom:"0",
        left:"0"
    }
    return ( 
        <footer className= "bg-dark " style={footerStyle}>
            <p className="text-center text-light py-4">
                Copyright &copy; Tech-Stack.com
            </p>
        </footer>
    )
}