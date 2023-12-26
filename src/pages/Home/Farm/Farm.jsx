import { FaBeer } from 'react-icons/fa';

const Farm = () => {
    return (
        <div className="flex justify-between mt-28">
            <div className="w-1/2 mx-12">
                <p className="text-green-500 text-xl font-semibold">Get to Know DMCC</p>
                <h2 className="text-4xl font-bold">DMCC(DAY MARK CROP CARE) IS THE AGRICULTURE AND ORGANIC FARM</h2>
                <div className="divider"></div> 
                <p className="text-green-500 text-xl font-bold">We’ve 10 years of agriculture farming experience.</p>
                <p className="mt-2 text-gray-600">DMCC (Day Mark Crop Care) stands as a dedicated venture in agriculture and organic farming, harmonizing cutting-edge practices with eco-friendly cultivation methods to promote sustainable and wholesome agricultural solutions. Specializing in crop care, DMCC is committed to fostering a healthier and greener future through its innovative approaches to farming.</p>
                <div>
                    <FaBeer></FaBeer>
                </div>
            </div>
            <div className="w-1/2 mr-12">
                <img className="rounded-xl w-[90%] ml-20" src="https://img.freepik.com/premium-photo/farmer-sunset-light_1001749-4011.jpg?w=740" alt="" />
                <img className="rounded-xl relative bottom-28 right-10 w-[90%] ml-6" src="https://img.freepik.com/premium-photo/tractor-sprays-pesticides-field_700955-2563.jpg?w=740" alt="" />
            </div>
        </div>
    );
};

export default Farm;