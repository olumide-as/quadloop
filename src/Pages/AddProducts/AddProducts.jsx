import React, {useState} from 'react'
import { storage, db } from '../../Config/Config'
import './AddProducts.css'
import { ref, uploadBytes } from "firebase/storage";


const AddProducts = () => {

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg']; // image types

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('')
        }
        else {
            setProductImg(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }

    // add product
    const addProduct = (e) => {
        e.preventDefault();
        console.log(productName);

        const storageRef = ref(storage, `product-images/${productImg}`);
        const uploadTask = uploadBytes(storageRef, productImg);

        
        uploadTask.on(
            'state_changed', 
            snapshot => {
            const progress = 
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, err => setError(err.message)
            , () => {
                ref(storage, 'product-images').child(productImg.name).getDownloadURL().then(url => {
                    db.collection('Products').add({
                        ProductName: productName,
                        ProductDescription: productDescription,
                        ProductPrice: Number(productPrice),
                        ProductImg: url
                    }).then(() => {
                        setProductName('');
                        setProductDescription('');
                        setProductPrice(0)
                        setProductImg('');
                        setError('');
                        document.getElementById('file').value = '';
                    }).catch(err => setError(err.message))
                })
            })
    }

  return (
    <div>
        <div className='quadloop__addproducts_form'>  
                  
            <h2>Add Products</h2>
          
            <form onSubmit={addProduct}>
      
                <div className=''>
                    <div className="quadloop__addproducts_form_field">
                        <input
                            type="text"
                            placeholder="Product Name"
                            name="product-name"
                            className=""
                            required
                            onChange={(e) => setProductName(e.target.value)} value={productName}
                        />
                    </div>

                    <div className="quadloop__addproducts_form_field">
                        <textarea
                            type="text"
                            placeholder="Product Description"
                            name="product-description"
                            className=""
                            required
                            onChange={(e) => setProductDescription(e.target.value)} value={productDescription}
                        />
                    </div>

                    <div className="quadloop__addproducts_form_field">
                        <input
                            type="number"
                            placeholder="Product Price"
                            name="product-price"
                            className=""
                            required
                            onChange={(e) => setProductPrice(e.target.value)} value={productPrice}
                        />
                    </div>

                    <div className="quadloop__addproducts_form_field">
                        <input
                            type="file"
                            placeholder="Product Image"
                            name="product-img"
                            className=""
                            required
                            onChange={productImgHandler}
                        />
                    </div>

                </div>


                <div className="quadloop__addproducts_form_field">
                    <button
                        className=""
                        type="submit"
                    >
                        Add
                    </button>
                </div>

                {error && <span className='error-msg'>{error}</span>}

            </form>
        </div>
    </div>
  )
}

export default AddProducts