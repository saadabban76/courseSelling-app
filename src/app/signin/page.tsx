"use client";

import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React from "react";
import { GET } from "../api/hello/route";

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
          Welcome to Coursera. Sign In below
        </h1>
      </div>
      <div className="pt-7 inherit flex flex-col items-center gap-0">
        <div
          className="xl:w-[500px] flex flex-col items-center w-full 
       sm:w-[600px]"
        >
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <br />
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="password">Password</label>
            <Input type="password" id="password" placeholder="password" />
          </div>
          <div className="ml-28 self-start text-gray-300">
            <p className="mt-4 self-start">
              Not Register ?
              <span
                // FormAction={() => {

                // }}
                className="cursor-pointer text-[1.2rem] text-blue-500 ml-2"
              >
                Sign Up
              </span>
            </p>
          </div>
          <br></br>
        </div>

        <Button
          //   size={"large"}
          className="bg-blue-400 px-8 text-white hover:text-black"
          variant="secondary"
          onClick={async () => {
            let response  = await fetch("/api/hello", {
              method: "POST",
              body: JSON.stringify({
                name: "saad",
                age: 24,
              }),
            });
            if (response) {
              const data = await response.json();
              console.log('data : ', data.body);
            }
            // console.log("hi : ", hi.json().then(data=> data));
            // .then((res) =>
            //   res.json().then((data) => {
            //     console.log("data : ", data);
            //   })
            // )
            // .catch((err) => console.log(err));
            // console.log('hello : ', hi.text);
            // const response = await axios.post(`${BASE_URL}/admin/signup`, {
            //   username: email,
            //   password: password,
            // });
            // let data = response.data;
            // localStorage.setItem("token", data.token);
            // setUser({ userEmail: email, isLoading: false });
            // router.push("/courses");
          }}
        >
          {" "}
          Signin
        </Button>
      </div>
    </main>
  );
};

export default page;
