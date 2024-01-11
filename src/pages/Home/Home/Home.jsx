import Banner from "../Banner/Banner";
import Farm from "../Farm/Farm";
import GetFeedback from "../GetFeedback/GetFeedback";
import Products from "../Product/Product";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Farm></Farm>
            <GetFeedback></GetFeedback>
        </div>
    );
};

export default Home;