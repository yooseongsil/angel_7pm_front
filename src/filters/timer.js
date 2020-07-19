// filter/timer.js
// import moment from 'moment'

function timer (time) {
  let hour = ''
  let minute = ''
  let second = ''
  let day = ''

  time = Date.parse(time) + 1 * 24 * 60 * 60 * 1000 - new Date()
  time--

  day = Math.floor((time / (1000 * 60 * 60 * 60)))
  hour = Math.floor((time / (1000 * 60 * 60)) % 24)
  minute = Math.floor((time / 1000 / 60) % 60)
  second = Math.floor((time / 1000) % 60)

  if (time <= 0) return '미션이 만료되었습니다.'

  if (day !== 0) {
    return `${day}일 ${hour}시간 ${minute}분 ${second}초`
  } else {
    return `${hour}시간 ${minute}분 ${second}초`
  }
}

export default timer
