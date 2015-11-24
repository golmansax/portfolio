export default function stringBulkReplace(string, keysToReplace) {
  let output = string;
  Object.keys(keysToReplace).forEach((key) => {
    output = output.replace(`:${key}`, keysToReplace[key]);
  });
  return output;
}
