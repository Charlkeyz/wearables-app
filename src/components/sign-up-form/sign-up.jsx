import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../API\'s/firebase/firebase';
import Button from '../Button/button';
import FormInput from '../form-input/form-input';
import './sign-up.scss'
import { useState } from 'react'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}



const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    

    const resetFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }
    const handleSubmit = async(event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("your password does not match");
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFields();
            

        } catch (error) {
            if (error.code === "auth/email-already-in-use") 
                return alert("Cannot create user, email already in use");
            
            
            
        }
        
    }

    return(
        <div className='sign-up-container'>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
            <FormInput
                label="Display Name" 
                type="text"
                required 
                name='displayName' 
                value={displayName} 
                onChange={handleChange} />
                 

                
            <FormInput
                label="Email" 
                type="email" 
                required name='email' 
                value={email} 
                onChange={handleChange}/>

                
            <FormInput
                label="Password" 
                type="password" 
                required name='password' 
                value={password} 
                onChange={handleChange}/>

                
            <FormInput
                label="Confirm Password" 
                type="password" 
                required name='confirmPassword' 
                value={confirmPassword} 
                onChange={handleChange}/>
                
                <Button type='submit'>Sign-up form </Button>
            </form>
        </div>
    )
}
export default SignUp