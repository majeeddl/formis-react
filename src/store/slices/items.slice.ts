
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items : []
}


export const itemsSlice = createSlice({
    name : 'items',
    initialState,
    reducers : {
        addItem : (state:any,action:any)=>{
            // console.log(action)
            state.items.push(action.payload)
        }
    }
})

export const {addItem} = itemsSlice.actions

export default itemsSlice.reducer