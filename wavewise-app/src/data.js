import request from 'superagent/superagent.js'

const apiDomain = 'http://wavewise.herokuapp.com/api'

const data = {
  getConditions: () => {
    return request.get(`${apiDomain}/spots/index`)
      .then(res => res.body.spots)
      .then(spots => {
        return (spots)
      })
  },
  findSpotConditionValue (spot) {
    let conditionValue = 0
    const badPeriod = spot.swell_period_s < 5 || spot.swell_period_s > 8
    const optimalPeriod = spot.swell_period_s > 5 && spot.swell_period_s < 9
    const longPeriod = spot.swell_period_s > 8
    const bigSwell = spot.swell_height_ft > 4
    const funSwell = spot.swell_height_ft > 2 && spot.swell_height_ft < 4
    const goodWind = spot.wind_speed_mph < 15 && (spot.wind_direction === 'W' || spot.wind_direction === 'NNW' || spot.wind_direction === 'NW')
    if ((spot.wind_direction === 'E' && spot.wind_speed_mph > 5) ||
        (spot.wind_direction === 'S' && spot.wind_speed_mph > 5) ||
        (spot.wind_direction === 'SE' && spot.wind_speed_mph > 5) ||
        (spot.wind_direction === 'ESE' && spot.wind_speed_mph > 5) ||
        (spot.wind_direction === 'SSE' && spot.wind_speed_mph > 5) ||
        (spot.wind_direction === 'ENE' && spot.wind_speed_mph > 5)) {
      conditionValue -= 1
    }
    if (spot.swell_height_ft < 1.5 && badPeriod) {
      conditionValue -= 1
    }
    if (goodWind) {
      conditionValue += 1
    }
    if ((spot.spot_code === 'SC' || spot.spot_code === 'WB_NE') && spot.swell_direction === 'S') {
      conditionValue += 1
    }
    if ((spot.spot_code === 'WB_SE' || spot.spot_code === 'CB' || spot.spot_code === 'WB_NE') && spot.swell_direction === 'NE' && spot.swell_height_ft > 2 && optimalPeriod) {
      conditionValue += 1
    }
    if (bigSwell && longPeriod && (spot.swell_direction === 'S' || spot.swell_direction === 'SSE') && spot.spot_code === 'SC') {
      conditionValue += 5
    }
    if (optimalPeriod && funSwell && goodWind) {
      conditionValue += 3
    }
    return { conditionValue, spot }
  }
}
export default data
