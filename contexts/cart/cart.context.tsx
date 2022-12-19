import React, { createContext, useContext } from 'react'
import { useLocalforage } from '../../hooks/useLocalforage'
import { useCartReducer } from './cart.reducer'

const CartStateContext = createContext({} as any)
// const CartStateContext = createContext({} as ReturnType<typeof useCartReducer>)
function CartProvider({ children }: { children: React.ReactNode }) {
  const {
    state,
    rehydrateLocalState,
    addItemHandler,
    removeItemHandler,
    deleteItemFromCartHandler,
    clearCartHandler,
    cartHandler,
    checkoutHandler,
    toggleProductsDetailsHandler,
    productDetailsHandler,
    hideAllHandler,
    isInCartHandler,
    getItemsCount,
    cartTotal,
  } = useCartReducer()
  const { rehydrated, error } = useLocalforage(state, rehydrateLocalState)
  // console.log(state && state.items, 'STATE' + getItemsCount)
  // const [state, dispatch] = useReducer(useCartReducer, InitialState)
  // const providerValue = useMemo(() => ({ state, dispatch }), [state, dispatch])
  console.log(rehydrated, 'rehydrated' + error)
  const providerValue = {
    state,
    addItemHandler,
    // rehydrateLocalState,
    removeItemHandler,
    deleteItemFromCartHandler,
    clearCartHandler,
    cartHandler,
    checkoutHandler,
    toggleProductsDetailsHandler,
    productDetailsHandler,
    hideAllHandler,
    isInCartHandler,
    getItemsCount,
    cartTotal,
  }
  return (
    <CartStateContext.Provider value={providerValue}>
      {children}
    </CartStateContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartStateContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a <CartProvider/>')
  }
  return context
}

export { CartProvider, useCart }
