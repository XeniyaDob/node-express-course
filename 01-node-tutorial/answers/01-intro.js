const today = new Date().getHours();

const greetings = {
  morning: "Good morning",
  afternoon: "Good afternoon",
  evening: "Good evening",
  night: "Good night",
};

if (today <= 12) {
  console.log(greetings.morning);
} else if (today > 12 && today <= 18) {
  console.log(greetings.afternoon);
} else if (today > 18 && today <= 21) {
  console.log(greetings.evening);
} else {
  console.log(greetings.night);
}
