import React, { memo } from 'react'

// Libraries
import { Accordion } from 'react-bootstrap'
import { m } from "framer-motion"
import PropTypes from "prop-types"

// Data
import { AccordionData } from './AccordionData'

// css
import "../../Assets/scss/components/_accordion.scss"

const Accordions = (props) => {

    const splitDataInPairs = (data) => {
        const pairs = [];
        for (let i = 0; i < data.length; i += 2) {
            pairs.push(data.slice(i, i + 2));
        }
        return pairs;
    }

    const pairs = splitDataInPairs(props.data);

    return (
        <div className={`${props.theme} ${props.themeColor}${props.className ? ` ${props.className}` : ""}`}>
            <Accordion defaultActiveKey={0}>
                {pairs.map((pair, pairIndex) => (
                    <div className="row" key={pairIndex}>
                        {pair.map((item, key) => (
                            <div className="col-md-6" key={key}>
                                <m.div className="accordion-item-wrapper"
                                    {...{ ...props.animation, transition: { delay: (pairIndex * 2 + key) * props.animationDelay } }}
                                >
                                    <Accordion.Item eventKey={pairIndex * 2 + key}>
                                        {item.title &&
                                            <Accordion.Header>
                                                {item.time && <span className="panel-time">{item.time}</span>}
                                                {item.title && <span className="panel-title">{item.title}</span>}
                                                {item.author && <span className="panel-speaker">{item.author}</span>}
                                            </Accordion.Header>
                                        }
                                        {item.content && <Accordion.Body> {item.content} </Accordion.Body>}
                                    </Accordion.Item>
                                </m.div>
                            </div>
                        ))}
                    </div>
                ))}
            </Accordion>
        </div>
    )
}

Accordions.defaultProps = {
    data: AccordionData,
    animationDelay: 0.2,
    theme: "accordion-style-01",
    themeColor: "light"
}

Accordions.propTypes = {
    className: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.exact({
            title: PropTypes.string,
            content: PropTypes.string
        })
    ),
    animation: PropTypes.object,
    animationDelay: PropTypes.number,
    theme: PropTypes.string,
    themeColor: PropTypes.string,
}

export default memo(Accordions)
