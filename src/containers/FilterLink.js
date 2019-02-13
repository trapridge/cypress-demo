// @flow

import { connect } from 'react-redux'
import { setVisibilityFilter, VisibilityFilters } from '../actions'
import Link, { type Props } from '../components/Link'
import rootReducer from '../reducers'

type OwnProps = {
  filter: $Values<typeof VisibilityFilters>,
}

const mapStateToProps = (state: typeof rootReducer, ownProps: OwnProps) => ({
  active: ownProps.filter === state.visibilityFilter,
})

const mapDispatchToProps = (dispatch, ownProps: OwnProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
})

export default connect<
  {| ...$Exact<Props>, ...$Exact<OwnProps> |},
  {| ...$Exact<OwnProps>, ...$Exact<$PropertyType<Props, 'children'>>|},
  _,
  _,
  _,
  _
>(
  mapStateToProps,
  mapDispatchToProps
)(Link)
