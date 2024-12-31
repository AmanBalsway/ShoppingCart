import { useEffect, useState } from "react";
import Product from "../Components/Product"
import Spinner from "../Components/Spinner"

const Home = () =>{
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);  
    const [posts, setPosts] = useState([]);

    async function fetchProductData(){
        setLoading(true);

        try{
            const response = await fetch(API_URL);
            const data = await response.json();
            setPosts(data);
            
        }
        catch{
            console.log("error");
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect ( () =>{
        fetchProductData();
    },[]);

    return (
        <div>
            {
                loading ? <Spinner/> :
                posts.length > 0 ?
                (
                    <div className="grid grid-cols-4 max-w-6xl p-2 mx-auto gap-2 space-y-10 space-x-5 min-h-[80vh] ">
                        {
                            posts.map( (post) => (
                                <Product key={post.id} post={post} />
                            ))
                        }
                    </div>
                    
                ) :
                (
                    <div className="flex justify-center items-center">
                        <p>no data found</p>
                        
                    </div>
                )
            }
        </div>
    );
}

export default Home;
