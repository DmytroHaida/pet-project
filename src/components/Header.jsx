import pizzalogo from "../assets/image/pizzalogo.svg"
import cartIcon from "../assets/image/cart.png"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
    const cartItems = useSelector(state => state.pizzaItems.shoppingCart)
    let count = 0
    cartItems.forEach(el => count += el.count)
    return (
        <header className="container">
            <div className="header">
                <NavLink to="/La_Pizza" className="header__logo">
                    <img src={pizzalogo} width="110px" alt="Pizza logo" />
                    <div>
                        <h1>La Pizza</h1>
                        <p>Безкоштовна доставка піци на дровах <span>до 30хв</span></p>
                    </div>
                </NavLink>
                <NavLink to="shopping_cart" className="header__cart">
                    <img src={cartIcon} alt="cart icon" />
                    <span>{count}</span>
                </NavLink>
            </div>
        </header>
    );
}
export default Header