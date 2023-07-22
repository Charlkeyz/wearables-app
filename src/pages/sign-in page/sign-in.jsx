import './sign-in.scss'
import { signInWithGooglePopup } from '../../API\'s/firebase/firebase'

const SignIn = () => {
    const logInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    console.log(response)
}
    return(
        <div>
            <h1>Sign in page</h1>
            <button onClick={logInWithGoogle}>Sign in with Google</button>
        </div>
    )
}
export default SignIn