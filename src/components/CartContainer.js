import { useSelector } from 'react-redux'
import CartContent from './CartContent'
import shoppingCart from "../assets/image/shopping_cart.png"
import trashIcon from "../assets/image/trash.png"
import { useEffect } from 'react'
const CartContainer = () => {
    const cartItem = useSelector(state => state.pizzaItems.shoppingCart)
    useEffect(()=>{
        <CartContent/>
    })
    return (
        <div className="shopping--cart">
            <div className="shopping--cart__top">
                <div className="shopping--cart__tittle">
                    <img src={shoppingCart} height="30px" alt="shoppingCart" />
                    <h3>Корзина</h3>
                </div>
                <div className="shopping--cart__clear">
                    <img src={trashIcon} height="16px" alt="" />
                    <span>Очистити корзину</span>
                </div>
            </div>
            {cartItem.map(i =>
                <CartContent
                    key={Math.random(i.id)}
                    name={i.tittleName}
                    size={i.params.sizeSelected}
                    params={i.params.paramsSelected}
                    count={i.count}
                    price={i.total}
                    />)}
        </div>
    )
}
export default CartContainer;