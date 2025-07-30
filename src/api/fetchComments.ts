export const fetchComments = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};
