import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import home_img from './Assets/home_img.png';
<<<<<<< HEAD
import home_2 from './Assets/home_2.png';
import mc from './Assets/microsoft.png';
import netflix from './Assets/netflix.png';
import amazon from './Assets/amazon.png';
import atlassian from './Assets/atlassian.png';
import google from './Assets/google.png';
import meta from './Assets/meta.png';
import tesla from './Assets/tesla.png';
//job
import resume from './Assets/resume_photo.jpg';
import job_mid from './Assets/job_mid.jpg';
import job_apply from './Assets/job_apply.jpg';

import Testimonials from './components/Testimonials';
import FAQ from './components/Faqs';
=======
import fb from './Assets/fb.png';
import nvidia from './Assets/nvidia.png';
import pin from './Assets/pin.png'
import apple from './Assets/apple.png';
import meta from './Assets/meta.png';
import ibm from './Assets/ibm.png';
import tesla from './Assets/tesla.png'

>>>>>>> origin/main

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

<<<<<<< HEAD


=======
>>>>>>> origin/main
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Section */}
      <div className="flex flex-row items-center justify-between px-10 py-20">
        {/* Left Section - Text Content */}
        <div className="max-w-lg ml-12">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Unlock your <br /> potential with us!
          </h1>
<<<<<<< HEAD
          <p className="text-xl text-gray-600 mb-6">
=======
          <p className="text-lg text-gray-600 mb-6">
>>>>>>> origin/main
            Land Your Dream Job with AI-Powered Interview Coaching
          </p>
          <a
            href="/signup"
            className="inline-flex items-center bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-md text-lg font-medium shadow-md transition"
          >
            Grow With Us
          </a>
        </div>

        {/* Right Section - Image */}
<<<<<<< HEAD
        <div className=" mr-12">
          <img src={home_img} alt="Interview Coaching" className="w-[500px]" />
        </div>
      </div>
      
    
=======
        <div className="max-w-md mr-12">
          <img src={home_img} alt="Interview Coaching" className="w-full" />
        </div>
      </div>
>>>>>>> origin/main

      {/* Additional Section */}
      <div className="px-20 mt-1">
        <h1 className="text-3xl font-semibold">Grab Your Opportunity at, </h1>
      </div>
      <div className="mt-8 px-10">
<<<<<<< HEAD
      <Swiper
=======
  <Swiper
>>>>>>> origin/main
    spaceBetween={50}
    slidesPerView={3}
    loop={true}
    autoplay={{
      delay: 2000,
      disableOnInteraction: false
    }}
    modules={[Autoplay]}
    breakpoints={{
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
    }}
    className="w-full"
  >
    <SwiperSlide className="flex justify-center items-center">
<<<<<<< HEAD
      <img src={netflix} alt="Netflix" className="w-32 h-auto mx-auto" />
    </SwiperSlide>
    <SwiperSlide className="flex justify-center items-center">
      <img src={mc} alt="microsoft" className="w-32 h-auto mx-auto" />
    </SwiperSlide>
    <SwiperSlide className="flex justify-center items-center">
      <img src={google} alt="google" className="w-32 h-auto mx-auto" />
    </SwiperSlide>
    <SwiperSlide className="flex justify-center items-center">
      <img src={meta} alt="Meta" className="w-32 h-auto mx-auto" />
    </SwiperSlide>
    <SwiperSlide className="flex justify-center items-center">
      <img src={amazon} alt="amazon" className="w-32 h-auto mx-auto" />
    </SwiperSlide>
    <SwiperSlide className="flex justify-center items-center">
      <img src={atlassian} alt="atlassain" className="w-32 h-auto mx-auto" />
    </SwiperSlide>
    <SwiperSlide className="flex justify-center items-center">
      <img src={tesla} alt="tesla" className="w-16 h-auto mx-auto" />
    </SwiperSlide>
</Swiper>

</div>
<div className='flex items-center justify-between px-20 mt-16'>
  <div className='max-w-md'>
    <h1 className='text-4xl font-bold mb-4'>
      Generate ATS Friendly Resume
    </h1>
    <div className='mt-4'>
      <span className='text-[#808080] text-xl'>
        Designed to ensure ATS optimization
        so your credentials stand out to top
        employers and pass machine<br />
        screening process.
      </span>

    </div>
    <a
            href="/resume"
            className="inline-flex items-center mt-4 bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-md text-lg font-medium shadow-md transition"
          >
            Buid Resume
          </a>
  </div>
  <div className="max-w-md">
    <img src={home_2} alt="Interview Coaching" className="w-full rounded-lg mr-[150px] shadow-lg" />
  </div>
</div>

      <div>
</div>
<section className="text-center py-12 px-6">
  <h2 className="text-3xl font-bold mb-2">Your success story starts at Interview Geeks</h2>
  <p className="text-gray-600 mb-8">
    We&apos;ll help you at every step of your career journey.
  </p>
  <div className="grid md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="text-center flex flex-col items-center">
      <img src={resume} alt="CV Builder" 
        className="h-44 w-44 rounded-full object-cover mb-4" />
      <h3 className="font-semibold mb-2">Build an eye-catching CV</h3>
      <p className="text-gray-600 max-w-sm">
        Build an eye-catching CV and cover letter effortlessly from any device.
      </p>
    </div>

    {/* Card 2 */}
    <div className="text-center flex flex-col items-center">
      <img src={job_mid} alt="Job Recommendations" 
        className="h-44 w-44 rounded-full object-fill mb-4" />
      <h3 className="font-semibold mb-2">Get job recommendations</h3>
      <p className="text-gray-600 max-w-sm">
        Get job recommendations that match your skills and interests.
      </p>
    </div>

    {/* Card 3 */}
    <div className="text-center flex flex-col items-center">
      <img src={job_apply} alt="Job Applications" 
        className="h-44 w-44 rounded-full object-cover mb-4" />
      <h3 className="font-semibold mb-2">Organize your job applications</h3>
      <p className="text-gray-600 max-w-sm">
        Organize and send all of your job applications with a click of a mouse.
      </p>
    </div>
  </div>
</section>
    <Testimonials/>
    <FAQ/>


=======
      <img src={nvidia} alt="Netflix" className="w-20 h-auto mx-auto" />
    </SwiperSlide>
    <SwiperSlide className="flex justify-center items-center">
      <img src={fb} alt="Facebook" className="w-20 h-auto mx-auto" />
    </SwiperSlide>
    <SwiperSlide className="flex justify-center items-center">
      <img src={apple} alt="Apple" className="w-20 h-auto mx-auto" />
    </SwiperSlide>
    <SwiperSlide className="flex justify-center items-center">
      <img src={meta} alt="Meta" className="w-20 h-auto mx-auto" />
    </SwiperSlide>
    <SwiperSlide className="flex justify-center items-center">
      <img src={ibm} alt="IBM" className="w-20 h-auto mx-auto" />
    </SwiperSlide>
    <SwiperSlide className="flex justify-center items-center">
      <img src={pin} alt="Pin" className="w-20 h-auto mx-auto" />
    </SwiperSlide>
    <SwiperSlide className="flex justify-center items-center">
      <img src={tesla} alt="Pin" className="w-20 h-auto mx-auto" />
    </SwiperSlide>
  </Swiper>
</div>
<div className='px-20 mt-32'>
  <h1 className='text-3xl font-bold'>
  Generate ATS Friendly Resume
  </h1>
  <div className='mt-8'>
  <span className='text-[#808080]'>Designed to ensure ATS optimization<br/> so your credentials stand out to top<br/> employers and pass machine<br/> screening process.</span>
  </div>
  <div className="max-w-md mr-12">
          <img src={home_img} alt="Interview Coaching" className="w-full" />
        </div>
      </div>
      <div>
</div>
>>>>>>> origin/main
    </div>
  );
};

export default Home;