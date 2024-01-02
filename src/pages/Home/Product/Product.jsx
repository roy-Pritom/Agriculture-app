import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div className="text-center mt-16">
        <h2 className="font-bold text-2xl lg:text-5xl text-info">Explore Our Products</h2>
        <p className="mt-5 mb-7 mx-auto px-4 lg:px-7">
          Discover the finest in agriculture with our premium selection. From
          succulent organic tomatoes to wholesome golden wheat flour, each
          product is a testament to quality. Indulge in the richness of raw
          honey, farm-fresh organic eggs, and handpicked green tea leaves.
          Nourish your body with nutrient-packed organic kale, fresh
          strawberries, pure lavender oil. Elevate your meals with versatile
          organic quinoa and enjoy the crunch of roasted sunflower seeds.
          Experience nature is bounty in every bite – freshness and vitality
          delivered to your table.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-items-center mt-8">
        <div className="card w-72 bg-base-100 shadow-2xl mt-8">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/side-view-tomatoes-spilling-out-sack-right-side-wooden-table-with-copy-space_141793-10976.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.1.1999469744.1683008976&semt=ais"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Organic Tomatoes</h2>
            <p>
              Premium organic tomatoes, cultivated without synthetic pesticides,
              ensuring healthy choice for your kitchen.
            </p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-2xl mt-8">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/ingredient-bag-full-flour_23-2149482592.jpg?w=740&t=st=1703919096~exp=1703919696~hmac=6c3843d645169b2572b16e5f35c5feb5c205269523c3b9290cb022eefeaf0707"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Golden Wheat Flour</h2>
            <p>
              Stone-ground golden wheat flour, rich in nutrients, perfect for
              baking wholesome and nutritious bread.
            </p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-2xl mt-8">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/delicious-honey-dark-surface_1150-42249.jpg?w=740&t=st=1703919233~exp=1703919833~hmac=06fc084ae65c29ecce00bdb3b00294e88560577ebfc6399c9c0c79819d53101f"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pure Honey</h2>
            <p>
              Unfiltered and raw pure honey, harvested from local bee farms,
              offering natural sweetness and numerous health benefits.
            </p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-2xl mt-8">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/bowl-eggs-yolk-shell-piece-cloth-marble-table_114579-45377.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.1.1999469744.1683008976&semt=ais"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Fresh Organic Eggs</h2>
            <p>
              Farm-fresh organic eggs, laid by free-range hens, providing a rich
              source of protein and essential nutrients.
            </p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-2xl mt-8">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/close-up-green-leaves-nature_23-2149006020.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.1.1999469744.1683008976&semt=ais"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Green Tea Leaves</h2>
            <p>
              Handpicked green tea leaves, carefully selected for their
              freshness, delivering antioxidant-rich tea experience.
            </p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-2xl mt-8">
          <figure>
            <img
              src="https://img.freepik.com/premium-photo/fresh-kale-sack-wood-background_66899-1943.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.1.1999469744.1683008976&semt=ais"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Organic Kale</h2>
            <p>
              Nutrient-packed organic kale, perfect for salads and smoothies,
              promoting a healthy and balanced diet.
            </p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-2xl mt-8">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/fresh-strawberries-bowl-wooden-table_1150-37962.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.1.1999469744.1683008976&semt=ais"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Fresh Strawberries</h2>
            <p>
              Juicy and sweet fresh strawberries, grown with care, offering a
              burst of flavor and essential vitamins.
            </p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-2xl mt-8">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/high-angle-natural-medicine-concept_23-2148579415.jpg?size=626&ext=jpg&uid=R101321192&ga=GA1.1.1999469744.1683008976&semt=ais"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Aromatic Lavender Oil</h2>
            <p>
              Pure and aromatic lavender oil, extracted from organically grown
              lavender flowers, ideal for aromatherapy and relaxation.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link to="/allproducts">
          <button className="btn btn-wide">
            View All Products <FaArrowRight></FaArrowRight>{" "}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Product;
