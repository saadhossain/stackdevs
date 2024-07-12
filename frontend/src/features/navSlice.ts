import { createSlice } from '@reduxjs/toolkit'

export interface NavState{
    isCollapse: boolean
}

const initialState:NavState = {
    isCollapse:false
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setIsCollapse: (state)=> {
            state.isCollapse = !state.isCollapse
        }
    }
})

export const {setIsCollapse} = navSlice.actions;
export default navSlice.reducer;