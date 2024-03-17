export const metadata = {
  title: "home page",
  description: "this is home page"
}

const HomePage = async () => {
   
  const res = await fetch("http://localhost:5000/shoes",{
    next: {
      revalidate:5,
    }
  });
  const shoes = await res.json()
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-black">Nextjs Image optimization</h1>

      <div className="grid grid-cols-3 gap-5 place-items-center mt-5">
         {
          shoes.slice(0,3).map((shoe)=>
          <div key={shoe.id} className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{shoe.title}</h2>
            <p>{shoe.description}</p>
            <p>{shoe.price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
              <button className="btn btn-accent">Details</button>
            </div>
          </div>
        </div>
          )
         }
      </div>
    </div>
  );
};

export default HomePage;