import { addDoc, collection, /*doc, setDoc,*/ Timestamp } from "firebase/firestore";
import { /*deleteObject*/ getDownloadURL, ref, uploadBytesResumable,} from "firebase/storage";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
//import { useSelector } from "react-redux";
//import { useNavigate, useParams } from "react-router-dom";
import { toast, /*ToastContainer*/ } from "react-toastify";
import { db, storage } from "../../../Config/Config";
import './AddProducts.css'


const AddProducts = () => {
  const {id} = useParams()
  //console.log(id)


  const [product, setProduct] = useState({
    name: "",
    imageURL: "",
    price: 0,
    desc: "",
  })

  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();

  function detectForm(id, f1, f2) {
    if (id === 'ADD' ) {
      return f1;
    }
    return f2
  }



  const handleInputChange = (e) =>{
    const{name, value} = e.target
    setProduct({...product, [name]: value})
  };

  const handleImageChange = (e) =>{
    const file = e.target.files[0];
    console.log(file);

    const storageRef = ref(storage, `store/${Date.now()}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on( "state_changed",
      (snapshot) => {
      const progress =  (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setUploadProgress(progress);
      console.log(progress)
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProduct({ ...product, imageURL: downloadURL });
          toast.success("Image uploaded successfully.");
        });
      }
    );
  };

  const addProduct = (e) => {
    e.preventDefault()
    console.log(product)

    try {
      const docRef = addDoc(collection(db, "products"), {
        name: product.name,
        imageURL: product.imageURL,
        price: product.price,
        desc: product.desc,
        createdAt: Timestamp.now().toDate()
      });
      toast.success('Product uploaded successfully')
      navigate("/admin/view-products");

    }catch(error) {
      toast.error(error.message)

    }
  }

  // stopped at edit product


  return (
    <div>
        <div className='quadloop__addproducts_form'>  
                  
            <h2>{detectForm(id, "Add Product", "Edit Product" )}</h2>
          
            <form onSubmit={detectForm(id, addProduct)}>
      
                <div className=''>
                    <div className="quadloop__addproducts_form_field">
                        <input
                            type="text"
                            placeholder="Product Name"
                            name="name"
                            required
                            value={product.name}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>

                    <div className="quadloop__addproducts_form_field">
                        <textarea
                            type="text"
                            placeholder="Product Description"
                            name="desc"
                            required
                            value={product.desc}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>

                    <div className="quadloop__addproducts_form_field">
                        <input
                            type="number"
                            placeholder="Product Price"
                            name="price"
                            required
                            value={product.price}
                            onChange={(e) => handleInputChange(e)}

                        />
                    </div>

                    <div className="quadloop__addproducts_form_field">
                        <input
                            type="file"
                            accept='image/*'
                            placeholder="Product Image"
                            name="image"
                            //required
                            onChange={(e) => handleImageChange(e)}
                        />


              {uploadProgress === 0 ? null : (
                  <div>
                    {uploadProgress < 100
                      ? `Uploading ${uploadProgress}`
                      : `Upload Complete ${uploadProgress}%`}
                  </div>
              )}

                    </div>


                </div>


                <div className="quadloop__addproducts_form_field">
                    <button
                        className=""
                        type="submit"
                    >
                        {detectForm(id, "Add", "Update")}
                    </button>
                </div>


            </form>
        </div>
    </div>
  )
}

export default AddProducts