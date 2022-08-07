export const currencyFormat = (price) => {
    return price?.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const priceWithDiscount = (price, discount) => {
    return price - ((price * discount) / 100)
}