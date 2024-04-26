var oHtml = document.querySelector('html')
function resize() {
  var clientW = document.documentElement.clientWidth
  if (clientW > 750) {
    clientW = 750
  }
  oHtml.style.fontSize = (clientW / 750) * 100 + 'px'
}
resize()

window.onresize = function () {
  resize()
}
