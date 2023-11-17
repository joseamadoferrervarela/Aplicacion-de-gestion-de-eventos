import {configureStore} from "@reduxjs/toolkit";

import  dataReducer  from "../reducers/data/dataSlice.tsx";
import  editReducer  from "../reducers/edit/editSlice.tsx";
import  modalReducer  from "../reducers/modal/modalSlice.tsx";



export const store = configureStore({
   reducer:{
      data:dataReducer,
      edit:editReducer,
      modal:modalReducer
   },
})

// export type RootState= ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

  