import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';

// Components
import SocialIcons from '../../SocialIcon/SocialIcons';

// Data
import { fadeIn } from "../../../Functions/GlobalAnimations";
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
  {
    color: "#0077b5",
    link: "https://www.linkedin.com/",
    icon: "fab fa-linkedin-in"
  }
];

const Sidebar = ({ recentPosts = [], tags = [] }) => {
  return (
    <aside className="col-12 col-xl-3 offset-xl-1 col-lg-4 col-md-7 md:pl-[15px]">
      <div className='inline-block w-full mb-40'/>
      
      <div className='mb-20 xs:mb-[35px]'>
        <span className='mb-[35px] font-medium font-serif text-darkgray text-lg block'>Recent posts</span>
        <ul>
          {recentPosts.map((post, index) => (
            <m.li className='flex mb-[45px]' {...{...fadeIn, transition:{delay:0.2 * index}}} key={post.id}>
              <figure className="h-[65px] w-[80px] m-0 shrink-0">
                <Link aria-label="link" to={`/blogdetail/${post.id}`}>
                  <img height="" width="" src={post.img} alt={post.title} className='rounded-[3px]' />
                </Link>
              </figure>
              <div className='leading-normal pl-[30px] relative top-[-3px] grow'>
                <Link aria-label="link" to={`/blogdetail/${post.id}`} className='mb-[5px] sm:mb-0 font-medium text-darkgray inline-block'>{post.title}</Link>
                <span className="leading-[22px] text-[14px] block">{post.date}</span>
              </div>
            </m.li>
          ))}
        </ul>
      </div>
      <m.div className='visible mb-20 md:w-[90%] sm:w-full' {...fadeIn}>
        <span className='mb-[35px] font-medium font-serif text-darkgray text-lg block'>Tags cloud</span>
        {tags.map((tag, index) => (
          <Link aria-label="tag" to={`#`} key={index} className='inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]'>{tag}</Link>
        ))}
      </m.div>
    </aside>
  );
};

export default Sidebar;
