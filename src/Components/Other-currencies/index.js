import { connect } from 'react-redux'
import Component from './OtherCurrencies'


const mapStateToProps = (state) => ({ 
  fetchLoading: state.currencies.fetchLoading,
  allCurrencies: state.currencies.allCurrencies,
  ratesResult: state?.currencies?.rates,
  base: state?.currencies?.base,
  convertLoading: state.currencies.convertLoading
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
