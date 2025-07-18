"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";
import { LoaderCircle } from "lucide-react";
import Head from "next/head";
import { motion } from "framer-motion";

// Pricing Plan Component
const PricingPlan = ({ title, price, features }) => {
  return (
    <motion.div
      className={`relative p-8 rounded-3xl transition-all transform bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 backdrop-blur-xl shadow-neumorph flex flex-col justify-between m-6 space-y-6 hover:scale-105 hover:shadow-xl hover:shadow-lg`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-3xl font-semibold mb-4">{title}</h3>
      <p className="text-4xl font-bold mb-6">₹{price}/month</p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.293 5.293a1 1 0 011.414 1.414L9 14.414l-4-4a1 1 0 011.414-1.414L9 11.586l7.293-7.293z"
                clipRule="evenodd"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Button
          className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg shadow-xl focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
        >
          Get Started
        </Button>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <div className="dark bg-black mb-50 text-gray-100 mt-20">
      <Head>
        <title>Pricing</title>
      </Head>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Choose Your Plan</h1>
        <div className="flex flex-row flex-wrap justify-center">
          <PricingPlan
            title="Basic"
            price={0}
            features={["Access to free content", "Basic support"]}
          />
          <PricingPlan
            title="Premium"
            price={499}
            features={[
              "Access to premium content",
              "Priority support",
              "AI-powered tools",
            ]}
          />
          <PricingPlan
            title="Pro"
            price={999}
            features={[
              "Everything in Premium",
              "Advanced analytics",
              "One-on-one mentorship",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
