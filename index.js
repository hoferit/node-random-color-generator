import chalk from 'chalk';
import randomColor from 'randomcolor';

const randomColorValue = randomColor();
const inputHue = process.argv[2];
const inputLuminosity = process.argv[3];

if (!inputHue && inputLuminosity) {
  console.log(
    chalk.hex(randomColorValue)(`  ###############################
  ###############################
  ###############################
  #####                     #####
  #####      ${randomColorValue}        #####
  #####                     #####
  ###############################
  ###############################
  ###############################`),
  );
} else {
  const colorName = randomColor({
    luminosity: inputLuminosity,
    hue: inputHue,
  });
  console.log(
    chalk.hex(colorName)(`  ###############################
  ###############################
  ###############################
  #####                     #####
  #####      ${colorName}        #####
  #####                     #####
  ###############################
  ###############################
  ###############################`),
  );
}
