import Swal from "sweetalert2";

const Category = () => {

  const handleCategory=(e)=>{
    e.preventDefault();
    const form=e.target;
    const category=form.category.value;
    const data={
      category:category
    }
    fetch('http://localhost:5000/api/v1/create-category',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.success === true) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Category created successfully",
            showConfirmButton: false,
            timer: 1500
        });
    }
    })

  }
    return (
        <div>
       <div className="hero min-h-screen bg-base-200">
  <div className=" ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Create Sub Category!</h1>
      <p className="py-6"></p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" name="form" onSubmit={handleCategory}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Category Name</span>
          </label>
          <input  placeholder="category" className="input input-bordered focus:outline-none" name="category" required />
        </div>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Select subCategory Name</span>
          </label>
          <input  placeholder="subCategory" className="input input-bordered" required />
          
        </div> */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  </div>
</div>


        </div>
    );
};

export default Category;