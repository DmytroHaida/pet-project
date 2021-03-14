import { useDispatch, useSelector } from 'react-redux'
import CartContent from './CartContent'
import shoppingCartImg from "../../assets/image/shopping_cart.png"
import trashIcon from "../../assets/image/trash.png"
import {
    ShoppingCartItemsIncrement, ShoppingCartItemsDecrement,
    ShoppingCartItemsDeleter, ClearShoppingCartItems
} from '../../redux/reducers/PizzaReducer'
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
        let payAmount = 0
        shoppingCart.map(i => payAmount = payAmount + i.price * i.count)
        return payAmount
    }
    const decreaseGoodsCount = (item) => {
        dispatch(ShoppingCartItemsDecrement(item))
    }
    const addGoodsCount = (item) => {
        dispatch(ShoppingCartItemsIncrement(item))
    }
    const cartItemDeleter = (index) => {
        dispatch(ShoppingCartItemsDeleter(index))
    }
    const clearCart = () => {
        dispatch(ClearShoppingCartItems())
    }
    return (
        <div className="content">
            <div className="shopping--cart">
                {shoppingCart.length > 0
                    ? <div className="shopping--cart__top">
                        <div className="shopping--cart__tittle">
                            <img src={shoppingCartImg} height="30px" alt="shoppingCart" />
                            <h3>Корзина</h3>
                        </div>
                        <div onClick={() => clearCart()} className="shopping--cart__clear">
                            <img src={trashIcon} height="16px" alt="trashIcon" />
                            <span>Очистити корзину</span>
                        </div>
                    </div>
                    : null
                }
                {shoppingCart.length > 0 ? shoppingCart.map(i =>
                    <CartContent
                        key={i.name + i.size + i.params}
                        name={i.name}
                        size={i.size}
                        params={i.params}
                        count={i.count}
                        price={i.price}
                        image={i.image}
                        id={i.id}
                        index={shoppingCart.indexOf(i)}
                        addGoodsCount={addGoodsCount}
                        decreaseGoodsCount={decreaseGoodsCount}
                        cartItemDeleter={cartItemDeleter}
                    />)
                    : <CartNoGoods />
                }
                {shoppingCart.length > 0 ?
                    <div>
                        <div className="shopping--cart__bottom-details">
                            <span>Всього замовленно:
                            <b> {summaryItemsCount()}</b> шт.
                        </span>
                            <span>Сума заказу:
                            <b>{payAmount()} &#8372;</b>
                            </span>
                        </div>
                        <div className="shopping--cart__bottom">
                            <NavLink to="/La_Pizza">
                                <button className="my-button button-variant-black">Вернутись назад</button>
                            </NavLink>
                            <button className="my-button"
                                onClick={() => alert(`Ви замовили: ${summaryItemsCount()} шт. на суму ${payAmount()} Грн. `)}>
                                Оплатити
                        </button>
                        </div>
                    </div>
                    : <div className="shopping--cart__bottom-empty">
                        <NavLink to="/La_Pizza">
                            <button className="my-button button-variant-black">Вернутись назад</button>
                        </NavLink>
                    </div>}
            </div>
        </div>
    )
}
export default CartContainer;