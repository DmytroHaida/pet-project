import GoodsTile from "./GoodsTile"
import { useSelector, useDispatch } from 'react-redux'
import { ShoppingCartItems } from '../../redux/reducers/PizzaReducer'
const GoodsTileContainer = () => {
    const pizzaItems = useSelector(state => state.pizzaItems.pizzaItems)
    const shoppingCart = useSelector(state => state.pizzaItems.shoppingCart)
    const dispatch = useDispatch()
    const addToCart = (item) => {
        dispatch(ShoppingCartItems(item))
    }
    return (
        <>
            { pizzaItems.map(i =>
                <GoodsTile
                    key={i.id}
                    id={i.id}
                    name={i.name}
                    price={i.price}
                    size={i.size}
                    image={i.image}
                    params={i.dough}
                    shoppingCart={shoppingCart}
                    addToCart={addToCart}
                />
            )}
        </>
    )
}

export default GoodsTileContainer;