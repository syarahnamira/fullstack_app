async function calculateDiscount ( price) {
    return price * 0.5
}

async function calculatePoint ( priceAfterDiscount){
    return priceAfterDiscount * 0.02
}

module.exports = {
    calculateDiscount,
    calculatePoint
}

