
import { createSlice } from '@reduxjs/toolkit'
import { v4 } from "uuid"

const initialState = {
    items : []
}


export const itemsSlice = createSlice({
    name : 'items',
    initialState,
    reducers : {
        addItem : (state:any,action:any)=>{
            console.log(action)
            const item = action.payload
            item.id = v4()
            state.items.push(item)
        }
    }
})

export const {addItem} = itemsSlice.actions

export default itemsSlice.reducer