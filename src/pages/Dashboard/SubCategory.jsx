import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const SubCategory = () => {
    const [category, setCategory] = useState([])


    useEffect(() => {

        fetch('http://localhost:5000/api/v1/get-category')
            .then(res => res.json())
            .then(dataCategory => setCategory(dataCategory.data))
    }, [])


    const createSubCategory = (event) => {
        event.preventDefault()
        const form = event.target
        const categoryName = form.category.value
        const subCategoryName = form.sub.value
        console.log(categoryName, subCategoryName);
        const payload = {subCategoryName: subCategoryName, category: categoryName }

        fetch('http://localhost:5000/api/v1/create-SubCategory', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            // eslint-disable-next-line no-unused-vars
            .then(data => {

                if (data.success === true) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Sub Category created successfully",
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
                        <form className="card-body" name="form" onSubmit={createSubCategory}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Select Category Name</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs focus:outline-none" name="category">
                                    <option disabled selected className="focus:outline-none" >Category</option>
                                    {
                                        category?.map(item => <option key={item._id}>
                                            {item.category}
                                        </option>)
                                    }


                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub Category Name</span>
                                </label>
                                <input type="text" placeholder="enter sub category" name="sub" className="input input-bordered focus:outline-none"  required />
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

export default SubCategory;