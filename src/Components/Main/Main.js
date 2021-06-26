import React, { useEffect } from 'react'
import { SaveAllCurrencies } from '../../Redux/reducers/currencies'
import { useDispatch } from 'react-redux';
import { TopLoader } from '../ui/top-progress-indicator'
import Button from '@material-ui/core/Button';

const Main = ({fetchLoading}) => {

  const dispatch = useDispatch()
  useEffect(() => {
    SaveAllCurrencies(dispatch)
  },[])

  return (
    <>
      {fetchLoading ? <TopLoader/> : 
      <div>
        test
      </div>
      }
    </>
  )
}

export default Main