const fs = require('fs');
const axios = require('axios');
const args = process.argv

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

function writeCat(path, filename){
    if (fs.existsSync(path)){
        fs.appendFile(path, filename, 'utf8', function(err) {
            if (err) {
              console.error(err);
              process.exit(1);
            }
            console.log("success!");
            process.exit(0);
        })
    }
    console.error(`Error: no such file or directory, open '${path}'`);
    process.exit(1);
}

async function webCat(url){
    let res = await axios.get(url);
    console.log(res)
}


if(args[2] === "--out"){
    writeCat(args[3], args[4])
}
try {
    if(Boolean(new URL(args[2]))){
        webCat(args[2])
    }
} catch {
    cat(args[2])
}
