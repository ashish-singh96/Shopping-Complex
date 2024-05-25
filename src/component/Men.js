import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
const Men = () => {
    return (
        <div className='pt-[66px]'>


            <Carousel autoPlay infiniteLoop showThumbs={true} showArrows={false} showStatus={false} showIndicators={false}>
                <Link to={'/s/50-to-80-percent-off-5427-73191'}>
                <div>
                    <img src="../Images/D-1.0-MHP-16052024-mainbanner-z1-p1-iconicsale-4080.jpg" />
                </div>
                </Link>
                <div>
                    <img src="../Images/D-1.0-MHP-25052024-mainbanner-z1-p2-BULLMER-WUXI-MIN72.avif" />

                </div>
                <div>
                    <img src="../Images/D-1.0-MHP-25052024-mainbanner-z1-p3-SUPERDRY-GAP-UPTO50.avif" />

                </div>

                <div>
                    <img src="../Images/d-1.0-MHP-25052024-mainbanner-z1-p7-titan-tommyhilfiger-upto50.webp" />

                </div>

                <div>
                    <img src="../Images/D-1.0-MHP-25052024-mainbanner-z1-p4-Mufti-Spykar-upto60.avif" />

                </div>


            </Carousel>

        </div>
    )
}

export default Men