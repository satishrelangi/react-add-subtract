import { useState } from 'react';
import './button.css';

const Button = (props)=>{
    const [res,setRes] = useState(0);
    const addHandler = ()=>{
        if(res === 0){
            props.finalResult(Number(props.sendVal));
            setRes(Number(props.sendVal));
        }
        else{
            props.finalResult(Number(res) + Number(props.sendVal));
            setRes(Number(res) + Number(props.sendVal));
        }  
    }
    const subtractHandler = ()=>{
        if(res === 0){
            props.finalResult(Number(props.sendVal));
            setRes(Number(props.sendVal));
        }
        else{
            props.finalResult(Number(res) - Number(props.sendVal));
            setRes(Number(res) - Number(props.sendVal));
        }  
    }
    return(
        <>
            <button id="btn1" onClick={addHandler}>Add</button>
            <br />
            <button id="btn2" onClick={subtractHandler}>Subtract</button>
        </>
    )
}

export default Button;