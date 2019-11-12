import Axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"


// 1. Action name/definitions

const GET_PRODUCTS = 'GET_PRODUCTS'
const PUT_PRODUCTS = 'PUT_PRODUCTS'

// 2. Initial state

const initialState = {
    Product: [],
    Cart:[]
}

// 3. reducer

export default function reducer(state = initialState, action) {
switch (action.type) {
    case GET_PRODUCTS:
        return { ...state, Product: action.payload}
    case PUT_PRODUCTS:
        return {...state, Cart: action.payload}
        default:
            return initialState
}
}

// 4. action creators 

function getProducts(){
    return dispatch => {
        Axios.get("/products").then(resp => {
            dispatch({
                type: GET_PRODUCTS,
                payload: resp.data
            })
        })
    }
}

function showProductFromCart(){
    return dispatch => {
        Axios.get("/cart").then(resp => {
            dispatch({
                type: PUT_PRODUCTS,
                payload: resp.data
            })
        })
    }
}

function putProducts(item){
    return dispatch => {
        Axios.post("/cart",{item}).then(resp => {
            dispatch(showProductFromCart(resp.data)
           
            )
        })
    }
}


// 5. custom hook

export function useProducts() {
 const dispatch = useDispatch()
 const Product = useSelector(appState => appState.cartReducer.Product)  
 const addItem = item => dispatch(putProducts(item))
 const Cart = useSelector(appState => appState.cartReducer.Cart)
 
 useEffect(() => {
       dispatch(getProducts())
       dispatch(showProductFromCart())

   }, [dispatch])



   return  {Product,addItem,Cart}
}