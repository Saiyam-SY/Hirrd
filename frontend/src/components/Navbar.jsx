import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogOut, User2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  return (
    <nav className="flex justify-between items-center">
      {/* Left */}
      <div>
        <Link to={"/"}>
          <img src="/logo-dark.png" alt="logo-img" className="h-16" />
        </Link>
      </div>

      {/* Right */}
      <div className="flex gap-7 items-center">
        <ul className="flex gap-7 text-md font-semibold">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Job</Link>
          </li>
          <li>
            <Link to={"/"}>Browse</Link>
          </li>
        </ul>
        {user ? (
          <Popover>
            <PopoverTrigger>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h1 className="text-lg font-semibold cursor-pointer">
                      Saiyam Yadav
                    </h1>
                    <p className="text-muted-foreground tracking-tight">
                      Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </p>
                  </div>
                </div>
                <hr />
                <div className="flex flex-col items-start">
                  <div className="flex items-center">
                    <User2 />
                    <Button variant="link">View Profile</Button>
                  </div>
                  <div className="flex items-center">
                    <LogOut />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          <div className=" flex gap-4">
            <Link to={"/login"}>
              <Button variant="outline">Login</Button>
            </Link>
            <Link to={"/signup"}>
              <Button>SignUp</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
