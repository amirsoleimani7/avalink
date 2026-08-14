export default async function somethingPage() {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("sometinh");
    }, 5000);
  });

  await myPromise;

  return <p>mainpage</p>;
}
