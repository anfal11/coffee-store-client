import { useLoaderData } from "react-router-dom"

function App() {

  const coffees = useLoaderData();

  return (
    <>
<div className="relative text-center">
      <img
        src="https://i.ibb.co/VwjMpDD/Rectangle-1.png"
        alt=""
        className="w-full"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white md:text-2xl lg:text-6xl font-Rancho">
        <img
          src="https://i.ibb.co/8ccYMxt/logo1-1.png"
          alt=""
          className="w-6 md:w-12 lg:w-20 h-10 md:h-12 lg:h-20 mr-2 inline-block" // Adjust the width, height, and margin as needed
        />
        Espresso Emporium
      </div>
    </div>

    <div className="relative">
      <img
        src="https://i.ibb.co/DgHht8b/Rectangle-2.png"
        alt=""
        className="h-[300px] md:h-auto w-full object-cover"
      />
      <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <h1 className="font-Rancho text-base md:text-3xl xl:text-5xl">Would you like a Cup of Delicious Coffee?</h1>
        <p className="font-Raleway text-[10px] text-xs md:text-base xl:text-xl">It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
        <button className="text-lg mt-2 md:text-2xl font-Rancho text-black bg-[#E3B577] px-3 py-0 md:px-7 md:py-2">Learn More</button>
      </div>
    </div>

  <div className="text-center my-20 py-10">
    
  


      <h1 className="font-Raleway text-4xl">Available coffee: {coffees.length}</h1>


  </div>
    </>
  )
}

export default App
