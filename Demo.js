

let obj = {
    name:"Kartik",
    email:"kartikparhad@gmail.com",
    package:24,
}

Object.defineProperty(obj,"location",
  {
    value:"pune",
    enumerable:true,
    Writable:true,
    configurable:true
  }

)

console.log(obj);

Object.getOwnPropertyDescriptor(obj,"loction")

Object.defineProperties(obj,{
    pincode:{
    value:2334,
    enumerable:true
}
   , "area" : {
        value : "den",
        enumerable:true

    }
    })
  
    console.log(Object.getOwnPropertyDescriptors(obj));

    



