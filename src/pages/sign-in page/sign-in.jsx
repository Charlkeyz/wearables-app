import './sign-in.scss'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../API\'s/firebase/firebase'
import SignUp from '../../components/sign-up-form/sign-up';

const SignIn = () => {
    const logInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log("userDocRef:", userDocRef)
}
    return(
        <div>
            <h1>Sign in page</h1>
            <button onClick={logInWithGoogle}>Sign in with Google</button>
            <SignUp/>
        </div>
    )
}
export default SignIn