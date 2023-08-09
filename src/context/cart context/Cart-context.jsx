import { createContext, useState } from "react";

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
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    

    const addItemsToCart = (productToAdd) => {
        setCartItems(addToCart(cartItems, productToAdd))
    }
    const value = {isCartOpen, setIsCartOpen, cartItems, setCartItems, addItemsToCart}

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}