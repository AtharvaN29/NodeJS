const fs=require('fs')

// const book={
//     title:'Ego is the Enemy',
//     author:'Ryan Holiday'
// }

// const bookJSON= JSON.stringify(book) //takes in a object and gives back a string
// fs.writeFileSync('1-json.json',bookJSON) //object is created and stored in new file

// console.log(bookJSON)
// const parsedData = JSON.parse(bookJSON) //string to js object
// console.log(parsedData.author)

// const dataBuffer=fs.readFileSync('1-json.json')
// const dataJSON= dataBuffer.toString()
// const data=JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer=fs.readFileSync('1-json.json') //fetch the data
const dataJSON= dataBuffer.toString() //convert to String
const user = JSON.parse(dataJSON)  //convert to js object

user.name = 'Gunther'
user.age = 54

const userJSON= JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON) //overrride the data in the same file


