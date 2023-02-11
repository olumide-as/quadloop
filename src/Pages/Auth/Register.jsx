import React, {useState} from 'react'
import { GoogleOutlined } from '@ant-design/icons/lib/icons';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Config/Config";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
//import {Loader} from '../../Components'



const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    /*const [isLoading, setIsLoading] = useState(false);*/
  
    const navigate = useNavigate();
  
    const registerUser = (e) => {
      e.preventDefault();
      console.log(email, password, cPassword)
      if (password !== cPassword) {
        toast.error("Passwords do not match.");
      }
    /*  setIsLoading(true);*/
  
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          /*setIsLoading(false);*/
          toast.success("Registration Successful...");
          navigate("/login");
        })
        .catch((error) => {
          toast.error(error.message);
         /* setIsLoading(false);*/
        });
    };

      // Login with Goooglr
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
        toast.success("Login Successfully");
        redirectUser();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const redirectUser = () => {
    //  if (previousURL.includes("cart")) {
     //   return navigate("/cart");
  //}
      navigate("/");
    };
  

  return (
    <div className='quadloop__auth'>
       {/*isLoading && <Loader />*/}
        <ToastContainer />

        <div className='quadloop__auth_form'>  
                  
                  <h2>Register</h2>
                
                  <form onSubmit={registerUser}>
            
                      <div className=''>
                          <div className="quadloop__auth_form_field">
                              <input
                                  type="email"
                                  placeholder="Your Email"
                                  name="email"
                                  className=""
                                  required
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                              />
                          </div>
      
                          <div className="quadloop__auth_form_field">
                              <input
                                  type= "password"
                                  placeholder="Your Password"
                                  name="password"
                                  className=""
                                  required
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                              />
                          </div>

                          <div className="quadloop__auth_form_field">
                              <input
                                  type= "password"
                                  placeholder="Confirm Password"
                                  name="password"
                                  className=""
                                  required
                                  value={cPassword}
                                  onChange={(e) => setCPassword(e.target.value)}
                              />
                          </div>
      
                      </div>
      
      
                      <div className="quadloop__auth_form_field">
                          <button
                              className=""
                              type="submit"
                          >
                              Register
                          </button>
                      </div>
                    </form>

                    <div className='quadloop__auth_text'>
                    <p><a href='/login'>Back to Login</a> or <button onClick={signInWithGoogle} >Sign in with Google <GoogleOutlined/></button></p>
                    </div>

        </div>

    </div>

  )
}

export default Register