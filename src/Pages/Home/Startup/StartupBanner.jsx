import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import { LazyMotion, domMax, m } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import db from '../../../appwrite/Services/dbServices';
import storageServices from '../../../appwrite/Services/storageServices';

const StartupPageBannerSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiperData, setSwiperData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await db.heroCarousel.list();
        const data = await Promise.all(
          querySnapshot.documents.map(async (doc) => {
            const img = await getImageUrl(doc.image); // Fetch the image URL
            console.log("Image URL:", doc.image);

            return {
              img,
              title: doc.text,
            };
          })
        );
        setSwiperData(data.length > 0 ? data : getDefaultData());
      } catch (error) {
        console.error("Error fetching data:", error);
        setSwiperData(getDefaultData());
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
      const url = `https://cloud.appwrite.io/v1/storage/buckets/668c2b8e002e42c874ec/files/${imageId}/view?project=66887083002da69658f9`;
      return url;
    } catch (error) {
      console.error("Error fetching image URL:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Optionally, you can add a loading spinner here
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
                      <m.h1 initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }} animate={{ clipPath: activeSlide === i ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }} transition={{ duration: 0.5, delay: 0.5, ease: "easeIn" }} className="font-serif font-semibold  pb-[10px] text-[60px] tracking-[-2px] text-white mb-[35px] lg:text-[55px] lg:leading-[60px] xs:text-[35px] xs:leading-[40px] xs:mb-[20px]">{item.title}</m.h1>
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
