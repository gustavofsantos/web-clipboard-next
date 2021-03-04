import { createContext, useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from '../../firebase'

const AuthenticationContext = createContext(null)

export const AuthenticationProvider = ({ children }) => {
  const [user] = useAuthState(firebase.auth())

  return (
    <AuthenticationContext.Provider value={user}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export const useAuth = () => {
  const user = useContext(AuthenticationContext)

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  }

  const logout = () => {
    firebase.auth().signOut()
  }

  return { user, login, logout }
}
