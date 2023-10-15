import { Link } from "react-router-dom";


const Signup = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        const newUser = { name, email, password };
        console.log(newUser);
    }
    return (
        <div>
            <section className="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
    <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
      <div className="md:w-1/2 px-5">
        <h2 className="text-2xl font-bold text-[#002D74]">Sign Up</h2>
        <p className="text-sm mt-4 text-[#002D74]">If you have an account, please login</p>
        
        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">User Name</label>
            <input type="text" name="name" placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="name" required/>
          </div>

          <div>
            <label className="block text-gray-700">Email Address</label>
            <input type="email" name="email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="email" required/>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" name="password" id="" placeholder="Enter Password" minLength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" autoComplete="current-password" required/>
          </div>

          <div className="text-right mt-2">
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
          </div>

          <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Sign Up</button>
        </form>


        <div className="text-sm flex justify-between items-center mt-3">
          <p>Already have an account?</p>
          <Link to='/signin'>
          <button className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400 ">Sign In</button>
          </Link>
        </div>
      </div>

      <div className="w-1/2 md:block hidden mt-32">
        <img src="https://i.imgur.com/c5U0Ft1.png" className="rounded-2xl" alt="page img"/>
      </div>

    </div>
  </section>
        </div>
    );
};

export default Signup;