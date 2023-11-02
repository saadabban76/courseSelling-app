import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BackButton from "@/components/BackButton";
// import { Label } from "@/components/ui/label";

const page = () => {
  return (
    <main className="bg-[#191919] h-[100vh]">
      <BackButton />
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1 className="w-[420px] xl:w-[500px] text-center font-bold xl:text-[2.6rem] text-[2.3rem]">
          Welcome to Coursera. Sign up below
        </h1>
      </div>
      <div className="pt-7 inherit flex flex-col items-center gap-0">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label htmlFor="email">Email</label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <br />
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <label htmlFor="password">Password</label>
          <Input type="password" id="password" placeholder="password" />
        </div>
        <br />
        <br />

        <Button
          //   size={"large"}
          className="bg-blue-400 px-8 text-white hover:text-black"
          variant="secondary"
          //   onClick={async () => {
          //     const response = await axios.post(`${BASE_URL}/admin/signup`, {
          //       username: email,
          //       password: password,
          //     });
          //     let data = response.data;
          //     localStorage.setItem("token", data.token);
          //     // window.location = "/"
          //     setUser({ userEmail: email, isLoading: false });
          //     router.push("/courses");
          //   }}
        >
          {" "}
          Signup
        </Button>
      </div>
    </main>
  );
};

export default page;
