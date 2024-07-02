import React, { memo } from 'react';

// Libraries
import { Row } from 'react-bootstrap';
import { m } from 'framer-motion';
import { PropTypes } from 'prop-types';

// components
import Buttons from '../Button/Buttons';

// css
import '../../Assets/scss/components/_iconwithtext.scss';
import { IconWithTextData_04 } from './IconWithTextData';

const IconWithText = (props) => {
  const handleHover = (e, color) => {
    e.currentTarget.style.color = color;
  };

  return (
    <Row className={`${props.grid} md:justify-center`}>
      {props.data.map((item, i) => {
        return (
          <m.div
            key={i}
            className={`col${props.theme ? ` ${props.theme}` : ''}${
              props.className ? ` ${props.className}` : ''
            }`}
            {...{
              ...props.animation,
              transition: {
                delay: i * props.animationDelay,
                ease: props.animationTransition,
                duration: props.animationDuration,
              },
            }}
          >
            <div className="rounded-md w-full p-4">
              <div className="flex items-start mb-4">
                {item.icon && (
                  <i
                    className={`${item.icon} text-5xl mr-4`}
                    style={{ color: '#02877F' }} // Set the icon color
                  ></i>
                )}
                <div>
                  {item.title && (
                    <span className="font-medium title font-serif block">
                      {item.title}
                    </span>
                  )}
<div className="feature-box-content flex ml-[-8px]">
  {item.previewLink && (
    <Buttons
      ariaLabel="Preview PDF"
      href={item.previewLink}
      className="mx-[10px] font-medium font-serif uppercase btn-link after:bg-gradient-to-tr after:from-[#02877F] after:to-[#026358] after:h-[2px] !text-md"
      size="lg"
      color={["#02877F", "#026358"]}
      title="Preview"
    />
  )}
  {item.downloadLink && (
    <Buttons
      ariaLabel="Download PDF"
      href={item.downloadLink}
      className="mx-[10px] font-medium font-serif uppercase btn-link after:bg-gradient-to-tr after:from-[#02877F] after:to-[#026358] after:h-[2px] !text-md"
      size="lg"
      color={["#02877F", "#026358"]}
      onMouseOver={(e) => handleHover(e, '#026358')}
      onMouseOut={(e) => handleHover(e, '#02877F')}
      title="Download"
    />
  )}
</div>

                </div>
              </div>
            </div>
          </m.div>
        );
      })}
    </Row>
  );
};

IconWithText.defaultProps = {
  data: IconWithTextData_04,
  animationDelay: 0.6,
  animationDuration: 0.8,
  animationTransition: 'circOut',
  theme: 'icon-with-text-01',
};

IconWithText.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      icon: PropTypes.string,
      title: PropTypes.string,
      previewLink: PropTypes.string,
      downloadLink: PropTypes.string,
    })
  ),
  animation: PropTypes.object,
  animationDelay: PropTypes.number,
  animationTransition: PropTypes.string,
  theme: PropTypes.string,
  grid: PropTypes.string,
};

export default memo(IconWithText);
