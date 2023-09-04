import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignIn(props) {
    const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(props.auth, provider);
    }
  
    return (
      <Button onClick={signInWithGoogle} variant='success' size='lg' style={
        {width: '15rem', alignSelf: 'center', width: '80%', padding: '1rem'}}>
        Sign in with Google
      </Button>
    )
}

export default SignIn