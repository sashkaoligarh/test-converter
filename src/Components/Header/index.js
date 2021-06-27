import React from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width:'650px',
    justifyContent:'center',
    alignItems:'center',
    display:'flex'
  },
  container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    margin:'50px'
  }
})

const Header = () => {
  const history = useHistory()
  const classes = useStyles()

  const CheckState = () => {
    if(history.location.pathname === '/converter'){
      return 0
    }
    if(history.location.pathname === '/rates'){
      return 1
    }
  }

  const [value, setValue] = React.useState(CheckState)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <div className={classes.container}>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Converter" onClick={() => history.push('/converter')}/>
          <Tab label="Rates" onClick={() => history.push('/rates')}/>
        </Tabs>
      </Paper>
    </div>
  )
}

export default Header