import React, {useState} from 'react'
import { auth } from "../../Config/Config";
import { sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Reset = () => {

    const [email, setEmail] = useState("");
    //const [isLoading, setIsLoading] = useState(false);
  
    const resetPassword = (e) => {
      e.preventDefault();
      //setIsLoading(true);
  
      sendPasswordResetEmail(auth, email)
        .then(() => {
          //setIsLoading(false);
          toast.success("Check your email for a reset link");
        })
        .catch((error) => {
          //setIsLoading(false);
          toast.error(error.message);
        });
    };

  return (
    <div className='quadloop__auth'>
        <ToastContainer />


        <div className='quadloop__auth_form'>  
                  
                  <h2>Reset Password</h2>
                
                  <form onSubmit={resetPassword}>
            
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
      
                      </div>
      
      
                      <div className="quadloop__auth_form_field">
                          <button
                              className=""
                              type="submit"
                          >
                              Reset Password
                          </button>
                      </div>
                    </form>

                    <div className='quadloop__auth_text'>

                    <a href='/login'>Back to Login</a>
                    </div>

        </div>

    </div>

  )
}

export default Reset