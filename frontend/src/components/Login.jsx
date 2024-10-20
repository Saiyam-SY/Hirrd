import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-md mx-auto shadow-2xl rounded-lg ">
      <form className="p-5">
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
              <Input type="text" placeholder="john@gmail.com" />
            </div>

            {/* Password */}
            <div>
              <label>Password</label>
              <Input type="password" placeholder="********" />
            </div>

            {/* Radio */}
            <div>
              <div>
                <input type="radio" name="role" id="student" />
                <label className="ml-2">Student</label>
              </div>
              <div>
                <input type="radio" name="role" id="recruiter" />
                <label className="ml-2">Recruiter</label>
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
