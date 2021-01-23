
const readData = () => {
    const dailyArr = require('../public/data/latest.json').body
    const pop = require('../public/data/population.json').population

    return {
        dailyArr,
        pop
    }
}

export { readData };