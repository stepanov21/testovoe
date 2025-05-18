import Quiz from "../components/Quiz";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white bg-image"
      style={{
        backgroundImage: "url('./bg.jpg')",
        backgroundSize: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Semi-transparent overlay to ensure content readability */}
      {/* <div 
        className="absolute inset-0 bg-white bg-opacity-80 z-0"
        aria-hidden="true"
      ></div> */}

      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start z-10 relative container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex flex-col md:max-w-md bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-full">
            <div><Image className="md:hidden mb-5" src="/bg.jpg" alt="Description of image" width={500} height={300} /></div>
            <h1 className="text-3xl text-gray-600 font-bold mb-4">
              Live Busy status
            </h1>
            <p className="text-gray-600 mb-8">
              Busy Status Bar integrates with desktop software and automatically
              activates when you&apos;re on a call, live on stream, recording
              audio or when a certain program is active.
            </p>

            <Quiz />
          </div>

          <div className="relative"></div>
        </div>
      </main>
    </div>
  );
}
