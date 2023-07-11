#!/usr/bin/env node

import { select } from '@inquirer/prompts';
import confirm from '@inquirer/confirm';
import { Robot } from './robot.js';
import { TableTop } from './grid.js';

const robot = new Robot();
const tableTop = new TableTop();

async function gameLoop() {
    const answer = await select({
        message: 'What would you like to do now?',
        choices: [
          {
            name: 'move',
            value: 'move',
            description: 'move the robot in the direction it is facing',
          },
          {
            name: 'turn left',
            value: 'left',
            description: 'rotate the robote anti-clockwise',
          },
          {
            name: 'turn right',
            value: 'right',
            description: 'rotate the robote clockwise',
          },
          {
            name: 'report',
            value: 'report',
            description: 'get a report on the robots current locations',
          },
          {
            name: 'exit',
            value: 'exit',
            description: 'exit this CLI app',
          },
          
        ],
    });

    if (answer == "move") {
        robot.move()
        tableTop.showGrid(robot)
        gameLoop()
    } else if (answer == "left") {
        robot.rotate("left")
        console.log('The robot is now facing ' + robot.facing)
        gameLoop()
    } else if (answer == "right") {
        robot.rotate("right")
        console.log('The robot is now facing ' + robot.facing)
        gameLoop()
    } else if (answer == "report") {
        robot.report()
        gameLoop()
    } else if (answer == "exit") {
        process.exit()
    }
    
};

console.log(
    "Hi and welcome to my CLI toy robot game! \n" +
    "Would you like to place a toy robot on the table top? \n"
);

const place = await confirm({ message: 'Place robot?' });

if (!place) {
    process.exit()
};

robot.place(0, 0, "NORTH");

tableTop.showGrid(robot);

gameLoop();