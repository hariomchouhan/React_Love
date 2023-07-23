import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };

    const finalData = {
        ...accountData,
        accountType,
    }
    console.log("printing account data");
    console.log(finalData);

    navigate("/dashboard");
  };
  return (
    <div>
      {/* Student-Instructor tab */}
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max" style={{boxShadow: 'rgba(255, 255, 255, 0.18) 0px -1px 0px inset'}}>

        <button onClick={() => setAccountType("student")}
        className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        >
            Student
            </button>

        <button onClick={() => setAccountType("instructor")}
         className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        >
            Instructor
            </button>

      </div>

      <form onSubmit={submitHandler}>
        {/* first name and last name */}
        <div className="flex justify-between mt-[20px] gap-2">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              style={{boxShadow: 'rgba(255, 255, 255, 0.18) 0px -1px 0px inset'}}
            />
          </label>

          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              style={{boxShadow: 'rgba(255, 255, 255, 0.18) 0px -1px 0px inset'}}
            />
          </label>
        </div>

        {/* Email Address */}
        <div className="mt-[20px]">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="email"
              required
              name="email"
              onChange={changeHandler}
              placeholder="Enter email id"
              value={formData.email}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              style={{boxShadow: 'rgba(255, 255, 255, 0.18) 0px -1px 0px inset'}}
            />
          </label>
        </div>

        {/* Password and Confirm Password */}
        <div className="flex justify-between mt-[20px] gap-2">
          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              style={{boxShadow: 'rgba(255, 255, 255, 0.18) 0px -1px 0px inset'}}
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] cursor-pointer"
            >
              {showPassword ? (
                <AiFillEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiFillEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Enter confirmPassword"
              value={formData.confirmPassword}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              style={{boxShadow: 'rgba(255, 255, 255, 0.18) 0px -1px 0px inset'}}
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] cursor-pointer"
            >
              {showPassword ? (
                <AiFillEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiFillEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className=" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
