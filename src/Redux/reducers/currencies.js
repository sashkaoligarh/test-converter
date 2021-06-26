import { createSlice } from '@reduxjs/toolkit'
import { Api } from '../../Helpers/Api';

const initialState = {
  allCurrencies:[],
  alltargetCurrencies:[],
  convertResult:'',
  errConvert:'',
  fetchLoading:false,
  convertLoading:false,
  errFetchCurrencies:'',
}

const currencies = createSlice({
	name: 'currencies',
	initialState,
	reducers: {
		setAllCurrencies:(state, action) => {
      state.allCurrencies = action.payload
    },
    setLoading:(state, action) => {
      state.fetchLoading = action.payload
    },
    setErr:(state, action) => {
      state.errFetchCurrencies = action.payload
    },
    setConvertLoading:(state, action) => {
      state.convertLoading = action.payload
    },
    setConvertResult:(state, action) => {
      state.convertResult = action.payload
    },
    setErrConvert:(state, action) => {
      state.errConvert = action.payload
    },
	}
})

const { actions, reducer } = currencies;
const {
  setAllCurrencies,
  setLoading,
  setErr,
  setConvertLoading,
  setConvertResult,
  setErrConvert
} = actions;
export default reducer

export const SaveAllCurrencies = (dispatch) => {
  dispatch(setLoading(true))
  Api.getAllCurrencies()
  .then(async (res) => {
    await dispatch(setAllCurrencies(res.data.symbols))
    await dispatch(setLoading(false))
  })
  .catch(async (e) => {
    await dispatch(setErr(e.response.data))
    await dispatch(setLoading(false))
  })
}

export const Convert = (data, dispatch) => {
  dispatch(setConvertLoading(true))
  Api.convert(data)
  .then(async (res) => {
    await dispatch(setConvertResult(res.data))
    await dispatch(setConvertLoading(false))
  })
  .catch(async (e) => {
    await dispatch(setErrConvert(e.response.data))
    await dispatch(setConvertLoading(false))
  })
}