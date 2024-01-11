import { useEffect, useState } from "react";

const Contact = () => {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/get-contacts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setDataArray(data.data);
      });
  });

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/v1/contact/${id}`,{
        method: 'DELETE',
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        if(data.success){
            setDataArray(dataArray.filter((data)=> data._id == id))
        }else{
            console.error('Failed to delete contact:', data.message);
        }
    })
  }
  

  return (
    <div className="flex flex-col gap-24">
      {dataArray.map((data) => (
        <div key={data._id}>
          <div className="ml-[600px] card w-96 glass bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">{data.name}</h2>
              <h2 className="card-title">{data.email}</h2>
              <p>Subject: {data.subject}</p>
              <p>Message: {data.message}</p>
            </div>
            <div className="card-actions justify-end">
              <button onClick={() => handleDelete(data._id)} className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
