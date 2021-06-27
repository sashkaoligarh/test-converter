import { connect } from 'react-redux'
import Component from './Converter'


const mapStateToProps = (state) => ({ 
  fetchLoading: state.currencies.fetchLoading,
  allCurrencies: state.currencies.allCurrencies,
  convertResult: state?.currencies?.convertResult?.result,
  convertLoading: state.currencies.convertLoading
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
