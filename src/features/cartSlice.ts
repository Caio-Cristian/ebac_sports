import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

interface CartState {
  items: Produto[]
  favorites: Produto[]
}

const initialState: CartState = {
  items: [],
  favorites: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Produto>) {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (!itemExists) {
        state.items.push(action.payload)
      }
    },
    toggleFavorite(state, action: PayloadAction<Produto>) {
      const favoriteExists = state.favorites.find(
        (item) => item.id === action.payload.id
      )
      if (favoriteExists) {
        state.favorites = state.favorites.filter(
          (item) => item.id !== action.payload.id
        )
      } else {
        state.favorites.push(action.payload)
      }
    }
  }
})

export const { addToCart, toggleFavorite } = cartSlice.actions
export default cartSlice.reducer
