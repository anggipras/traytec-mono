export const formatDate = (inputDate: string): string => {
  // Parse the input date string
  const dateParts: number[] = inputDate
    .split("-")
    .map((part) => parseInt(part, 10));
  const year: number = dateParts[0];
  const month: number = dateParts[1];

  // Create a Date object using the parsed values
  const formattedDate: Date = new Date(year, month - 1, 1);

  // Format the date using Intl.DateTimeFormat
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  const formattedString: string = formattedDate.toLocaleDateString(
    undefined,
    options
  );

  return formattedString;
};
