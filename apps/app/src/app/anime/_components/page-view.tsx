'use client';
import Lottie from 'lottie-react';
import animationData from './Animation LottieFiles.json';

export function PageView() {
  return (
    <main className="pt-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto space-y-32 flex justify-center items-baseline">
        <Lottie animationData={animationData} loop={true} />
        <Lottie animationData={animationData} loop={true} />
        <Lottie animationData={animationData} loop={true} />
        <Lottie animationData={animationData} loop={true} />
        <Lottie animationData={animationData} loop={true} />
        <Lottie animationData={animationData} loop={true} />
        <Lottie animationData={animationData} loop={true} />
        <Lottie
          animationData={animationData}
          loop={true}
          className="transform scale-x-[-1]"
        />
      </div>
      <div className="max-w-6xl mx-auto space-y-32 flex justify-center items-baseline">
        <Lottie animationData={animationData} loop={true} />
        <Lottie animationData={animationData} loop={true} />
        <Lottie animationData={animationData} loop={true} />
        <Lottie animationData={animationData} loop={true} />
        <Lottie animationData={animationData} loop={true} />
        <Lottie animationData={animationData} loop={true} />
        <Lottie animationData={animationData} loop={true} />
        <Lottie
          animationData={animationData}
          loop={true}
          className="transform scale-x-[-1]"
        />
      </div>
    </main>
  );
}
