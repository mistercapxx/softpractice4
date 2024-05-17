import React from 'react';


export default function Button(){
    const element = {
        color:rgb(18,255,18),
        backgroundColor:'transparent',
        border:'0px',
        fontFamily:'Courier',
        fontSize:'33pt'
        }
    return (
        <button style={element}>
            Wake up Neo...
        </button>
    );
}