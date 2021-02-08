const SET_SHOPPING_CART_ITEMS = "SET_SHOPPING_CART_ITEMS"
const SET_SHOPPING_CART_ITEMS_COUNT = "SET_SHOPPING_CART_ITEMS_COUNT"
const SET_SHOPPING_CART_ITEMS_DECREMENT_COUNT = "SET_SHOPPING_CART_ITEMS_DECREMENT_COUNT"
const SET_SHOPPING_CART_ITEMS_DELETER = "SET_SHOPPING_CART_ITEMS_DELETER"
const SET_CLEAR_SHOPPING_CART_ITEMS = "SET_CLEAR_SHOPPING_CART_ITEMS"
let initialState = {
    pizzaItems: [
        {
            name: "кватро формаджі",
            size: ["20см", "30см", "50см"],
            price: [129, 150, 220],
            dough: ["Тонке", "Традиційне"],
            id: 1
        },
        {
            name: "прошуто",
            size: ["20см", "30см", "50см"],
            price: [150, 199, 259],
            dough: ["Тонке", "Традиційне"],
            id: 2
        },
        {
            name: "дявола",
            size: ["20см", "30см", "50см"],
            price: [105, 150, 190],
            dough: ["Тонке", "Традиційне"],
            id: 3
        },
        {
            name: "українська",
            size: ["20см", "30см", "50см"],
            price: [89, 120, 165],
            dough: ["Тонке", "Традиційне"],
            id: 4
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
            return {
                ...state, 
                shoppingCart: action.payloads
            }
        default:
            return state
    }
}

export const setShoppingCartItems = (payloads) => ({ type: SET_SHOPPING_CART_ITEMS, payloads })
export const setShoppingCartItemsCount = (payloads) => ({ type: SET_SHOPPING_CART_ITEMS_COUNT, payloads })
export const setShoppingCartItemsDecrementCount = (payloads) => ({ type: SET_SHOPPING_CART_ITEMS_DECREMENT_COUNT, payloads})
export const setShoppingCartItemsDeleter = (payloads) => ( {type: SET_SHOPPING_CART_ITEMS_DELETER, payloads})
export const setClearShoppingCartItems = (payloads) => ({type: SET_CLEAR_SHOPPING_CART_ITEMS, payloads})
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
export const ShoppingCartItemsIncrement =(item) => (dispatch) => {
    dispatch(setShoppingCartItemsCount(item))
}
export const ShoppingCartItemsDecrement = (item) => (dispatch) => {
    dispatch(setShoppingCartItemsDecrementCount(item))
}
export const ShoppingCartItemsDeleter = (index) => (dispatch) => {
    dispatch(setShoppingCartItemsDeleter(index))
}
export const ClearShoppingCartItems = () => (dispatch) => {
    dispatch(setShoppingCartItems())
}

export default PizzaReducer;