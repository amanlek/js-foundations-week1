import { v4 as uuidv4 } from "uuid";

/**
 * Generates a unique identifier (UUID).
 *
 * @returns {string} A randomly generated unique ID
 */
export function generateId() {
  return uuidv4();
}

/**
 * Capitalizes the given string.
 *
 * @param {string} text - The input string
 * @returns {string} The capitalized string
 */
export function capitalize(text) {
  return text.toUpperCase();
}


/**
 * Returns the current local time as a formatted string.
 * 
 * @returns {string} Current time in locale format
 */
export default function getCurrentTime() {
  return new Date().toLocaleTimeString();
}