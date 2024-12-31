import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Navbar = () =>{
    const {cart} = useSelector((state) => state);
    return (
        <div className="bg-black">
            <nav className="flex justify-between p-4 max-w-6xl mx-auto">
                <NavLink to="/">
                <div>
                    <img src="logo.png" alt="logo" width={120}></img>
                </div>
                </NavLink>
                <div className="text-white flex gap-2">
                    <NavLink to="/">
                        Home 
                         
                    </NavLink>
                    <NavLink to="/cart">
                        <div className="mt-1 relative">
                            <FaShoppingCart className="text-2xl"/>
                            {
                               cart.length >0 &&
                               <span className="absolute -top-1 -right-2 bg-green-600 text-xs flex 
                                justify-center items-center animate-bounce rounded-full text-white p-1"
                               >{cart.length}</span> 
                            }
                        </div>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}
export default Navbar