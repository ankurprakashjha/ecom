import { createContext,useReducer,useEffect,useContext} from "react";
import reducer from "./Reducer";


const ContextAPI= createContext();
export default function Context({children}){

    const initialState={
        loading:true,
        products:[],
        cart:[],
        searchTerm:""
    }
    const[state,dispatch]=useReducer(reducer,initialState)

    function AddToCart(product){
        dispatch({
            type:'add_to_cart',
            payload:product

        })
    }

    const updateSearch =(text) =>{
        dispatch({ type: "update_search", payload : text})
    }

    function increaseQty(id) {
    dispatch({ type: "increase_qty", payload: id });
}

function decreaseQty(id) {
    dispatch({ type: "decrease_qty", payload: id });
}

function removeItem(id) {
    dispatch({ type: "remove_item", payload: id });
}

    useEffect(()=>{
       async function fetchData(){

        dispatch({
            type:'loaddata'
        })
            const api= await fetch('https://dummyjson.com/products')
            const data= await api.json()
            console.log(data)

            dispatch({
                type:'getdata',
                extradata:{
                    products:data.products
                }
            })
        }
        fetchData();
    },[])
    return(
        <ContextAPI.Provider value={{...state,AddToCart,updateSearch,increaseQty,decreaseQty,removeItem}}>
            {children}
        </ContextAPI.Provider>
    )
}

function useGlobal(){
    return useContext(ContextAPI)
}

export {useGlobal}