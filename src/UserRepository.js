class UserRepository {
  constructor(userData) {
    this.userData = userData;
  }
  getUserData(id) {
    const singleUserData = this.userData.find((datum) => {
      datum.id === id;
      return datum;
    });
    return singleUserData;
  }
  calculateAverageStepGoals() {
    const averageSteps = this.userData.reduce((avg, user) => {
      avg += user.dailyStepGoal / this.userData.length;
      return avg;
    }, 0);
    return Math.round(averageSteps);
  }
}

export default UserRepository;

// It should have methods to determine:

// The average step goal amongst all users
