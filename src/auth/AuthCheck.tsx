import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';

interface AuthProps {
    children: React.ReactNode;
}

const AuthCheck = ({ children }: AuthProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.currentUser) {
        navigate("/dashboard")
        signInWithPopup(auth, Providers.google)
    }
  }, [])

  return (
    <>{children}</>
  )
}

export default AuthCheck
