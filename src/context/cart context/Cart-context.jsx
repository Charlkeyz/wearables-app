import { createContext, useReducer} from "react";

const addToCart = (cartItems, productToAdd) => {
    // check or find if item exist in the cart
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    
    // if it exist, increment by 1 else return cartItem
    if(existingCartItem) {
       return cartItems.map((cartItem)=> cartItem.id === productToAdd.id ? 
       {...cartItem, quantity: cartItem.quantity + 1}
       : cartItem)
    }


    return [...cartItems, {...productToAdd, quantity:1}]
}
const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find((cartItem)=> cartItem.id === cartItemToRemove.id);

    // check if the quantity is equal to 1, if it is, remove that item from the cart
    if(existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
    // return back cart items with matching cart item with reduced quantity 
    return cartItems.map((cartItem)=> cartItem.id === cartItemToRemove.id ?
    {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem)
}
const clearCartItem = (cartItems, cartItemToClear) => {
     return cartItems.filter((cartItem)=> cartItem.id !== cartItemToClear.id);
}


export const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    addItemsToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
})
const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}
const cartReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            }    
        default:
            throw new Error(`unhandled type in ${type} in cartReducer`)
    }
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
}

export const CartProvider = ({children}) => {
    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0);
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const {isCartOpen, cartItems, cartCount, cartTotal} = state;

    // // count
    // useEffect(() => {
    //     const newCartCount = cartItems.reduce((total, cartCount) => total + cartCount.quantity, 0);
    //     setCartCount(newCartCount)
    // }, [cartItems])

    // // total
    // useEffect(() => {
    //     const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    //     setCartTotal(newCartTotal)
    // }, [cartItems])

    const updateCartItemsReducers = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartCount) => total + cartCount.quantity, 0);
    
    
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)

        dispatch({type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: {cartItems: newCartItems, cartCount: newCartCount, cartTotal: newCartTotal}})

    }
    

    const addItemsToCart = (productToAdd) => {
        const newCartItems = addToCart(cartItems, productToAdd)
        updateCartItemsReducers(newCartItems);
    }
    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove)
        updateCartItemsReducers(newCartItems);

    }
    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear)
        updateCartItemsReducers(newCartItems);

    }
    const setIsCartOpen = (bool) => {
        dispatch({type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool})
    }
    const value = {isCartOpen, setIsCartOpen, cartItems, addItemsToCart, cartCount, removeItemFromCart, clearItemFromCart, cartTotal}

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}