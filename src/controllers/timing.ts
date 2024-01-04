export function findTimeSlot(currentTime: string) {
  const timeIntervals = [
    "00:00",
    "03:00",
    "06:00",
    "09:00",
    "12:00",
    "15:00",
    "18:00",
    "21:00",
  ];

  for (let i = 0; i < timeIntervals.length - 1; i++) {
    const startTime = timeIntervals[i];
    const endTime = timeIntervals[i + 1];

    if (
      compareTimes(currentTime, startTime) &&
      !compareTimes(currentTime, endTime)
    ) {
      return startTime;

      // return `Current time (${currentTime}) is in the time slot between ${startTime} and ${endTime}`;
    }
  }

  return "Current time does not fit in any time slot.";
}

function compareTimes(time1: string, time2: string) {
  const [hours1, minutes1] = time1.split(":").map(Number);
  const [hours2, minutes2] = time2.split(":").map(Number);
  const totalMinutes1 = hours1 * 60 + minutes1;
  const totalMinutes2 = hours2 * 60 + minutes2;

  return totalMinutes1 >= totalMinutes2;
}
