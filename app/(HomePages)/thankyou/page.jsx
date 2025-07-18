"use client";
import React, { useEffect, useState } from "react";
import Header from "../../dashboard/_components/Header";
import Footer from "../Footer";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { FiCheckCircle } from "react-icons/fi"; // Success icon from react-icons

const ThankYouPage = () => {
  return (
    <>
      <Header />
      <div className="bg-black min-h-screen text-gray-100">
        <div className="flex flex-col items-center justify-center h-full py-20 space-y-8">
          <div className="text-center">
            <FiCheckCircle className="text-white mx-auto mb-4 text-7xl animate-pulse" />
            <h1 className="text-4xl font-extrabold text-white mb-4">
              Thank You!
            </h1>
            <p className="text-lg text-white max-w-lg mx-auto mb-6">
              We appreciate your interest. Enjoy using VirtueHireX!
            </p>
            <Link href={"/"} passHref>
              <Button
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-800 text-white text-xl font-semibold rounded-full shadow-xl transition-all duration-300"
              >
                Go to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThankYouPage;
