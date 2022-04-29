export const query = (param) =>
  new Promise((resolve, reject) => {
    console.log(`Query ${param}`);
    setTimeout(() => {
      reject("err from db");
      // resolve({data: `additional data for article ${param}`})
    }, 500);
  });
