import { act } from "react";

function Reducer(state, action) {
    switch (action.type) {
        case 'loaddata':
            return {
                ...state,
                loading:true
            };

        case 'getdata':
            return {
                ...state,
                loading: false,
                products: action.extradata.products
            };

        case "setCategory":
            return {
                ...state,
                selectedCategory: action.category
            };

        case 'add_to_cart':
            const exists = state.cart.find(item=>item.id===action.payload.id);
            if(exists){
                return{
                    ...state,
                    cart:state.cart.map(item =>
                         item.id === action.payload.id ? {...item, qty:item.qty+1}:item
                    )
                }
                
            }return{
                ...state,
                cart:[...state.cart,{...action.payload, qty:1}]
            }

        case 'increase_qty':
            return{
                 ...state,
                    cart:state.cart.map(item =>
                         item.id === action.payload ? {...item, qty:item.qty+1}:item
                    )
            }

        case 'decrease_qty':
            return{
                 ...state,
                    cart:state.cart.map(item =>
                         item.id === action.payload && item.qty >1 ? {...item, qty: item.qty-1}:item
                    )
            }

        case 'remove_item':
            return{
                ...state,
                cart:state.cart.filter(item => item.id !== action.payload)
            }

        case 'update_search':
            return{
                ...state,
                searchTerm:action.payload
            }

            default:
                return state;
        
        }
}

export default Reducer