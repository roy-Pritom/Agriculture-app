import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser, googleSignIn,logOut } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const photo = form.photo.value;
        console.log(name, email, password,);

        if (!/(?=.[0-9].[0-9])/.test(password)) {
            return setError(" Ensure string has two digits")
        }
        else if (password.length < 6) {
            return setError("Ensure Password length is 6");
        }
        setSuccess('')
        setError('')
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                update(user, name);
                setError('')
                setSuccess("Successfully Login !")
                form.reset()
                logOut();
                navigate('auth/login')

            })
            .catch(error => setError(error))
    }

    const handleGoogleSignIn = () => {
        setError('')
        setSuccess('')
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess("Successfully Login")
                navigate('/');

            })
            .catch(error => {
                setError(error.message)
            })
    }

    const update = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img className="" src="https://i.ibb.co/82QdkVX/login-Photo.png" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-2xl text-center font-bold">Please Sign Up</h2>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                            </div> */}
                            <div className="form-control mt-6">
                                <input className="btn btn-secondary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div className='text-center'>
                            <p className='text-center fw-semibold mt-4'> Or Sign up with</p>
                            <hr className="my-3" />
                        </div>
                        <div className='flex justify-center items-center'>
                            <div>
                                <button onClick={handleGoogleSignIn} className="font-semibold flex items-center gap-2 text-xl btn btn-outline btn-secondary"> <img src="https://i.ibb.co/3T5SxcN/google.png" style={{ height: "18px" }} alt="" /> Google</button>
                            </div>
                        </div>
                        <div className='text-center mt-3'>
                            <p className='font-semibold'>Already have an account?<Link className="text-secondary" to="/auth/login"> Please Login</Link> </p>
                        </div>
                        <p className='text-secondary text-center'>{success}</p>
                        <p className='text-secondary text-center'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;