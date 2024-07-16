import React, { memo } from 'react';
import { Row } from 'react-bootstrap';
import { m } from 'framer-motion';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Buttons from '../Button/Buttons';

const IconWithText = (props) => {
  return (
    <Row className={`${props.grid} md:justify-center items-stretch`}>
      {props.data.map((item, i) => (
        <m.div
          key={i}
          className={`col ${props.theme ? ` ${props.theme}` : ""}${props.className ? ` ${props.className}` : ""} flex`}
          {...{ ...props.animation, transition: { delay: i * props.animationDelay, ease: props.animationTransition, duration: props.animationDuration } }}
        >
          <div className="rounded-md w-full flex flex-col items-center max-w-full">
            <div className="flex items-center w-full mb-2.5">
              {item.img ? (
                <img height={36} width={45} className="inline-block mr-6" src={item.img} alt="featurebox" />
              ) : item.icon ? (
                props.theme === "icon-with-text-05" ? (
                  <Link aria-label="link for icon" to="#">
                    <i className={`${item.icon} mr-4`}></i>
                  </Link>
                ) : (
                  <i className={`${item.icon} mr-4`}></i>
                )
              ) : item.textIcon ? (
                <span className={`inline-block icon-text mr-4 ${shouldHighlight(i, props) ? 'text-[#02877F] font-bold' : 'text-basecolor'} ${props.highlightAllCard ? 'ml-5' : ''}`}>{item.textIcon}</span>
              ) : (
                <span className={`inline-block icon-text mr-4 ${shouldHighlight(i, props) ? 'text-[#02877F] font-bold' : 'text-basecolor'} ${props.highlightAllCard ? 'ml-5' : ''}`}>{`${i <= 9 ? "0" : ""}${i + 1}`}</span>
              )}
              {item.title && <span className="font-medium title font-serif ml-3">{item.title}</span>}
            </div>
            <div className={`text-left w-full mt-3 ${shouldHighlight(i, props) ? 'text-[#02877F] font-bold' : ''} ${props.highlightAllCard ? 'ml-5 ' : ''}`}>
              {item.content && <p className="whitespace-normal" dangerouslySetInnerHTML={{ __html: item.content }} />}
              {(item.linkTitle || item.link) && <Buttons ariaLabel="iconwithtext" className="font-medium font-serif uppercase btn-link after:h-[1px] md:text-md md:mb-[15px] after:bg-basecolor hover:text-basecolor mt-auto" to={item.link} title={item.linkTitle} />}
            </div>
          </div>
        </m.div>
      ))}
    </Row>
  );
};

function shouldHighlight(index, props) {
  if (props.highlightAllCard) {
    return true; // Highlight all cards if highlightAllCard is true
  } else if (props.highlightSecondCard && index === 1) {
    return true; // Highlight second card if highlightSecondCard is true
  } else {
    return false; // Default: no highlight
  }
}

IconWithText.defaultProps = {
  animationDelay: 0.6,
  animationDuration: 0.8,
  animationTransition: "circOut",
  theme: "icon-with-text-01",
  highlightSecondCard: false, // Default prop to highlight the second card
  highlightAllCard: false, // Default prop to highlight all cards
};

IconWithText.propTypes = {
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
  highlightSecondCard: PropTypes.bool, // Prop to determine if second card should be highlighted
  highlightAllCard: PropTypes.bool, // Prop to determine if all cards should be highlighted
};

export default memo(IconWithText);
