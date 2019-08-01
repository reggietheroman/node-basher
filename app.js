let shell = require('shelljs');

(function() {
  shell.echo('Will run command:');
  shell.echo('$ pwd');
  shell.exec('pwd');
})();
