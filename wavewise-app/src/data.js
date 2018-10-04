import request from 'superagent/superagent.js'

const apiDomain = 'http://wavewise.herokuapp.com/api'

const data = {
  getConditions: () => {
    return request.get(`${apiDomain}/spots/index`)
      .then(res => res.body.spots)
      .then(spots => {
        return (spots)
      })
  }
}
export default data
