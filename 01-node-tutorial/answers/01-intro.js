const hour = new Date().getHours();

const greetings = {
  morning: "Good morning",
  afternoon: "Good afternoon",
  evening: "Good evening",
  night: "Good night",
};

if (hour <= 12) {
  console.log(greetings.morning);
} else if (hour > 12 && hour <= 18) {
  console.log(greetings.afternoon);
} else if (hour > 18 && hour <= 21) {
  console.log(greetings.evening);
} else {
  console.log(greetings.night);
}
