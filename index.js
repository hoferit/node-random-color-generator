import chalk from 'chalk';
// import { ColorTranslator, Harmony, Mix } from 'colortranslator';
import randomColor from 'randomcolor';

const randomColorValue = randomColor();
const inputHue = process.argv[2];
const inputBright = process.argv[3];

if (!inputHue && inputBright) {
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
    luminosity: inputBright,
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
