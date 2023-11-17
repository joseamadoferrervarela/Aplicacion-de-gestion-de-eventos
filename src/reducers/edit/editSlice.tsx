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
    id:0,
    nombre:'',
    hora:'',
    ubicacion:'',
    descripcion:'',
    }  
    const editSlice=createSlice({
    name:'edit',
    initialState:initialState,
    reducers:{
    
    llenarCampos: (state, action) => {
        console.log(action.payload)
        console.log(state)
    state = action.payload
      return state
    }


  }

}

)

export default editSlice.reducer
export const {llenarCampos}= editSlice.actions


