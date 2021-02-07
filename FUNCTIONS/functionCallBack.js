
function makeFile(callback){
    console.log('A file created.')
    let file1 = {
        name: 'JSFile'
    }
    callback(file1)
}

makeFile(function(myFile){
    //console.log('The file has started to be created.')
    console.log(`${myFile.name} has started to be created.`)

})
