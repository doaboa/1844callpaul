const letters = document.querySelectorAll('.letter')
const colors = ['red', 'yellow', 'blue']

Array.prototype.forEach.call(letters, letter => {
  letter.addEventListener('click', function() {
    color = colors[Math.floor(Math.random() * 3)]
    if (letter.innerText.indexOf('A') !== -1) {
      letter.querySelector('.digit1a').style.textShadow = '0 1px 0 blue, 0 2px 0 blue, 0 3px 0 blue, 0 4px 0 blue, 0 5px 0 blue, 0 6px 0 blue, 0 7px 0 blue, 0 8px 0 blue, 0 9px 0 blue, 0 10px 0 blue, 0 11px 0 blue, 0 12px 0 blue, 0 13px 0 blue, 0 14px 0 blue, 0 15px 0 blue, 0 16px 0 blue, 0 17px 0 blue, 0 18px 0 blue, 0 19px 0 blue, 0 20px 0 blue, 0 21px 0 blue, 0 22px 0 blue, 0 23px 0 blue, 0 24px 0 blue, 0 25px 0 blue, 0 26px 0 blue, 0 27px 0 blue, 0 28px 0 blue, 0 29px 0 blue, 0 30px 0 blue, 0 31px 0 blue, 0 32px 0 blue, 0 33px 0 blue, 0 34px 0 blue, 0 35px 0 blue, 0 36px 0 blue, 0 37px 0 blue, 0 38px 0 blue, 0 39px 0 blue, 0 40px 0 blue, 0 41px 0 blue, 0 42px 0 blue, 0 43px 0 blue, 0 44px 0 blue, 0 45px 0 blue, 0 46px 0 blue, 0 47px 0 blue, 0 48px 0 blue, 0 49px 0 blue, 0 50px 0 blue, 0 51px 0 blue, 0 52px 0 blue, 0 53px 0 blue, 0 54px 0 blue, 0 55px 0 black, 0 56px 0 black, 0 57px 0 black, 0 58px 0 black, 0 59px 0 black'
    } else {
      letter.querySelector('.digit2').style.color = color
      letter.querySelector('.digit3').style.color = color
    }
  })
})

document.querySelector('.letter:last-child').addEventListener('click', function() {
  window.location.href='tel:18442557285'
})
