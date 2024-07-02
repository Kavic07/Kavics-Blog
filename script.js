document.addEventListener("DOMContentLoaded", (event) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = new Date().getUTCDay();
  const dayElement = document.querySelector("[data-testId='currentDay']");
  dayElement.textContent = `${days[currentDay]}`;
});
