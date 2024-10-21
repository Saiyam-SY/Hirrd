import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInputData({ ...inputData, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(inputData);

    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, inputData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/");
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
            <h4 className="text-xl font-bold">Login!</h4>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-3">
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

            {/* Submit */}
            <Button className="mt-3">Login</Button>
            <span>
              Don't have an accoount?
              <Link
                to={"/signup"}
                className="font-semibold text-blue-600 px-2 hover:underline"
              >
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
