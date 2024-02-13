"use client"
import React from 'react'
import Lottie from "lottie-react";
import heart from "@/public/heart.json";

function HeartAnimation() {
  return (
    <div className='absolute z-0 top-0'>
    <Lottie animationData={heart} loop={true} />
    </div>
  )
}

export default HeartAnimation