import { FaArrowRight } from "react-icons/fa";
import Swal from "sweetalert2";

const Feedback = () => {
  const createFeedback = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const feedback = form.feedback.value;
    const payload = { name, email, feedback };

    fetch("http://localhost:5000/api/v1/create-feedback", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Feedback is created successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <h2 className="text-center font-bold text-5xl my-5 text-info">
      “Share Your Farming Experience”
      </h2>
      <h4 className="text-center font-semibold text-xl my-8 text-info px-28">We value your insights and experiences in the field of agriculture. Your feedback helps us improve our content and services to better meet your needs. Whether it’s about our articles, tools, or online services, we’d love to hear from you. Share your thoughts, suggestions, or any issues you’ve encountered. Let’s grow together!</h4>
      <form className="w-[70%] mx-auto" name="form" onSubmit={createFeedback}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full input-info max-w-xs"
            name="name"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">What is your email id?</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full input-info max-w-xs"
            name="email"
          />
        </label>

        <label className="form-control mb-6">
          <div className="label">
            <span className="label-text">Your Feedback</span>
          </div>
          <textarea
            className="textarea textarea-bordered input-info h-24 "
            placeholder="Feedback"
            name="feedback"
          ></textarea>
        </label>
        <button className="btn btn-outline btn-info btn-wide mb-14">
          Send <FaArrowRight></FaArrowRight>{" "}
        </button>
      </form>
    </div>
  );
};

export default Feedback;
