import './input.css'

const Input = (props) =>{
    const onChangeHandler = (e)=>{
        const inp = e.target.value;
        props.InpValHandler(inp);
    }
    return (
        <div className="inp_div">
            <label htmlFor="inp_num">Enter value to add/subtract</label>
            <br />  
            <input 
                type="number" 
                name="inp_number" 
                id="inp_num"
                onChange={ onChangeHandler}
            />
            <br />
        </div>
    )
}

export default Input;