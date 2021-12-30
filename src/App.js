import React from 'react';
import './App.css';
import Header from './Components/Header';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './Components/StateProvider';


function App() {

  const [{}, dispatch] = useStateValue();
  
  useEffect(() =>{
    auth.onAuthStateChanged((authUser)=>{
      console.log("The Auth User Is >>>>>>>>>", authUser);

      if(authUser){
        dispatch({
          type : "SET_USER",
          user : authUser,
        })
      }

      else{
        dispatch({
          type : "SET_USER",
          user : null,
        })
      }
    })
  }, [])

  return (
  <>
      <div className="app">
        <Header />
    </div>
    
  </>
  );
}

export default App;
