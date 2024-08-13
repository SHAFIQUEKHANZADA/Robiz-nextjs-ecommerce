"use client";

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestSellingCard from './BestSellingCard';
import { useAppSelector } from '@/app/store/hooks';

const FeaturedProduct = () => {
    //data
    // const bestSell = [
    //     {
    //       src: "/pic/f1.webp",
    //       alt: "Polo",
    //       title: "Half Sleeves Cotton Shirt",
    //       description: "Wash with like colors, wash inside out, low tumble dry.",
    //       price: 29,
    //       discount: 10,
    //       category: "shirts",
    //       product: "check-shirt",
    //     },
    //    {
    //       src: "/pic/fa5.jpg",
    //       alt: "watch",
    //       title: "SV-BULLSTON-3.0-M-8",
    //       description:
    //         "Sveston Bullston Is a Gents Stainless-Steel Watch Having 39mm Dial and Comes with Luxury Watch Case.",
    //       price: 200,
    //       discount: 32,
    //       category: "watches",
    //       product: "sv-bullston",
    //     },
    //     {
    //         src: "/pic/fa2.webp",
    //         alt: "jeans",
    //         title: "SLIM-STRAIGHT STRETCH JEANS",
    //         description: "Tried and true, denim is a classic staple of the vintage aesthetic.",
    //         price: 46,
    //         category: "jeans",
    //         discount: 29,
    //         product: "blue-jeans",
    //       },
    //     {
    //       src: "/pic/f4.jpg",
    //       alt: "shoes",
    //       title: "Men's Dual Colored Lace-ups",
    //       description:
    //         "This fit is perfect for pairing with casual t-shirts or with your gym outfit.",
    //       price: 310,
    //       category: "shoes-for-men",
    //       discount: 17,
    //       product: "sneakers",
    //     },
    //   ];
    const pro = useAppSelector((state) => state.products)
    const bestSell = pro.slice(8, 15)
      //2nd
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              arrows: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: true,
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            }
          }
        ]
      };
  return (
    <div className="mb-[100px] mt-[100px]"> 
    <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl capitalize">
          Featured Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* carosel */}
      <Slider {...settings}>
      {bestSell.map((items: any, i) => (
          <BestSellingCard
            key={i}
            src={items.image[0]}
            alt={items.title}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.category}
            product={items.product}
            discount={items.discount}
          />
        ))}
      </Slider>
    </div>
  )
}

export default FeaturedProduct