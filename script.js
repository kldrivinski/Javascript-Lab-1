let name = "Kelsey Drivinski";
let age = 28;
let birthday = "May 29";
let detroitGC = true;
let lifeEvents = [
  "I lived in California for 4 years.",
  "I went to Grand Valley State University.",
  "I won 2nd place in Miss Teen Detroit.",
  "I've had over a dozen surgeries since the age of 2."
];

if ((detroitGC = true)) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
let randomNumber = Math.floor(Math.random() * 10) + 1;

while (randomNumber !== 5) {
  randomNumber = Math.floor(Math.random() * 10) + 1;
  counter++;
  console.log(`${randomNumber} !==5`);
  if (randomNumber === 5) {
    break;
  }
}
console.log(
  `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
);
