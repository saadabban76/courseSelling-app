import React from "react";
import { Button } from "./ui/button";

const AuthButtons = () => {
  return (
    <div className="space-x-2">
      <Button className="bg-blue-300 hover:text-white text-black px-7 rounded-lg">
        Sign Up
      </Button>
      <Button
        className="bg-red-300 px-7 text-white rounded-lg"
        variant={"destructive"}
      >
        Sign In
      </Button>
    </div>
  );
};

export default AuthButtons;
