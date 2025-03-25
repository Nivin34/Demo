import React from "react";
// import Header from "../layouts/Header";
import People_Business from "../../assets/gif/People_Business.mp4";
import { FaUser } from "react-icons/fa6";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { AiTwotoneMessage } from "react-icons/ai";
import { ImFlag } from "react-icons/im";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import Vision from "../../assets/Images/vision.png";
import Values from "../../assets/Images/values.png";
import Mission from "../../assets/Images/mission.png";
import { FaUserTie } from "react-icons/fa6";

import Count from "../layouts/Count";
const AboutPage = () => {
  return (
    <div className="container w-full mx-auto">
      {/* <Header className=" fixed" /> */}

      <div className="relative h-80 md:h-100 lg:h-130 xl:h-150 w-full overflow-hidden z-10  ">
        <video
          src={People_Business}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover "
        ></video>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center xl:text-start xl:items-start xl:ml-100 xl:justify-start xl:mt-30 ">
          <h1 className="text-lg md:text-3xl font-semibold relative inline-block mb-4 overflow-hidden after:content-[''] after:block after:w-16 xl:after:w-29 after:h-[2px] after:bg-white after:rounded after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0">
            About Us
            <span className="block w-16 h-0.5 bg-[#F7666F] absolute left-1/2 -translate-x-1/2 bottom-[-6px]"></span>
          </h1>

          <p className="text-sm md:text-base max-w-2xl leading-relaxed w-70 xl:w-170 xl:text-2xl xl:mt-10">
            <span className=" ">ACE Software Solutions Pvt. Ltd;</span> a
            company incorporated in 2001, has its Head Office and its Research &
            Development center in Chennai. The company was started by
            professionals having rich experience in the Manufacturing sector.
          </p>
        </div>
      </div>

      <div className=" flex-wrap mt-10 text-justify sm:text-center justify-center px-5 lg:px-20 2xl:px-40 h-auto xl:mt-20">
        <p className="py-2 text-[12px] sm:text-[16px] lg:text-lg">
          The ASSPL Management Team has hands on experience in designing and
          implementation of{" "}
          <span className="text-[#F7666F]">
            {" "}
            ERP systems, Industry 4.0 & IIOT Solutions and SAAS model products
          </span>{" "}
          for small, medium and large industries and corporate.
        </p>
        <p className="py-2 hidden sm:text-sm lg:block lg:text-lg " >
          Further the ASSPL Management Team possess functional expertise and
          process knowledge of various segments of industry like Automotive,
          Aerospace, Foundry, Leather and Project Management. The ASSPL
          Management Team has an edge over the others in understanding the
          industry requirements towards various Quality system accreditations,
          the client has to comply, since they were also instrumental in getting
          accreditations (ISO, TS and Environmental) done for large industrial
          houses.
        </p>
        <p className="text-[12px] sm:text-[16px] lg:hidden">
          The ASSPL Management Team has expertise in Automotive, Aerospace,
          Foundry, Leather, and Project Management industries. Their deep
          understanding of quality system accreditations like ISO, TS, and
          Environmental standards gives them a competitive edge, having
          successfully guided large industries in achieving these
          certifications.
        </p>
        <p className="py-2 text-[12px] sm:text-[16px] lg:text-lg">
          The Development team is highly capable of providing a readymade
          solution to small and medium industries in quick time, at the same
          time taking care of providing tailor made solutions to suit the
          requirements of large industries.
        </p>
      </div>

      {/* vision/mission/goal */}
      <div className="flex flex-wrap justify-evenly w-full px-10 xl:mt-10 gap-10 py-20 ">
        <div className="w-80 ">
          <div className="border border-gray-300 rounded-2xl overflow-hidden">
            <img src={Vision} alt="Vision" className="w-full h-48" />
          </div>
          <h1 className="mt-4 text-[13px] sm:text-lg font-semibold">
            Our Vision
          </h1>
          <p className="mt-2 text-gray-600  text-[12px] sm:text-sm">
            To reach, connect and provide Technology Products – IIOT – Industry
            4.0 solution and SAAS Model Products to the industry and corporate
            segments of all sizes that always strive to exceed their
            expectations.
          </p>
        </div>

        <div className="w-80 ">
          <div className="border border-gray-300 rounded-2xl overflow-hidden ">
            <img src={Mission} alt="Vision" className="w-full h-48 " />
          </div>
          <h1 className="mt-4 text-[13px] sm:text-lg font-semibold">
            Our Mission
          </h1>
          <p className="mt-2 text-gray-600 text-[12px] sm:text-sm">
            Provide the world’s best Technology Products and SAAS Model
            solutions that enable businesses to excel.
          </p>
        </div>

        <div className="w-80 ">
          <div className="border border-gray-300 rounded-2xl overflow-hidden">
            <img src={Values} alt="Vision" className="w-full h-48" />
          </div>
          <h1 className="mt-4  text-[13px] sm:text-lg font-semibold">
            Our Values
          </h1>
          <p className="mt-2 text-gray-600 text-[12px] sm:text-sm">
            We provide solutions that meet customer needs, take responsibility
            for our work, deliver on time, and strive for excellence, stability,
            and growth.
          </p>
        </div>
      </div>

    
      <div>
        <Count/>
      </div>
     

      <div className="text-center mt-10 xl:mt-20 px-4">
  <h1 className="text-[#F7666F] text-sm sm:text-lg">
    Why choose us <br />
    <span className="text-black font-semibold text-sm sm:text-lg">
      6 REASONS TO PARTNER WITH ACE Software Solutions
    </span>
  </h1>

<div className="flex justify-evenly items-center ">
  <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8 md:gap-20 xl:gap-32  mt-10 ">

    <div className="flex flex-col items-start space-y-2">
      <div className="flex items-center gap-2">
        <ImFlag className="text-sm  sm:text-2xl " />
        <h1 className=" text-sm md:text-[16px] font-semibold">Experts in Engineering Software</h1>
      </div>
      <p className="text-justify text-[12px] md:text-sm  sm:w-60 ml-8 flex flex-wrap pe-2 text-gray-600">
        Since 2001, we've been building cutting-edge engineering and custom
        software solutions tailored for businesses like yours.
      </p>
    </div>

    <div className="flex flex-col items-start space-y-2">
      <div className="flex items-center gap-2">
        <FaPeopleGroup className="text-sm  sm:text-3xl" />
        <h1 className="text-sm md:text-[16px] font-semibold">Highly Skilled & Experienced Team</h1>
      </div>
      <p className="text-justify text-[12px] md:text-sm  w-full sm:w-60 ml-7 sm:ml-10 flex flex-wrap pe-10 md:pe-0 text-gray-600">
        Our experts specialize in automation, enterprise software, and
        engineering solutions, delivering reliable and efficient results.
      </p>
    </div>

    <div className="flex flex-col items-start space-y-2">
      <div className="flex items-center gap-2">
        <AiTwotoneMessage className="text-sm  sm:text-2xl" />
        <h1 className="text-sm md:text-[16px] font-semibold">Fast & Dependable Support</h1>
      </div>
      <p className="text-justify text-[12px] md:text-sm  w-full sm:w-60 ml-8 flex flex-wrap pe-10 md:pe-0 text-gray-600">
        We provide timely assistance to minimize downtime and keep your
        operations running smoothly—no unnecessary delays.
      </p>
    </div>

    <div className="flex flex-col items-start space-y-2">
      <div className="flex items-center gap-2">
        <BsFillEmojiSmileFill className="text-sm sm:text-2xl" />
        <h1 className="text-sm md:text-[16px] font-semibold">Trusted by Businesses Worldwide</h1>
      </div>
      <p className="text-justify text-[12px] md:text-sm  w-full sm:w-60 ml-9 flex flex-wrap pe-10 md:pe-0 text-gray-600">
        With over two decades of experience, we focus on quality, reliability,
        and long-term partnerships to ensure your success.
      </p>
    </div>

    <div className="flex flex-col items-start space-y-2">
      <div className="flex items-center gap-2">
        <FaAward className="text-sm sm:text-2xl" />
        <h1 className="text-sm md:text-[16px] font-semibold">Tailored Software for Your Needs</h1>
      </div>
      <p className="text-justify text-[12px] md:text-sm  w-full sm:w-60 ml-7 sm:ml-9 flex flex-wrap pe-10 md:pe-0 text-gray-600">
        From engineering tools to enterprise solutions like CRM and PPAP, we
        design software that perfectly fits your business.
      </p>
    </div>

    <div className="flex flex-col items-start space-y-2">
      <div className="flex items-center gap-2">
        <RiCustomerService2Fill className="text-sm sm:text-2xl" />
        <h1 className=" text-sm md:text-[16px] font-semibold">Simplified, User-Friendly Technology</h1>
      </div>
      <p className="text-justify text-[12px] md:text-sm  w-full sm:w-60 ml-9 flex flex-wrap pe-10 md:pe-0 text-gray-600">
        We make complex technology easy to use, delivering intuitive solutions
        that integrate seamlessly into your workflow.
      </p>
    </div>
  </div>
</div>
</div>

  
      {/* <div className="text-center justify-center flex-wrap mt-10 xl:mt-30">
           <h1 className="text-[#F7666F] text-[10px] sm:text-[16px]">Why choose us <br/>
           <span className="text-black lg:font-semibold text-[10px] sm:text-[16px]">6 REASONS TO PARTNER WITH  ACE Software Solutions</span></h1>
      <div className="flex flex-wrap justify-evenly mt-10">
      <div className="flex-col">
       <div className="flex gap-2">
       <ImFlag className="text-2xl" />
        <h1 className="font-semibold">Experts in Engineering Software
        </h1>
       </div>
      <p className="flex flex-wrap w-60 text-justify mt-2 ml-7">Since 2001, we've been building cutting-edge engineering and custom software solutions tailored for businesses like yours.</p>
      </div> 
      
      <div className="flex-col">
       <div className="flex gap-2">
       <FaPeopleGroup  className="text-3xl"/>
        <h1 className="font-semibold">Highly Skilled & Experienced Team</h1>
       </div>
      <p className="flex flex-wrap w-60 text-justify mt-2 ml-10">Our experts specialize in automation, enterprise software, and engineering solutions, delivering reliable and efficient results.
      </p>
      </div> 
       
     
  
      <div className="flex-col">
       <div className="flex gap-2">
       <AiTwotoneMessage className="text-2xl" />
        <h1 className="font-semibold">Fast & Dependable Support </h1>
       </div>
      <p className="flex flex-wrap w-55 text-justify mt-2 ml-7">We provide timely assistance to minimize downtime and keep your operations running smoothly—no unnecessary delays.</p>
      </div>

       </div>
       
       <div className="flex flex-wrap justify-evenly mt-10 ml-10 gap-10">

       <div className="flex-col">
       <div className="flex gap-2">
       <BsFillEmojiSmileFill className=" text-2xl" />
        <h1 className="font-semibold">Trusted by Businesses Worldwide
        </h1>
       </div>
      <p className="flex flex-wrap w-60 text-justify mt-2 ml-9">With over two decades of experience, we focus on quality, reliability, and long-term partnerships to ensure your success.</p>
      </div> 
      
      <div className="flex-col">
       <div className="flex gap-2">
       <FaAward  className="text-2xl"/>
        <h1 className="font-semibold">Tailored Software for Your Needs
        </h1>
       </div>
      <p className="flex flex-wrap w-60 text-justify mt-2 ml-10">From engineering tools to enterprise solutions like CRM and PPAP, we design software that perfectly fits your business.
      </p>
      </div> 
       
      <div className="flex-col">
       <div className="flex gap-2">
       <RiCustomerService2Fill className="text-2xl" />
        <h1 className="font-semibold">Simplified, User-Friendly Technology
        </h1>
       </div>
      <p className="flex flex-wrap w-60 text-justify mt-2 ml-9">We make complex technology easy to use, delivering intuitive solutions that integrate seamlessly into your workflow.
      </p>
      </div> 
      
       </div>
      </div> */}

      <div className="bg-gray-100 mt-20 h-auto pb-10">
        <h1 className="flex w-full justify-center py-5 font-semibold lg:text-[20px]  ">Our Leadership Team </h1>

        <div className="mt-10 pb-3 justify-evenly items-center text-center flex flex-wrap gap-5 ">
          
        <div className="w-70 h-auto bg-[#ffffff4f] rounded-lg py-5 border border-gray-200 flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition duration-300 hover:scale-105">
  <div className="w-52 h-20 rounded-full mx-auto flex justify-center items-center">
    <FaUserTie className="w-16 h-16 text-gray-600" />
  </div>

  <p className="w-full text-center font-semibold mt-3">R Rajagopalan</p>

  <div className="h-auto flex flex-col px-3 mt-2 overflow-hidden">
    <p className="w-full text-center text-[12px] font-semibold">
      Chairman of INFANT ENGINEERS PVT LTD
    </p>
    <p className="w-full text-center text-[12px] mt-5">
      With over 30 years of experience in the automobile industry, specializing in Industrial Engineering, Production Planning, Shop Floor Systems, and Materials Management, he provides strategic inputs for the organizational growth of ASSPL.
    </p>
  </div>
</div>
            


<div className="w-70 h-auto bg-[#ffffff4f] rounded-lg py-5 border border-gray-200 flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition duration-300 hover:scale-105">
  <div className="w-52 h-20 rounded-full mx-auto flex justify-center items-center">
    <FaUserTie className="w-16 h-16 text-gray-600" />
  </div>

  <p className="w-full text-center font-semibold mt-3">S Rajasekaran</p>

  <div className="h-auto flex flex-col px-3 mt-2 overflow-hidden">
    <p className="w-full text-center text-[12px] font-semibold">
    Managing Director of INFANT ENGINEERS PVT LTD
    </p>
    <p className="w-full text-center text-[12px] mt-5">
    with over 25 years’ experience in Materials Management & System Design and Finance is also the Founder & CEO of ASSPL, who leads the day-to-day functions on a strategic level with his domain expertise.
    </p>
  </div>
</div>




<div className="w-70 h-auto bg-[#ffffff4f] rounded-lg py-5 border border-gray-200 flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition duration-300 hover:scale-105">
  <div className="w-52 h-20 rounded-full mx-auto flex justify-center items-center">
    <FaUserTie className="w-16 h-16 text-gray-600" />
  </div>

  <p className="w-full text-center font-semibold mt-3">R. Abishek Karthik</p>

  <div className="h-auto flex flex-col px-3 mt-2 overflow-hidden">
    <p className="w-full text-center text-[12px] font-semibold">
    Special Director
    </p>
    <p className="w-full text-center text-[12px] mt-5">
    A Young Mechanical Engineering Graduate from Anna University and MBA in BITS Pilani with 5 years of experience in manufacturing sector provides functional and domain expertise on new product developments.
    </p>
  </div>
</div>

   
        </div>
      </div>
      
    </div>
  );
};

export default AboutPage;
