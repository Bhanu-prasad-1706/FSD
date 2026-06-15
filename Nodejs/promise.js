function fetchData() {
    return new Promise((resolve,reject) => {
        let success=true;
        setTimeout(() => {
            if(success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        },20000);
    });
}
console.log("Fetching data...");
fetchData()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
console.log("Program continues executing...");