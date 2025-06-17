import React from 'react'
import Carousel from "@/components/ui/carousel";
import { motion } from 'framer-motion';
function Good() {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  viewport={{ amount: 0.4, once: true }}

    >
        <p className='text-center text-3xl md:text-5xl pt-11 text-black font-serif'>GET A GOOD TRAVEL</p>
        <p className='text-center text-3xl md:text-5xl  text-black font-serif'>EXPERIENCE</p>
        <CarouselDemo/>
    </motion.div>
  )
}

export default Good




export function CarouselDemo() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "https://images.pexels.com/photos/19416720/pexels-photo-19416720/free-photo-of-a-church-on-a-hillside-with-a-steeple.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Sydney",
      button: "Explore Component",
      src: "https://www.australia.com/content/australia/en_in/travel-inspiration/where-to-visit/jcr:content/mainParsys/imagewithcaption_278174699/LargeImageTile/largeImageSrc.adapt.740.medium.jpg",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Melbourne",
      button: "Explore Component",
      src: "https://www.australia.com/content/australia/en_in/travel-inspiration/where-to-visit/jcr:content/mainParsys/imagewithcaption_387372445/LargeImageTile/largeImageSrc.adapt.740.medium.jpg",
    },
    {
      title: "Kakadu",
      button: "Explore Component",
      src: "https://www.australia.com/content/australia/en_in/travel-inspiration/where-to-visit/jcr:content/mainParsys/imagewithcaption_1947729883/LargeImageTile/largeImageSrc.adapt.740.medium.jpg",
    },
    {
      title: "Hobart",
      button: "Explore Component",
      src: "https://www.australia.com/content/australia/en_in/travel-inspiration/where-to-visit/jcr:content/mainParsys/imagewithcaption_1098076754/LargeImageTile/largeImageSrc.adapt.740.medium.jpg",
    },
    {
      title: "Picasso Museum",
      button: "Explore Component",
      src: "https://hblimg.mmtcdn.com/content/hubble/img/barcellona/mmt/activities/t_ufs/m_activities_barcelona_picasso_museum_l_430_604.jpg",
    },
  ];
  return (

    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>

  );

}
