import { useState, useEffect } from "react";
import Navbar from "../../Component/Navbar";
import Cards from "../../Component/Cards";
import { getAds } from "../../Config/FireBase";
import Footer from "../../Component/Footer";

function Dashboard() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getApiData();
    }, [])

    // const getApiData = () => {
    //     fetch('https://dummyjson.com/products')
    //         .then((res) => res.json())
    //         .then(res => {
    //             console.log(res);
    //             setProducts(res.products);
    //         })
    // }

    const getApiData = async () => {
        const ads = await getAds();
        console.log('ads in component', ads);
        setProducts(ads);
    }


    return (
        <div>
            <Navbar />
            {/* {products.map(item => {
                const { title, description, images, price, id } = item
                return <Cards price={price} title={title} description={description} images={images} id={id} />
            })} */}
            {products.map(item => {
                    console.log("🚀 ~ Dashboard ~ item:", item)
                    return <Cards item={item} />
                })}
                <Footer/>
        </div>
    )
}

export default Dashboard;