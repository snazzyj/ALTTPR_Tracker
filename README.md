# ALTTPR Tracker

## How to Install
1. Clone Repository
2. npm install
3. npm run

## About this tracker
This is a tracker for A Link to the Past Randomizer. It was built for both new players and veterans alike.  

## Features
1. Light + Dark World locations available on an enlarged map -> Locations will turn green when they are fully accessible based on logic and what the player has collected in their inventory.

2. Players can set each dungeon's reward (Crystal or 1 of 3 Pendants). Users can click on the dungeon picture to get the overview map of that dungeon.  Clicking on the boss icon will mark it complete and increase the players crystal count.  Players can also the medallion requirements for Misery Mire and Turtle Rock

## Reading the Map
There are 5 different color statuses for locations and dungeons


| Color | Status | What it means |
| --- | --- | --- |
| `Red` | Locked | Nothing can be done |
| `Blue` | Visible | Cannot be collected |
| `Orange` | Accessible | Cannot collect all items or beat dungeon |
| `Yellow` | Beatable | Can collect all items and beat dungeon but may be out of logic |
| `Green` | Unlocked  | Fully unlocked, meets all Logic requirements |

## Built With
1. React
2. Javascript
3. CSS