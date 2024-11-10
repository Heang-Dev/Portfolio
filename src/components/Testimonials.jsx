import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!",
    },
    {
      id: 3,
      name: "Sarah Thompson",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!",
    },
    {
      id: 4,
      name: "David Rodriguez",
      rating: 5,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!",
    },
    {
      id: 5,
      name: "Lisa Patel",
      rating: 4,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!",
    },
  ];

  return (
    <section id="testimonials" className="relative py-10 bg-gray-100">
      <h1 className="pt-5 text-2xl font-bold text-center text-red-500 lg:text-4xl font-dynapuff">
        What our Customer Say
      </h1>
      <div className="max-w-6xl px-5 py-10 mx-auto">
        <Swiper
          style={{
            "--swiper-pagination-color": "#EF4444",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          }}
          className="relative mySwiper"
        >
          {testimonials.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col p-4 mb-20 border border-gray-400 rounded-lg shadow-md shadow-red-500">
                  {item.rating === 4 ? (
                    <div className="flex">
                      <Star fill="true" />
                      <Star fill="true" />
                      <Star fill="true" />
                      <Star fill="true" />
                      <Star />
                    </div>
                  ) : (
                    <div className="flex">
                      <Star fill="true" />
                      <Star fill="true" />
                      <Star fill="true" />
                      <Star fill="true" />
                      <Star fill="true" />
                    </div>
                  )}
                  <p className="py-3">{item.text}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-red-500">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm">CEO, Example Company</p>
                    </div>
                    <Quote className="text-red-400" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className="relative gap-1 swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
