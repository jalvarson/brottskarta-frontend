import moment from 'moment'
import 'moment/locale/sv'

moment.locale('sv') // Force Moment to use Swedish globally

/**
 * Format a date to 'DD MMMM HH.mm' format in Swedish locale.
 * @param date - The date to format (can be a Date object, string, or moment-compatible value).
 * @returns {string} The formatted date string.
 */
export function formatSwedishDate(date: string | Date): string {
  // Use moment with locale explicitly to ensure formatting
  return moment(date).locale('sv').format('DD MMMM HH.mm')
}
