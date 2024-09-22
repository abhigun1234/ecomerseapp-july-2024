import React, { useEffect, useState } from 'react';
import axios from 'axios'
function AddProduct() {
    const [prod_name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const onNameChange = e => setName(e.target.value);
    const onPriceChange = e => setPrice(e.target.value);
    const onDescriptionChange = e => setDescription(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        
        const data = { prod_name, price, description };
        console.log("data", data)
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
        headers.append('Origin','http://localhost:3000');
        const requestOptions = {
            crossDomain:true,
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        };
        fetch("http://localhost:2004/addproduct", requestOptions)
            .then(response => response.title)
            .then(res => console.log(res));
        // axios.post('url',data)/TouchEvent(res=>{

        // }).catch(error=>{

        // })
    };

    return (
        <div className="App">
            <div className='productForm'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div class="form-group">
                        <label for="price">Enter Product Name</label>
                        <input type="name" value={prod_name} onChange={onNameChange} class="form-control" id="name" aria-describedby="name" placeholder="Enter name" />

                    </div>
                    <div class="form-group">
                        <label for="price">Enter Product Price</label>
                        <input type="name" value={price} onChange={onPriceChange} class="form-control" id="price" aria-describedby="price" placeholder="Enter price" />

                    </div>
                    <div class="form-group">
                        <label for="price">Enter Description</label>
                        <input type="name" value={description} onChange={onDescriptionChange} class="form-control" id="description" aria-describedby="description" placeholder="Enter description" />

                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}
export default AddProduct;