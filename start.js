const concurrently = require('concurrently');

concurrently([
  "yarn live",
  "yarn dev"
], {
    prefix: 'name',
    killOthers: ['failure', 'success'],
    restartTries: 0,
}).then(
    function onSuccess() {
      // This code is necessary to make sure the parent terminates 
      // when the application is closed successfully.
      process.exit();
    },
    function onFailure() {
      // This code is necessary to make sure the parent terminates 
      // when the application is closed because of a failure.
      process.exit();
    }
  );