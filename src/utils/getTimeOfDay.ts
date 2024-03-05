export const formatTime = (time: string) => {
  const dateFormat = time.split(",")[0];
  const date = new Date(time);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const timeOfDayAbbreviation = hours >= 12 ? "pm" : "am";
  return dateFormat + " " + hours + ":" + minutes + timeOfDayAbbreviation;
};

export default formatTime;
