import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="max-w-md mx-auto shadow-2xl rounded-lg ">
      <form className="p-5">
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
              <Input type="text" placeholder="John Doe" />
            </div>

            {/* Email */}
            <div>
              <label>Email</label>
              <Input type="text" placeholder="john@gmail.com" />
            </div>

            {/* Phone Number */}
            <div>
              <label>Phone Number</label>
              <Input type="text" placeholder="XXXXXXXX01" />
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

            {/* File */}
            <div>
              <label>Profile</label>
              <Input type="file" accept="image/*" />
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
