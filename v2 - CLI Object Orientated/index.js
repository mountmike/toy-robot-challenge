#!/usr/bin/env node

import { input } from '@inquirer/prompts';
import confirm from '@inquirer/confirm';
import { Robot } from './robot.js'
import { TableTop } from './grid.js'

const robot = new Robot()
const tableTop = new TableTop()

console.log("Hi and welcome to my CLI toy robot game! \n");

const init = await confirm({ message: 'Continue?' });

if (!init) {
    process.exit()
}

tableTop.showGrid(robot)

console.log("Here is my tabletop, would you like to place a toy robot on it? \n")

const place = await confirm({ message: 'Place robot?' });

if (!place) {
    process.exit()
}

robot.place(0, 0, "NORTH")

tableTop.showGrid(robot)

console.log("The robot is now at position 0, 0 on the grid and facing north \n");

