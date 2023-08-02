import { Banner } from "../../components/Banner";
import { About } from "../../components/AboutUs";
import { Products } from "../../components/Products";

const Home = () => {
    return (
        <div className="border-green-500 border-solid">
            <Banner />
            <Products />
            <About />
        </div>
    )
}

export default Home;