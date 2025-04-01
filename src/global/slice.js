import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    userToken:'',
    user: {},
}

const slice = createSlice({
    name:'Legacy Builders',
    initialState,
    reducers: {
        setUserToken: (state,{payload})=>{
            state.userToken = payload
        },
        setUser: (state,{payload})=>{
            state.user = payload
        }
    }
})

export const {setUserToken, setUser} = slice.actions

export default slice.reducer