import React, { useEffect, useState, useRef, memo } from 'react';

// Libraries
import { Col, Tabs, Tab } from 'react-bootstrap';
import Isotope from "isotope-layout";
import Lightbox from 'react-18-image-lightbox';
import { m } from 'framer-motion';
import PropTypes from "prop-types";

// Components
import { fadeIn } from '../../Functions/GlobalAnimations';
// Data
import { imageGalleryData02 } from './ImageGalleryData';
import ImageGallery02 from './ImageGallery02';

const ImageGallerySwitch = (params, item, i) => {
    switch (params.theme) {
        case "image-gallery-01":
            return <div />;
        case "image-gallery-02":
            return <ImageGallery02 data={item} />;
        case "image-gallery-03":
            return <div />;
        default:
            return <div />;
    }
}

const ImageGallery = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [filteredData, setFilteredData] = useState(props.data);
    const BgColor = (props.overlay && typeof (props.overlay) === "object") ? `linear-gradient(to top right, ${props.overlay.map((item, i) => item)})` : props.overlay;
    const imageGalleryWrapper = useRef();

    const handleClick = (i) => {
        setIsOpen(true);
        setPhotoIndex(i);
    }

    const handleFilter = (key) => {
        if (key === 'All') {
            setFilteredData(props.data);
        } else {
            setFilteredData(props.data.filter(item => item.category === key));
        }
    };

    const categories = ['All', ...new Set(props.data.map(item => item.category))];

    useEffect(() => {
        new Isotope(imageGalleryWrapper.current, {
            itemSelector: ".grid-item",
            layoutMode: "masonry",
            percentPosition: true,
            stagger: 0,
            masonry: {
                columnWidth: ".grid-sizer",
            },
        });
    }, [filteredData]);

    return (
        <>
            {isOpen && (
                <Lightbox
                    imageCaption={`${filteredData[photoIndex].title}... ${photoIndex + 1} of ${filteredData.length}`}
                    mainSrc={filteredData[photoIndex].src}
                    onCloseRequest={() => setIsOpen(false)}
                    nextSrc={filteredData[(photoIndex + 1) % filteredData.length].src}
                    prevSrc={filteredData[(photoIndex + filteredData.length - 1) % filteredData.length].src}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + filteredData.length - 1) % filteredData.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % filteredData.length)}
                />
            )}
            <Col>
                <Tabs className="tab-style-01 font-serif mb-[7.4rem] flex bg-transparent border-b-0 font-medium text-center justify-center md:mb-[60px] sm:mb-[20px]" onSelect={(key) => handleFilter(key)}>
                    {categories.map((category, i) => (
                        <Tab className="tab-style-01" key={i} eventKey={category} title={category} />
                    ))}
                </Tabs>
                <ul ref={imageGalleryWrapper} className={`${props.theme} ${props.className ? `${props.className}` : ""} grid-container ${props.grid ? `${props.grid}` : ""}`}>
                    <li className="grid-sizer"></li>
                    {
                        filteredData.map((item, i) => (
                            <m.li key={i} {...{ ...props.animation, transition: { delay: i * props.animationDelay } }} className={`grid-item${item.double_col ? " grid-item-double" : ""} ${item.category}`}>
                                <div className="image-box" style={{ background: props.theme === "image-gallery-03" ? (props.overlay[i] && props.overlay[i]) : BgColor }} onClick={() => handleClick(i)}>
                                    {ImageGallerySwitch(props, item, i)}
                                </div>
                            </m.li>
                        ))
                    }
                </ul>
            </Col>
        </>
    );
};

ImageGallery.defaultProps = {
    data: imageGalleryData02,
    animationDelay: 0.2
}

ImageGallery.propTypes = {
    className: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string,
            src: PropTypes.string,
            double_col: PropTypes.bool,
            category: PropTypes.string
        })
    ),
    animation: PropTypes.object,
    animationDelay: PropTypes.number,
    theme: PropTypes.string,
    grid: PropTypes.string,
    overlay: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
}

export default memo(ImageGallery);
