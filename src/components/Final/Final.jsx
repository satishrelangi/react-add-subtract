import { useState } from "react";
import Button from "../Button/Button";
import Display from "../Display/Display";
import Input from "../Input/Input";
import "./Final.css";

const Final = ()=>{
    const [inp,setInp] = useState(0);
    const [result,setResult] = useState(0);  

    const InpValHandler = (inpval) =>{
      setInp(inpval);
    }

    const finalResult = (res)=>{
      setResult(res)
    }
    return (
      <div className="final">
        <Input InpValHandler = {InpValHandler} />
        <Button finalResult = {finalResult} sendVal ={inp}/>
        <Display result = {result} />
      </div>
    )

}

export default Final;