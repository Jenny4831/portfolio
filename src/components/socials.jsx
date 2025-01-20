import React from "react";
import { motion } from 'framer-motion';

const Socials = () => {
    return (
    <motion.div 
      className="flex justify-center space-x-4 mb-6 sm:mb-8 md:mb-12 lg:mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <a href="https://www.linkedin.com/in/naimen-zhen-liang" target="_blank" rel="noopener noreferrer" className="text-[#8dff8d]/80 hover:text-[#8dff8d] transition-colors flex items-center group relative">
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#8dff8d]/90 text-black px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          LinkedIn
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 mr-2">
          <g>
            <path d="M22.8525 2.2874999999999996H24v19.424999999999997h-1.1475Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M21.7125 21.7125h1.1400000000000001v1.1475h-1.1400000000000001Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M21.7125 1.1400000000000001h1.1400000000000001v1.1475h-1.1400000000000001Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M20.565 3.4275h1.1475v17.145h-1.1475Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M2.2800000000000002 22.86h19.4325V24H2.2800000000000002Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M3.4275 20.572499999999998h17.137500000000003v1.1400000000000001H3.4275Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="m17.137500000000003 11.43 -1.1400000000000001 0 0 -1.1475 -2.2874999999999996 0 0 1.1475 -1.1400000000000001 0 0 -1.1475 -2.2874999999999996 0 0 6.862500000000001 2.2874999999999996 0 0 -3.4275 1.1400000000000001 0 0 -1.1475 1.1475 0 0 1.1475 1.1400000000000001 0 0 3.4275 2.2874999999999996 0 0 -4.574999999999999 -1.1475 0 0 -1.1400000000000001z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M5.7075000000000005 10.2825h2.2874999999999996v6.862500000000001H5.7075000000000005Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M5.7075000000000005 6.855h2.2874999999999996v2.2874999999999996H5.7075000000000005Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M3.4275 2.2874999999999996h17.137500000000003v1.1400000000000001H3.4275Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M2.2800000000000002 0h19.4325v1.1400000000000001H2.2800000000000002Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M2.2800000000000002 3.4275h1.1475v17.145H2.2800000000000002Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M1.1400000000000001 21.7125h1.1400000000000001v1.1475H1.1400000000000001Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M1.1400000000000001 1.1400000000000001h1.1400000000000001v1.1475H1.1400000000000001Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M0 2.2874999999999996h1.1400000000000001v19.424999999999997H0Z" fill="currentColor" stroke-width="0.75"></path>
          </g>
        </svg>
      </a>
      <a href="https://github.com/Jenny4831" target="_blank" rel="noopener noreferrer" className="text-[#8dff8d]/80 hover:text-[#8dff8d] transition-colors flex items-center group relative">
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#8dff8d]/90 text-black px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          GitHub
        </span>
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2">
          <path d="M7.999933333333333 0.35346666666666665c-1.8616000000000001 0.00006666666666666667 -3.662466666666666 0.6626 -5.080266666666667 1.8689333333333331C1.5017999999999998 3.4287333333333327 0.5594666666666666 5.100266666666666 0.26126666666666665 6.937866666666666c-0.29819999999999997 1.8375333333333332 0.0672 3.7212666666666667 1.0308 5.3141333333333325 0.9635333333333334 1.5927333333333333 2.462466666666667 2.790733333333333 4.228533333333333 3.3795333333333333 0.39199999999999996 0.0686 0.5389999999999999 -0.1666 0.5389999999999999 -0.37239999999999995 0 -0.18619999999999998 -0.0098 -0.8036 -0.0098 -1.4602 -1.9697999999999998 0.36260000000000003 -2.4794 -0.4801333333333333 -2.6361999999999997 -0.9211333333333332 -0.174 -0.4288666666666666 -0.4498 -0.8089333333333333 -0.8036 -1.1074 -0.2744 -0.147 -0.6664 -0.5095999999999999 -0.0098 -0.5194 0.2507333333333333 0.027200000000000002 0.4911333333333333 0.11446666666666666 0.7010000000000001 0.2543333333333333 0.2098 0.13986666666666664 0.3828666666666667 0.3283333333333333 0.5044 0.5492666666666666 0.10719999999999999 0.1926 0.25139999999999996 0.36219999999999997 0.4242666666666666 0.499 0.17286666666666664 0.13679999999999998 0.37106666666666666 0.2382 0.5831999999999999 0.29819999999999997 0.2121333333333333 0.060066666666666664 0.434 0.07773333333333332 0.6529333333333334 0.05193333333333333s0.43066666666666664 -0.09453333333333333 0.6229333333333333 -0.2023333333333333c0.03393333333333333 -0.39859999999999995 0.2116 -0.7712666666666667 0.4998666666666667 -1.0486 -1.7444 -0.19599999999999998 -3.5671999999999997 -0.8722 -3.5671999999999997 -3.8709999999999996 -0.011 -0.7791333333333333 0.27646666666666664 -1.533 0.8036 -2.106933333333333 -0.23966666666666664 -0.6772 -0.21166666666666667 -1.4203999999999999 0.0784 -2.0776 0 0 0.6565333333333333 -0.20579999999999998 2.1559999999999997 0.8036 1.2828 -0.3528 2.6370666666666667 -0.3528 3.9199333333333333 0 1.4993999999999998 -1.0191999999999999 2.1559999999999997 -0.8036 2.1559999999999997 -0.8036 0.29006666666666664 0.6572 0.3181333333333333 1.4003999999999999 0.0784 2.0776 0.5286 0.5729333333333333 0.8164666666666666 1.3275333333333332 0.8036 2.106933333333333 0 3.0086 -1.8325999999999998 3.675 -3.577 3.8709999999999996 0.18706666666666666 0.1896 0.3311333333333333 0.41733333333333333 0.42246666666666666 0.6675333333333333 0.09133333333333334 0.2503333333333333 0.1277333333333333 0.5173333333333333 0.10673333333333332 0.7828666666666666 0 1.0486666666666666 -0.0098 1.8913333333333333 -0.0098 2.1559333333333335 0 0.20579999999999998 0.147 0.4508 0.5389999999999999 0.37239999999999995 1.7629333333333332 -0.5935333333333332 3.2575333333333334 -1.7943333333333333 4.217 -3.3879333333333332 0.9595333333333333 -1.5936666666666666 1.3214 -3.476466666666666 1.0211333333333332 -5.312266666666666 -0.3002666666666667 -1.8357333333333332 -1.2431333333333332 -3.5050666666666666 -2.6604 -4.709933333333333C11.659466666666667 1.0164666666666666 9.860133333333334 0.3544666666666666 7.999933333333333 0.35346666666666665Z" fill="currentColor" stroke-width="0.6667"></path>
        </svg>
      </a>
      <a href="mailto:jennyzl4831@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Jenny%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out...%0A%0A%0A%0A%28This%20email%20was%20sent%20from%20your%20portfolio%20site%29" target="_blank" rel="noopener noreferrer" className="text-[#8dff8d]/80 hover:text-[#8dff8d] transition-colors flex items-center group relative" data-tooltip="Email me">
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#8dff8d]/90 text-black px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Email me
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 mr-2 group-hover:hidden">
          <g>
            <path d="M21.138749999999998 6.855h1.1475v9.1425h-1.1475Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M19.99875 5.715h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M2.8537500000000002 17.145h6.855V24h1.1475v-6.855h3.4275V24h1.1400000000000001v-6.855h5.715v-1.1475h-10.2825V6.855h-1.1475V5.715h4.574999999999999v3.4275h1.1400000000000001V5.715h4.574999999999999V4.5675h-4.574999999999999V3.4275h3.4275V0h-4.5675v4.5675H3.9937500000000004v1.1475h-1.1400000000000001v1.1400000000000001h-1.1400000000000001v9.1425h1.1400000000000001Zm12.57 -16.005h2.2874999999999996v1.1475h-2.2874999999999996Zm-12.57 6.855h1.1400000000000001V6.855h2.2874999999999996v1.1400000000000001h-2.2874999999999996v5.715h-1.1400000000000001Z" fill="currentColor" stroke-width="0.75"></path>
          </g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 mr-2 hidden group-hover:block">
          <g>
            <path d="M22.8525 6.855H24v9.1425h-1.1475Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M21.7125 5.715h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M12.57 15.997499999999999V6.855h-1.1400000000000001V5.715h4.5675v3.4275h1.1400000000000001V5.715h4.574999999999999V4.574999999999999h-4.574999999999999V3.4275h3.435V0h-4.574999999999999v4.574999999999999H5.715v1.1400000000000001H4.5675v1.1400000000000001H3.4275v9.1425H2.2874999999999996v1.1475h7.995v1.1400000000000001h1.1475V24h1.1400000000000001v-6.855h3.4275V24h1.1400000000000001v-6.855h5.715v-1.1475Zm4.5675 -14.857499999999998h2.2874999999999996v1.1475h-2.2874999999999996Zm-5.7075000000000005 12.5775h-1.1475v1.1400000000000001h1.1475v1.1400000000000001H5.715v-6.855h5.715Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M9.1425 12.57h1.1400000000000001v1.1475h-1.1400000000000001Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M8.0025 18.285h2.2800000000000002v1.1400000000000001h-2.2800000000000002Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="m8.0025 11.43 0 -1.1475 -1.1475 0 0 1.1475 1.1400000000000001 0 0 1.1400000000000001 1.1475 0 0 -1.1400000000000001 -1.1400000000000001 0z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M6.855 19.424999999999997h1.1475v1.1475H6.855Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M1.1400000000000001 20.572499999999998h5.715v1.1400000000000001H1.1400000000000001Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M1.1400000000000001 17.145h1.1475v1.1400000000000001H1.1400000000000001Z" fill="currentColor" stroke-width="0.75"></path>
            <path d="M0 18.285h1.1400000000000001v2.2874999999999996H0Z" fill="currentColor" stroke-width="0.75"></path>
          </g>
        </svg>
      </a>
    </motion.div>
    );
};

export default Socials;
