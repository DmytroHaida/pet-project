import doublePepperoni from '../../assets/image/pizza/doublePepperoni.jpg'
import frutyDyMare from '../../assets/image/pizza/fruty-dy-mare.jpg'
import hotDog from '../../assets/image/pizza/hot-dog.jpg'
import kalcone from '../../assets/image/pizza/kalcone.jpg'
import korbonara from '../../assets/image/pizza/korbonara.jpg'
import mushrooms from '../../assets/image/pizza/mushrooms.png'
import vinniPuh from '../../assets/image/pizza/vinni-puh.jpg'
import kaprichoza from '../../assets/image/pizza/kaprichoza.jpg'

const SET_SHOPPING_CART_ITEMS = "SET_SHOPPING_CART_ITEMS"
const SET_SHOPPING_CART_ITEMS_COUNT = "SET_SHOPPING_CART_ITEMS_COUNT"
const SET_SHOPPING_CART_ITEMS_DECREMENT_COUNT = "SET_SHOPPING_CART_ITEMS_DECREMENT_COUNT"
const SET_SHOPPING_CART_ITEMS_DELETER = "SET_SHOPPING_CART_ITEMS_DELETER"
const SET_CLEAR_SHOPPING_CART_ITEMS = "SET_CLEAR_SHOPPING_CART_ITEMS"
let initialState = {
    pizzaItems: [
        {
            name: "ВІННІ ПУХ",
            size: ["20см", "30см", "50см"],
            price: [67, 80, 110],
            dough: ["Тонке", "Традиційне"],
            image: vinniPuh,
            id: 1
        },
        {
            name: "ФРУТІ ДІ МАРЕ",
            size: ["20см", "30см", "50см"],
            price: [209, 260, 335],
            dough: ["Тонке", "Традиційне"],
            image: frutyDyMare,
            id: 2
        },
        {
            name: "ПОДВІЙНА ПЕПЕРОНІ",
            size: ["20см", "30см", "50см"],
            price: [127, 160, 220],
            dough: ["Тонке", "Традиційне"],
            image: doublePepperoni,
            id: 3
        },
        {
            name: "ПІЦА ХОТ-ДОГ",
            size: ["20см", "30см", "50см"],
            price: [128, 160, 225],
            dough: ["Тонке", "Традиційне"],
            image: hotDog,
            id: 4
        },
        {
            name: "КАЛЬЦОНЕ АЛЬ ФОРНО",
            size: ["20см", "30см", "50см"],
            price: [99, 140, 210],
            dough: ["Тонке", "Традиційне"],
            image: kalcone,
            id: 5
        },
        {
            name: "ГРИБОЧОК",
            size: ["20см", "30см", "50см"],
            price: [53, 65, 90],
            dough: ["Тонке", "Традиційне"],
            image: mushrooms,
            id: 6
        },
        {
            name: "КАРБОНАРА",
            size: ["20см", "30см", "50см"],
            price: [96, 140, 189],
            dough: ["Тонке", "Традиційне"],
            image: korbonara,
            id: 7
        },
        {
            name: "КАПРИЧОЗА",
            size: ["20см", "30см", "50см"],
            price: [99, 130, 170],
            dough: ["Тонке", "Традиційне"],
            image: kaprichoza,
            id: 8
        }
    ],
    shoppingCart: []
}

const PizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOPPING_CART_ITEMS:
            return {
                ...state,
                shoppingCart: [action.payloads, ...state.shoppingCart]
            }
        case SET_SHOPPING_CART_ITEMS_COUNT:
            return {
                ...state,
                shoppingCart: state.shoppingCart.map(item => {
                    if (item.id === action.payloads.id
                        && item.size === action.payloads.size
                        && item.params === action.payloads.params
                        && item.id === action.payloads.id
                    ) {
                        let addCount = item
                        addCount.count++
                        return item
                    } else return item

                })
            }
        case SET_SHOPPING_CART_ITEMS_DECREMENT_COUNT:
            return {
                ...state,
                shoppingCart: state.shoppingCart.map(item => {
                    if (item.id === action.payloads.id
                        && item.params === action.payloads.params
                        && item.size === action.payloads.size
                        && item.id === action.payloads.id
                    ) {
                        let addCount = item
                        addCount.count--
                        return item
                    } else return item

                })
            }
        case SET_SHOPPING_CART_ITEMS_DELETER:
            state.shoppingCart.splice(action.payloads, 1)
            return {
                ...state,
                shoppingCart: [...state.shoppingCart]
            }
        case SET_CLEAR_SHOPPING_CART_ITEMS:
            state.shoppingCart.splice(0, state.shoppingCart.length)
            return {
                ...state,
                shoppingCart: [...state.shoppingCart]
            }
        default:
            return state
    }
}

export const setShoppingCartItems = (payloads) => ({ type: SET_SHOPPING_CART_ITEMS, payloads })
export const setShoppingCartItemsCount = (payloads) => ({ type: SET_SHOPPING_CART_ITEMS_COUNT, payloads })
export const setShoppingCartItemsDecrementCount = (payloads) => ({ type: SET_SHOPPING_CART_ITEMS_DECREMENT_COUNT, payloads })
export const setShoppingCartItemsDeleter = (payloads) => ({ type: SET_SHOPPING_CART_ITEMS_DELETER, payloads })
export const setClearShoppingCartItems = (payloads) => ({ type: SET_CLEAR_SHOPPING_CART_ITEMS, payloads })

export const ShoppingCartItems = (item) => (dispatch, getState) => {
    const state = getState().pizzaItems.shoppingCart
    const matchedItem = state.find(i =>
        i.params === item.params
        && i.size === item.size
        && i.id === item.id
    )
    const paramsSelectedMatched = state.some(i =>
        i.params === item.params
        && i.size === item.size
        && i.id === item.id
    )
    if (!paramsSelectedMatched) {
        dispatch(setShoppingCartItems(item))
    } else {
        dispatch(setShoppingCartItemsCount(matchedItem))
    }
}
export const ShoppingCartItemsIncrement = (item) => (dispatch) => {
    dispatch(setShoppingCartItemsCount(item))
}
export const ShoppingCartItemsDecrement = (item) => (dispatch) => {
    dispatch(setShoppingCartItemsDecrementCount(item))
}
export const ShoppingCartItemsDeleter = (index) => (dispatch) => {
    dispatch(setShoppingCartItemsDeleter(index))
}
export const ClearShoppingCartItems = () => (dispatch) => {
    dispatch(setClearShoppingCartItems())
}

export default PizzaReducer;