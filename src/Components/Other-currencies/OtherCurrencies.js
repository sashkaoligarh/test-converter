import React, {useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Rates, SaveAllCurrencies } from '../../Redux/reducers/currencies'
import { useDispatch } from 'react-redux';
import { PrimaryButton } from '../ui/button'
import { makeStyles } from '@material-ui/core/styles'
import { CircularProgressIndicator } from '../ui/progress-indicator'
import { TopLoader } from '../ui/top-progress-indicator'

const useStyles = makeStyles({
  container: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  rates: {
    display:'flex',
    flexDirection:'row',
    width:'90vw',
    height:'50vh',
    flexWrap:'wrap',
    justifyContent:'center',
    marginBottom:'20px',
  },
  rate: {
    width:'250px',
    display: 'flex',
  },
  inputContainer: {
    margin:'20px',
    display:'flex',
    flexDirection:'row',
    width:'500px',
    justifyContent:'space-between'
  },
  prefix: {
    color:'Blue',
    display: 'flex',
  },
  number: {
    color:'Green',
    display: 'flex',
  },
  select: {
    width:'340px'
  }
})

const OtherCurrencies = ({base, allCurrencies, ratesResult, convertLoading, fetchLoading}) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    SaveAllCurrencies(dispatch)
    if(localStorage.getItem('currForRates')){
      getResult()
    }// eslint-disable-next-line
  },[])

  const [currency, setCurrency] = React.useState(localStorage.getItem('currForRates'));

  const handleChange = (event) => {
    localStorage.setItem('currForRates', event.target.value)
    setCurrency(event.target.value);
  };

  const getResult = () => {
    Rates(
      {
      from:currency,
    }, dispatch)
  }

  return (
    <>
      {fetchLoading ? <TopLoader/> : 
        <div className={classes.container}>
          <div className={classes.inputContainer}>
            <TextField
              id="current-currency"
              select
              value={currency}
              onChange={handleChange}
              helperText="Please select currency"
              className={classes.select}

            >
              {allCurrencies.map((option) => (
                <MenuItem 
                  className={classes.select}
                  key={option.key}
                  value={option.value}
                >
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {convertLoading ? 
              <CircularProgressIndicator/>
            :
              <PrimaryButton 
                text={'Check'} 
                onClick={() => getResult()}
              />
            }
          </div>
          <div className={classes.rates}>
            {ratesResult.map(item => (
              <div 
                className={classes.rate} 
                key={item.key}
              >
                <div className={classes.number}>
                  1 &nbsp;
                </div>
                <div className={classes.prefix}>
                {item.value}
                &nbsp; = &nbsp;
                </div>
                <div className={classes.number}>
                  {(1/item.label).toFixed(2)} &nbsp;
                </div>
                <div className={classes.prefix}>
                {base}
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  )
}

export default OtherCurrencies