import React , {createContext , useState} from 'react'

export const ModalContext = createContext()
export const ModalProvider = ({children}) => {

    const [signUpOpen, setSignUpOpen] = useState(false)
    const [signInOpen, setSignInOpen] = useState(false)
  
    const handleSignUp = () => setSignUpOpen(true)
  
    const handleSignIn = () => setSignInOpen(true)
  
    const handleClose = () => {
      setSignUpOpen(false)
      setSignInOpen(false)
    }

    return (
        <>
            <ModalContext.Provider value={{
                signInOpen,
                signUpOpen,
                handleSignUp,
                handleSignIn,
                handleClose
            }}
             >
                {children}
            </ModalContext.Provider>
        </>
    )
}
