import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { auth } from "../../Config/Config";
//import { useSelector } from "react-redux";
//import { selectPreviousURL } from "../../redux/slice/cartSlice";
import './Auth.css';
import { GoogleOutlined } from '@ant-design/icons/lib/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [isLoading, setIsLoading] = useState(false);

 // const previousURL = useSelector(selectPreviousURL);
  const navigate = useNavigate();

  const redirectUser = () => {
  //  if (previousURL.includes("cart")) {
   //   return navigate("/cart");
//}
    navigate("/");
  };

  const loginUser = (e) => {
    e.preventDefault();
    //setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //const user = userCredential.user;
        //setIsLoading(false);
        toast.success("Login Successful...");
        navigate("/");
        redirectUser();
      })
      .catch((error) => {
        //setIsLoading(false);
        toast.error(error.message);
      });
  };

  // Login with Gooogle
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

  return (
    <div className='quadloop__auth'>
                <ToastContainer />


        <div className='quadloop__auth_form'>  
                  
                  <h2>Login</h2>
                
                  <form onSubmit={loginUser}>
            
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
      
                      </div>
      
      
                      <div className="quadloop__auth_form_field">
                          <button
                              className=""
                              type="submit"
                          >
                              Login
                          </button>
                      </div>
                    </form>

                    <div className='quadloop__auth_text'>

                    <a href='/reset'>Forgot Password?</a>
                    <hr/>
                    <p><a href="/register">Register</a> or <button onClick={signInWithGoogle} >Sign in with Google <GoogleOutlined/> </button></p>
                    </div>

        </div>

    </div>
  )

}

export default Login