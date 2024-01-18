import { useState, useEffect } from "react";
import Navbar from "../../Component/Navbar";


function Dashboard() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getApiData();
    },[])

    const getApiData = () => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then(res => {
                console.log(res);
                setProduct(res.products);
            })
    }
 

    
    return(
<div>
<Navbar />

</div>
    )
}

export default Dashboard;