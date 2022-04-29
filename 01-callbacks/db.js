export const query = (article, cb) => {
  console.log("query", article);
  setTimeout(() => {
    cb(null, { data: `data from db for ${article}` });
  }, 500);
};
