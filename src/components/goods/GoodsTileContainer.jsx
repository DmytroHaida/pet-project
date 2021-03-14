import GoodsTile from "./GoodsTile"
import { useSelector, useDispatch } from 'react-redux'
import { ShoppingCartItems, GoodsIsFetchingThunk } from '../../redux/reducers/PizzaReducer'
import { useEffect, useState } from "react"
import Preloader from '../Preloader'
const GoodsTileContainer = () => {
    const [sortByValue, setSortValue] = useState("За назвою")
    let pizzaItems = useSelector(state => state.pizzaItems.pizzaItems)
    const shoppingCart = useSelector(state => state.pizzaItems.shoppingCart)
    const GoodsIsFetching = useSelector(state => state.pizzaItems.GoodsIsFetching)
    const dispatch = useDispatch()
    const option = [
        { value: "Сортування за:" },
        { value: "Від дешевих до дорогих" },
        { value: "Від дорогих до дешевих" }
    ]
    useEffect(() => {
        FilterFunction()
    }, [sortByValue])

    function addToCart(item) {
        dispatch(ShoppingCartItems(item))
    }
    function FilterFunction() {
        if (sortByValue === option[1].value) {
            dispatch(GoodsIsFetchingThunk(!GoodsIsFetching))
            pizzaItems.sort(function (a, b) {
                return a.price[0] - b.price[0]
            })
        }
        if (sortByValue === option[2].value) {
            dispatch(GoodsIsFetchingThunk(!GoodsIsFetching))
            pizzaItems.sort(function (a, b) {
                return b.price[0] - a.price[0]
            })
        }
        dispatch(GoodsIsFetchingThunk(false))
    }
    return (
        <>
            <div className="navigation-bar">
                <select name="select" id="" value={sortByValue} onChange={e => setSortValue(e.target.value)}>
                    {
                        option.map(option =>
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.value}
                            </option>)
                    }
                </select>
            </div>
            <div className="content">
                {GoodsIsFetching
                    ? <Preloader width="400px" />
                    : pizzaItems.map(i =>
                        <GoodsTile
                            key={i.id}
                            id={i.id}
                            name={i.name}
                            price={i.price}
                            size={i.size}
                            image={i.image}
                            params={i.params}
                            shoppingCart={shoppingCart}
                            addToCart={addToCart}
                        />
                    )
                }

            </div>
        </>
    )
}

export default GoodsTileContainer;