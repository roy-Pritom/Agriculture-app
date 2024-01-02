import { FaCheckSquare } from "react-icons/fa";

const Farm = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10 md:mt-28">
      <div className="md:w-1/2 mx-4 md:mx-12 md:pr-20">
        <p className="text-green-500 text-xl font-semibold">Get to Know DMCC</p>
        <h2 className="text-2xl md:text-4xl font-bold">
          DMCC (DAY MARK CROP CARE) IS THE AGRICULTURE AND ORGANIC FARM
        </h2>
        <div className="divider my-4 md:my-6"></div>
        <p className="text-green-500 text-xl font-bold">
          We’ve 10 years of agriculture farming experience.
        </p>
        <p className="mt-2 text-gray-600">
          DMCC (Day Mark Crop Care) stands as a dedicated venture in agriculture
          and organic farming, harmonizing cutting-edge practices with
          eco-friendly cultivation methods to promote sustainable and wholesome
          agricultural solutions. Specializing in crop care, DMCC is committed
          to fostering a healthier and greener future through its innovative
          approaches to farming.
        </p>
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <FaCheckSquare />
            <h3 className="font-bold">Sustainable Agriculture Leader: </h3>
          </div>
          <p className="text-sm md:text-base">
            With a decade of farming experience, DMCC is dedicated to
            sustainable agriculture and organic farming, blending advanced
            practices with eco-friendly methods for a greener future.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <FaCheckSquare />
            <h3 className="font-bold">Crop Care Expertise: </h3>
          </div>
          <p className="text-sm md:text-base">
            Specializing in crop care, DMCC leverages its extensive experience to provide innovative and wholesome agricultural solutions, emphasizing a commitment to eco-friendly and organic farming practices.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          className="rounded-xl w-full"
          src="https://img.freepik.com/premium-photo/farmer-sunset-light_1001749-4011.jpg?w=740"
          alt=""
        />
        <img
          className="rounded-xl mt-6 w-full md:relative md:bottom-40 md:right-28 lg:border-4 lg:border-white"
          src="https://img.freepik.com/premium-photo/tractor-sprays-pesticides-field_700955-2563.jpg?w=740"
          alt=""
        />
      </div>
    </div>
  );
};

export default Farm;
