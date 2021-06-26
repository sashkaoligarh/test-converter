import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import Component from './Main'


const mapStateToProps = (state) => ({ 
  fetchLoading: state.currencies.fetchLoading
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
