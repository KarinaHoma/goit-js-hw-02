function getShippingCost(country);

switch(country){
    case `China`:
        return `Shipping to China will cost 100 credits`
    break;
    case `Chile`:
        return `Shipping to Chile will cost 250 credits`
        break;
    case `Australia`:
        return `Shipping to Australia will cost 170 credits`
        break;
    case `Jamaica`:
        return `Shipping to Jamaica will cost 120 credits`
        break;
    default:
        return `Sorry, there is no delivery to your country`;
}