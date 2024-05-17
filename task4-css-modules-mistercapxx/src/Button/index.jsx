import React from 'react';
import stylishButton from './Button.module.css'; 
function Button() {  
  return (
   <button className={stylishButton.active}>Trendy</button>
  )
}

export default Button;