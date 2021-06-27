import React from 'react'
import { 
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import Converter from '../Components/Converter'
import OtherCurrencies from '../Components/Other-currencies'

const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route component={Converter} exact path='/converter' />
        <Route component={OtherCurrencies} exact path='/rates' />
        <Redirect from="*" to='/converter'/>
      </Switch>
    </>
  )
}

export default AppRouter