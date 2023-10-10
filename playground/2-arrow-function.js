// const square = function(x){
//     return x*x
// }

// const square= (x)=>{
//     return x*x
// }

// const square = (x) => x*x //for single arg function

// console.log(square(8))

const event = {
    name: 'party',
    guestList:['atharva','mike','rob'],
    printGuestList(){        //ES6 method for writing the function
        console.log('guest list for '+this.name)

        this.guestList.forEach((guest)=>{
            console.log(guest+' is attending '+this.name)
        }) //arrow functions dont bind their own 'this' value , hence the this works inside the function
    }
}
 
event.printGuestList()