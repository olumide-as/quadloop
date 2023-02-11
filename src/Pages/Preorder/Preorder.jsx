import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Preorder.css'


const Preorder = () => {

    const navigate = useNavigate();


    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_u73n05z', 'quadloop preorder', form.current, 'ltE6PX_Fl9Gs-dMJo')
        .then((result) => {
            console.log(result.text);
            toast.success("Request sent successfully");
            redirectUser();
        }, (error) => {
            console.log(error.text);
            toast.error("there's an error");
            
  
  
        });
        const redirectUser = () => {
              navigate("/");
            };
    };
  

  return (
    <div className='quadloop__preorder'>
    {/*isLoading && <Loader />*/}
     <ToastContainer />

     <div className='quadloop__preorder_form'>  
               
               <h2>Preorder</h2>
             
               <form ref={form} onSubmit={sendEmail}>
         
                   <div className=''>

                        <div className="quadloop__preorder_form_field">
                           <input
                               type="text"
                               placeholder="Your Name"
                               name="name"
                               className=""
                               required
                           />
                       </div>

                       <div className="quadloop__preorder_form_field">
                           <input
                               type="email"
                               placeholder="Your Email"
                               name="email"
                               className=""
                               required
                           />
                       </div>
   
                       <div className="quadloop__preorder_form_field">
                           <input
                               type= "tel"
                               placeholder="Your Phone Number"
                               name="phone"
                               className=""
                               required
                           />
                       </div>

                       <div className="quadloop__preorder_form_field">
                           <input
                               list= "region"
                               placeholder="Select Region"
                               name="region"
                               className=""
                               required
                           />
                            <datalist id="region">
                                <option value="North Central" />
                                <option value="North East" />
                                <option value="North West" />
                                <option value="South East" />
                                <option value="South South" />
                                <option value="South West" />
                            </datalist>
                       </div>
   
                   </div>
   
   
                   <div className="quadloop__preorder_form_field">
                       <button
                           className=""
                           type="submit"
                       >
                           Preorder Now
                       </button>
                   </div>
                 </form>


     </div>

 </div>

  )
}

export default Preorder