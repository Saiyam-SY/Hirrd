import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { USER_API_END_POINT } from "@/const/constant";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Signup = () => {
  const [inputData, setInputData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInputData({ ...inputData, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(inputData);

    const formData = new FormData();
    formData.append("fullName", inputData.fullName);
    formData.append("email", inputData.email);
    formData.append("phoneNumber", inputData.phoneNumber);
    formData.append("password", inputData.password);
    formData.append("role", inputData.role);
    if (inputData.file) {
      formData.append("file", inputData.file);
    }
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="max-w-md mx-auto shadow-2xl rounded-lg">
      <form onSubmit={submitHandler} className="p-5">
        <div className="flex flex-col gap-4">
          {/* Form title */}
          <div>
            <h4 className="text-xl font-bold">Sign Up!</h4>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-3">
            {/* FullName */}
            <div>
              <label>Fullname</label>
              <Input
                type="text"
                value={inputData.fullName}
                name="fullName"
                onChange={changeEventHandler}
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label>Email</label>
              <Input
                type="text"
                value={inputData.email}
                name="email"
                onChange={changeEventHandler}
                placeholder="john@gmail.com"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label>Phone Number</label>
              <Input
                type="text"
                value={inputData.phoneNumber}
                name="phoneNumber"
                onChange={changeEventHandler}
                placeholder="XXXXXXXX01"
              />
            </div>

            {/* Password */}
            <div>
              <label>Password</label>
              <Input
                type="password"
                value={inputData.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="********"
              />
            </div>

            {/* Radio */}
            <div>
              <div>
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={inputData.role === "student"}
                  onChange={changeEventHandler}
                  id="student"
                  className="cursor-pointer"
                />
                <label htmlFor="student" className="ml-2 cursor-pointer">
                  Student
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={inputData.role === "recruiter"}
                  onChange={changeEventHandler}
                  id="recruiter"
                  className="cursor-pointer"
                />
                <label htmlFor="recruiter" className="ml-2 cursor-pointer">
                  Recruiter
                </label>
              </div>
            </div>

            {/* File */}
            <div>
              <label>Profile</label>
              <Input
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
                className="cursor-pointer"
              />
            </div>

            {/* Submit */}
            <Button className="mt-3">Sign up</Button>
            <span>
              Already have an accoount?
              <Link
                to={"/login"}
                className="font-semibold text-blue-600 px-2 hover:underline"
              >
                Login
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
