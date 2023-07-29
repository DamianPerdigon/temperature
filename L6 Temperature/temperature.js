// Ask the user for the metric of the temperature they want to convert
const metric = prompt("In which metric is the temperature you are converting? \nC- Celcius\nF- Fahrenheit\nK- Kelvin"); //\n to make a new line

// The user can convert the temperature they want
const temperature = parseFloat(prompt("Enter the temperature you want to convert:")); //parseFloat to provide decimals

// Ask the user for the metric they want to convert to
const convertedMetric = prompt("To which metric would you like to convert the temperature? \n C- Celcius\nF- Fahrenheit\nK- Kelvin");

let convertedTemperature;

// Convert the temperature using if statements and switch statements
if (metric === 'C') {
  switch (convertedMetric) {
    case 'C':
      convertedTemperature = temperature;
      break;
    case 'F':
      convertedTemperature = (temperature * 9 / 5) + 32;
      break;
    case 'K':
      convertedTemperature = temperature + 273.15;
      break;
    default:
      console.log("Invalid metric for conversion.");
      break;
  }
} else if (metric === 'F') {
  switch (convertedMetric) {
    case 'C':
      convertedTemperature = (temperature - 32) * 5 / 9;
      break;
    case 'F':
      convertedTemperature = temperature;
      break;
    case 'K':
      convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
      break;
    default:
      console.log("Invalid metric for conversion.");
      break;
  }
} else if (metric === 'K') {
  switch (convertedMetric) {
    case 'C':
      convertedTemperature = temperature - 273.15;
      break;
    case 'F':
      convertedTemperature = (temperature - 273.15) * 9 / 5 + 32;
      break;
    case 'K':
      convertedTemperature = temperature;
      break;
    default:
      console.log("Please, enter a valid metric for conversion.");
      break;
  }
} else {
  console.log("Please, enter a valid metric for conversion.");
}

// Print the results
console.log(temperature + " " + metric + " is " + convertedTemperature + " " + convertedMetric);
