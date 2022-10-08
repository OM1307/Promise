let promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let roll_no = [1,2,3,4,5]
        resolve(roll_no);
        reject(error);
    },2000);
});

promise.then((rollno)=>{
    console.log(rollno)
},(error)=>{
    console.log(error)
});
