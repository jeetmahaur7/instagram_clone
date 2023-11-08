import React, { useEffect } from 'react';
import "./App.css";
import Homepage from './Homepage';
import Authenticate from './authenticate/Authenticate';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { loginUser, setLoading } from './features/userSlice';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  },[dispatch]);


  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loader_container">
          <div className="loader"></div>
        </div>
      ) : (
        <>{user ? <Homepage /> : <Authenticate />}</>
      )}
    </div>
  )
}

export default App;
