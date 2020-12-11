import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './../Dialogs.module.css';

const DialogItem = (props) =>{
   return(
      <div className={c.dialog + ' '+ c.active}>
           <img className={c.img} src="https://lh3.googleusercontent.com/proxy/8L9LAmgddCd47zyB4HvXKALxNuWjbZSzc3UyjaqUp2_2WgSqMDIQX2QG0Vcwm8Z_oE8h7a9A5nM8wIECXXYOghHc69_Y_IoTM1VnAeXKvV0Z6EKgTKU" alt=""/>
           <NavLink activeClassName={c.active} to={"/dialog/"+props.id}>{props.name}</NavLink>
      </div>
   )
}


export default DialogItem;