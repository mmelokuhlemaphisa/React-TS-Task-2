export function setItem(key: string, value: any) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    alert("Error saving to localStorage: " + error);
  }
}

export function getItem<T>(key: string): T | undefined {
  try {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : undefined;
  } catch (error) {
    alert("Error reading from localStorage: " + error);
    return undefined;
  }
}

export function getItems<T>(key: string): T[] {
  try {
    const jsonList = window.localStorage.getItem(key);
    if (jsonList) {
      return JSON.parse(jsonList) as T[];
    }
  } catch (error) {
    alert("Error reading list from localStorage: " + error);
  }
  return [];
}
