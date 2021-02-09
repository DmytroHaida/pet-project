import { useDispatch, useSelector } from 'react-redux'
import CartContent from './CartContent'
import shoppingCartImg from "../assets/image/shopping_cart.png"
import trashIcon from "../assets/image/trash.png"
import { ShoppingCartItemsIncrement, ShoppingCartItemsDecrement, ShoppingCartItemsDeleter, ClearShoppingCartItems } from '../redux/reducers/PizzaReducer'
import { NavLink } from 'react-router-dom'
import CartNoGoods from './CartNoGoods'

const CartContainer = () => {
    const shoppingCart = useSelector(state => state.pizzaItems.shoppingCart)
    const dispatch = useDispatch()
    const summaryItemsCount = () => {
        let count = 0
        shoppingCart.map(i => count = count + i.count)
        return count
    }
    const payAmount = () => {
        let n = 0
        shoppingCart.map(i => n = n + i.total * i.count)
        return n
    }
    const cutGoodsCount = (item) => {
        dispatch(ShoppingCartItemsDecrement(item))
    }
    const addGoodsCount = (item) => {
        dispatch(ShoppingCartItemsIncrement(item))
    }
    const a = (index) => {
        dispatch(ShoppingCartItemsDeleter(index))
    }
    const clearCart = () => {
        dispatch(ClearShoppingCartItems())
    }
    return (
        <div className="shopping--cart">
            <div className="shopping--cart__top">
                <div className="shopping--cart__tittle">
                    <img src={shoppingCartImg} height="30px" alt="shoppingCart" />
                    <h3>Корзина</h3>
                </div>
                <div onClick={() => clearCart()} className="shopping--cart__clear">
                    <img src={trashIcon} height="16px" alt="" />
                    <span>Очистити корзину</span>
                </div>
            </div>
            {shoppingCart.length > 0 ? shoppingCart.map(i =>
                <CartContent
                    key={i.name + i.size + i.params}
                    name={i.name}
                    size={i.size}
                    params={i.params}
                    count={i.count}
                    price={i.total}
                    image={i.image}
                    id={i.id}
                    index={shoppingCart.indexOf(i)}
                    addGoodsCount={addGoodsCount}
                    cutGoodsCount={cutGoodsCount}
                    a={a}
                />)
                : <CartNoGoods />
            }
            { shoppingCart.length > 0 ?
                <div>
                    <div className="shopping--cart__bottom-details">
                        <span>Всього замовленно: {summaryItemsCount()} шт.</span>
                        <span>Сума заказу: <b>{payAmount()} &#8372;</b></span>
                    </div>
                    <div className="shopping--cart__bottom-botton">
                        <NavLink to="/La_Pizza">
                            <button className="button">Вернутись назад</button>
                        </NavLink>
                        <button className="button" onClick={() =>
                            alert(`Ви замовили: ${summaryItemsCount()} шт. на суму ${payAmount()} Грн. `)}>
                            Оплатити
                        </button>
                    </div>
                </div>
                : <div className="shopping--cart__bottom-botton--noitems">
                    <NavLink to="/La_Pizza">
                        <button className="button">Вернутись назад</button>
                    </NavLink>
                </div>}
        </div>
    )
}
export default CartContainer;