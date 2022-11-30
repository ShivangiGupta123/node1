import React,{useState} from 'react'
import { useNavigate } from 'react-router'

function Register() {
    const [value, setvalue ] = useState({Name:'' ,Email:'', Password:'',Phone:''})
    const changevalue = (e)=>{
        setvalue({...value,[e.target.name]:e.target.value})
    }
    let navigate = useNavigate();
    const mobile = ()=>{
        let path =`/login`;
        navigate(path)

    }
    const Register = (e)=>{
        e.preventDefault();
        mobile()
    }
    return (
        <div>
        <form  onSubmit = {Register}>
        <label>Name</label>
        <input type ="text" name ="Name" value = {value.Name} onChange = {changevalue}/>
        <br></br>
        <label>Email</label>
        <input type ="email" name ="Email" value = {value.Email} onChange = {changevalue}/>
        <label>Password</label>
        <input type ="password" name ="Password" value = {value.Password} onChange = {changevalue}/>
        <label>Phone</label>
        <input type ="Number" name ="Phone" value = {value.Phone} onChange = {changevalue}/>
        <button type ="submit" >Register</button>

        </form>
            
        </div>
    )
}

export default Register
