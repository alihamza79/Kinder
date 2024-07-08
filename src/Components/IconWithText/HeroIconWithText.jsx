import React, { memo } from 'react';
import { Row } from 'react-bootstrap';
import { m } from 'framer-motion';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Buttons from '../Button/Buttons';
import { IconWithTextData_01 } from './IconWithTextData';
import "../../Assets/scss/components/_iconwithtext.scss";

const HeroIconWithText = (props) => {
  return (
    <Row className={`${props.grid} md:justify-center`}>
      {props.data.map((item, i) => (
        <m.div key={i} className={`col${props.theme ? ` ${props.theme}` : ""}${props.className ? ` ${props.className}` : ""}`} {...{ ...props.animation, transition: { delay: i * props.animationDelay, ease: props.animationTransition, duration: props.animationDuration } }}>
          <div className="rounded-md w-full">
            <div className="flex items-center mb-4">
              {item.img ? (
                <img height={42} width={51} className="inline-block items-center justify-center mr-4" src={item.img} alt="featurebox" />
              ) : item.icon ? (
                props.theme === "icon-with-text-05"
                  ? <Link aria-label="link for icon" to="#"><i className={item.icon}></i></Link>
                  : <i className={item.icon}></i>
              ) : item.textIcon ? (
                <span className="text-basecolor inline-block icon-text mr-4">{item.textIcon}</span>
              ) : (
                <span className="text-basecolor inline-block icon-text mr-4">{`${i <= 9 ? "0" : ""}${i + 1}`}</span>
              )}
              {item.title && <span className="ml-5 text-lg font-medium title font-serif">{item.title}</span>}
            </div>
            <div className='feature-box-content'>
              {item.content && <div dangerouslySetInnerHTML={{ __html: item.content }} />}
            </div>
            {(item.linkTitle || item.link) && <Buttons ariaLabel="iconwithtext" className="font-medium font-serif uppercase btn-link after:h-[1px] md:text-md md:mb-[15px] after:bg-basecolor hover:text-basecolor" to={item.link} title={item.linkTitle} />}
          </div>
        </m.div>
      ))}
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
