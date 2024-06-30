import React from 'react'

// Libraries
import { Col, Container, Row } from 'react-bootstrap'
import { Parallax } from "react-scroll-parallax";
import { Link } from 'react-router-dom'
import * as Yup from 'yup';
import { Formik, Form } from "formik"
import { m } from 'framer-motion'

// Components
import BlogStandard from '../../Components/Blogs/BlogStandard'
import SocialIcons from '../../Components/SocialIcon/SocialIcons'
import { Input } from '../../Components/Form/Form'
import StaticInstagram from '../../Components/Instagram/StaticInstagram'
import { resetForm } from '../../Functions/Utilities';
import { fadeIn } from '../../Functions/GlobalAnimations'

// Data
import { blogData } from '../../Components/Blogs/BlogData'

const SocialIconsData = [
    {
        color: "#3b5998",
        link: "https://www.facebook.com/",
        icon: "fab fa-facebook-f"
    },
    {
        color: "#ea4c89",
        link: "https://dribbble.com/",
        icon: "fab fa-dribbble"
    },
    {
        color: "#00aced",
        link: "https://twitter.com/",
        icon: "fab fa-twitter"
    },
    {
        color: "#fe1f49",
        link: "https://www.instagram.com/",
        icon: "fab fa-instagram"
    },
]

// Filter the blog data category wise
const blogStandardData = blogData.filter((item) => item.blogType === "standard");

const BlogStandardPage = () => {
    return (
        <>
            {/* Parallax Section Start */}
            <div className="py-[80px] h-auto overflow-hidden md:relative md:py-[40px]">
                <Parallax className="lg-no-parallax bg-cover absolute -top-[100px] landscape:md:top-[-20px] left-0 w-full h-[100vh]" translateY={[-40, 40]} style={{ backgroundImage: `url(/assets/img/webp/portfolio-bg.webp)` }}></Parallax>
                <Container className="h-full relative">
                    <Row className="justify-center h-[300px] sm:h-[250px]">
                        <Col xl={6} lg={6} md={8} className="text-center flex justify-center flex-col font-serif">
                            <h1 className="text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] mb-[15px] inline-block text-xmd leading-[20px]">Blog standard layout</h1>
                            <h2 className="text-darkgray font-medium -tracking-[1px] mb-0">Attractive articles updated daily</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Parallax Section End */}

            <section className="pt-0 overflow-hidden pb-[130px] lg:py-[90px] md:py-[75px] xs:py-[50px] relative xs:pt-[15px]">
                <Container>
                    <Row className="justify-center">
                        <Col lg={8} className="md:mb-[60px] sm:mb-[40px]">
                            <BlogStandard pagination={true} data={blogStandardData} animation={fadeIn} />
                        </Col>
                        <Col xl={{ span: 3, offset: 1 }} lg={4} md={7}>
                            <div className="inline-block w-full mb-20">
                                <span className='mb-[25px] font-medium text-darkgray text-lg font-serif block'>Search posts</span>
                                <div className="relative">
                                    <Formik
                                        initialValues={{ email: '' }}
                                        validationSchema={Yup.object().shape({ email: Yup.string().email("Invalid email.").required("Field is required."), })}
                                        onSubmit={async (values, actions) => {
                                            await new Promise((r) => setTimeout(r, 500));
                                            resetForm(actions)
                                        }}
                                    >
                                        {({ isSubmitting, status }) => (
                                            <div className="relative">
                                                <Form className="relative">
                                                    <Input showErrorMsg={false} type="email" name="email" className="border-[1px] py-[15px] px-[20px] w-full rounded-[5px] border-solidborder-transparent" placeholder="Enter your keyword..." />
                                                    <button type="submit" className={`text-xs text-fastblue tracking-[1px] py-[15px] absolute top-[8%] right-0 px-[20px] uppercase${isSubmitting ? " loading" : ""}`}><i className="feather-search"></i></button>
                                                </Form>
                                            </div>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                            <div className='p-[38px] mb-20 rounded-[4px] border-mediumgray border text-center'>
                                <Link aria-label="link" to="#">
                                    <img height="" width="" src="https://via.placeholder.com/125x125" alt="" className='mb-[5px] rounded-[50%] block mx-auto w-[100px]' />
                                </Link>
                                <Link to="#" className='mt-[20px] font-medium text-darkgray text-md font-serif inline-block'>Colene Landin</Link>
                                <span className='mb-[20px] leading-[18px] text-[14px] block'>Co-founder</span>
                                <p className='mb-[25px]'>Lorem ipsum is simply dummy text of the printing and industry lorem ipsum has been standard.</p>
                                <SocialIcons theme="social-icon-style-01" size="xs" iconColor="dark" data={SocialIconsData} />
                            </div>
                            <div className='mb-20 xs:mb-[35px]'>
                                <m.span className='mb-[35px] font-medium font-serif text-darkgray text-lg block' {...fadeIn}>Categories</m.span>
                                <m.ul className='pl-0' {...fadeIn}>
                                    <li className='relative inline-block w-full mb-[15px] leading-[18px]'>
                                        <Link aria-label="link" to="#" className='inline-block text-left'>Entertainment</Link>
                                        <span className='text-[14px] absolute top-[1px] right-0 text-right'>10</span>
                                    </li>
                                    <li className='relative inline-block w-full mb-[15px] leading-[18px]'>
                                        <Link aria-label="link" to="#" className='inline-block text-left'>Business</Link>
                                        <span className='text-[14px] absolute top-[1px] right-0 text-right'>05</span>
                                    </li>
                                    <li className='relative inline-block w-full mb-[15px] leading-[18px]'>
                                        <Link aria-label="link" to="#" className='inline-block text-left'>Creative</Link>
                                        <span className='text-[14px] absolute top-[1px] right-0 text-right'>03</span>
                                    </li>
                                    <li className='relative inline-block w-full mb-[15px] leading-[18px]'>
                                        <Link aria-label="link" to="#" className='inline-block text-left'>Lifestyle</Link>
                                        <span className='text-[14px] absolute top-[1px] right-0 text-right'>02</span>
                                    </li>
                                    <li className='relative inline-block w-full mb-[15px] leading-[18px]'>
                                        <Link aria-label="link" to="#" className='inline-block text-left'>Fashion</Link>
                                        <span className='text-[14px] absolute top-[1px] right-0 text-right'>19</span>
                                    </li>
                                    <li className='relative inline-block w-full leading-[18px] mb-0'>
                                        <Link aria-label="link" to="#" className='inline-block text-left'>Design</Link>
                                        <span className='text-[14px] absolute top-[1px] right-0 text-right'>21</span>
                                    </li>
                                </m.ul>
                            </div>
                            <div className='mb-20 xs:mb-[35px]'>
                                <span className='mb-[35px] font-medium font-serif text-darkgray text-lg block'>Recent posts</span>
                                <ul>
                                    <m.li className='flex mb-[45px]' {...{ ...fadeIn, animation: { delay: 0.2 } }}>
                                        <figure className="h-[65px] w-[80px] m-0 shrink-0">
                                            <Link aria-label="link" to="/blogs/blog-post-layout-01">
                                                <img height="" width="" src="https://via.placeholder.com/940x940" alt="" className='rounded-[3px]' />
                                            </Link>
                                        </figure>
                                        <div className='leading-normal pl-[30px] relative top-[-3px] grow'>
                                            <Link aria-label="link" to="/blogs/blog-post-layout-01" className='mb-[5px] font-medium text-darkgray inline-block'>Fashion is anything</Link>
                                            <span className="leading-[22px] text-[14px] block">Lorem ipsum is simply as dummy text of the...</span>
                                        </div>
                                    </m.li>
                                    <m.li className='flex mb-[45px]' {...{ ...fadeIn, animation: { delay: 0.4 } }}>
                                        <figure className="h-[65px] w-[80px] m-0 shrink-0">
                                            <Link aria-label="link" to="/blogs/blog-post-layout-02">
                                                <img height="" width="" src="https://via.placeholder.com/800x800" alt="" className='rounded-[3px]' />
                                            </Link>
                                        </figure>
                                        <div className='leading-normal pl-[30px] relative top-[-3px] grow'>
                                            <Link aria-label="link" to="/blogs/blog-post-layout-02" className='mb-[5px] font-medium text-darkgray inline-block'>Design transcends</Link>
                                            <span className="leading-[22px] text-[14px] block">Lorem ipsum is simply as dummy text of the...</span>
                                        </div>
                                    </m.li>
                                    <m.li className='flex mb-[45px]' {...{ ...fadeIn, animation: { delay: 0.6 } }}>
                                        <figure className="h-[65px] w-[80px] m-0 shrink-0">
                                            <Link aria-label="link" to="/blogs/blog-post-layout-03">
                                                <img height="" width="" src="https://via.placeholder.com/800x800" alt="" className='rounded-[3px]' />
                                            </Link>
                                        </figure>
                                        <div className='leading-normal pl-[30px] relative top-[-3px] grow'>
                                            <Link aria-label="link" to="/blogs/blog-post-layout-03" className='mb-[5px] font-medium text-darkgray inline-block'>Never give in except</Link>
                                            <span className="leading-[22px] text-[14px] block">Lorem ipsum is simply as dummy text of the...</span>
                                        </div>
                                    </m.li>
                                </ul>
                            </div>
                            <m.div className='visible mb-20 md:w-[90%] sm:w-full' {...fadeIn}>
                                <span className='mb-[35px] font-medium font-serif text-darkgray text-lg block'>Tags cloud</span>
                                <Link to="#" aria-label="tag" className='inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]'>Development</Link>
                                <Link to="#" aria-label="tag" className='inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]'>Mountains</Link>
                                <Link to="#" aria-label="tag" className='inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]'>Lifestyle</Link>
                                <Link to="#" aria-label="tag" className='inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]'>Hotel</Link>
                                <Link to="#" aria-label="tag" className='inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]'>Event</Link>
                                <Link to="#" aria-label="tag" className='inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]'>Multimedia </Link>
                                <Link to="#" aria-label="tag" className='inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]'>Fashion</Link>
                            </m.div>
                            <m.div {...fadeIn}>
                                <span className='mb-[35px] font-medium font-serif text-darkgray text-lg block'>Instagram</span>
                                <StaticInstagram />
                            </m.div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BlogStandardPage