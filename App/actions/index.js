import {TEST} from './types'

export const test = (data) => dispatch =>{
  dispatch({type: TEST, data })
}
