import React from "react";




const InputCom= ({inpVal,type,placeholder,onchange})=>{
    return(
       <input type="text" placeholder={placeholder} onChange={(e)=>{onchange(e.target.value)}} value={inpVal}
       type={type}/> 
    )
}

export default InputCom