// import { useNavigate } from "react-router-dom";
import heart from '../../Assest/heart.svg'

function cards(props) {
    const { productName, description, imageUrl, price, id }= props.item;
    // const navigate = useNavigate()
    const HandleCardPress = (e) => {
        // navigate(`/DetailScreen/${id}`, {state: e})z
    }

    return(
        <div className='App-header' style={{display:"inline-flex",margin:'0 auto' }}>
        <div onClick={() => HandleCardPress(props) }  style={{borderRadius: 10,height:380, border: '1px solid rgb(191, 189, 189)', margin:10, cursor:'pointer'}}>
            {imageUrl?
            <img style={{width: 300, height: 200, borderRadius:10, borderBottom: '1px solid rgb(191, 189, 189)'}} src={imageUrl} className="card-img-top" alt="alt"/>
        :null    
        }
                <div style={{width:300, textAlign:"left", marginTop:-10 }}>
                    <h3 style={{paddingLeft:10}}> ${price}  <img   src={heart} style={{paddingLeft:'12.5rem'}} ></img></h3>
                  
                    <p style={{fontWeight:'bold', paddingLeft:10 }}>{productName}</p>
                    <p style={{fontSize: 15, paddingLeft:10}} >{description}</p>
                    
                </div>
                </div>
        </div>
    )
}

export default cards;