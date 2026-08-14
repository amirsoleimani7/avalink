export default async function Home() {
  const foo = (input: string) => {
    console.log(input);
  };

  await new Promise((foo, reject) => {
    setTimeout(() => {
      foo("something");
    }, 3000);
  });

  return <div>main page</div>;
}
