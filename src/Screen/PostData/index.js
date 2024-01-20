import { useState } from "react"
import { postData } from "../../Config/FireBase";


function PostDataPage() {
const [productName, setProductName]= useState();
const [price, setPrice]= useState();
const [description, setDescription]= useState();
const [image, setImage]= useState();

const handlePostData= ()=>{
   postData ({productName, price, description, image})
}

    return(
        // <div>
        //     <input placeholder="ProductName" onChange={(e)=> setProductName(e.target.value)} /><br/>
        //     <input placeholder=" Price" onChange={(e)=> setPrice(e.target.value)} /><br/>
        //     <input placeholder="Description" onChange={(e)=> setDescription(e.target.value)} /><br/>
        //     <input placeholder="Quantity" onChange={(e)=> setQuantity(e.target.value)} /><br/>
        //     <input type="file" /><br/>
        //     <button onClick={handlePostData} >Add Post</button><br/>
            
        // </div>



        <div style={{
            maxWidth: '600px',
            margin: '20px auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Arial, sans-serif',
            textAlign:'center',
            
          }}>
            <h1>Add To Cart</h1>
            <input
              placeholder="Product Name"
              style={{ width: '100%', marginBottom: '10px', padding: '10px', boxSizing: 'border-box' }}
              onChange={(e)=> setProductName(e.target.value)}
            />
            <br/>
            <input
              placeholder="Price"
              style={{ width: '100%', marginBottom: '10px', padding: '10px', boxSizing: 'border-box' }}
              onChange={(e)=> setPrice(e.target.value)}
            />
            <br/>
            <input
              placeholder="Description"
              style={{ width: '100%', marginBottom: '10px', padding: '10px', boxSizing: 'border-box' }}
              onChange={(e)=> setDescription(e.target.value)}
            />
            <br/>
            {/* <input
              placeholder="Quantity"
              style={{ width: '100%', marginBottom: '10px', padding: '10px', boxSizing: 'border-box' }}
              onChange={(e)=> setQuantity(e.target.value)}
            />
            <br/> */}



            <input type="file" style={{ width: '100%', marginBottom: '10px', boxSizing: 'border-box' }} onChange={(e)=> setImage(e.target.files[0]) } />
            <br/>
            <button
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                padding: '10px'
              }}
              onClick={handlePostData}
            >
              Add Post
            </button>
            <br/>
          </div>
    )
}

export default PostDataPage