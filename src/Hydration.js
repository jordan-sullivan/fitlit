class Hydration{
    constructor (hydrationData, userID) {
        this.hydrationData = hydrationData.filter(data => data.userID === userID)
        this.userID = userID;
    }
    
    calculateAverageDailyOunces() {
        let sum = 0
        this.hydrationData.forEach((datum) => {
        sum += datum.numOunces 
    })
    return `${(sum /this.hydrationData.length).toFixed(1)} oz.`
    }

    returnDailyOunces(date) {
          const dailyOz = this.hydrationData.find((datum) => {
           return  datum.date === date && datum.numOunces > 0 ;
        })
        return `${dailyOz.numOunces} oz.` 
    }

    getPastWeekDailyOunces(date) {
        const startDate = this.hydrationData.findIndex(day => day.date === date);
        const weeklyRange = this.hydrationData.slice(startDate, 7)
        const weeklyIntake = weeklyRange.map(date => ({[date.date]: `${date.numOunces} oz.`})
        )
        return weeklyIntake
    }
}


export default Hydration;