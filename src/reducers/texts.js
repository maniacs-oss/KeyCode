import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'

const initialState = fromJS({
  global: [],
  languages: {},
})

export default handleActions(
  {
    LOAD_TEXTS_SUCCESS: (state, { payload: { query, data } }) =>
      query.language ? state.setIn(['languages', query.language], data) : state.set('global', data),
  },
  initialState,
)
