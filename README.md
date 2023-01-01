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
  <Calendar calendarId="35"/>
  ```

## issue
add below snippet in index.html for solving "ReferenceError: global is not defined" error
   ```
    <script type="module">
     import { Buffer } from "buffer"
     window.global = window
     window.Buffer = Buffer
   </script>
  ```
