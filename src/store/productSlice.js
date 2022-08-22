import { createSlice } from "@reduxjs/toolkit";

const initData ={products:[
                    {name:"Mango", price:50},
                    {name:"Orange", price:60},
                    {name:"Apple", price:30},
                    {name:"Banana", price:25}
                     ],
                    carts:[],
                    total:0,
}

// const productReducer =(state=initData, action)=>{
//     //console.log(action.payLoad)
//             if(action.type==="ADD"){
//                     return {
//                         ...state,
//                         carts:[...state.carts, action.payLoad],
//                         total:state.total + parseInt(action.payLoad.itemPrice)

//                     }
//             } if(action.type==="DELETE"){
//                         return{
//                             ...state,
//                             carts:state.carts.filter((i,index)=>index!=action.payLoad.index),
//                             total:state.total-parseInt(action.payLoad.price)
//                         }

//             } 

//             return state;
// }

// export default productReducer;
  
const productSlice= createSlice({
    name:"product",
    initialState:initData,
    reducers:{
      purchase:(state,action)=>{
        state.carts=[...state.carts, action.payload];
        state.total=state.total + parseInt(action.payload.itemPrice);
      },
      deleteItem:(state, action)=>{
        state.carts= state.carts.filter((i,index)=>index!==action.payload.index);
        state.total=state.total-parseInt(action.payload.price)
      }
    },

  })

  export const {purchase, deleteItem}= productSlice.actions;
  export default productSlice.reducer;