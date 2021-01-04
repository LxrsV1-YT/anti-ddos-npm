exports.memory = function(){
    const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
    arr.reverse();
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    var mb = Math.round(used * 100) / 100
    console.log(`${mb} MB in use!`);
}
exports.ping = function(){
    function ping(){
        try {
            var getPing = ping;
        } catch (error) {
            console.log("something went wrong, retrying again in 3 seconds")
            setTimeout(() => {
                ping();
            }, 3000);
        }
        console.log(getPing)
    }
    
}
exports.ddosCheck = function(){
    const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
    arr.reverse();
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    var mb = Math.round(used * 100) / 100
    if(mb <= 50){
        console.log("You're not getting attacked.")
    }else if(mb >= 50 && mb <= 100){
        console.log("Medium memory usage detected!")
    }else if(mb >= 100){
        console.log("Detecting high memory usage!")
    }else if(mb >=200){
        console.log("DDOS attack discovered!")
        console.log("System has been automaticly turned off!")
        process.exit()
    }
}
exports.checkInterval = function(){
    setInterval(() => {
        const arr = [1, 2, 3, 4, 5, 6, 9, 7, 8, 9, 10];
        arr.reverse();
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        var mb = Math.round(used * 100) / 100
        if(mb <= 50){
            console.log("Couldn't find any attacks.")
        }else if(mb >= 50 && mb <= 100){
            console.log("Medium memory usage detected!")
        }else if(mb >= 100){
            console.log("Detecting high memory usage!")
        }else if(mb >=200){
            console.log("DDOS attack discovered!")
            console.log("System has been automaticly turned off!")
            process.exit()
        }
    }, 30000);
}
// Please make sure to read
// README.md