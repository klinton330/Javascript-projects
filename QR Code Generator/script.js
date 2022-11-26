const frm = document.querySelector('#frm')
const output = document.querySelector('#output')
const spinner = document.querySelector('#loading')
const qrcodeElement = document.querySelector('#qrcode')
const download = document.querySelector('#bt-save')

function generateQRcode(e) {
  e.preventDefault()
  const url = document.querySelector('#url').value
  const size = document.querySelector('#size').value
  const colorDark = document.querySelector('#colorDark').value
  const colorWhite = document.querySelector('#colorWhite').value
  qrcodeElement.innerHTML = ''
  if (url == '') {
    alert('Please enter your website Link')
  } else {
    spinner.style.display = 'flex'
    setTimeout(() => {
      spinner.style.display = 'none'
      const qr = new QRCode('qrcode', {
        text: url,
        width: 470,
        height: 470,
        colorDark: colorDark,
        colorLight: colorWhite,
        correctLevel: QRCode.CorrectLevel.H,
      })
    }, 1000)
  }
}
frm.addEventListener('submit', generateQRcode)
download.addEventListener('click', () => {
  const imgSrc = qrcodeElement.querySelector('img').src
  console.log(imgSrc)
  download.href = imgSrc
  setTimeout(() => {
    download.download = 'qrcode'
  }, 50)
})
