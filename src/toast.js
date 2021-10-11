const option = {
    text: 'this is toast'
}

class Toast {
    app = document.getElementById('app')
    toast = document.createElement('div')
    toast_close = document.createElement('i')
    constructor(duration,gravity) {
        this.duration = duration
        this.gravity = gravity
    }
    init() {
        this.setup()
        this.animationEnd(this.duration)
    }
    setup() {
        this.toast.classList.add('toast')
        if (this.gravity === 'top') {
            this.toast.classList.add('toast--top')
        }
        if (this.gravity === 'bottom') {
            this.toast.classList.add('toast--bottom')
        }

        const container = document.createElement('div')
        container.classList.add('toast--container')

        const toast_text = document.createElement('div')
        toast_text.classList.add('text')
        toast_text.innerText = 'this is toast'

        this.toast_close.classList.add('fa')
        this.toast_close.classList.add('fa-times')
        this.toast_close.classList.add('toast-close-button')

        container.appendChild(toast_text)
        container.appendChild(this.toast_close)
        this.toast.appendChild(container)

        this.app.appendChild(this.toast)
    }
    showToast() {
        console.log(1)
        console.log(this.toast)
        this.toast.classList.remove("toast-move-up-out")
        this.toast.classList.add("toast-move-up-in")
    }
    removeToast() {
        this.toast.classList.remove("toast-move-up-in")
        this.toast.classList.add("toast-move-up-out")
    }
    animationEnd(duration) {
        this.toast_close.addEventListener('click', this.removeToast.bind(this))
        this.toast.addEventListener('animationend', (e) => {
            if (e.animationName === 'antMoveUpIn') {
                setTimeout(() => {
                    this.removeToast()
                }, duration)
            } else {
                this.toast.remove()
            }
        })
    }
}

export default Toast