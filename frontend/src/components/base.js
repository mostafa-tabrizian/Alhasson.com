export const log = (code) => {
    console.log(code)
}

export const takeParameterFromUrl = (parameter) => {
    const urlParams = new URLSearchParams(window.location.search);
    const parameterValue = urlParams.get(parameter)
    return parameterValue
}

export const replaceFunction = (string, oldValue, newValue) => {
    return string.replaceAll(oldValue, newValue)
}

export const fadeIn = (element) => {
    element.target.classList.remove('fadeOut')
    element.target.classList.add('fadeIn')
}

export const fadeOut = (element) => {
    element.target.classList.add('fadeOut')
    element.target.classList.remove('fadeIn')
}

export const isItDesktop = () => {
    return window.navigator.userAgent.includes('Windows')
}

export const isItMobile = () => {
    return window.navigator.userAgent.includes('Mobile') && !(window.navigator.userAgent.includes('iPad'))
}

export const isItIPad = () => {
    return window.navigator.userAgent.includes('Mobile' ) && window.navigator.userAgent.includes('iPad')
}