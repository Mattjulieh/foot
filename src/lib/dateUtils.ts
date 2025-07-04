import { format } from 'date-fns';

// This function will run on the client, so it will use the user's local timezone.
export function formatMatchDateTime(isoString: string): { date: string; time: string } {
  if (!isoString) return { date: 'N/A', time: 'N/A' };
  try {
    const dateObj = new Date(isoString);
    // Example: "Sat, Jul 20"
    const formattedDate = format(dateObj, 'EEE, MMM d');
    // Example: "02:00 PM"
    const formattedTime = format(dateObj, 'p');
    return { date: formattedDate, time: formattedTime };
  } catch (error) {
    console.error("Error formatting date: ", error);
    return { date: 'Invalid Date', time: 'Invalid Time' };
  }
}
