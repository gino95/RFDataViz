const express = require('express')
const app = express()

const testFolder = '../data/';
const fs = require('fs')

app.get('/folders', (req, res, next) => {

      fs.readdir(testFolder, (err, files) => {
        res.send(files)
      });


})


app.get('/folders/labels/:folderId', (req, res)=>{

  var fileRoute = `../data/${req.params.folderId}/${req.params.folderId}.txt`

  fs.readFile(fileRoute, (err, data) => {
      if(err) throw err;
      const allLines = data.toString().split(/\r\n|\n/);

      var stringArr = []

      var i = 0
      allLines.forEach(line => {

            if(i%2==0){
                var tempStringArr = line.split('STRING: ')
                if(tempStringArr[0].length != 0){
                    var hr = tempStringArr[1].toString().split(' ')[0].toString().slice(1)
                }

                if(hr != null)
                  stringArr.push(hr)
            }

            i++

      });

      res.send(stringArr)

  })

})

app.get('/folders/values/:folderId', (req, res)=>{

  var fileRoute = `../data/${req.params.folderId}/${req.params.folderId}.txt`

  fs.readFile(fileRoute, (err, data) => {
      if(err) throw err;
      const allLines = data.toString().split(/\r\n|\n/);
      var intArr = []

      var i = 0
      allLines.forEach(line => {

            if(i%2==0){

            }else{
              var tempIntArr = line.split('INTEGER: ')
              intArr.push(tempIntArr[1])
            }

            i++

      });

      res.send(intArr)

  })

})

// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
