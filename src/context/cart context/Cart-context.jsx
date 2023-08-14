import { createContext, useEffect, useState } from "react";

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

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    // count
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartCount) => total + cartCount.quantity, 0);
        setCartCount(newCartCount)
    }, [cartItems])

    // total
    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
    }, [cartItems])
    

    const addItemsToCart = (productToAdd) => {
        setCartItems(addToCart(cartItems, productToAdd))
    }
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }
    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear))
    }
    const value = {isCartOpen, setIsCartOpen, cartItems, setCartItems, addItemsToCart, cartCount, removeItemFromCart, clearItemFromCart, cartTotal}

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}