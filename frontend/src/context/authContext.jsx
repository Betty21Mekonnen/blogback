import { useEffect,useState } from "react"; 
import { createContext } from "react";

export const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const login = async (inputs) => {    
	 const response = await fetch('http://localhost:4000/backend/auth/log', {
		  method: 'POST',
		  credentials: 'include',
		  headers: {
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(inputs)  
		});
        response.json()
    .then(user => {setCurrentUser(user)})
  }
   
  const logout = async () => {    
    const response = await fetch('http://localhost:4000/backend/auth/logout', {
      method: 'POST',
      credentials: 'include',  
    });
    setCurrentUser(null);
  }

  useEffect(() => {   
    if(currentUser) {
      localStorage.setItem('user', JSON.stringify(currentUser));
    }    
  }, [currentUser]);

  return (    
    <AuthContext.Provider value={{currentUser, login, logout}}>      
      {children}      
    </AuthContext.Provider>
  )

}