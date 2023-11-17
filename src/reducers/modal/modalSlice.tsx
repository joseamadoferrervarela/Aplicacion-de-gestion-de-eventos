import { createSlice } from "@reduxjs/toolkit";

// export interface Eventos{
//     nombre:string;
//     hora:string;
//     ubicacion:string;
//     descripcion:string;
// }

// const inicial: Eventos[]= [{
//     nombre:'',
//     hora:'',
//     ubicacion:'',
//     descripcion:'',
//   }]


const initialState={
    modal1:false,
    modal2:false,
    }  


const modalSlice=createSlice({
     name:'modal',
     initialState:initialState,
     reducers:{
        
     onModal1: (state, action) => {
        console.log(action.payload)
        state=action.payload
      return state 
     
     },
     onModal2: (state, action) => {
        console.log(action.payload)
        state=action.payload
        return state     
        
     }
             
    
     }
     }
     )
    
    export default modalSlice.reducer
    export const {onModal1, onModal2}= modalSlice.actions
    