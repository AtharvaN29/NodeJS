//object prop shorthand

const name='andrew'
const userAge= 27

const user={
    name,
    age:userAge,
    location:'mumbai'
}

console.log(user)

const product={
    label:'red notebook',
    price:3,
    stock: 201,
    salePrice:undefined
}



// const{label,stock}=product //destructuring (extracting values from an object)
// console.log(label)
// console.log(stock)

const transaction=(type,{label,stock})=>{
    console.log(type,label,stock)
}

transaction('order',product)