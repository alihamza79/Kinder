import React, { memo, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { m } from "framer-motion";
import Pagination from "./HelperComponents/Pagination";
import Filter from "../Portfolio/Filter";

const BlogMasonry = (props) => {
  const blogWrapper = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import("../../Functions/Utilities").then((module) => {
      const grid = module.initializeIsotop(blogWrapper.current);
      grid.on("arrangeComplete", () => setLoading(false));
    });
  }, []);

  const handleFilterChange = () => {
    blogWrapper.current
      .querySelectorAll("li")
      .forEach((item) => item.childNodes[0]?.classList.add("appear"));
  };

  const getSnippet = (content, wordCount) => {
    const plainTextContent = content.replace(/<\/?[^>]+(>|$)/g, "");
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
        className={`grid-container${props.grid ? ` ${props.grid}` : ""}${props.className ? ` ${props.className}` : ""}${loading ? " loading" : ""}${props.filter === false ? "" : " mt-28 md:mt-[4.5rem] sm:mt-8"}`}
      >
        <li className="grid-sizer"></li>
        {props.data.map((item, i) => (
          <li
            key={i}
            className={`grid-item${item.double_col ? " grid-item-double" : ""} ${item.category.toString().split(",").join(" ").toLowerCase()}`}
          >
            <m.div
              className="blog-masonry bg-white relative overflow-hidden rounded-[5px] h-[600px]" // Fixed height class added
              initial={{ opacity: 0 }}
              whileInView={!loading && { opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center font-medium py-[15px] px-[30px]">
                {item.date && (
                  <span className="text-sm mr-auto text-[#262b35]">
                    {item.date}
                  </span>
                )}
                {item.likes !== undefined && (
                  <Link aria-label="link" to="#" className="flex justify-center items-center text-xs">
                    <i className="far fa-heart mr-[4px]"></i>
                    <span>{item.likes}</span>
                  </Link>
                )}
                {item.comments !== undefined && (
                  <Link aria-label="link" to="#" className="ml-[13px] flex justify-center items-center text-xs">
                    <i className="far fa-comment mr-[4px]"></i>
                    <span>{item.comments}</span>
                  </Link>
                )}
              </div>
              <div className="overflow-hidden relative">
                {item.img && (
                  <Link aria-label="link" to={`${props.link}${item.id}`}>
                    <div className="h-[340px] w-[340px] overflow-hidden">
                      <img className="object-cover h-full w-full" src={item.img} alt="blog post images" />
                    </div>
                  </Link>
                )}
                {item.category && item.category[0] && (
                  <div className="font-serif absolute bg-white left-0 bottom-0 top-auto rounded-none py-[13px] px-[25px] text-sm leading-[13px] font-medium">
                    <Link aria-label="link" to={`/blogs/category/${item.category[0].toString().split(" ").join("").toLowerCase()}`} className="category uppercase text-basecolor" style={{ color: '#028985' }}>
                      {item.category[0]}
                    </Link>
                  </div>
                )}
              </div>
              <div className="px-[3rem] py-[2.5rem] overflow-hidden">
                {item.title && (
                  <Link
                    aria-label="link"
                    to={`${props.link}${item.id}`}
                    className="mb-[15px] font-medium text-[#1C1C1C] text-xmd font-serif block"
                    style={{ color: '#1C1C1C' }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#028985'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#1C1C1C'}
                  >
                    {item.title}
                  </Link>
                )}
                {item.content && (
                  <p className="mb-[5px]">
                    {getSnippet(item.content, 10)}
                  </p>
                )}
              </div>
            </m.div>
          </li>
        ))}
      </ul>
      {/* Grid End */}

      {/* Pagination Start */}
      {props.pagination === true && (
        <div className="flex justify-center mt-[7.5rem] md:mt-20">
          <Pagination />
        </div>
      )}
      {/* Pagination End */}
    </div>
  );
};

BlogMasonry.defaultProps = {
  filter: false,
  data: [],
  animationDelay: 0.2,
  link: "/blogdetail/",
};

BlogMasonry.propTypes = {
  pagination: PropTypes.bool,
  title: PropTypes.string,
  grid: PropTypes.string,
  link: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      category: PropTypes.array,
      tags: PropTypes.array,
      blogType: PropTypes.string,
      img: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      author: PropTypes.string,
      authorImg: PropTypes.string,
      authorName: PropTypes.string,
      link: PropTypes.string,
      likes: PropTypes.number,
      comments: PropTypes.number,
      date: PropTypes.string,
      double_col: PropTypes.bool,
    })
  ),
};

export default memo(BlogMasonry);
