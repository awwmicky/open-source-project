# Open Source Project

## Contributors: --

## Summary of App: --

### Request for Repo --

### Clone Repo Setup
- npm install
- check `.gitignore` file
    - these are all files/folders only in your local PC
    - `.env` is the only setup file to edit once
        - once connected to database, you are complete
    - local files you can create
        - `test.js` can be your local testing file
        - `note.txt` can be your local notes file 
- create an `.env` file
    - copy this code:
        - ` DB_USER_LOCAL = username `
        - ` DB_PASS_LOCAL = password `
        - ` DB_NAME_LOCAL = database `
        - ` DB_HOST_LOCAL = hostname `
    - paste in `.env` file
    - edit pasted code:
        - mySQL    : username
        - mySQL    : password
        - database : name (`project_db`)
        - mySQL    : hostname (`localhost` or `127.0.0.1`)
- execute `schema.sql` file
    - open mySQL workbench
    - connect to Local instance
    - highlight all code (2 lines)
    - execute code (once)
        - `CTRL + SHIFT + ENTER`
- once all setups are completed...
    - open terminal
    - `npm run dev`