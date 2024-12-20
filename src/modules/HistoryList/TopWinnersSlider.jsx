import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const getRandomImage = async () => {
    try {
      const response = await fetch("https://source.unsplash.com/random/96x96");
      return response.url;
    } catch (error) {
      console.error("Failed to fetch random image:", error);
      return null;
    }
  };


const TopWinnersSlider = ({ top }) => {

    const [profileImages, setProfileImages] = useState([]);

    

  
  const calculateRs = (coins)=>{       
    return  (coins/10)*1
  }

  
  
   
    return (
    <div className="p-6 dark:bg-pink border rounded-lg p-6 my-4 from-blue-50 to-indigo-100 rounded-lg shadow-lg">
   
      {top && top.length > 0 ? (
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1} // Adjust for the number of visible cards
          className="w-full"
        >
          {top.map((item, index) => (
            <SwiperSlide key={item._id}>
              <div className="bg-white dark:bg-black shadow-md p-6 rounded-lg flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-600 shadow-md">
                  <img
                   src={item?.USER_INFO?.profilePic || "https://via.placeholder.com/96"}
                    alt={`${item.USER_INFO.username}'s Profile`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Rank */}
                <span className="text-indigo-600 dark:text-white font-bold text-lg mt-4">
                  #{index + 1}
                </span>

                {/* Name */}
                <p className="text-gray-700 dark:text-white font-medium text-xl mt-2">
                  {item.USER_INFO.username}
                </p>

                {/* Avatar and Coins */}
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-3xl">🪙</span>
                  <span className="text-gray-800 dark:text-white font-semibold text-xl">
                    {item.COINS || 0}
                  </span>
                </div>

                {/* Reward */}
                <span className="text-green-600  font-bold text-2xl mt-4">
                  ₹ {calculateRs(item.COINS)}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-500 dark:text-white font-medium">
          No top winners yet!
        </p>
      )}
    </div>
  );
};

export default TopWinnersSlider;
