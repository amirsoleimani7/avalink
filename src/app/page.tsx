import TextType from "@/components/custom/typewriter";

export default async function Home() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("something");
    }, 10000);
  });

  return (
    <div className="w-full h-full bg-gray-900">
      {" "}
      <TextType
        key={"typewriter"}
        className="text-white font-bungee text-8xl select-none"
        text={["AVA LINK"]}
        typingSpeed={75}
        pauseDuration={400}
        showCursor
        loop
        cursorCharacter="|"
      />
    </div>
  );
}
