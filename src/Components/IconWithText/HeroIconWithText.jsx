import React, { memo } from 'react';

// Libraries
import { Row } from 'react-bootstrap';
import { m } from 'framer-motion';
import { PropTypes } from "prop-types";
import { Link } from 'react-router-dom';

// Components
import Buttons from '../Button/Buttons';

// Data
import { IconWithTextData_01 } from './IconWithTextData';

// CSS
import "../../Assets/scss/components/_iconwithtext.scss";

const HeroIconWithText = (props) => {
  return (
    <Row className={`${props.grid} md:justify-center`}>
      {
        props.data.map((item, i) => {
          return (
            <m.div key={i} className={`col${props.theme ? ` ${props.theme}` : ""}${props.className ? ` ${props.className}` : ""}`} {...{ ...props.animation, transition: { delay: i * props.animationDelay, ease: props.animationTransition, duration: props.animationDuration } }}>
              <div className="rounded-md w-full">
                <div className="flex items-center"> {/* Added flex container for icon and title */}
                  {
                    item.img ? (
                      <img height={42} width={51} className="inline-block items-center justify-center mr-4 mb-[30px]" src={item.img} alt="featurebox" /> // Added margin-right to space out the icon and title
                    )
                      :
                      item.icon ? (props.theme === "icon-with-text-05" ? <Link aria-label="link for icon" to="#"><i className={item.icon}></i></Link> : <i className={item.icon}></i>
                      )
                        :
                        item.textIcon ? (<span className="text-basecolor inline-block icon-text mr-4">{item.textIcon}</span>) // Added margin-right to space out the icon and title
                          :
                          <span className="text-basecolor inline-block icon-text mr-4">{`${i <= 9 ? "0" : ""}${i + 1}`}</span> // Added margin-right to space out the icon and title
                  }

                  {item.title && <span className="mb-4 ml-5 text-lg font-medium title font-serif">{item.title}</span>}
                </div> {/* Closed flex container */}
                
                <div className='feature-box-content'>
                  {item.content && <p>{item.content}</p>}
                  {/* {props.theme === "icon-with-text-11" ? <Buttons ariaLabel="iconwithtext" href="#" className="font-medium font-serif uppercase btn-link after:h-[2px] after:bg-darkgray md:text-md md:mb-[15px]" size="xl" color="#232323" title="Read more" /> : ""} */}
                </div>
                {(item.linkTitle || item.link) && <Buttons ariaLabel="iconwithtext" className="font-medium font-serif uppercase btn-link after:h-[1px] md:text-md md:mb-[15px] after:bg-basecolor hover:text-basecolor" to={item.link} title={item.linkTitle} />}
              </div>
            </m.div>
          )
        })
      }
    </Row>
  )
}

HeroIconWithText.defaultProps = {
  data: IconWithTextData_01,
  animationDelay: 0.6,
  animationDuration: 0.8,
  animationTransition: "circOut",
  theme: "icon-with-text-01",
}

HeroIconWithText.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      icon: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      linkTitle: PropTypes.string,
      img: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  animation: PropTypes.object,
  animationDelay: PropTypes.number,
  animationTransition: PropTypes.string,
  theme: PropTypes.string,
  grid: PropTypes.string,
}

export default memo(HeroIconWithText);
