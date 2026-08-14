export default async function Home() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("something");
    }, 10000);
  });

  return <div className="w-full h-full bg-gray-900">main page</div>;
}
