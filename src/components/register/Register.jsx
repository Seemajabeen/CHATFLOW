
import './Register.css';
import {useForm} from 'react-hook-form';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'



function Register(){

    let{register,handleSubmit}=useForm();
    let [registeredUsers,setRegisteredUsers]=useState([])
    let navigate=useNavigate()

    //form submission
    function handleFormSubmit(userObj){
        setRegisteredUsers([...registeredUsers,userObj])
        //Programatically navigate
        navigate('/registered-users')

    }
    
    return(
        <div>
            <h1 className="text-center Reg-colour display-3 mt-3 ">Register</h1>
           
            <form className="form-container w-50 mx-auto mt-4 container border border-secondary border-1" onSubmit={handleSubmit(handleFormSubmit)}>
                {/* username */}
                <div className="mb-3 mt-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" {...register('username')}  id="username" className="form-control" />
                </div>
                
                {/* password */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="text" {...register('password')}  id="Password" className="form-control" />
                </div>

                {/* email */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" {...register('email')} id="email" className="form-control" />
                </div>



                {/* submit button */}
                <button type="Submit" className="btn btn-success mt-4 mb-3">Register</button>

            </form>

        </div>
    );
}

export default Register;