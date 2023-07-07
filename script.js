(function () {

    const form = document.querySelector("#msg-form")

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        const message = document.querySelector('#msg')
        const feedM = document.querySelector('.error')
        const messageContent = document.querySelector('.msg-cont')

        if (message.value === '') {
            feedM.classList.add('show')
            setTimeout(function () {
                feedM.classList.remove('show')
            }, 4000)
        }
        else {
            messageContent.textContent = message.value
            message.value = ''
        }
    })



})()