function generatePassword() {
    const length = parseInt(document.getElementById('length').value)
    const useDigits = document.getElementById('useDigits').checked
    const useSymbols = document.getElementById('useSymbols').checked

    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const digits = '0123456789'
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'

    let chars = letters
    if (useDigits) chars += digits
    if (useSymbols) chars += symbols

    let password = ''
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    document.getElementById('password').value = password
    }