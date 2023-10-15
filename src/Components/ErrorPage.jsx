import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="max-w-5xl mx-auto px-20">
              <Link className="flex items-center space-x-4 mt-12" to="/">
        <AiOutlineArrowLeft />
        <h1 className="font-Rancho text-3xl text-[#374151]"> Back to home </h1>
      </Link>
            <img src="https://i.ibb.co/N7LTKV8/404.gif" alt="" />
        </div>
    );
};

export default ErrorPage;