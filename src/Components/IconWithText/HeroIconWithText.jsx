import React, { memo, useState } from 'react';
import { Row } from 'react-bootstrap';
import { m } from 'framer-motion';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import Buttons from '../Button/Buttons';
import htmlTruncate from 'html-truncate';
import "../../Assets/scss/components/_iconwithtext.scss";
import './style.css';

const HeroIconWithText = (props) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const icons = [
    <div key="emergency-icon" className="inline-block items-center justify-center mr-4" style={{ height: 42, width: 51 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ fill: hoverIndex === 0 ? 'white' : '#EE2522' }}>
        <path d="M28.5 26.471H25v-3.5a1 1 0 0 0-2 0v3.5h-3.5a1 1 0 0 0 0 2H23v3.5a1 1 0 0 0 2 0v-3.5h3.5a1 1 0 0 0 0-2zM24 14.751a2.012 2.012 0 0 0-1.98 1.72h3.96a2.012 2.012 0 0 0-1.98-1.72z"/>
        <path d="M37 6H11a5 5 0 0 0-5 5v26a5 5 0 0 0 5 5h26a5 5 0 0 0 5-5V11a5 5 0 0 0-5-5zM20.01 16.471a4.003 4.003 0 0 1 7.98 0 1 1 0 0 1 .01 2h-8a1 1 0 0 1 .01-2zM34.287 33.21a2 2 0 0 1-2 2H15.713a2 2 0 0 1-2-2V21.733a2 2 0 0 1 2-2h16.574a2 2 0 0 1 2 2z"/>
      </svg>
    </div>,
    <div key="emergency-service-icon" className="inline-block items-center justify-center mr-4" style={{ height: 42, width: 51 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: hoverIndex === 1 ? 'white' : '#16807D' }}>
        <path d="M200 120a24 24 0 0 0-48 0v16h48ZM112 388a60 60 0 1 0 60 60 60.068 60.068 0 0 0-60-60Zm0 84a24 24 0 1 1 24-24 24 24 0 0 1-24 24ZM416 388a60 60 0 1 0 60 60 60.068 60.068 0 0 0-60-60Zm0 84a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z"/>
        <path d="M494.732 337.95 440.3 310.732c-9.295-14.365-50.867-78.461-62.767-94.021A12 12 0 0 0 368 212h-56.584l-22.049-44.1a35.8 35.8 0 0 0-32.2-19.9H28a24.028 24.028 0 0 0-24 24v252a36.04 36.04 0 0 0 36 36h1.019a72 72 0 1 1 141.962 0h162.038a72 72 0 1 1 142.463-3.5A36.043 36.043 0 0 0 508 424v-64.584a23.868 23.868 0 0 0-13.268-21.466ZM240 284a12 12 0 0 1-12 12h-28v28a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-28h-28a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h28v-28a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v28h28a12 12 0 0 1 12 12Zm112 80h-15a12 12 0 0 1 0-24h15a12 12 0 0 1 0 24Zm62.73-51H336a12 12 0 0 1-12-12v-61a12 12 0 0 1 12-12h27.3a12 12 0 0 1 9.917 5.243c14.5 21.249 35.873 54.038 46.552 70.494A6 6 0 0 1 414.73 313Z"/>
      </svg>
    </div>,
    <div key="opening-hours-icon" className="inline-block items-center justify-center mr-4" style={{ height: 42, width: 51 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.002 512.002" style={{ fill: hoverIndex === 2 ? '#FFA217' : '#FFA217' }}>
        <g>
          <path d="M207.801 351.335h-9.1v34.267h9.1c22.736-.944 22.718-33.331 0-34.267zM99.351 351.335c-11.267 0-21.149 15.514-21.149 33.2s9.883 33.2 21.149 33.2 21.15-15.514 21.15-33.2-9.884-33.2-21.15-33.2z" />
          <path d="M497.001 257.068h-482c-8.284 0-15 6.716-15 15v224.934c0 8.284 6.716 15 15 15h482c8.284 0 15-6.716 15-15V272.068c0-8.284-6.716-15-15-15zM99.351 447.735c-27.693 0-51.149-27.248-51.149-63.2 2.449-83.942 99.943-83.713 102.3.001-.001 35.523-23.124 63.199-51.151 63.199zm108.45-32.133h-9.1v17.134c-.793 19.902-29.215 19.887-30 0v-96.4c0-8.284 6.716-15 15-15h24.1c62.544 2.596 62.497 91.692 0 94.266zm112.467-46.067c19.902.793 19.887 29.215 0 30h-17.133v18.2h25.166c19.902.793 19.887 29.215 0 30h-40.166c-8.284 0-15-6.716-15-15v-96.4c0-8.284 6.716-15 15-15h40.166c19.902.793 19.887 29.215 0 30h-25.166v18.2zm135.5 63.2a15 15 0 0 1-27.48 8.32l-36.786-55.179v46.858c-.793 19.902-29.215 19.887-30 0v-96.4a15 15 0 0 1 27.48-8.32l36.786 55.179v-46.858c.793-19.902 29.215-19.887 30 0zM97.277 227.068 235.014 89.321c12.477 6.535 29.497 6.535 41.974 0l137.737 137.748h42.426L298.197 68.102C313.902 37.429 290.611-.33 256 .002c-34.606-.334-57.905 37.433-42.196 68.1L54.851 227.068z"/>
        </g>
      </svg>
    </div>,
    <div key="contact-info-icon" className="inline-block items-center justify-center mr-4" style={{ height: 42, width: 51 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style={{ fill: hoverIndex === 3 ? 'white' : '#1246E5' }}>
        <g data-name="Layer 2">
          <path d="M24 2H9a3 3 0 0 0-3 3v4h2a1 1 0 0 1 0 2H6v4h2a1 1 0 0 1 0 2H6v4h2a1 1 0 0 1 0 2H6v4a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm-2 19a1 1 0 0 1-1-1 4 4 0 0 0-8 0 1 1 0 0 1-2 0 6 6 0 0 1 3.9-5.61 4 4 0 1 1 4.2 0A6 6 0 0 1 23 20a1 1 0 0 1-1 1z"/>
          <path d="M19 11a2 2 0 1 1-2-2 2 2 0 0 1 2 2zM9 10a1 1 0 0 0-1-1H6a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1zm-1 7H6a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm0 6H6a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"/>
        </g>
      </svg>
    </div>
  ];

  return (
    <Row className={`${props.grid} md:justify-center`}>
      {props.data.map((item, i) => {
        const isHovered = hoverIndex === i;
        const truncatedContent = htmlTruncate(item.content, 200) + (item.content.length > 200 ? "<strong>... Read More</strong>" : "");

        return (
          <m.div
            key={i}
            className={`col${props.theme ? ` ${props.theme}` : ""}${props.className ? ` ${props.className}  px-2` : ""}`}
            {...{ ...props.animation, transition: { delay: i * props.animationDelay, ease: props.animationTransition, duration: props.animationDuration } }}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="rounded-md w-full"
              style={{
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={e => {
                if (i === 0) {
                  e.currentTarget.style.setProperty('background-color', '#f35e5e', 'important');
                } else if (i === 3) {
                  e.currentTarget.style.setProperty('background-color', '#1877F2', 'important');
                } else if (i === 2) {
                  e.currentTarget.style.setProperty('background-color', '#ffffff', 'important');
                }
              }}
              onMouseLeave={e => {
                if (i === 0 || i === 3 || i === 2) {
                  e.currentTarget.style.setProperty('background-color', '', 'important');
                }
              }}
            >
              <div className="flex items-center mb-4">
                {icons[i]}
                <span className="ml-5 text-lg font-medium title font-serif" style={{ color: isHovered && i === 2 ? '#828282' : 'inherit' }}>
                  {item.title}
                </span>
              </div>
              <div className='feature-box-content' style={{ color: isHovered && i === 2 ? '#828282' : 'inherit' }}>
                {item.content && (
                  <div dangerouslySetInnerHTML={{ __html: (isHovered || i === 2 || i === 3) ? item.content : truncatedContent }} />
                )}
              </div>
              {(item.linkTitle || item.link) && <Buttons ariaLabel="iconwithtext" className="font-medium font-serif uppercase btn-link after:h-[1px] md:text-md md:mb-[15px] after:bg-basecolor hover:text-basecolor" to={item.link} title={item.linkTitle} />}
            </div>
          </m.div>
        );
      })}
    </Row>
  );
};

HeroIconWithText.defaultProps = {
  animationDelay: 0.6,
  animationDuration: 0.8,
  animationTransition: "circOut",
  theme: "icon-with-text-01",
};

HeroIconWithText.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string,
      content: PropTypes.string,
      linkTitle: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  animation: PropTypes.object,
  animationDelay: PropTypes.number,
  animationTransition: PropTypes.string,
  theme: PropTypes.string,
  grid: PropTypes.string,
};

export default memo(HeroIconWithText);
