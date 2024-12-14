'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const TopWinnersSlider = ({ top }) => {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg shadow-lg">
      <h1 className="text-xl font-bold text-center text-indigo-700 mb-6">
        TOP FIVE REWARDS WINNER OF THE MONTH
      </h1>
      {top && top.length > 0 ? (
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1} // Adjust based on how many cards you want visible
          className="w-full"
        >
          {top.map((item, index) => (
            <SwiperSlide key={item._id}>
              <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center text-center">
                {/* Rank */}
                <span className="text-indigo-600 font-bold text-lg">
                  #{index + 1}
                </span>

                {/* Name */}
                <p className="text-gray-700 font-medium text-xl mt-2">
                  {item.USER_INFO.username}
                </p>

                {/* Avatar and Coins */}
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-3xl">🪙</span>
                  <span className="text-gray-800 font-semibold text-xl">
                    {item.COINS || 0}
                  </span>
                </div>

                {/* Reward */}
                <span className="text-green-600 font-bold text-2xl mt-4">
                  ₹ {item.REWARD || 200}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-500 font-medium">
          No top winners yet!
        </p>
      )}
    </div>
  );
};

export default TopWinnersSlider;
