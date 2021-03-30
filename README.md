# pollev-hack

## Project Description
This program is intended to open up an online multiple-choice poll, namely `https://pollev.com/<POLL_ID>`, choose the first choice, and submit a response.

### Background Information
My class is from 14:50 to 15:20 (50 minutes) every Monday, Wednesday, and Friday. The poll is posted anytime between these times. Therefore, I set my cron job to begin a Cypress run at 14:50, and I configured Cypress to keep the test running for 1 hour.

## Installation and Set-Up
### Installation
- Install Cypress
- Install Crontab
- Clone this repository
### Modify Variables
- Set your project home (PROJ_HOME) in `cron-runner.sh`
- Set the correct url in `cypress/integration/runner.js`
- Set the correct class duration in `cypress/integration/runner.js`
### Create a Cron Job
Open your crontab user file
```console
$ crontab -e
```
Now, add your PATH and scheduled time (my class starts at 14:50 on MWF)
```cron
PATH=<COPIED_FROM_YOUR_PATH>

50 14 * * 1,3,5 /PATH/TO/cron-runner.sh
```

### Future Goals
- Instead of writing to a log file, it would be nice to using the unix `mail` command. Then, you can get emails whenever the job successfully submitted a poll response.
