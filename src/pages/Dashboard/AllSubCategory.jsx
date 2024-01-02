import { useLoaderData } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
const AllSubCategory = () => {

    const data = useLoaderData();
    console.log(data);


    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead >
                    <tr>
                        <th className="font-bold text-lg">
                            #
                        </th>
                        <th className="font-bold text-lg">SubCategory Name</th>
                        <th className="font-bold text-lg">Category</th>
                        <th className="font-bold text-lg">Created At</th>
                        <th className="font-bold text-lg">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        data?.data?.map((item, i) => <tr
                            key={item?._id}>
                            <td>
                                {i + 1}
                            </td>
                            <td>
                                {item?.subCategoryName}
                            </td>
                            <td>
                                {item?.category}
                            </td>
                            <td>{item.createdAt}</td>
                            <th>
                                <button className="btn btn-square btn-outline bg-red-500 border-none">
                                <FaRegTrashAlt className="text-white h-12" />

                                </button>
                            </th>
                        </tr>)
                    }


                </tbody>


            </table>
        </div>
    );
};

export default AllSubCategory;