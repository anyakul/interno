
const app = new Vue({
  el: '.intro-button-reversed',
  data: {
    message: 'Перевернуть!'
  },
  methods: {
    reverse: function () {
      this.message = this.message.split('').reverse().join('');
    }
  },
})

const formPassword = new Vue({
  el: '.intro-container',
  data: {
    showPass: false,
    password: '123456'
  },
  methods: {
    showPass: function (e) {
      e.preventDefault()
    }
  }
})
