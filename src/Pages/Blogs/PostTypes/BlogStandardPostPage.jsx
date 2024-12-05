import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { getDocument, getAllDocuments } from '../../../firebase/dbService';

import { getFileURL } from '../../../firebase/storageService';
import Sidebar from '../../../Components/Blogs/HelperComponents/Sidebar';
import SocialIcons from "../../../Components/SocialIcon/SocialIcons";
import BlogClean from '../../../Components/Blogs/BlogClean';
import { fadeIn } from '../../../Functions/GlobalAnimations';
import FooterSection from '../../Footer/FooterSection';
import HeaderSection from '../../Header/HeaderSection';

const BlogStandardPostPage = (props) => {
  const [data, setData] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const doc = await getDocument('blogs', id);
        if (doc.exists()) {
          const docData = doc.data();
          const imageUrl = await getFileURL(docData.image);
          const blogData = {
            id: doc.id,
            title: docData.title,
            date: docData.publicationDate ? new Date(docData.publicationDate).toLocaleDateString() : '',
            content: docData.content,
            img: imageUrl,
            tags: docData.tags || [],
            author: docData.author || "",
          };
          setData(blogData);
          fetchRelatedPosts(docData.tags || []);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    const fetchRelatedPosts = async (tags) => {
      try {
        const querySnapshot = await getAllDocuments('blogs');
        const allPosts = querySnapshot.docs || [];
        const related = allPosts.filter(post => post.id !== id && post.data().tags.some(tag => tags.includes(tag))).slice(0, 3);
        const relatedData = await Promise.all(
          related.map(async (post) => {
            const imageUrl = await getFileURL(post.data().image);
            return {
              id: post.id,
              title: post.data().title,
              date: post.data().publicationDate ? new Date(post.data().publicationDate).toLocaleDateString() : '',
              content: post.data().content,
              img: imageUrl,
              tags: post.data().tags || [],
              author: post.data().author || "",
            };
          })
        );
        setRelatedPosts(relatedData);
      } catch (error) {
        console.error("Error fetching related posts:", error);
      }
    };

    const fetchRecentPosts = async () => {
      try {
        const querySnapshot = await getAllDocuments('blogs');
        const allPosts = querySnapshot.docs || [];
        const sortedPosts = allPosts.sort((a, b) => {
          const dateA = new Date(a.data().publicationDate);
          const dateB = new Date(b.data().publicationDate);
          return dateB - dateA;
        });
        const recentData = await Promise.all(
          sortedPosts.slice(0, 5).map(async (post) => {
            const imageUrl = await getFileURL(post.data().image);
            return {
              id: post.id,
              title: post.data().title,
              date: post.data().publicationDate ? new Date(post.data().publicationDate).toLocaleDateString() : '',
              content: post.data().content,
              img: imageUrl,
              tags: post.data().tags || [],
            };
          })
        );
        setRecentPosts(recentData);
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      }
    };

    const fetchTags = async () => {
      try {
        const querySnapshot = await getAllDocuments('blogs');
        const allPosts = querySnapshot.docs || [];
        const allTags = allPosts.reduce((acc, post) => {
          post.data().tags.forEach(tag => {
            if (!acc.includes(tag)) {
              acc.push(tag);
            }
          });
          return acc;
        }, []);
        setTags(allTags);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    const fetchSocialLinks = async () => {
      try {
        const docRef = await getDocument('socialLinks', '1');  // assuming a single document for social links
        if (docRef.exists()) {
          const { facebook, twitter, instagram, linkedin } = docRef.data();
          setSocialLinks({ facebook, twitter, instagram, linkedin });
        }
      } catch (error) {
        console.error("Error fetching social links:", error);
      }
    };

    fetchBlogData();
    fetchRecentPosts();
    fetchTags();
    fetchSocialLinks();
  }, [id]);

  const socialIconsData = [
    { color: "#3b5998", link: socialLinks.facebook, icon: "fab fa-facebook-f" },
    { color: "#00aced", link: socialLinks.twitter, icon: "fab fa-twitter" },
    { color: "#fe1f49", link: socialLinks.instagram, icon: "fab fa-instagram" },
    { color: "#0077b5", link: socialLinks.linkedin, icon: "fab fa-linkedin-in" },
  ].filter(icon => icon.link);

  return (
    <div style={props.style}>
      {/* Header Start */}
      <HeaderSection theme="light" />
      {/* Header End */}
      {data ? (
        <>
          <section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
            <Container>
              <Row className="justify-center">
                <Col lg={8} className="right-sidebar md:mb-[60px] sm:mb-[40px]">
                  <Row>
                    <Col className="blog-details-text last:mb-0 mb-24">
                      <ul className="flex mb-8 xs:block">
                        {data.date && (
                          <li className="inline-block align-middle mr-[25px]">
                            <i className="feather-calendar text-fastblue mr-[10px]"></i>
                            <span>{data.date}</span>
                          </li>
                        )}
                        {data.author && (
                          <li className="inline-block align-middle mr-[25px]">
                            <i className="feather-user text-fastblue mr-[10px]"></i>
                            <span>{data.author}</span>
                          </li>
                        )}
                      </ul>
                      <h5 className="font-serif font-medium text-darkgray mb-[4.5rem]">{data.title}</h5>
                      <img width="" height="" src={data.img} alt="" className="w-full rounded-[6px] mb-[4.5rem]" />
                      <div dangerouslySetInnerHTML={{ __html: data.content }} />
                    </Col>
                    <Col xs={12} className="flex items-center justify-between mb-[35px] sm:block">
                      {data.tags.length > 0 && (
                        <div className="tag-cloud sm:flex sm:justify-center sm:mb-[10px] sm:flex-wrap gap-y-5">
                          {data.tags.map((item, i) => (
                            <Link aria-label="links" key={i} to="#">{item}</Link>
                          ))}
                        </div>
                      )}
                    </Col>
                    <SocialIcons animation={fadeIn} theme="social-icon-style-09 m-auto" className="justify-center" size="md" iconColor="dark" data={socialIconsData} />
                  </Row>
                </Col>
                <Sidebar recentPosts={recentPosts} tags={tags} />
              </Row>
            </Container>
          </section>
          {/* Related Posts Section Start */}
          {relatedPosts.length > 0 && (
            <section className="bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] overflow-hidden">
              <Container>
                <Row className="justify-center">
                  <Col lg={5} md={6} className="text-center mb-20">
                    <span className="font-serif font-medium uppercase inline-block">You may also like</span>
                    <h5 className="font-serif font-medium text-darkgray -tracking-[1px]">Related Posts</h5>
                  </Col>
                </Row>
                <BlogClean filter={false} overlay={["#0039e3", "#4132e0", "#5e28dd", "#741bd9", "#8600d4"]} pagination={false} grid="grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large" data={relatedPosts} />
              </Container>
            </section>
          )}
          {/* Related Posts Section End */}
          <FooterSection />
        </>
      ) : undefined}
    </div>
  );
};

export default BlogStandardPostPage;
