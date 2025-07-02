"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
export default function Testimonials() {
  const isotopContainer = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: ".item",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on(
      "progress",
      function (instance, image) {
        // Trigger Isotope layout
        isotope.layout();
      }
    );
  };

  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    setTimeout(() => {
      initIsotop();
    }, 100);
  }, []);
  return (
    <>
      <div className="flex flex-wrap mx-[-15px]">
        <div className="md:w-11/12 lg:w-10/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mx-auto !text-center !relative">
          <Image
            className="h-9 !absolute hidden xl:block lg:block"
            style={{ top: "2%", left: "9%" }}
            alt="image"
            src="/assets/img/svg/doodle1.svg"
            width={74}
            height={72}
          />
          <Image
            className="h-7 absolute hidden xl:block lg:block"
            style={{ top: "-45%", left: "-17%" }}
            alt="image"
            src="/assets/img/svg/doodle10.svg"
            width={47}
            height={47}
          />
          <Image
            className="!h-[4rem] absolute hidden xl:block lg:block"
            style={{ top: "-40%", right: "-15%" }}
            alt="image"
            src="/assets/img/svg/doodle11.svg"
            width={110}
            height={114}
          />
          <h2 className="!text-[0.8rem] !tracking-[0.02rem] uppercase !text-[#aab0bc] !mb-3 !leading-[1.35]">
            Happy Customers
          </h2>
          <h3 className="!text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.2] xl:!text-[2rem] !mb-12 xl:!px-10 xxl:!px-16">
            Don't take our word for it. See what
            <span className="text-gradient gradient-7">customers</span> are
            saying about us.
          </h3>
        </div>
        {/* /column */}
      </div>
      {/* /.row */}
      <div className="itemgrid !mb-14">
        <div
          ref={isotopContainer}
          className="flex flex-wrap mx-[-15px] isotope !mt-[-30px]"
        >
          <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
            <div className="card !shadow-none !rounded-[0.8rem] !bg-[#f0f0f8]">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                  <p>
                    “Our support team is lean, and Action.cr made it possible to offer 24/7 coverage. The multilingual support feature is especially valuable for our global customer base. Highly recommended!”
                  </p>
                  <div className="flex items-center text-left">
                    <div className="info !pl-0">
                      <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                        Aron Smith
                      </h5>
                      <p className="!mb-0 text-[.8rem]">Head of Customer Support</p>
                    </div>
                  </div>
                </blockquote>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/*/column */}
          <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
            <div className="card !shadow-none !rounded-[0.8rem] !bg-[#edf9f6]">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                  <p>
                    “We used agents to automate internal status updates and client communications. It now handles dozens of queries daily, saving us time and improving accuracy.”
                  </p>
                  <div className="flex items-center text-left">
                    <div className="info !pl-0">
                      <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                        Jonh Rojers
                      </h5>
                      <p className="!mb-0 text-[.8rem]">Operations Manager, TransGlobal Logistics</p>
                    </div>
                  </div>
                </blockquote>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/*/column */}
          <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
            <div className="card !shadow-none !rounded-[0.8rem] !bg-[#fef4f2]">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                  <p>
                    “This platform has transformed how we manage incoming leads. The AI agents are responsive, smart, and integrate perfectly with our CRM. We've seen a 40% boost in qualified leads.”
                  </p>
                  <div className="flex items-center text-left">
                    <div className="info !pl-0">
                      <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                        Kate Neville
                      </h5>
                      <p className="!mb-0 text-[.8rem]">Sales Manager</p>
                    </div>
                  </div>
                </blockquote>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/*/column */}
          <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
            <div className="card !shadow-none !rounded-[0.8rem] !bg-[#fbf1f4]">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                  <p>
                    “Deploying AI agents without writing a line of code was a game-changer. Action.cr gave us speed, flexibility, and automation that scaled effortlessly with our operations.”
                  </p>
                  <div className="flex items-center text-left">
                    <div className="info !pl-0">
                      <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                        Mark Sorensen
                      </h5>
                      <p className="!mb-0 text-[.8rem]">SwiftCommerce</p>
                    </div>
                  </div>
                </blockquote>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/*/column */}
          <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
            <div className="card !shadow-none !rounded-[0.8rem] !bg-[#edf2fc]">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                  <p>
                    “Our support team is lean, and Action.cr made it possible to offer 24/7 coverage. The multilingual support feature is especially valuable for our global customer base. Highly recommended!”
                  </p>
                  <div className="flex items-center text-left">
                    <div className="info !pl-0">
                      <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                        Aron Smith
                      </h5>
                      <p className="!mb-0 text-[.8rem]">Head of Customer Support</p>
                    </div>
                  </div>
                </blockquote>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/*/column */}
          <div className="item md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] !px-[15px] max-w-full !mt-[30px]">
            <div className="card !shadow-none !rounded-[0.8rem] !bg-[#fff8ee]">
              <div className="card-body flex-[1_1_auto] p-[40px]">
                <blockquote className="!text-[0.85rem] !leading-[1.7] !font-normal !pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                  <p>
                    “Donec id elit non mi porta gravida at eget metus. Nulla
                    vitae elit libero, a pharetra augue. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.”
                  </p>
                  <div className="flex items-center text-left">
                    <div className="info !pl-0">
                      <h5 className="!mb-1 text-[.9rem] !leading-[1.5]">
                        Laura Widerski
                      </h5>
                      <p className="!mb-0 text-[.8rem]">Sales Specialist</p>
                    </div>
                  </div>
                </blockquote>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/*/column */}
        </div>
        {/* /.row */}
      </div>
    </>
  );
}
