import React, { memo } from 'react';

const TeamStyle04 = ({ item }) => {
    return (
        <figure className="flex flex-col items-center justify-center group relative overflow-hidden">
            <div className="team-member-image w-[280px] h-[370px] flex flex-col items-center justify-center overflow-hidden">
                <img 
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105" 
                    loading="lazy" 
                    src={item.img} 
                    alt={item.name} 
                />
                <div className="absolute inset-0 bg-[#028985] bg-opacity-0 group-hover:bg-opacity-55 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    {item.title && <span className="quote text-white">{item.title}</span>}
                    {item.subtitle && <span className="text-center text-white opacity-70 w-[70%] md:w-full">{item.subtitle}</span>}
                    {item.social_links && (
                        <div className="social-icon mt-4 flex space-x-2">
                            {item.social_links.map((link, i) => (
                                <a
                                    aria-label="team"
                                    key={i}
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white"
                                >
                                    <i className={link.icon}></i>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <figcaption className="mt-4 text-center">
                <div className="title-bottom">
                    <span className="title text-black block font-bold">{item.name}</span>
                    <span className="sub-title text-gray-500">{item.designation}</span>
                </div>
            </figcaption>
        </figure>
    );
};

export default memo(TeamStyle04);
