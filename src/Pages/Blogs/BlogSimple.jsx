import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Col, Container, Row } from 'react-bootstrap';
import { Parallax } from "react-scroll-parallax";
import BlogSimple from '../../Components/Blogs/BlogSimple';
import db from "../../appwrite/Services/dbServices";
import storageServices from "../../appwrite/Services/storageServices";
import HeaderSection from '../Header/HeaderSection';
import FooterSection from '../Footer/FooterSection';

const BlogSimplePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const fetchBlogData = async () => {
    const querySnapshot = await db.blogs.list();
    const data = await Promise.all(
      querySnapshot.documents.map(async (doc) => {
        const imageUrl = await storageServices.images.getFileView(doc.imageUrl);
        return {
          id: doc.$id,
          title: doc.title,
          date: doc.publicationDate ? new Date(doc.publicationDate).toLocaleDateString() : '',
          content: doc.content,
          img: imageUrl.href,
          category: doc.tags,
          author: doc.author,
        };
      })
    );
    return data;
  };

  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogData,
  });

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <HeaderSection theme="light" />
      <div className="py-[80px] h-auto overflow-hidden md:relative md:py-[40px]">
        <Parallax className="lg-no-parallax bg-cover absolute -top-[100px] landscape:md:top-[-20px] left-0 w-full h-[100vh]" translateY={[-40, 40]} style={{ backgroundImage: `url(/assets/img/webp/portfolio-bg2.webp)` }}></Parallax>
        <Container className="h-full relative">
          <Row className="justify-center h-[300px] sm:h-[250px]">
            <Col xl={6} lg={6} md={8} className="text-center flex justify-center flex-col font-serif">
              <h1 className="text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] mb-[15px] inline-block text-xmd leading-[20px]">Latest</h1>
              <h2 className="text-darkgray font-medium -tracking-[1px] mb-0">All News</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <section className="overflow-hidden relative px-[5%] pb-[130px] bg-lightgray lg:pb-[90px] lg:px-0 md:pb-[75px] sm:pb-[50px]">
        <Container fluid>
          <Row className="justify-center">
            <Col xl={12} lg={12} sm={10} className="lg:px-0">
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                <BlogSimple 
                  link="/blogdetail/" 
                  overlay="#374162" 
                  pagination={true} 
                  grid="grid grid-3col xl-grid-2col lg-grid-2col md-grid-1col sm-grid-1col xs-grid-1col gutter-double-extra-large" 
                  data={currentBlogs} 
                  paginate={paginate}
                  currentPage={currentPage}
                  totalBlogs={blogs.length}
                  blogsPerPage={blogsPerPage}
                />
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <FooterSection />
    </>
  );
}

export default BlogSimplePage;
