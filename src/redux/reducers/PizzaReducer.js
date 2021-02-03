const SET_SHOPPING_CART_ITEMS = "SET_SHOPPING_CART_ITEMS"
const SET_SHOPPING_CART_ITEMS_COUNT = "SET_SHOPPING_CART_ITEMS_COUNT"
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
                        && item.params.sizeSelected === action.payloads.params.sizeSelected
                        && item.params.paramsSelected === action.payloads.params.paramsSelected
                        && item.id === action.payloads.id
                    ) {
                        let addCount = item
                        addCount.count++
                        return item
                    } else return item

                })
            }
        default:
            return state
    }
}

export const setShoppingCartItems = (payloads) => ({ type: SET_SHOPPING_CART_ITEMS, payloads })
export const setShoppingCartItemsCount = (payloads) => ({ type: SET_SHOPPING_CART_ITEMS_COUNT, payloads })

export const ShoppingCartItems = (item) => (dispatch, getState) => {
    const state = getState().pizzaItems.shoppingCart
    const matchedItem = state.find(i =>
        i.params.paramsSelected === item.params.paramsSelected
        && i.params.sizeSelected === item.params.sizeSelected
        && i.id === item.id
    )
    const paramsSelectedMatched = state.some(i =>
        i.params.paramsSelected === item.params.paramsSelected
        && i.params.sizeSelected === item.params.sizeSelected
        && i.id === item.id)

    if (!paramsSelectedMatched) {
        dispatch(setShoppingCartItems(item))
    } else {
        dispatch(setShoppingCartItemsCount(matchedItem))
    }
}

export default PizzaReducer;