import { useState } from "react"
import { postData } from "../../Config/FireBase";


function PostDataPage() {
const [productName, setProductName]= useState();
const [price, setPrice]= useState();
const [description, setDescription]= useState();
const [quantity, setQuantity]= useState();

const handlePostData= ()=>{
   postData ({productName, price, description, quantity})
}

    return(
        <div>
            <input placeholder="ProductName" onChange={(e)=> setProductName(e.target.value)} />
            <input placeholder=" Price" onChange={(e)=> setPrice(e.target.value)} />
            <input placeholder="Description" onChange={(e)=> setDescription(e.target.value)} />
            <input placeholder="Quantity" onChange={(e)=> setQuantity(e.target.value)} />
            <button onClick={handlePostData} >Add Post</button>

        </div>
    )
}

export default PostDataPage