import React,{useState} from 'react'

function Login() {
    const [value, setvalue ] = useState({Email:'', Password:''})
    const changevalue = (e)=>{
        setvalue({...value,[e.target.name]:e.target.value})
    }
    const Login = (e)=>{
        e.preventDefault()
    }
    return (
        <div>
        <form  onSubmit = {Login}>
        
        <label>Email</label>
        <input type ="email" name ="Email" value = {value.Email} onChange = {changevalue}/>
        <label>Password</label>
        <input type ="password" name ="Password" value = {value.Password} onChange = {changevalue}/>
        <button type = "submit">Login</button>
       
        </form>
            
        </div>
    )
}

export default Login

