export default function PlayerAmount(startValue, minValue, maxValue) {
  return $(`
  <input type="number", id="playerAmount" min="${minValue}" max="${maxValue}" value="${startValue}">
  `)
}