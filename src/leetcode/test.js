// for (let i = 0; i < 100; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

let t = 0;
setTimeout(() => {
  t += 1;
});

for (let i = 0; i <= 1000; i++) console.log(t);
