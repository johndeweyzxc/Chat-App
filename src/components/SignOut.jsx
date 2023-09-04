import { signOut } from "firebase/auth"
import Button from 'react-bootstrap/Button';

function SignOut(props) {
    return props.auth.currentUser && (
      <Button variant='outline-danger' onClick={
        () => signOut(props.auth)}>
        Sign Out
      </Button>
    )
}

export default SignOut