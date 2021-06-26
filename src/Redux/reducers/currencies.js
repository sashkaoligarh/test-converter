import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	logIn: false,
  logInErr:''

}

const currencies = createSlice({
	name: 'currencies',
	initialState,
	reducers: {
		
	}
})

const { actions, reducer } = currencies;
export const {

} = actions;
export default reducer