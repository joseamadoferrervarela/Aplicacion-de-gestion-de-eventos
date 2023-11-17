import { createSlice } from "@reduxjs/toolkit";

// export interface Evento{
//     id:number;
//     nombre:string;
//     hora:string;
//     ubicacion:string;
//     descripcion:string;
// }
// const initialState: Evento[] =[
//     {id:1, nombre:'mañana1', hora:'09:10:12', ubicacion:'tepotzotlan', descripcion:'mi prueba'},
//     {id:2, nombre:'mañana2', hora:'09:10:12', ubicacion:'tepotzotlan', descripcion:'mi prueba'},
//     {id:3, nombre:'mañana3', hora:'09:10:12', ubicacion:'tepotzotlan', descripcion:'mi prueba'}
// ]


const initialState=[
        {id:1, nombre:'mañana1', hora:'09:10:12', ubicacion:'tepotzotlan', descripcion:'mi prueba'},
        {id:2, nombre:'mañana2', hora:'09:10:12', ubicacion:'tepotzotlan', descripcion:'mi prueba'},
        {id:3, nombre:'mañana3', hora:'09:10:12', ubicacion:'tepotzotlan', descripcion:'mi prueba'}
    ]

const dataSlice=createSlice({
    name:'data',
    initialState:initialState,
    reducers:{
        deleteData: (state, action) => {
            
        const id = action.payload
            const data = state.filter(data => data.id !== id)
            const data_ = data.map((data, ind) => {
            return { ...data, id: ind + 1 };
            });
            return data_

        },

        createData:(state, action)=>{
            const hol=action.payload
            console.log(hol)
            return [...state, hol]
        },

        actualizarData:(state, action) => {
            console.log(action.payload)
            const nuevadata:any = state.map(data => {
              if (data.id === action.payload.id) {
                return {
                  ...data,
                  nombre: action.payload.nombre,
                  hora: action.payload.hora,
                  ubicacion: action.payload.ubicacion,
                  descripcion: action.payload.descripcion
                };
              }
            
              return data;
            });
            console.log(nuevadata)
            state=nuevadata
            
            return state
        }
        
    }
    }
    )

export const {deleteData}= dataSlice.actions
export const {createData}= dataSlice.actions
export const {actualizarData}= dataSlice.actions
export default dataSlice.reducer



        
