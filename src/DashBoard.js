import axios from 'axios';
import React, { useEffect, useState } from 'react';

function DashBoard(props) {
  const[products,setProducts] = useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then(res=>{
           
            setProducts(res.data)
            console.log("products",products)
        })
    })
    return (
        <div>
            DashBoard
            <div>
                {
                products.map(product=>{
                    return          <div class="card">
                        <img src={product.image} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{product.title}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default DashBoard;