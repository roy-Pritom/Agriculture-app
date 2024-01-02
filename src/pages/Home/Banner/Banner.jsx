import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos=""
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="carousel w-full h-[600px]"
    >
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/green-tea-bud-leaves-green-tea-plantations-morning_335224-955.jpg?w=740&t=st=1703578499~exp=1703579099~hmac=c169c4f4cd18709cbfea67fbd7e7efcb01b9dea2e3831eeabefcc4445381794a"
          className="w-full"
        />
        <div className="absolute h-full left-0 top-0 right-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] hover:bg-gradient-to-l ">
          <div className="text-white space-y-5 text-center mt-40">
            <h2 className="text-3xl lg:text-6xl font-bold">
              CULTIVATE GROWTH <br /> WITH QUALITY TOOLS
            </h2>
            <p className="lg:text-xl">
              Enhance your farming experience with our premium agricultural
              tools and solutions!
            </p>
            <Link to="/dashboard">
              <button className="btn btn-info btn-outline mt-5">
                Discover Agriculture Essentials
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/sunny-meadow-landscape_1112-134.jpg?w=740&t=st=1703578609~exp=1703579209~hmac=ba75096de4437785fae74c4e483828a00d098d7e8e9a0de4a3bc597f40f53e1d"
          className="w-full"
        />
        <div className="absolute h-full left-0 top-0 right-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] hover:bg-gradient-to-l">
          <div className="text-white space-y-5 text-center mt-40">
          <h2 className="text-3xl lg:text-6xl font-bold">
              CULTIVATE GROWTH <br /> WITH QUALITY TOOLS
            </h2>
            <p className="lg:text-xl">
              Enhance your farming experience with our premium agricultural
              tools and solutions!
            </p>
            <Link to="/dashboard">
              <button className="btn btn-info btn-outline mt-5">
                Discover Agriculture Essentials
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed_181624-25838.jpg?w=740&t=st=1703578694~exp=1703579294~hmac=36469dd76c3152c93ffc59a1271537f5c2587203cf526130b35e09535e2ef85c"
          className="w-full"
        />
        <div className="absolute h-full left-0 top-0 right-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] hover:bg-gradient-to-l">
          <div className="text-white space-y-5 text-center mt-40">
          <h2 className="text-3xl lg:text-6xl font-bold">
              CULTIVATE GROWTH <br /> WITH QUALITY TOOLS
            </h2>
            <p className="lg:text-xl">
              Enhance your farming experience with our premium agricultural
              tools and solutions!
            </p>
            <Link to="/dashboard">
              <button className="btn btn-info btn-outline mt-5">
                Discover Agriculture Essentials
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/sunset-golden-wheat-field-nature-bountiful-harvest-generated-by-artificial-intelligence_25030-60668.jpg?t=st=1703529273~exp=1703532873~hmac=72fad81932371bc1c62ea516cc9f2d8ce36ca7b54a4dce808421a812b33eebfc&w=740"
          className="w-full"
        />
        <div className="absolute h-full left-0 top-0 right-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] hover:bg-gradient-to-l">
          <div className="text-white space-y-5 text-center mt-40">
          <h2 className="text-3xl lg:text-6xl font-bold">
              CULTIVATE GROWTH <br /> WITH QUALITY TOOLS
            </h2>
            <p className="lg:text-xl">
              Enhance your farming experience with our premium agricultural
              tools and solutions!
            </p>
            <Link to="/dashboard">
              <button className="btn btn-info btn-outline mt-5">
                Discover Agriculture Essentials
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
