import './sign-in-and-sign-up.scss'
import SignUp from '../../components/sign-up-form/sign-up';
import SignIn from '../../components/sign-in-form/sign-in';

const SignInAndSignUpPage = () => {
    
    return(
        <div className='authentication-container'> 
            <SignIn/>
            <SignUp/>
        </div>
    )
}
export default SignInAndSignUpPage;