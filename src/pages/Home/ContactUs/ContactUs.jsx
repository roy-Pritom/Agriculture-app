import { FaArrowRight } from "react-icons/fa";
import Swal from "sweetalert2";
// import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactUs = () => {
  const form = useRef();

  const submitContactUs = (event) => {
    event.preventDefault();
    const formm = event.target;
    const name = formm.name.value;
    const email = formm.email.value;
    const subject = formm.subject.value;
    const message = formm.message.value;
    const payload = { name, email, subject, message };

    // emailjs
    //   .sendForm(
    //     "service_tn7c979",
    //     "template_4ckdx9e",
    //     form.current,
    //     "88qR5saEOxs8Ghur-"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    fetch("http://localhost:5000/api/v1/create-contact", {
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
            title: "Contact Form is submitted successfully",
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
        “Reach Out to Us”
      </h2>
      <h4 className="text-center font-semibold text-xl my-8 text-info px-28">
        “We’re here to help you with any questions or concerns you may have.
        Whether you need assistance with our services, have a suggestion, or
        just want to share your farming story, we’d love to hear from you. Our
        dedicated team is always ready to assist you. Let’s sow the seeds of
        communication!”
      </h4>
      <form
        className="w-[70%] mx-auto"
        name="form"
        onSubmit={submitContactUs}
        ref={form}
      >
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

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Subject</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full input-info max-w-xs"
            name="subject"
          />
        </label>

        <label className="form-control mb-6">
          <div className="label">
            <span className="label-text">Message</span>
          </div>
          <textarea
            className="textarea textarea-bordered input-info h-24 "
            placeholder="Write your message"
            name="message"
          ></textarea>
        </label>
        <button className="btn btn-outline btn-info btn-wide mb-14">
          Send <FaArrowRight></FaArrowRight>
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
