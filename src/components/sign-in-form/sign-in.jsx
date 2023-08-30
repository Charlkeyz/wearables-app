import './sign-in.scss'
import  Button, { BUTTON_TYPE_CLASS} from '../Button/button';
import FormInput from '../form-input/form-input';
import { useState } from 'react'
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../API\'s/firebase/firebase';

const defaultFormFields = {
    email: '',
    password: '',
}



const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    

    const resetFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async() => {
    await signInWithGooglePopup();   
    }

    
    

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }
    
    const handleSubmit = async(event) => {
        event.preventDefault();

        try {
        await signInAuthUserWithEmailAndPassword(email, password);
        resetFields();

            
        } catch (error) {
           
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('user not found');   
                    break;
                case 'auth/wrong-password':
                    alert('wrong password');
                    break;
            
                default:
                    console.log('error message:', error);
                    
            }
            
        }
    };
    

    return(

        <div className='sign-in-container'>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>                 

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

                <div className='buttons-container'>
                    <Button type='submit'>Sign-in</Button>
                    <Button type= 'button' buttonType={BUTTON_TYPE_CLASS.google} onClick={signInWithGoogle}>Google Sign-in</Button>        
                </div>       
            </form>
        </div>
    )
}
export default SignIn;