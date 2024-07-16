import React from 'react'
import FooterStyle04 from '../../Components/Footers/FooterStyle04'


const FooterSection = () => {
  return (
   <>
    {/* Footer Start */}
    <FooterStyle04
          className="startup-footer bg-no-repeat bg-right"
          theme="light"
          style={{
            backgroundImage:
              "url(/assets/img/webp/home-startup-footer-down-bg.webp)",
          }}
        >
        </FooterStyle04>
        {/* Footer End */}
   </>
  )
}

export default FooterSection