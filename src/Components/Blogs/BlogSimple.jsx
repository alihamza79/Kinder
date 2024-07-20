import React, { useState, useEffect, useRef, memo } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { m } from "framer-motion";
import Pagination from "./HelperComponents/Pagination";
import Filter from "../Portfolio/Filter";
import { blogData, authorData } from "./BlogData";

const blogGridData = blogData.filter((item) => item.blogType === "simple");

const BlogSimple = (props) => {
  const blogWrapper = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import("../../Functions/Utilities").then((module) => {
      const grid = module.initializeIsotop(blogWrapper.current);
      grid.on("arrangeComplete", () => setLoading(false));
    });
  }, []);

  const style = {
    "--overlay-color":
      typeof props.overlay === "object"
        ? `linear-gradient(to right top, ${props.overlay.map((item, i) => item)})`
        : props.overlay,
  };

  const handleFilterChange = () => {
    blogWrapper.current
      .querySelectorAll("li")
      .forEach((item) => item.childNodes[0]?.classList.add("appear"));
  };

  const getSnippet = (content, wordCount) => {
    const plainTextContent = content.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags
    return plainTextContent.split(" ").slice(0, wordCount).join(" ") + "...";
  };

  return (
    <div className="grid-wrapper">
      {/* Filter Start */}
      <Filter title={props.title} filterData={props.filterData} onFilterChange={handleFilterChange} />
      {/* Filter End */}

      {/* Grid Start */}
      <ul
        ref={blogWrapper}
        className={`grid-container${props.grid ? ` ${props.grid}` : ""}${loading ? " loading" : ""}${props.filter === false ? "" : " mt-28 md:mt-[4.5rem] sm:mt-8"}`}
      >
        <li className="grid-sizer"></li>
        {props.data.map((item, i) => (
          <li
            key={i}
            className={`grid-item${item.double_col ? " grid-item-double" : ""} `}
          >
            <m.div
              className="blog-Simple xs:block"
              style={style}
              initial={{ opacity: 0 }}
              whileInView={!loading && { opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="blog-post-image xs:h-[250px] w-full" style={{ backgroundImage: `url(${item.img})` }}>
                <Link aria-label="link" to={`${props.link}${[item.id]}`}></Link>
              </div>
              <div className="post-details">
                <Link aria-label="link" to="#" className="blog-category">
                  {item.category[0]}
                </Link>
                <Link aria-label="link" to={`${props.link}${[item.id]}`} className="blog-title"
                  style={{ color: '#1C1C1C' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#028985'}
                  onMouseOut={(e) => e.currentTarget.style.color = '#1C1C1C'}>
                  {item.title}
                </Link>
                <p className="mb-[25px] xl:mb-[25px] md:mb-[20px] xs:mb-[15px]">
                  {item.content && getSnippet(item.content, 10)}
                </p>
                <Link aria-label="link" to="#" className="text-[#028985]" >
                  {item.author}
                </Link>
              </div>
            </m.div>
          </li>
        ))}
      </ul>
      {/* Grid End */}

      {/* Pagination Start */}
      {props.pagination === true && (
        <div className="flex justify-center mt-[7.5rem] md:mt-20">
          <Pagination 
            paginate={props.paginate} 
            currentPage={props.currentPage} 
            totalBlogs={props.totalBlogs} 
            blogsPerPage={props.blogsPerPage}
          />
        </div>
      )}
      {/* Pagination End */}
    </div>
  );
};

BlogSimple.defaultProps = {
  filter: false,
  data: blogGridData,
  link: "/blogdetail/",
};

BlogSimple.propTypes = {
  pagination: PropTypes.bool,
  title: PropTypes.string,
  grid: PropTypes.string,
  link: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      category: PropTypes.array,
      tags: PropTypes.array,
      blogType: PropTypes.string,
      img: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      author: PropTypes.number,
      likes: PropTypes.number,
      comments: PropTypes.number,
      date: PropTypes.string,
      double_col: PropTypes.bool,
    })
  ),
  paginate: PropTypes.func,
  currentPage: PropTypes.number,
  totalBlogs: PropTypes.number,
  blogsPerPage: PropTypes.number,
};

export default memo(BlogSimple);
