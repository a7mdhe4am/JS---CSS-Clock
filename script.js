const secondsHand = document.querySelector('.seconds-hand')
const minsHand = document.querySelector('.mins-hand')
const hoursHand = document.querySelector('.hours-hand')

function setDate() {
  const now = new Date()
  //seconds-hand//
  const seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 90
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`
  //mins-hand//
  const mins = now.getMinutes()
  const minsDegrees = ((mins / 60) * 360) + 90
  minsHand.style.transform = `rotate(${minsDegrees}deg)`
  //hour-hand//
  const hours = now.getHours()
  const hoursDegrees = ((hours / 12) * 360) + 90
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000)
