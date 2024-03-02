import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";

function Services() {
    const cardImgs = (x) => {
        return {
          backgroundImage: `url(${x})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end", 
          padding: "1rem",
        };
      };

      const tStroke = () => {
        return {
          textShadow: `-1px -1px 0 #000, 1px -1px 0 #000, -1px  1px 0 #000, 1px  1px 0 #000`
        };
      };

  return (
    <>
    <div className="flex justify-evenly mt- h-screen">
      <div className="flex flex-col justify-evenly w-5/12 mt-24">
        <a href="" className="rounded-2xl h-44 p-4 hover:scale-90 transition-transform duration-700" style={cardImgs(img1)}>
          <div className="text-white text-2xl font-bold" style={tStroke()}>Ceramic Coating</div>
        </a>
        <a href="" className="rounded-2xl h-44 p-4 hover:scale-90 transition-transform duration-700" style={cardImgs(img2)}>
          <div className="text-white text-2xl font-bold" style={tStroke()}>Mobile Detailing</div>
        </a>
        <a href="" className="rounded-2xl h-44 p-4 hover:scale-90 transition-transform duration-700" style={cardImgs(img3)}>
          <div className="text-white text-2xl font-bold" style={tStroke()}>Paint Correction</div>
        </a>
      </div>
        <div className="w-5/12 flex flex-col gap-y-4 mt-36">
            <div>
                <h1 className="text-5xl font-bold">CTMK Detailing</h1>
                <h1 className="text-5xl font-bold text-myDb">& Ceramic Coating</h1>
            </div>
            <p className="text-2xl">Experience the best in mobile & auto detailing in Broward and Dade county. We specialize in auto detailing and ceramic coating. See you soon!</p>
            <p className="text-2xl">Rated 5 stars on Google 50+ reviews.</p>
            <button className="bg-blue-200 self-start rounded p-3 hover:bg-blue-500">Learn More</button>
        </div>
    </div>
    </>
  );
}

export default Services;