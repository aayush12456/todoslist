import React from 'react'

export const Footer = () => {
    let footerStyle={
     position:"absolute",
     top:"90%",
     width:"100%",
    color:"white",
    height:"10%"
    }

    return (
        <div className='bg-dark' style={footerStyle}>
            <h3 className='text-center'  >Copyright issue 2021</h3>
        </div>
    )
}
