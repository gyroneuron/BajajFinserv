import Image from "next/image";

export default function Home() {
  const name = [
    {
      name: "John Doe",
      email: "john@gmail.com"
    }, 
    {
      name: "Vivek Jaglan",
      email: "vivekjaglan34@gmail.com"
    },
    {
      name: "Rahul",
      email: "rahul@gmail.com"
    },
    {
      name: "Rohit",
      email: "rohit123@gmail.com"
    }
  ]
  return (
    <div className="flex-1 w-full h-full">
      <main className=" flex-1 w-full">
        {name.map((item, index) => 
          <div key={index} className="flex flex-col items-center my-2 justify-center">
            <h1 className="text-2xl font-bold text-blue-600">{item.name}</h1>
            <p className="text-base font-medium text-green-100">{item.email}</p>
          </div>
        )}
      </main>
    </div>
  );
}
