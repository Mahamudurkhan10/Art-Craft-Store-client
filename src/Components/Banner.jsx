
import 'swiper/css/bundle';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <div className="relative p-2">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                loop={true}
                className="mySwiper lg:h-[500px] h-[240px] rounded-lg "
            >
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen  opacity-80 hero-overlay "
                        style={{
                            backgroundImage: "url('https://i.ibb.co/n371Q7d/logo-make-11-06-2023-108.jpg')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4  text-xl bg-gradient-to-r from-pink-600 via-blue-900 to-blue-500 text-transparent bg-clip-text animate-gradient'>Live the high life in this breathtaking penthouse with panoramic city views.</h1>
                            <button href="#_" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span className="relative text-black group-hover:text-white">Read More</span>
                            </button>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen bg-sky-700 opacity-85"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/BjZGY4L/logo-make-11-06-2023-168.jpg')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4 text-black text-xl '>Luxury Pool Villa Spectacular Contemporary.</h1>
                            <button href="#_" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span className="relative text-black group-hover:text-white">Read More</span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen bg-sky-700 opacity-85"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/t298z10/swimming-pool-beach-luxury-hotel-outdoor-pools-spa-amara-dolce-vita-luxury-hotel-resort-tekirova-kem.jpg')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4 text-black text-xl '>The difference between a resort and villa is a resort has everything.</h1>
                            <button href="#_" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span className="relative text-black group-hover:text-white">Read More</span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen bg-sky-700 opacity-80"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/wYjm0VC/observation-urban-building-business-steel.jpg')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4 text-black text-xl'>A penthouse is a unit or apartment on the highest floor of a building.</h1>
                            <button href="#_" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span className="relative text-black group-hover:text-white">Read More</span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;

