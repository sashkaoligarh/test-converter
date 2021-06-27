import { createSlice } from '@reduxjs/toolkit'
import { Api } from '../../Helpers/Api';

const initialState = {
  allCurrencies:[],
  alltargetCurrencies:[],
  convertResult:'',
  errConvert:'',
  fetchLoading:true,
  convertLoading:false,
  errFetchCurrencies:'',
  rates:[],
  base:'',
}

const currencies = createSlice({
	name: 'currencies',
	initialState,
	reducers: {
		setAllCurrencies:(state, action) => {
      Object.keys(action.payload).forEach(e => {
        state.allCurrencies.push({value:e, label:action.payload[e], key:Math.random()})
      })
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
    setRates:(state, action) => {
      Object.keys(action.payload?.rates).forEach(e => {
        state.rates.push({value:e, label:action.payload?.rates[e], key:Math.random()})
      })
      state.base = action.payload.base
    },
    clearCurrencies:(state) => {
      state.allCurrencies = []
    },
    clearRates:(state) => {
      state.rates = []
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
  setErrConvert,
  setRates,
  clearCurrencies,
  clearRates,
} = actions;
export default reducer

export const SaveAllCurrencies = (dispatch) => {
  dispatch(clearCurrencies())
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

export const Rates = (data, dispatch) => {
  dispatch(clearRates())
  dispatch(setConvertLoading(true))
  Api.convertToAll(data)
  .then(async (res) => {
    await dispatch(setRates(res?.data))
    await dispatch(setConvertLoading(false))
  })
  .catch(async (e) => {
    await dispatch(setErrConvert(e?.response?.data))
    await dispatch(setConvertLoading(false))
  })
}