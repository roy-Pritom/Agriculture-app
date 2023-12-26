
const Category = () => {
    return (
        <div>
       <div className="hero min-h-screen bg-base-200">
  <div className=" ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Create Sub Category!</h1>
      <p className="py-6"></p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Select Category Name</span>
          </label>
          <input  placeholder="category" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Select subCategory Name</span>
          </label>
          <input  placeholder="subCategory" className="input input-bordered" required />
          
        </div>
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