import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import { LazyMotion, domMax, m } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import db from '../../../appwrite/Services/dbServices';
import { storage } from '../../../appwrite/config';
import { buckets } from '../../../appwrite/buckets';
import Preloader from '../../../Components/Preloader';

const StartupPageBannerSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const fetchSwiperData = async () => {
    const querySnapshot = await db.heroCarousel.list();
    const data = await Promise.all(
      querySnapshot.documents.map(async (doc) => {
        const img = await getImageUrl(doc.image);
        return {
          img,
          title: doc.text,
        };
      })
    );
    return data.length > 0 ? data : getDefaultData();
  };

  const { data: swiperData = [], isLoading } = useQuery({
    queryKey: ['swiperData'],
    queryFn: fetchSwiperData
  });

  const getDefaultData = () => {
    return [
      {
        img: "/assets/img/webp/slider-01.jpg",
        title: "Kinder- und Jugendarztpraxis",
      },
      {
        img: "/assets/img/webp/slider-02.jpg",
        title: "Kinder- und Jugendarztpraxis",
      },
    ];
  };

  const getImageUrl = async (imageId) => {
    try {
      const result = await storage.getFileView(buckets[0].id, imageId);
      return result.href;
    } catch (error) {
      console.error("Error fetching image URL:", error);
    }
  };

  if (isLoading) {
    return <Preloader />; // Optionally, you can add a loading spinner here
  }

  return (
    <section className="bg-darkgray home-startup-swiper">
      <LazyMotion strict features={domMax}>
        <Swiper
          effect="fade"
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          navigation={true}
          pagination={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          fadeEffect={{ crossFade: true }}
          modules={[Pagination, Navigation, EffectFade, Autoplay]}
          onSlideChange={(swiperCore) => {
            const { realIndex } = swiperCore;
            setActiveSlide(realIndex);
          }}
          breakpoints={{ 767: { pagination: false } }}
          className="startup swiper-navigation-04 swiper-navigation-light swiper-pagination-03 swiper-pagination-light swiper-pagination-medium sm-nav-hidden">
          {swiperData.map((item, i) => {
            return (
              <SwiperSlide key={i} className="overflow-hidden">
                <m.div initial={{ scale: 1.2 }} animate={{ scale: activeSlide === i ? 1 : 1.2 }} transition={{ duration: 1.7, ease: "easeInOut" }} style={{ backgroundImage: `url(${item.img})` }} className="overflow-hidden absolute h-full w-full top-0 left-0 cover-background"> </m.div>
                <m.div className="opacity-50 absolute h-full w-full top-0 left-0 bg-darkgray"></m.div>
                <Container className="text-center">
                  <Row className="full-screen items-center justify-center md:landscape:h-[500px]">
                    <Col xs={12} lg={7} md={10} className="justify-center items-center my-0 mx-auto relative flex flex-col">
                      <m.h1 className="font-serif font-semibold  pb-[10px] text-[60px] tracking-[-2px] text-white mb-[35px] lg:text-[55px] lg:leading-[60px] xs:text-[35px] xs:leading-[40px] xs:mb-[20px]"> 
                        <div className='flex justify-center items-center '>
                        <img
                        className="default-logo w-[180px] h-[180px] md:w-[80px] md:h-[80px] sm:w-[90px] sm:h-[90px]"

                        src="/assets/img/webp/logo1.png"
                        data-rjs="/assets/img/webp/logo-cropped@2x.png"
                        alt="logo"
                      />
                        <img
                          className="default-logo w-[400px] h-[285px] md:w-[160px] md:h-[110px] sm:w-[220px] sm:h-[130px]"
                          style={{ maxWidth: '400px' }}
                          src="/assets/img/webp/logo2.png"
                          data-rjs="/assets/img/webp/logo-cropped@2x.png"
                          alt="logo"
                        />
                        </div>
                        </m.h1>
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </LazyMotion>
    </section>
  );
}

export default StartupPageBannerSlider;
