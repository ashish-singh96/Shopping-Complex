import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Home = () => {
    return (
        <>
            <div className=' pt-[66px]' style={{ overflowX: "hidden" }}>
                <img src="../Images/D-1.0-UHP-24052024-Urgency-last2.gif" alt="Description of the GIF" />
            </div>

            <div className='pt-4'>
                <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false} showIndicators={false}>
                    <div>
                        <img src="../Images/D-1.0-UHP-25052024-MainBannerDailyChanging-Z1-P2-Showoff-Veromoda-40-70.webp" />

                    </div>
                    <div>
                        <img src="../Images/D-1.0-UHP-25052024-MainBannerDailyChanging-Z1-P3-LEVIS-SKECHERS-UPTO30.png" />

                    </div>
                    <div>
                        <img src="../Images/D-1.0-UHP-16052024-mainbanner-z1-p1-iconicsale-4080HP Desktop.png" />

                    </div>

                    <div>
                        <img src="../Images/D-1.0-UHP-25052024-MainBannerDailyChanging-Z1-P5-MS-GAS-UPTO60.webp" />

                    </div>


                </Carousel>
            </div>

            <div className='pt-4'>
                <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false} showIndicators={false}>
                    <div>
                        <img src="../Images/Federal Bank-1440x128 1a.avif" />

                    </div>
                    <div>
                        <img src="../Images/1440x128- UHP web RRL_SBI.avif" />

                    </div>
                    <div>
                        <img src="../Images/1440x128 FI-copy.avif" />

                    </div>
                </Carousel>
            </div>



            <div>
                <img src="../Images/D-1.0-UHP-02052024-TopBannerMZ-Z3-header.avif" alt="Description of the GIF" />
            </div>

            <div>
                <img src="../Images/D-1.0-UHP-01052024-TopBannerBU-header.avif" alt="Description of the GIF" />
            </div>



            <div className='pt-4'>
                <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false} showIndicators={false}>
                    <div>
                        <img src="../Images/D-1.0-UHP-25052024-TopBrandBanner-Z3-P1-Puma-min50.avif" />

                    </div>
                    <div>
                        <img src="../Images/D-1.0-UHP-25052024-TopBrandBanner-Z3-P2-Adidas-Nike-MIN30.avif" />

                    </div>
                    <div>
                        <img src="../Images/D-1.0-UHP-25052024-TopBrandBanner-Z3-P3-mothercare-gap-MIN50.avif" />

                    </div>

                    <div>
                        <img src="../Images/D-1.0-UHP-25052024-TopBrandBanner-Z3-P4-Wuxi-Mischiefmonkey-Flat65.avif" />
                    </div>

                    <div>
                        <img src="../Images/D-1.0-UHP-25052024-TopBrandBanner-Z3-P5-AX-GANT-UPTO50.avif" />
                    </div>


                </Carousel>
            </div>


            <div>
                <img src="../Images/25052024-D-1.0-UHP-pre-buzz-starts30may-SK.gif" alt="Description of the GIF" />
            </div>




            <div className='pt-4'>
                <img src="../Images/D-1.0-UHP-01022024-FREEDEL-above799.avif" alt="Description of the GIF" />
            </div>

            <div>
                <img src="../Images/top brands_D.avif" alt="Description of the GIF" />
            </div>


            {/* Card */}


            <section>
                <section>
                    <div className="mx-auto grid max-w-screen-lg lg:grid-cols-4 grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 lg:px-0">
                        <article className="group w-full h-full  rounded-lg  shadow-lg">
                            <img
                                className="w-full h-48 transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-60 lg:h-96"
                                src="../Images/D-1.0-UHP-01052024-TopBrand-Gap-superdry-min50.avif"
                                alt="blog"
                            />
                        </article>
                        <article className="group w-full h-full overflow-hidden rounded-lg  shadow-lg">
                            <img
                                className="w-full h-48 transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-60 lg:h-96"
                                src="../Images/D-1.0-UHP-01052024-TopBrand-nike-adidas-min45.avif"
                                alt="blog"
                            />
                        </article>
                        <article className="group w-full h-full overflow-hidden rounded-lg  shadow-lg">
                            <img
                                className="w-full h-48 transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-60 lg:h-96"
                                src="../Images/D-1.0-UHP-01052024-TopBrand-puma-uspa-min50.avif"
                                alt="blog"
                            />
                        </article>
                        <article className="group w-full h-full overflow-hidden rounded-lg  shadow-lg">
                            <img
                                className="w-full h-48 transform object-cover object-center transition duration-500 ease-in-out group-hover:scale-105 md:h-60 lg:h-96"
                                src="../Images/D-1.0-UHP-01052024-TopBrand-dnmxnetplay-under499.avif"
                                alt="blog"
                            />
                        </article>
                    </div>
                </section>

            </section>


            



            <div>
                <img src="../Images/D-1.0-UHP-01052024-DailyBannerBU-header.avif" alt="Description of the GIF" />
            </div>



        </>
    )
}

export default Home