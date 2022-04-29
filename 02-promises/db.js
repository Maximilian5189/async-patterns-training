export const query = (article) =>
  new Promise((resolve, reject) => {
    console.log(`Query ${article}`);
    setTimeout(() => {
      resolve({ data: `data from db for ${article}` });
    }, 500);
  });
