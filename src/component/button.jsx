import React,{useState} from 'react';



const ButtonCom =({btnTxt,btnFunc,stl})=>{
return <button style={stl} onClick={btnFunc}>{btnTxt}</button>
}


export default ButtonCom;