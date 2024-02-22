//Calculate how many days are left until the final project presentation
const currentDate = new Date();
const finalDate = new Date("2024-06-26T00:00:00");

const getRemainingDays = () => {
  const diffInTime = finalDate.getTime() - currentDate.getTime();

  const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));

  console.log(`${diffInDays} days until the Final presentation`);
};

getRemainingDays();
