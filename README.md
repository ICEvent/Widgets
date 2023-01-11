# Widgets
ICEvent Calendar widgets for 3rd party integration

## Test
![HomeView](./test/topView.jpg)

## Installation
1. npm install icevent-calendar.
2. npm install @dfinity/agent @emotion/react @emotion/styled @mui/icons-material @mui/material moment
3. use Calendar with the arribute calendarID which is your calendar id from ICEvent platform.



## Configuration
 example:
  ```
  import { Calendar } from "icevent-calendar"; 
  import iceventConfig from './icevent.json';

  <Calendar iceventConfig={iceventConfig} />
  ```
  
  configure file icevent.json:
  ```
  {
    "calendarID": "35"
  }
  ```

## issue
for Vite project, add below snippet in vite.config.js for solving "ReferenceError: global is not defined" error
   ```
    define: {global: 'window'},
  ```
