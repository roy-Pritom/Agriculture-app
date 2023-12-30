import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import QuillEditor from "./QuillEditor";

const CreateProduct = () => {
    const [category, setCategory] = useState([])
    const subCategory = useLoaderData();
    const [content, setContent] = useState('');
    const [plainText, setPlainText] = useState('');
    
    useEffect(() => {
        // Whenever the content changes, strip the HTML tags and update the plainText state
        setPlainText(stripHtmlTags(content));
    }, [content]);
    
    // console.log(plainText);
    function stripHtmlTags(html) {
      let tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      return tempDiv.textContent || tempDiv.innerText || "";
    }
      

    useEffect(() => {

        fetch('http://localhost:5000/api/v1/get-category')
            .then(res => res.json())
            .then(dataCategory => setCategory(dataCategory.data))
    }, [])


    const createProduct = (event) => {
        event.preventDefault()
        const form = event.target
        const categoryName = form.category.value
        const subCategoryName = form.subCategory.value
        const productName = form.product.value;
        const payload = { name: productName, category: categoryName, subCategoryName: subCategoryName,details:plainText }

        fetch('http://localhost:5000/api/v1/create-product', {
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
                <div className="mt-10">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Create New Product!</h1>
                        <p className="py-6"></p>
                    </div>
                    <div className="card shrink-0  shadow-2xl bg-base-100  w-[700px]">
                        <form className="card-body" name="form" onSubmit={createProduct}>
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
                                    <span className="label-text">Select SubCategory Name</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs focus:outline-none" name="subCategory">
                                    <option disabled selected className="focus:outline-none" >SubCategory</option>
                                    {
                                        subCategory?.data?.map(item => <option key={item._id}>
                                            {item.name}
                                        </option>)
                                    }


                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Enter Product Name</span>
                                </label>
                                <input type="text" placeholder="Enter Product Name" name="product" className="input input-bordered focus:outline-none" required />
                            </div>
                            {/* product details */}


                            <div className="mb-14">
                                <label className="label">
                                    <span className="label-text">Enter Product Details</span>
                                </label>
                        
                                <QuillEditor value={content} onChange={setContent}  />
                                {/* <pre className="mt-4">{content}</pre> */}
                            </div>







                            <div className="form-control mt-5">
                                <button className="btn btn-primary">Create</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProduct;