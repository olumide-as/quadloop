import { EditFilled, DeleteFilled } from '@ant-design/icons'
//import { async } from '@firebase/util'
import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import Notiflix from 'notiflix'
import {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { db, storage } from '../../../Config/Config'
import { STORE_PRODUCTS } from '../../../Redux/Slice/ProductSlice'
import './ViewProduct.css'



const ViewProduct = () => {

  useEffect(() => {
    getProducts()
  }, [])
  
  const [products, setProducts] = useState([])

  const dispatch = useDispatch()

  const getProducts = () =>{

    try{
      const productsRef = collection(db, "products");

      const q = query(productsRef, orderBy("createdAt", "desc"));
      onSnapshot(q, (snapshot) => {
        //console.log(snapshot.docs)
        const allProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        //console.log(allProducts);
        setProducts(allProducts);
        dispatch(
          STORE_PRODUCTS({
            products: allProducts
          })
          )

});

    }catch(error){
      toast.error(error.message)
    }
  }

  const confirmDelete = (id, imageURL) => {
    Notiflix.Confirm.show(
      'Delete Product?',
      'You can not recover after delete',
      'Confirm',
      'Cancel',
      function okCb() {
        deleteProduct(id, imageURL)
        toast.success('Product Deleted')
      },
      function cancelCb() {
        toast.success('If you say so...')
      },
      {
        width: '320px',
        borderRadius: '8px',
        okButtonBackground: '#FAA112',
        titleColor: '#105D6B',
        fontFamily: 'Neo Sans Std',
        // etc...
      },
    );
  }

  const deleteProduct = async(id, imageURL) =>{
    try{
      await deleteDoc(doc(db, "products", id));
      const storageRef = ref(storage, imageURL);
      await deleteObject(storageRef)
      toast.success('Product deleted successfully')



    }catch(error){
      toast.error(error.message)
    }
  }

  return (
    <div className='quadloop__viewproducts content__padding'>
      <h2>All Products</h2>

      {products.length === 0 ? (
        <p>No Products Found</p>
      ) : (
        <table>
          <thead>
          <tr>
            <th>s/n</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {products.map((product, index) => {
            const {id, name, price, imageURL, } = 
            product;
            return (
              <tr key={id}>
                <td>
                  {index +1}
                </td>
                <td>
                  <img src={imageURL} alt={name} style={{width: '100px'}}/>
                </td>
                <td>
                  {name}
                </td>
                <td>
                  {`₦${price}`}
                </td>
                <td>
                  <Link to={`/admin/add-products/${id}`}>
                    <EditFilled size={24}/>
                    <p>Edit Product</p>
                  </Link>
                  <br/>
                  &nbsp;
                  <DeleteFilled size={24} onClick={() => confirmDelete(id, imageURL)}/>
                    <p>Delete Product</p>
                  
                </td>

              </tr>
            )
          })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default ViewProduct