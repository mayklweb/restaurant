"use client";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-screen overflow-hidden flex items-center">
        <video className="w-full object-cover" autoPlay loop muted src="/banner.mp4"></video>
      </div>
      <div></div>
    </div>
  );
}
