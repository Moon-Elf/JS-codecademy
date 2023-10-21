const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 6;
        break;
      case 'wednesday':
        return 12;
        break;
      case 'thursday':
        return 5;
        break;
      case 'friday':
        return 6;
        break;
      case 'saturday':
        return 7;
        break;
      case 'sunday':
        return 9;
        break;
    }
  }
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  
  const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
  }
  
  const calculateSleepDept = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount if sleep.');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got '+(actualSleepHours-idealSleepHours)+' hour(s) more sleep than needed.')
    } else {
      console.log('You should '+ (idealSleepHours - actualSleepHours) + ' hour(s) of some sleep.')
    }
  }
  
  calculateSleepDept();