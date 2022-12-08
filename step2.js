const fs = require('fs');
const axios = require('axios');

const pathArg = process.argv[2]

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

async function webCat(url){
    let res = await axios.get(url);
    console.log(res)
}

try {
    if(Boolean(new URL(pathArg))){
        webCat(pathArg)
    }
} catch {
    cat(pathArg)
}