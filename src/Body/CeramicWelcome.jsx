import videoSource from '../assets/ceramic.mp4';
import 'animate.css';

function Welcome() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        playsInline
        muted
        loop
        id="video"
        className="w-full h-full object-cover absolute inset-0 opacity-30"
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Adjust the padding top for different screen sizes */}
      <div className="pt-48 sm:pt-32 md:pt-48 lg:pt-48 xl:pt-48 pl-4 sm:pl-12 md:pl-24 relative animate__animated animate__fadeInUp">
        <a href='https://www.ctmkmobiledetailing.com/' target='blank_' className="bg-blue-200 hover:bg-blue-500 py-2 px-4 md:py-4 md:px-10 text-xs sm:text-sm md:text-base font-extralight rounded-full bg-opacity-60 drop-shadow">
          Check Out Our Main Site →
        </a>
        <div className="pt-2 text-4xl sm:text-5xl md:text-6xl flex flex-wrap gap-4 font-semibold mt-4">
          <p className='text-white'>CTMK</p>
          <div className="text-myDb">Ceramic Coating</div>
        </div>
        <p className="py-2 text-sm sm:text-lg md:text-xl font-light w-full sm:w-10/12 md:w-7/12 text-white">
          Experience the best in mobile & auto detailing in South Florida with CTMK Mobile Detailing. Rated 5-stars with 50+ reviews, we specialize in Auto Detailing and Ceramic Coating. Book us today!
        </p>
        <p className="py-2 text-sm sm:text-lg md:text-xl font-light w-full sm:w-10/12 md:w-7/12 font-medium text-myDb ">
          Trusted with over 50+ 5 Star Google Reviews.
        </p>
        <div className="flex gap-4 sm:flex-row flex-col">
          <a href="tel:+19549450770" className="h-12 text-center sm:h-auto bg-blue-200 bg-opacity-60 hover:bg-blue-500 py-2 px-2 sm:py-4 sm:px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-lg font-light drop-shadow text-lg sm:text-sm md:text-base lg:text-lg transition ease-in-out duration-150">
            Call Now
          </a>
        </div>
      </div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '25%',
        background: 'linear-gradient(to bottom, transparent, #EBF8F8)',
        zIndex: 2,
      }}></div>
    </div>
  );
}

export default Welcome;
