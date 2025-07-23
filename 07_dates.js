let times=new Date();
console.log(times.toLocaleString());
console.log(times.toJSON());
console.log(times.toLocaleDateString());
console.log(times.toLocaleTimeString());
console.log(times.toString());
console.log(times.toUTCString());
console.log(typeof times);

// let newtimes= new Date(2025,0,17);
let newtimes= new Date("1-25-2025");
console.log(newtimes.toDateString());
console.log(newtimes.getFullYear());
