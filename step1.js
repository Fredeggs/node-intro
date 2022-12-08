const fs = require('fs');

function cat(path){
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
          // handle possible error
          console.error(err);
          // kill the process and tell the shell it errored
          process.exit(1);
        }
        console.log(data);
    })
}

cat(process.argv.pop())