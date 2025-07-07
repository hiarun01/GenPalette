import React from "react";
import {NavLink} from "react-router-dom";
import {Button} from "./ui/button";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-5 py-10 md:py-10 text-center bg-white from-white via-gray-50 to-gray-100 rounded-xl ">
      {/* Main heading */}
      <h1 className="md:text-6xl text-3xl font-extrabold tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
        Let AI Paint Your Imagination
      </h1>
      {/* Subtext */}
      <div className="max-w-2xl mx-auto mb-10 text-lg text-gray-600">
        <p>
          Just say the mood, scene, or style and get beautiful, ready-to-use
          color palettes in seconds.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <NavLink to="/dashboard">
          <Button className="inline-flex text-lg items-center gap-2 rounded-md border px-8 py-5 text-white font-semibold shadow transition">
            Discover
          </Button>
        </NavLink>
      </div>
    </section>
  );
};

export default HeroSection;
