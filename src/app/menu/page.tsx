import Image from "next/image";
import React from "react";

function Menu() {
  return (
    <div>
      <div className="container">
        <div>
          <h1 className="text-4xl text-black font-semibold">MENU</h1>
        </div>
        <div className="mt-10">
          <div>
            <div className="py-4 border-y-[1px] border-[#B2B2B2] border-solid">
              <h3 className="text-2xl text-black font-semibold">
                ALL DAY SIGNATURE COCKTAILS
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-10 mt-5">
              <div>
                <div>
                  <Image
                    src="https://static.wixstatic.com/media/a40f43_5c408c6ce8b84b3a8d8eda1ce1c99ce1~mv2.jpg/v1/fill/w_520,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a40f43_5c408c6ce8b84b3a8d8eda1ce1c99ce1~mv2.jpg"
                    alt="menu1"
                    width={520}
                    height={520}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-5">
                  <h5 className="text-lg text-black font-semibold">YARRA SPRITZ</h5>
                  <p className="mt-2.5 text-xs text-[#979797]">Strawberry Gum Aperol / Lemon Balm Vodka / Strawberry Sparkling Wine</p>
                  <p className="mt-2.5 text-xs text-[#979797]">THB 360</p>
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src="https://static.wixstatic.com/media/a40f43_9284af6c0f374761ae81ed0d28cba43e~mv2.jpg/v1/fill/w_836,h_836,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a40f43_9284af6c0f374761ae81ed0d28cba43e~mv2.jpg"
                    alt="menu1"
                    width={520}
                    height={520}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-5">
                  <h5 className="text-lg text-black font-semibold">YARRA SPRITZ</h5>
                  <p className="mt-2.5 text-xs text-[#979797]">Strawberry Gum Aperol / Lemon Balm Vodka / Strawberry Sparkling Wine</p>
                  <p className="mt-2.5 text-xs text-[#979797]">THB 360</p>
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src="https://static.wixstatic.com/media/a40f43_e28eea9c177642ecaab36ae53c43397b~mv2.jpg/v1/fill/w_836,h_836,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a40f43_e28eea9c177642ecaab36ae53c43397b~mv2.jpg"
                    alt="menu1"
                    width={520}
                    height={520}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-5">
                  <h5 className="text-lg text-black font-semibold">YARRA SPRITZ</h5>
                  <p className="mt-2.5 text-xs text-[#979797]">Strawberry Gum Aperol / Lemon Balm Vodka / Strawberry Sparkling Wine</p>
                  <p className="mt-2.5 text-xs text-[#979797]">THB 360</p>
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src="https://static.wixstatic.com/media/a40f43_998669914d3645aaa0d8084482624796~mv2.jpg/v1/fill/w_836,h_836,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a40f43_998669914d3645aaa0d8084482624796~mv2.jpg"
                    alt="menu1"
                    width={520}
                    height={520}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-5">
                  <h5 className="text-lg text-black font-semibold">MATCHA-</h5>
                  <p className="mt-2.5 text-xs text-[#979797]">Strawberry Gum Aperol / Lemon Balm Vodka / Strawberry Sparkling Wine</p>
                  <p className="mt-2.5 text-xs text-[#979797]">THB 360</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
