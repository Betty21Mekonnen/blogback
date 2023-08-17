import { useEffect,useState} from "react"; 
import { createContext } from "react";
export const AuthContext=createContext()
export const AuthContextProvider=({children})=>{
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [loginResponse, setLoginResponse] = useState(null);

  const login = async (inputs) => {    
	 const response = await fetch('http://localhost:4000/backend/auth/log', {
		  method: 'POST',
		  credentials: 'include',
		  headers: {
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(inputs)  
		});

   await response.json()
    .then(user => {setCurrentUser(user)})
    console.log(currentUser)
    setLoginResponse(response.status);
  }
  
  const logout = async() => {    
    await fetch('http://localhost:4000/backend/auth/logout', {
      method: 'POST',
      credentials: 'include',  
    });
    //navigate("/")
    setCurrentUser(null);
    setLoginResponse(null);
  }

  useEffect(() => {   
    if(currentUser) {
      localStorage.setItem('user', JSON.stringify(currentUser));
    }    
  }, [currentUser]);

  return (  
    <AuthContext.Provider value={{currentUser, login, logout,loginResponse}}>      
      {children}      
    </AuthContext.Provider>
  
  )

}