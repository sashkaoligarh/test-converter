import React from 'react'
import { 
  Route,
  Switch,
} from 'react-router-dom'
import Main from '../Components/Main'
const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route component={Main} exact path='/' />
      </Switch>
    </>
  )
}

export default AppRouter