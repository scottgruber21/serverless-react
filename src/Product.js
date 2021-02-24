import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

const Product = () => {
 const [loading, setLoading] = useState(true)
 const [product, setProduct] = useState(null)

 const {productID} = useParams()
 
 const fetchData = async() => {
  try{
   const {data} = await axios.get(`/api/product?id=${productID}`)
   setProduct(data)

  } catch(error){}
  setLoading(false)
 }

 useEffect(() => {
  fetchData();
 },[])

 if(loading){
  return <section className="section section-center">
   <h2>Loading...</h2>
  </section>
 }

 const {fields} = product;
 const {name, desc, price, image} = fields;

 return (
  <section className="section section-center">
   <Link to="/" className="link">
    Home
   </Link>
   <div>
    <div className="title">
     <h2>{name}</h2>
     <div className="title-underline"></div>
     <article className="single-product">
      <img className="single-product-img" src={image[0].url} alt={name}/>
      <div>
       <h5>{name}</h5>
       <h5 className="price">${price}</h5>
       <p>{desc}</p>
      </div>
     </article>
      
    </div>
   </div>
  </section>
 )
}

export default Product
