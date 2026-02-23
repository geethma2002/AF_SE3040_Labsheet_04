console.log("AF Labsheet 4 is completed.");

feature/Geethma/Promises
const myPromise = new Promise((resolve, reject) => { 
  if (condition) { 
    resolve('Success!'); 
  } else { 
    reject('Failure!'); 
  } 
}); 
 
myPromise.then((result) => { 
  console.log(result); 
}).catch((error) => { 
  console.log(error); 
}); 

