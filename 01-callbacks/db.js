export const query = (article, cb) => {
  console.log("query", article);
  setTimeout(() => {
    cb("Error!", null);
  }, 500);
};
