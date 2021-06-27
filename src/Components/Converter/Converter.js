import React, { useEffect, useState } from 'react'
import Select from '@material-ui/core/Select';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import { SaveAllCurrencies, Convert } from '../../Redux/reducers/currencies'
import { useDispatch } from 'react-redux';
import { TopLoader } from '../ui/top-progress-indicator'
import Input from '@material-ui/core/Input';
import { PrimaryButton } from '../ui/button'
import { CustomNumberInput } from '../ui/NumberInput'
import { makeStyles } from '@material-ui/core/styles'
import './style.css'
import { CircularProgressIndicator } from '../ui/progress-indicator'

const useStyles = makeStyles({
  container: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  currencies:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  amountInput: {
    display:'flex',
    flexDirection:'row',
    marginBottom:'20px',
    justifyContent:'center',
    alignItems:'center'
  },
  prefix: {
    width:'100px',
    display:'flex',
    justifyContent:'center',
    color:'Blue',
  },
})

const Converter = ({fetchLoading, allCurrencies, convertResult, convertLoading}) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const [currency1, setCurrency1] = useState(localStorage.getItem('currentCurr'))
  const [currency2, setCurrency2] = useState(localStorage.getItem('targetCurr'))
  const [changeCurrency, setChangeCurrency] = useState(false)
  const [current, setCurrent] = useState(localStorage.getItem('amount'))

  useEffect(() => {
    SaveAllCurrencies(dispatch)
    if(
      localStorage.getItem('amount')
      &&
      localStorage.getItem('currentCurr')
      &&
      localStorage.getItem('targetCurr')
      ){
        getResult()
      }// eslint-disable-next-line
  },[])

  const setAmount = (e) => {
    localStorage.setItem('amount', e.target.value)
    setCurrent(e.target.value)
  }

  const handleChange1 = (event) => {
    localStorage.setItem('currentCurr', event.target.value)
    setCurrency1(event.target.value);
  }

  const handleChange2 = (event) => {
    localStorage.setItem('targetCurr', event.target.value)
    setCurrency2(event.target.value);
  }
  
  const getResult = () => {
    Convert(
      {
      from:changeCurrency ? currency2 : currency1,
      to:changeCurrency ? currency1 : currency2,
      amount:current,
    }, dispatch)
  }

  return (
    <>
      {fetchLoading ? <TopLoader/> : 
        <>
          <div className={classes.container}>
            <div className={classes.currencies}>
              <Select
                native
                value={changeCurrency ? currency2 : currency1}
                onChange={changeCurrency ? handleChange2 : handleChange1}
              >
                {allCurrencies.map(item => (
                  <option key={item.key} value={item.value}>{item.label}</option>
                ))}
              </Select>
              <div className='double-arrows' onClick={() => setChangeCurrency(!changeCurrency)}>
                <CompareArrowsIcon/>
              </div>
              <Select
                native
                value={changeCurrency ? currency1 : currency2}
                onChange={changeCurrency ? handleChange1 : handleChange2}
              >
                {allCurrencies.map(item => (
                  <option key={item.key} value={item.value}>{item.label}</option>
                ))}
              </Select>
            </div>
            <div className={classes.amountInput}>
              <div className={classes.prefix}>
                {changeCurrency ? currency2 : currency1}
              </div>
              <Input
                label="Current"
                value={current}
                onChange={(e) => setAmount(e)}
                name="numberformat"
                id="current-currency"
                InputProps={{
                  inputComponent: CustomNumberInput,
                }}
                pref={currency1}
              />
              <div style={{marginLeft:'28px', marginRight:'28px'}}>
              </div>
              <Input
                label="Target"
                value={convertResult?.toFixed(2)}
                name="numberformat1"
                id="target-currency"
                InputProps={{
                  inputComponent: CustomNumberInput,
                }}
                pref={currency2}
              />
              <div className={classes.prefix}>
                {changeCurrency ? currency1 : currency2}
              </div>
            </div>
            {convertLoading ? 
              <CircularProgressIndicator/>
            :
              <PrimaryButton text={'Convert'} onClick={() => getResult()}/>
            }
          </div>
        </>
      }
    </>
  )
}

export default Converter