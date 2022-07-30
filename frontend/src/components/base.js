export const log = (code) => {
    console.log(code)
}

export const takeParameterFromUrl = (parameter) => {
    const urlParams = new URLSearchParams(window.location.search);
    const parameterValue = urlParams.get(parameter)
    return parameterValue
}

export const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
}

export const replaceFunction = (string, oldValue, newValue) => {
    return string.replaceAll(oldValue, newValue)
}

export const priceWithDiscount = (price, discount) => {
    return price - ((price * discount) / 100)
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