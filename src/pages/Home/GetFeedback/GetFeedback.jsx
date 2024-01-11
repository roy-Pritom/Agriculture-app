import { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const GetFeedback = () => {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/get-feedbacks")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setDataArray(data.data);
        console.log(12, dataArray);
      });
  }, []);

  return (
    <div className="mb-20 ">
      <h2 className="text-center font-bold text-5xl mb-5 text-info">
        “Farmer’s Forum”
      </h2>
      <h4 className="text-center font-semibold text-xl my-8 text-info px-28">
        Welcome to our Farmer’s Forum! This is a space for you to share your
        agricultural experiences, insights, and stories. Connect with other
        farmers, exchange ideas, and learn from each other’s experiences. Your
        journey can inspire others and help us build a stronger farming
        community. Let’s cultivate growth together
      </h4>
      <Slide>
        <div className="flex justify-start gap-12 px-14 overflow-x-hidden">
          {dataArray.map((data) => (
            <div key={data._id}>
              <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                  <h2 className="card-title">{data.name}</h2>
                  <h2 className="card-title">{data.email}</h2>
                  <p>{data.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </div>
  );
};

export default GetFeedback;
