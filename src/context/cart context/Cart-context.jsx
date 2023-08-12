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


export const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    addItemsToCart: () => {},
    cartCount: 0,
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartCount) => total + cartCount.quantity, 0);
        setCartCount(newCartCount)
    }, [cartItems])
    

    const addItemsToCart = (productToAdd) => {
        setCartItems(addToCart(cartItems, productToAdd))
    }
    const value = {isCartOpen, setIsCartOpen, cartItems, setCartItems, addItemsToCart, cartCount}

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}