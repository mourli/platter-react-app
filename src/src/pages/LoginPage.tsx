import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../_utils/store"
import { ButtonLoader } from '../components/ui-parts/ButtonLoader';

interface LoginModel {
    username: string,
    password: string
}

export const LoginPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { username, isLoggedin } = useSelector((state: any) => state.authUser)

    //FORM
    //form schema
    //const [user] = useAuthState(auth);
    const [laoding, setLaoding] = useState(false);

    const schema = yup.object().shape({
        username: yup.string().max(30).required(),
        password: yup.string().max(30).required()
    });


    const { register, reset, setValue, handleSubmit, formState: { errors } } = useForm<LoginModel>({
        resolver: yupResolver(schema)
    });
    //FORM END

    const onSubmitForm = (data: LoginModel) => {
        //call login API here
        setLaoding(true);
        setTimeout(() => {
            dispatch(login({ username: "mukund", email: "mukund@mukund.com", phoneNumber: "98798798798", profilePhoto: "../asstes/images/undraw_profile_1", isLoggedin: true, roles: ["user"] }));
            reset();
            navigate("/");
            setLaoding(false);
        }, 2000);

    }

    return (
        <div className="bg-gradient-primary" style={{ height: "100vh" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">

                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form onSubmit={handleSubmit(onSubmitForm)} className="user">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-user"
                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                        placeholder="Enter Email Address..." {...register("username")} />
                                                    <span className="invalid-feedback"> {errors.username?.message}</span>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        id="exampleInputPassword" placeholder="Password" {...register("password")} />
                                                    <span className="invalid-feedback">{errors.password?.message}</span>
                                                </div>

                                                <button type="submit" className="btn btn-primary btn-user btn-block">
                                                    Login <ButtonLoader loading={laoding} />
                                                </button>
                                                <hr />
                                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </a>
                                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </a>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="register.html">Create an Account!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
