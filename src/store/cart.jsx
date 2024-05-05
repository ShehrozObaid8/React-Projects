import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addCartToStore: (state,data) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes.
            // Also, no return statement is required from these functions.
            state.cart.push(data.payload)
        },
        removeCartToStore: (state,data) => {
           state.cart.splice(data.payload,1) 
        },


    },
})

// Action creators are generated for each case reducer function
export const { addCartToStore, removeCartToStore } = cartSlice.actions

export default cartSlice.reducer