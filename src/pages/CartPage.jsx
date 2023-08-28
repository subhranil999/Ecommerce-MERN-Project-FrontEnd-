import Cart from "../features/cart/Cart";
import Footer from "../features/common/Footer";
import NavBar from "../features/navbar/Navbar";

function CartPage() {
    return <div>
        <NavBar>
        <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
              Cart
            </h1>
        <Cart></Cart>
        </NavBar>
        <Footer></Footer>
    </div>;
}

export default CartPage;