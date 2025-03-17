export default function generateUniqId() {
  return `${Date.now() - Math.random().toString(36)}`;
}