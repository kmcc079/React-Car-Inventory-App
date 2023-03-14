import Background from '../assets/images/bg-vintage-car.jpg'

const Home = () => {
  return (
    <div 
        style={{ backgroundImage: `url(${ Background })`}} 
        className="flex flex-row justify-center mx-auto bg-cover bg-fixed">
      <div className="flex place-items-center h-screen">
        <h1 className="p-5 bg-teal-500 text-white font-bold rounded text-xl border-2 border-white">Welcome to the Car Inventory</h1>
      </div>
    </div>
  )
}

export default Home
