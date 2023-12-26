import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { signIn, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/dashboard';
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setSuccess('')
        setError('')
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                setSuccess("Successfully Login !")
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => setError(error));
    }

    const handleGoogleSignIn = () => {
        setError('')
        setSuccess('')
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess("Successfully Login")
                navigate(from, { replace: true });

            })
            .catch(error => {
                setError(error.message)
            })
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img
            className=""
            src="https://i.ibb.co/82QdkVX/login-Photo.png"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-2xl text-center font-bold">Please Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-secondary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="text-center">
              <p className="text-center fw-semibold mt-4"> Or Sign in with</p>
              <hr className="my-3" />
            </div>
            <div className="flex justify-center items-center">
              <div>
                <button
                  onClick={handleGoogleSignIn}
                  className="font-semibold flex items-center gap-2 text-xl btn btn-outline btn-secondary"
                >
                  {" "}
                  <img
                    src="https://i.ibb.co/3T5SxcN/google.png"
                    style={{ height: "18px" }}
                    alt=""
                  />{" "}
                  Google
                </button>
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="font-semibold">
                Do not have an account? 
                <Link to="/auth/register" className="text-secondary">
                  Please Register
                </Link>
              </p>
            </div>

            <p className="text-green-500 text-center">{success}</p>
            <p className="text-red-600 text-center">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
