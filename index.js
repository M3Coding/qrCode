/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import {input} from '@inquirer/prompts';
const answer = await input({message: 'Enter your Website'}); //This block of code creates the prompt for the user's input

import * as qr from 'qr-image'; //imports the qr module.
import fs from 'fs';//imports the file system module
 
var qr_svg = qr.image(answer, { type: 'svg' }); //create a readable stream containing the qr code for the user's input. Use the image method to create the image. 
qr_svg.pipe(fs.createWriteStream('i_love_qr.svg')); //pipe the generated svg stream to writable file stream to save it. 
 
/* var svg_string = qr.imageSync('I love QR!', { type: 'svg' });// needed if embedding it in a HTML or sending it over network.  */

fs.writeFile('qr-code.txt', answer, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
} );//takes the users input and create a file called qr-code.txt with that input