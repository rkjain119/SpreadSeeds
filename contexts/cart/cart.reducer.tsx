import { useReducer } from 'react'

export type ProductType = Product[]

export interface Product {
  items?: any[]
  quantity?: string
  id?: string
  name?: string
  image?: string
  description?: string
  price?: string
  category?: string
  type?: string
  botanical?: string
  size?: string
  stock?: string
}

export type InitialStateType = typeof InitialState
export const InitialState = {
  showDetails: false,
  showCheckout: false,
  showCart: false,
  items: [] as Product[],
  productDetails: {} as Product,
}

export enum Types {
  Rehydrate = 'REHYDRATE',
  ToggleCart = 'TOGGLE_CART',
  AddToCart = 'ADD_ITEM',
  RemoveItem = 'REMOVE_ITEM',
  ClearCart = 'CLEAR_CART',
  ToggleCheckout = 'TOGGLE_CHECKOUT',
  ToggleDetails = 'TOGGLE_DETAILS',
  ProductDetails = 'PRODUCT_DETAILS',
  DeleteItem = 'DELETE_ITEM',
}

type CartPayload = {
  [Types.ToggleCart]: {
    showCart: boolean
  }
  [Types.ToggleCheckout]: {
    showCheckout: boolean
  }
  [Types.ToggleDetails]: {
    showDetails: boolean
  }
  [Types.ProductDetails]: {
    product: Product
  }
  [Types.Rehydrate]: { payload: InitialStateType }
  [Types.AddToCart]: {
    items: Product[]
  }
  [Types.RemoveItem]: {
    id: string | number
  }
  [Types.DeleteItem]: {
    id: string | number
  }
  [Types.ClearCart]: undefined
}

export type CartActions = ActionMap<CartPayload>[keyof ActionMap<CartPayload>]

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export const cartReducer = (
  state: any,
  action: CartActions
  // action: CartActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Rehydrate:
      return { ...state, ...action.payload }
    case Types.ToggleCart:
      return { ...state, showCart: action.payload.showCart }
    case Types.ToggleCheckout:
      return { ...state, showCheckout: action.payload.showCheckout }

    case Types.ToggleDetails:
      return { ...state, showDetails: action.payload.showDetails }
    case Types.ProductDetails:
      return { ...state, product: action.payload.product }

    case Types.AddToCart:
      return { ...state, items: addItemToCart(state, action) }
    case Types.RemoveItem:
      return { ...state, items: removeItemFromCart(state, action) }
    case Types.DeleteItem:
      return { ...state, items: deleteItemFromCart(state, action) }

    case Types.ClearCart:
      return { ...state, items: [] }
    default:
      return state
  }
}
export type useCartReducerType = typeof useCartReducer

export const useCartReducer = (initialCart = InitialState) => {
  const [state, dispatch] = useReducer(cartReducer, initialCart)

  const addItemHandler = (item: any, quantity = 1) => {
    dispatch({ type: Types.AddToCart, payload: { ...item, quantity } })
  }

  const removeItemHandler = (item: any, quantity = 1) => {
    dispatch({ type: Types.RemoveItem, payload: { ...item, quantity } })
  }
  const deleteItemFromCartHandler = (item: any) => {
    dispatch({ type: Types.DeleteItem, payload: item })
  }

  const clearCartHandler = () => {
    dispatch({ type: Types.ClearCart })
  }
  const cartHandler = (bool: boolean) => {
    dispatch({
      type: Types.ToggleCart,
      payload: {
        showCart: bool,
      },
    })
  }
  const checkoutHandler = (bool: boolean) => {
    dispatch({
      type: Types.ToggleCheckout,
      payload: {
        showCheckout: bool,
      },
    })
  }
  const toggleProductsDetailsHandler = (bool: boolean) => {
    dispatch({
      type: Types.ToggleDetails,
      payload: {
        showDetails: bool,
      },
    })
  }
  const productDetailsHandler = (item: Product) => {
    dispatch({
      type: Types.ToggleDetails,
      payload: {
        showDetails: true,
      },
    })
    dispatch({
      type: Types.ProductDetails,
      payload: {
        product: item,
      },
    })
  }

  const hideAllHandler = () => {
    dispatch({
      type: Types.ToggleCart,
      payload: {
        showCart: false,
      },
    })
    dispatch({
      type: Types.ToggleCheckout,
      payload: {
        showCheckout: false,
      },
    })
    dispatch({
      type: Types.ToggleDetails,
      payload: {
        showDetails: false,
      },
    })
  }
  const rehydrateLocalState = (payload: any) => {
    dispatch({ type: Types.Rehydrate, payload })
  }
  const getItemsCount = state.items?.reduce(
    (acc: any, item: { quantity: any }) => acc + item.quantity,
    0
  )
  let cartTotal = state.items.reduce(
    (price: number, product: { price: number; quantity: number }) => {
      return price + product.price * product.quantity
    },
    0
  )
  const isInCartHandler = (id: any) => {
    return state.items?.some((item: { id: any }) => item.id === id)
  }
  return {
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
    getItemsCount,
    isInCartHandler,
    cartTotal,
  }
}
// cartItems, cartItemToAdd
const addItemToCart = (state, action) => {
  const existingItem = state.items.find((item) => item.id === action.payload.id)
  if (existingItem) {
    return state.items.map((item) =>
      item.id === action.payload.id
        ? { ...item, quantity: item.quantity + action.payload.quantity }
        : item
    )
  }
  return [...state.items, { ...action.payload }]
}
// const existingCartItemIndex = state.items.findIndex(
// 	(item) => item.id === action.payload.id
// )
// if (existingCartItemIndex > -1) {
// 	const newState = [...state.items]
// 	newState[existingCartItemIndex].quantity! += action.payload.quantity
// 	return newState
// }
// return [...state.items, action.payload]
// cartItems, cartItemToRemove
const removeItemFromCart = (state, action) => {
  return state.items.reduce((acc, item) => {
    if (item.id === action.payload.id) {
      const newQuantity = item.quantity - action.payload.quantity

      return newQuantity > 0
        ? [...acc, { ...item, quantity: newQuantity }]
        : [...acc]
    }
    return [...acc, item]
  }, [])
}

const deleteItemFromCart = (state, action) => {
  return state.items.reduce((acc, item) => {
    if (item.id === action.payload.id) {
      return [...acc]
    }
    return [...acc, item]
  }, [])
}
// return state.items.filter((item) => item.id !== action.payload.id)

// ShoppingCart

// type ShoppingCartPayload = {
//   [Types.Add]: undefined
// }

// export type ShoppingCartActions =
//   ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>]

// export const shoppingCartReducer = (
//   state: number,
//   action: CartActions | ShoppingCartActions
// ) => {
//   switch (action.type) {
//     case Types.Add:
//       return state + 1
//     default:
//       return state
//   }
// }
