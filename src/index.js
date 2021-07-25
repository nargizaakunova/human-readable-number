module.exports = function toReadable (number) {
  
  // * = one, two, three, four, five, six, seven, eight, nine
  // ** = ten, eleven, twelve, thirteen, (four^teen), fifteen, (six^teen), (seven^teen), (~eight^een~), (nine^teen)
  // ** = twenty, thirty, forty, fifty, (six^ty), (seven^ty), (~eight^y~), (nine^ty)
  // *** = *hundred* ()

  if (number < 10) {
    switch (number) {
      case 0: return 'zero';
      case 1: return 'one';
      case 2: return 'two';
      case 3: return 'three';
      case 4: return 'four';
      case 5: return 'five';
      case 6: return 'six';
      case 7: return 'seven';
      case 8: return 'eight';
      case 9: return 'nine';
    }
  }

  if (number < 20) {
    switch (number) {
      case 10: return 'ten';
      case 11: return 'eleven';
      case 12: return 'twelve';
      case 13: return 'thirteen';
      case 15: return 'fifteen';
      case 18: return 'eighteen';
      default: return toReadable(number - 10) + 'teen'
    }
  }

  if (number < 100) {
    // 20
    const firstDigit = parseInt(number.toString().substr(0, 1)); // 2
    const secondDigit = parseInt(number.toString().substr(1, 1)); // 0
    let firstPart = '';
    switch (firstDigit) {
      case 2:
        firstPart = 'twenty';
        break;
      case 3:
        firstPart = 'thirty'
        break;
      case 4:
        firstPart = 'forty'
        break;
      case 5:
        firstPart = 'fifty';
        break;
      case 8:
        firstPart = 'eighty';
        break;
      default: firstPart = toReadable(firstDigit) + 'ty';
    }

    if (secondDigit === 0) {
      return firstPart;
    }
    return firstPart + " " + toReadable(secondDigit);
  }

  if (number < 1000) {
    // 876
    const firstDigit = parseInt(number.toString().substr(0, 1)); //8
    const remainingDigits = parseInt(number.toString().substr(1, 2)); //76

    //300
    if (remainingDigits === 0) {
      return toReadable(firstDigit) + " hundred";
    }

    return toReadable(firstDigit) + " hundred " + toReadable(remainingDigits);
  }
}
