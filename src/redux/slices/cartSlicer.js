import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        total: 0,
        quantityItems: 0,
    },
    reducers: {
        addCart: (state, action) => {
            const productIsAlreadyInCart = state.products.some(product => product.id === action.payload.id)
            if(productIsAlreadyInCart){
                state.products.map(product => product.id === action.payload.id ? product.quantity += 1 : product)
                state.total = state.total + action.payload.value
                state.quantityItems = state.quantityItems + 1
                return state
            }
            action.payload.quantity = 1
            return {
                products: state.products.concat(action.payload), 
                total: state.total + action.payload.value,
                quantityItems: state.quantityItems + 1
            }
        },
        removeCart: (state, action) => {
            const indexProduct = state.products.findIndex(product => product.id === action.payload.id)
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload.id),
                total: state.total - (state.products[indexProduct].value * state.products[indexProduct].quantity),
                quantityItems: state.quantityItems - state.products[indexProduct].quantity
            }
        },
        upQuantity: (state, action) => {
            state.products.map(product => product.id === action.payload.id ? product.quantity += 1: product)
            state.products.map(product => product.id === action.payload.id ? state.total = state.total + product.value : product)
            state.quantityItems = state.quantityItems + 1
            return state
        },
        downQuantity: (state, action) => {
            const indexProduct = state.products.findIndex(product => product.id === action.payload.id)

            state.products.map(product => product.id === action.payload.id ? 
                product.quantity > 1 ? state.total = state.total - product.value : product    
            : product)
            
            state.products.map(product => product.id === action.payload.id ? 
                product.quantity > 1 ? product.quantity -= 1 : product    
            : product)

            if(state.products[indexProduct].quantity > 1) state.quantityItems = state.quantityItems - 1 

            return state
        },
    }
})

export const {addCart, removeCart, upQuantity, downQuantity} = cartSlice.actions;

export default cartSlice.reducer;