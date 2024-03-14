export default function getNextThreeHours(dateTimeString: string): string[] {
  const dateTime = new Date(dateTimeString);
  const nextHours: string[] = [];
  const newTime = new Date(dateTime.getTime());

  const currentHour = newTime.getHours();

  nextHours.push(((currentHour + 1) % 24).toString());
  nextHours.push(((currentHour + 2) % 24).toString());
  nextHours.push(((currentHour + 3) % 24).toString());
  return nextHours;
}
