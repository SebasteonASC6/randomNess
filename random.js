function rand() {
    let decimal = Math.random();
    let times10 = decimal * 10;
    let final = Math.floor(times10)
    console.log(final);
    console.log(Math.floor(Math.random() * 10))
}

for (let i =0; i < 100; i++){
    rand();
}