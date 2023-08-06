/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { EmploymentFormsHeader, Preloader } from '@/components/layout'
import Link from 'next/link'
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { Helmet } from 'react-helmet';



const SEO = {
  title: 'Glenn Howard Steinberg -  Broker and Investment Advisor',
  description: 'Glenn Howard Steinberg -  Broker and Investment Advisor',
  canonical: 'https://glennsteinberg.com/',
  openGraph: {
    type: 'website',
    url: 'https://www.glennsteinberg.com/',
    title: 'Glenn Howard Steinberg -  Broker and Investment Advisor',
    description: 'Glenn Howard Steinberg -  Broker and Investment Advisor',
    images: [
      {
        url: 'https://www.glennsteinberg.com/new_assets/Subject.png',
        alt: 'Glenn Howard Steinberg - Broker and Investment Advisor',
      },
    ],
    site_name: 'Glenn Howard Steinberg',
  }
};


const Index: NextPage = () => {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    // Simulate loading time (e.g., 3 seconds)
    const loadingTime = 6000

    // Set a timeout to transition to the main page after the loading time
    const timeoutId = setTimeout(() => {
      setIsLoading(false)
    }, loadingTime)

    // Clean up the timeout on unmount
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <main className="scroll-smooth">
      <NextSeo {...SEO} />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Glenn Howard Steinberg</title>
          <meta name="description" content="Glenn Howard Steinberg" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>


      <NextSeo {...SEO} />
        <ArticleJsonLd
          authorName="Glenn Howard Steinberg"
          dateModified="2023-01-01"
          datePublished="2023-01-01"
          description="Glenn Howard Steinberg -  Broker and Investment Advisor"
          images={['https://www.glennsteinberg.com/new_assets/Subject.png']}
          publisherName="Glenn Howard Steinberg"
          title="Glenn Howard Steinberg -  Broker and Investment Advisor"
          url="https://glennsteinberg.com/"
        />


      <Head>
        <title>Glenn Howard Steinberg</title>
        <meta name="author" content="Glenn Howard Steinberg -  Broker and Investment Advisor" />
        <meta name="description" content="Broker and Investment Advisor. Glenn Howard Steinberg possesses the level of detail needed to serve high-net-worth clients in advanced wealth management/investment topics such as portfolio management, retirement planning, risk management, tax minimization, charitable and estate planning services, planning for closely held business owners, and planning for executives." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Glenn Howard Steinberg" />
        <meta property="og:url" content="https://www.http://glennsteinberg.com/" />
        <meta property="og:url" content="https://www.glennsteinberg.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div className="h-[auto] w-full bg-[url('/images/bg.jpg')] bg-cover bg-bottom bg-no-repeat">
            <EmploymentFormsHeader />

            <div className="section-header_container">
              <div className="align-center flex flex-col justify-center pt-[10%] md:flex-row md:justify-evenly">
                <div className="col-lg-6 basis-1/2">
                  <div className="content flex flex-col items-center justify-center pt-32">
                    <h4 data-animation="animated slideInLeft">Broker, Investment Advisor</h4>
                    <h2
                      data-animation="animated slideInRight"
                      className="text-center text-[36px] md:text-[45px]"
                    >
                      GLENN HOWARD STEINBERG
                    </h2>
                    <div className="hidden md:block">
                      {' '}
                      <Link href="#contact">
                        <a
                          data-animation="animated slideInLeft"
                          className="btn btn-gradient effect btn-md"
                        >
                          Contact Us
                        </a>
                      </Link>
                    </div>
                    <div className="block md:hidden">
                      {' '}
                      <Link href="#contact-mobile">
                        <a
                          data-animation="animated slideInLeft"
                          className="btn btn-gradient effect btn-md"
                        >
                          Contact Us
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 thumb flex w-full basis-1/2 items-center justify-center md:block">
                  <div
                    className="shape-thumb mt-[60px] h-[226px] w-[275px] bg-[url('/images/subject.png')] bg-cover md:mt-[0px] md:h-[500px] md:w-[500px]"
                    data-animation="animated slideInUp"
                  >
                    {/* <img src={Image1} alt="Thumb" /> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <EmploymentFormsFooter /> */}
          </div>
          <section
            id="services"
            className="services-section h-[auto] w-full bg-[#1b1b1b] py-[120px]"
          >
            <div className="thumbs-services-area bg-dark text-light default-padding">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2">
                    <div className="site-heading text-center">
                      <h4 className="st-current">My Services</h4>
                      <h2 className="">What We Bring To You</h2>
                      <div className="devider"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-services mx-[auto] max-w-[1200px]">
                <div className="services-content">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="thumb-services-carousel owl-carousel owl-theme owl-loaded owl-drag">
                        <div className="owl-stage-outer">
                          <div
                            className="owl-stage"
                            style={{
                              transform: 'translate3d(0px, 0px, 0px)',
                              transition: 'all 0s ease 0s',
                              // width: "1600px",
                            }}
                          >
                            <div className="parent-container flex max-w-[1200px] overflow-x-auto scrollbar-hide">
                              <div className=" flex">
                                <div className="flex flex-col items-center justify-center">
                                  <div className="z-40 mr-[30px] h-[191px] w-[340px]  rounded-[7px] bg-[url('/images/Financ-Consul.jpg')] bg-cover bg-center"></div>
                                  <div className="owl-item active relative -z-40 mt-[-60px]  mr-[30px] box-border h-[300px] w-[370px] rounded-[7px] bg-[#24282b] p-[30px]">
                                    <div className="item absolute flex flex-col items-center justify-center">
                                      <div className="info mt-20">
                                        <h4 className="info-header">
                                          <a href="services-single.html">FINANCIAL CONSULTING</a>
                                        </h4>
                                        <p className="info-para">
                                          Critical evaluation with deep insight on investment in
                                          efficiently handling financial portfolios with consistent
                                          profits.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                  <div className="z-40 mr-[30px] h-[191px] w-[340px]  rounded-[7px] bg-[url('/images/Invest-Strategy.jpg')] bg-cover bg-center"></div>
                                  <div className="owl-item active relative -z-40 mt-[-60px]  mr-[30px] box-border h-[300px] w-[370px] rounded-[7px] bg-[#24282b] p-[30px]">
                                    <div className="item absolute flex flex-col items-center justify-center">
                                      <div className="info mt-20">
                                        <h4 className="info-header">
                                          <a href="services-single.html"> INVESTMENT STRATEGY</a>
                                        </h4>
                                        <p className="info-para">
                                          My insights on Investment could make you consistent
                                          profits in the financial markets.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex flex-col items-center justify-center">
                                  <div className="z-40 mr-[30px] h-[191px] w-[340px]  rounded-[7px] bg-[url('/images/stock-market.jpg')] bg-cover bg-center"></div>
                                  <div className="owl-item active relative -z-40 mt-[-60px]  mr-[30px] box-border h-[300px] w-[370px] rounded-[7px] bg-[#24282b] p-[30px]">
                                    <div className="item absolute flex flex-col items-center justify-center">
                                      <div className="info mt-20">
                                        <h4 className="info-header">
                                          <a href="services-single.html">STOCK BROKERAGE</a>
                                        </h4>
                                        <p className="info-para">
                                          Buying of stocks strategically and selling at profitable
                                          margins.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex flex-col items-center justify-center">
                                  <div className="z-40 mr-[30px] h-[191px] w-[340px]  rounded-[7px] bg-[url('/images/stock-market.jpg')] bg-cover bg-center"></div>
                                  <div className="owl-item active relative -z-40 mt-[-60px]  mr-[30px] box-border h-[300px] w-[370px] rounded-[7px] bg-[#24282b] p-[30px]">
                                    <div className="item absolute flex flex-col items-center justify-center">
                                      <div className="info mt-20">
                                        <h4 className="info-header">
                                          <a href="services-single.html">PORTFOLIO MANAGEMENT</a>
                                        </h4>
                                        <p className="info-para">
                                          Experience Investment Management Banking from Bank of
                                          America for my clients and enjoy a deeper level of service
                                          and attention paired with exceptional rewards.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex flex-col items-center justify-center">
                                  <div className="z-40 mr-[30px] h-[191px] w-[340px]  rounded-[7px] bg-[url('/images/digital-asset-trading.jpg')] bg-cover bg-center"></div>
                                  <div className="owl-item active relative -z-40 mt-[-60px]  mr-[30px] box-border h-[300px] w-[370px] rounded-[7px] bg-[#24282b] p-[30px]">
                                    <div className="item absolute flex flex-col items-center justify-center">
                                      <div className="info mt-20">
                                        <h4 className="info-header">
                                          <a href="services-single.html">DIGITAL ASSETS TRADING</a>
                                        </h4>
                                        <p className="info-para">
                                          Investing a portion of your profits in the most reliable
                                          digital currencies so as to be part of the future.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-nav disabled">
                          <div className="owl-prev">
                            <i className="fa fa-angle-left"></i>
                          </div>
                          <div className="owl-next">
                            <i className="fa fa-angle-right"></i>
                          </div>
                        </div>
                        <div className="owl-dots">
                          <div className="owl-dot active">
                            <span></span>
                          </div>
                          <div className="owl-dot">
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div
            id="about"
            className="about-us-area default-padding bg-gray hidden h-[auto] py-[120px] px-6 md:flex"
          >
            <div className="container md:max-w-[1400px]">
              <div className="about-items">
                <div className="row align-center flex flex-col items-center gap-[50px] md:flex-row">
                  <div className="col-lg-6">
                    <div className="thumb flex h-full">
                      <div className="z-50 flex flex-col justify-between pb-16">
                        <div className="hidden h-[250px] w-[25px] rounded-lg bg-[#1273eb] md:block"></div>
                        <h2 className="bottom-[50px] mb-[50px] hidden whitespace-nowrap px-[37px] text-base md:block">
                          <strong className="text-[62px] leading-[68.2px] text-[#1273eb]">
                            18
                          </strong>
                          years of <br /> working experience
                        </h2>
                      </div>
                      <div className="h-[650px] w-[370px] bg-[url('/images/img4.jpeg')] bg-cover md:-ml-40 md:w-[570px]"></div>
                    </div>
                  </div>
                  <div className="col-lg-6 info">
                    <h2>
                      "In investing, what is comfortable <br /> is rarely profitable."
                    </h2>
                    <p className="text-left leading-7 tracking-normal">
                      Glenn Howard Steinberg is a Broker and Investment Advisor who is working for
                      Merrill Lynch, Pierce, Fenner & Smith Incorporated and brings more than 18
                      years of investment and financial services experience. Glenn possesses the
                      level of detail needed to serve high-net-worth clients in advanced wealth
                      management/investment topics such as portfolio management, retirement
                      planning, risk management, tax minimization, charitable and estate planning
                      services, planning for closely held business owners, and planning for
                      executives. Glenn’s approach to wealth management is consultative and
                      customized to the client's financial needs. From individuals and families to
                      business owners, executives and nonprofits, Glenn begins by understanding
                      clients’ concerns and priorities, and then forms a strategy designed to give
                      them confidence that they will realize the financial outcomes that matter for
                      their lives. Through investment insights, Glenn provides clients access to
                      some of the best financial strategies to help secure, improve and preserve
                      investment assets, striving to ensure their lifestyles are never disrupted.
                      With personalized attention, Glenn adds convenience to clients’ lives by
                      facilitating credit and balance sheet management including banking, credit
                      cards, mortgages, bill payment and custom lending. Through development of
                      wealth transfer strategies to minimize taxes and transform charitable goals
                      into meaningful action, Glenn works with clients to build giving strategies
                      that align with their passion and purpose. With proactive and responsive
                      service, Glenn reviews the success of a client's strategy and updates them as
                      they desire. The result is a trusted and lasting relationship, with an
                      approach that reflects the client’s unique values. Glenn holds a 55 state
                      licenses and still aiming to acquire more. In addition to the time he spends
                      with clients, Glenn spends his time with his family. Glenn also volunteers for
                      his church and other Community services.
                    </p>
                    <ul>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          fill="#1273eb"
                          viewBox="0 0 256 256"
                        >
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                        800+ Profiles Handled
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          fill="#1273eb"
                          viewBox="0 0 256 256"
                        >
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                        $120 Million in accumulated profits
                      </li>
                    </ul>
                    <div className="author mt-[31px] flex">
                      <div className="signature">
                        <div className="h-[80px] w-[139.42px]  bg-[url('/images/signature.png')] bg-cover bg-center bg-no-repeat"></div>
                      </div>
                      <div className="intro">
                        <h5>Glenn Howard Steinberg</h5>
                        <span>
                          Financial Consulting | Investment Advisory &amp; Stock Brokerage
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="about-mobile"
            className="about-us-area default-padding bg-gray block h-[auto] py-[120px] px-6 md:hidden"
          >
            <div className="container">
              <div className="about-items">
                <div className="row align-center flex flex-col items-center gap-[50px] md:flex-row">
                  <div className="col-lg-6">
                    <div className="thumb flex h-full">
                      <div className="z-50 flex flex-col justify-between pb-16">
                        <div className="hidden h-[250px] w-[25px] rounded-lg bg-[#1273eb] md:block"></div>
                        <h2 className="bottom-[50px] mb-[50px] hidden whitespace-nowrap px-[37px] text-base md:block">
                          <strong className="text-[62px] leading-[68.2px] text-[#1273eb]">
                            18
                          </strong>
                          years of <br /> working experience
                        </h2>
                      </div>
                      <div className="h-[500px] w-[370px] rounded-lg bg-[url('/images/img4.jpeg')] bg-cover md:-ml-40 md:w-[570px]"></div>
                    </div>
                  </div>
                  <div className="col-lg-6 info">
                    <h2 className="">
                      "In investing, what is comfortable <br /> is rarely profitable."
                    </h2>
                    <p className=" text-justify leading-7 tracking-normal">
                      Glenn Howard Steinberg is a Broker and Investment Advisor who is working for
                      Merrill Lynch, Pierce, Fenner & Smith Incorporated and brings more than 18
                      years of investment and financial services experience. Glenn possesses the
                      level of detail needed to serve high-net-worth clients in advanced wealth
                      management/investment topics such as portfolio management, retirement
                      planning, risk management, tax minimization, charitable and estate planning
                      services, planning for closely held business owners, and planning for
                      executives. Glenn’s approach to wealth management is consultative and
                      customized to the client's financial needs. From individuals and families to
                      business owners, executives and nonprofits, Glenn begins by understanding
                      clients’ concerns and priorities, and then forms a strategy designed to give
                      them confidence that they will realize the financial outcomes that matter for
                      their lives. Through investment insights, Glenn provides clients access to
                      some of the best financial strategies to help secure, improve and preserve
                      investment assets, striving to ensure their lifestyles are never disrupted.
                      With personalized attention, Glenn adds convenience to clients’ lives by
                      facilitating credit and balance sheet management including banking, credit
                      cards, mortgages, bill payment and custom lending. Through development of
                      wealth transfer strategies to minimize taxes and transform charitable goals
                      into meaningful action, Glenn works with clients to build giving strategies
                      that align with their passion and purpose. With proactive and responsive
                      service, Glenn reviews the success of a client's strategy and updates them as
                      they desire. The result is a trusted and lasting relationship, with an
                      approach that reflects the client’s unique values. Glenn holds a 55 state
                      licenses and still aiming to acquire more. In addition to the time he spends
                      with clients, Glenn spends his time with his family. Glenn also volunteers for
                      his church and other Community services.
                    </p>
                    <ul>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          fill="#1273eb"
                          viewBox="0 0 256 256"
                        >
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                        800+ Profiles Handled
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          fill="#1273eb"
                          viewBox="0 0 256 256"
                        >
                          <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                        $120 Million in accumulated profits
                      </li>
                    </ul>
                    <div className="author mt-[31px] flex">
                      <div className="signature">
                        <div className="h-[70px] w-[100.42px]  bg-[url('/images/signature.png')] bg-cover bg-center bg-no-repeat"></div>
                      </div>
                      <div className="intro">
                        <h5>Glenn Howard Steinberg</h5>
                        <span>
                          Financial Consulting | Investment Advisory &amp; Stock Brokerage
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="expertise-area default-padding hidden py-[120px] px-3 md:block">
            <div className="container">
              <div className="item-heading">
                <div className="row -mx-[15px] flex flex-col md:flex-row">
                  <div className="col-lg-6 info basis-1/2 pl-14">
                    <h1>
                      {' '}
                      {/* EDIT QUOTE TEXT HERE */}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#b0b0b0"
                        className="h-[70px] w-[70px]"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {' '}
                          <path
                            d="M8.09 11.6314H3.4C3.48 6.96144 4.4 6.19144 7.27 4.49144C7.6 4.29144 7.71 3.87144 7.51 3.53144C7.32 3.20144 6.89 3.09144 6.56 3.29144C3.18 5.29144 2 6.51144 2 12.3214V17.7114C2 19.4214 3.39 20.8014 5.09 20.8014H8.09C9.85 20.8014 11.18 19.4714 11.18 17.7114V14.7114C11.18 12.9614 9.85 11.6314 8.09 11.6314Z"
                            fill="#b0b0b0"
                          ></path>{' '}
                          <path
                            d="M18.9086 11.6314H14.2186C14.2986 6.96144 15.2186 6.19144 18.0886 4.49144C18.4186 4.29144 18.5286 3.87144 18.3286 3.53144C18.1286 3.20144 17.7086 3.09144 17.3686 3.29144C13.9886 5.29144 12.8086 6.51144 12.8086 12.3314V17.7214C12.8086 19.4314 14.1986 20.8114 15.8986 20.8114H18.8986C20.6586 20.8114 21.9886 19.4814 21.9886 17.7214V14.7214C21.9986 12.9614 20.6686 11.6314 18.9086 11.6314Z"
                            fill="#b0b0b0"
                          ></path>{' '}
                        </g>
                      </svg>
                      <p className="ml-7 mt-3 max-w-[400px] text-justify text-[13px] text-[#666666]">
                        "Whatever your personal goals may be, I will work with you to develop a
                        personalized financial approach designed to help you pursue what’s most
                        important to you."
                      </p>
                      <div className="flex w-full max-w-[500px] justify-end">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#b0b0b0"
                          transform="rotate(180)"
                          className="h-[70px] w-[70px]"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {' '}
                            <path
                              d="M8.09 11.6314H3.4C3.48 6.96144 4.4 6.19144 7.27 4.49144C7.6 4.29144 7.71 3.87144 7.51 3.53144C7.32 3.20144 6.89 3.09144 6.56 3.29144C3.18 5.29144 2 6.51144 2 12.3214V17.7114C2 19.4214 3.39 20.8014 5.09 20.8014H8.09C9.85 20.8014 11.18 19.4714 11.18 17.7114V14.7114C11.18 12.9614 9.85 11.6314 8.09 11.6314Z"
                              fill="#b0b0b0"
                            ></path>{' '}
                            <path
                              d="M18.9086 11.6314H14.2186C14.2986 6.96144 15.2186 6.19144 18.0886 4.49144C18.4186 4.29144 18.5286 3.87144 18.3286 3.53144C18.1286 3.20144 17.7086 3.09144 17.3686 3.29144C13.9886 5.29144 12.8086 6.51144 12.8086 12.3314V17.7214C12.8086 19.4314 14.1986 20.8114 15.8986 20.8114H18.8986C20.6586 20.8114 21.9886 19.4814 21.9886 17.7214V14.7214C21.9986 12.9614 20.6686 11.6314 18.9086 11.6314Z"
                              fill="#b0b0b0"
                            ></path>{' '}
                          </g>
                        </svg>
                      </div>
                    </h1>
                  </div>
                  <div className="col-lg-6 right-info mt-8 basis-1/2">
                    <div className="info mb-5">
                      <h4>My expertise</h4>
                    </div>
                    <div className="skill-items">
                      <div className="progress-box">
                        <h5>Financial Consulting</h5>
                        <div className="progress">
                          <div className="progress-bar w-[88%]" role="progressbar" data-width="88">
                            <span>88%</span>
                          </div>
                        </div>
                      </div>
                      <div className="progress-box">
                        <h5 className="">Investment Advisory</h5>
                        <div className="progress">
                          <div
                            className="progress-bar w-[95%]"
                            role="progressbar"
                            data-width="95"
                            // style="width: 95%;"
                          >
                            <span>95%</span>
                          </div>
                        </div>
                      </div>
                      <div className="progress-box">
                        <h5>Stock Brokerage</h5>
                        <div className="progress">
                          <div
                            className="progress-bar w-[90%] "
                            role="progressbar"
                            data-width="90"
                            // style="width: 90%;"
                          >
                            <span>90%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="expertise-content text-light h-[auto] w-full rounded-xl bg-[url('/images/img3.jpeg')] bg-cover "
                // style="background-image: url(assets/img/2440x1578.png);"
              >
                <div className="row flex flex-col justify-between md:flex-row">
                  <div className="col-lg-4 single-item basis-1/3">
                    <div className="item">
                      <div className="content_ flex flex-col justify-end md:h-[350px]">
                        <h3>18</h3>
                        <p></p>
                        <h4 className="">YEARS OF EXPERIENCE</h4>
                        <p></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 single-item basis-1/3">
                    <div className="item">
                      <div className="content_ flex flex-col justify-end md:h-[350px]">
                        <h3>55</h3>
                        <p></p>
                        <h4 className="">STATE LICENSES</h4>
                        <p></p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 single-item basis-1/3">
                    <div className="item">
                      <div className="content_ flex flex-col justify-end md:h-[350px]">
                        <h3>6 | 3</h3>
                        <p></p>
                        <h4> EXAM PASSED | FIRMS </h4>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="fixed-shape bg-[url('/images/13.png')] bg-cover bg-center"
                  // style="background-image: url(assets/img/shape/13.png);"
                ></div>
              </div>
            </div>
          </div>

          <div className="expertise-area default-padding block py-[120px] px-3 md:hidden">
            <div className="container">
              <div className="item-heading">
                <div className="row -mx-[15px] flex flex-col md:flex-row">
                  <div className="col-lg-6 info basis-1/2">
                    <h1>
                      {' '}
                      {/* EDIT QUOTE TEXT HERE */}
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#b0b0b0"
                        className="h-[70px] w-[70px]"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {' '}
                          <path
                            d="M8.09 11.6314H3.4C3.48 6.96144 4.4 6.19144 7.27 4.49144C7.6 4.29144 7.71 3.87144 7.51 3.53144C7.32 3.20144 6.89 3.09144 6.56 3.29144C3.18 5.29144 2 6.51144 2 12.3214V17.7114C2 19.4214 3.39 20.8014 5.09 20.8014H8.09C9.85 20.8014 11.18 19.4714 11.18 17.7114V14.7114C11.18 12.9614 9.85 11.6314 8.09 11.6314Z"
                            fill="#b0b0b0"
                          ></path>{' '}
                          <path
                            d="M18.9086 11.6314H14.2186C14.2986 6.96144 15.2186 6.19144 18.0886 4.49144C18.4186 4.29144 18.5286 3.87144 18.3286 3.53144C18.1286 3.20144 17.7086 3.09144 17.3686 3.29144C13.9886 5.29144 12.8086 6.51144 12.8086 12.3314V17.7214C12.8086 19.4314 14.1986 20.8114 15.8986 20.8114H18.8986C20.6586 20.8114 21.9886 19.4814 21.9886 17.7214V14.7214C21.9986 12.9614 20.6686 11.6314 18.9086 11.6314Z"
                            fill="#b0b0b0"
                          ></path>{' '}
                        </g>
                      </svg>
                      <p className="ml-7 mt-3 max-w-[400px] text-justify text-[13px] text-[#666666]">
                        "Whatever your personal goals may be, I will work with you to develop a
                        personalized financial approach designed to help you pursue what’s most
                        important to you."
                      </p>
                      <div className="flex w-full max-w-[500px] justify-end">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          stroke="#b0b0b0"
                          transform="rotate(180)"
                          className="h-[70px] w-[70px]"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {' '}
                            <path
                              d="M8.09 11.6314H3.4C3.48 6.96144 4.4 6.19144 7.27 4.49144C7.6 4.29144 7.71 3.87144 7.51 3.53144C7.32 3.20144 6.89 3.09144 6.56 3.29144C3.18 5.29144 2 6.51144 2 12.3214V17.7114C2 19.4214 3.39 20.8014 5.09 20.8014H8.09C9.85 20.8014 11.18 19.4714 11.18 17.7114V14.7114C11.18 12.9614 9.85 11.6314 8.09 11.6314Z"
                              fill="#b0b0b0"
                            ></path>{' '}
                            <path
                              d="M18.9086 11.6314H14.2186C14.2986 6.96144 15.2186 6.19144 18.0886 4.49144C18.4186 4.29144 18.5286 3.87144 18.3286 3.53144C18.1286 3.20144 17.7086 3.09144 17.3686 3.29144C13.9886 5.29144 12.8086 6.51144 12.8086 12.3314V17.7214C12.8086 19.4314 14.1986 20.8114 15.8986 20.8114H18.8986C20.6586 20.8114 21.9886 19.4814 21.9886 17.7214V14.7214C21.9986 12.9614 20.6686 11.6314 18.9086 11.6314Z"
                              fill="#b0b0b0"
                            ></path>{' '}
                          </g>
                        </svg>
                      </div>
                    </h1>
                  </div>
                  <div className="col-lg-6 right-info mt-8 basis-1/2">
                    <div className="info mb-3">
                      <h4>My expertise</h4>
                    </div>
                    <div className="skill-items">
                      <div className="progress-box">
                        <h5>Financial Consulting</h5>
                        <div className="progress">
                          <div className="progress-bar w-[88%]" role="progressbar" data-width="88">
                            <span>88%</span>
                          </div>
                        </div>
                      </div>
                      <div className="progress-box">
                        <h5 className="">Investment Advisory</h5>
                        <div className="progress">
                          <div
                            className="progress-bar w-[95%]"
                            role="progressbar"
                            data-width="95"
                            // style="width: 95%;"
                          >
                            <span>95%</span>
                          </div>
                        </div>
                      </div>
                      <div className="progress-box">
                        <h5>Stock Brokerage</h5>
                        <div className="progress">
                          <div
                            className="progress-bar w-[90%] "
                            role="progressbar"
                            data-width="90"
                            // style="width: 90%;"
                          >
                            <span>90%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="expertise-content text-light h-[auto] w-full rounded-xl bg-[url('/images/img3.jpeg')] bg-cover "
                // style="background-image: url(assets/img/2440x1578.png);"
              >
                <div className="row flex flex-col justify-between">
                  <div className="col-lg-4 single-item basis-1/3">
                    <div className="item">
                      <div className="content_ flex flex-col justify-end md:h-[350px]">
                        <h3>18</h3>
                        <p></p>
                        <h4 className="">YEARS OF EXPERIENCE</h4>
                        <p></p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 single-item basis-1/3">
                    <div className="item">
                      <div className="content_ flex flex-col justify-end md:h-[350px]">
                        <h3>55</h3>
                        <p></p>
                        <h4 className="">STATE LICENSES</h4>
                        <p></p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 single-item basis-1/3">
                    <div className="item">
                      <div className="content_ flex flex-col justify-end md:h-[350px]">
                        <h3>6 | 3</h3>
                        <p></p>
                        <h4> EXAM PASSED | FIRMS </h4>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="fixed-shape bg-[url('/images/13.png')] bg-cover bg-center"
                  // style="background-image: url(assets/img/shape/13.png);"
                ></div>
              </div>
            </div>
          </div>

          <div
            id="contact"
            className="contact-area default-padding extra-margin bg-theme inc-shape my-[120px] hidden py-[120px] md:block"
          >
            <div className="container max-w-[1200px]">
              <div className="row align-center -mx-[15px] flex flex-wrap items-center">
                <div className="col-lg-5 info basis-[41.666667%]">
                  <div className="content">
                    <h2 className="">CONTACT</h2>
                    <p>"Need a session?"</p>
                    <ul>
                      <li className="flex items-center gap-2">
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {' '}
                            <path
                              d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                              fill="#c7c7c7"
                            ></path>
                          </g>
                        </svg>
                        <p className="pt-4 text-center text-xs">+546ZE6918</p>
                      </li>
                      <li className="flex items-center gap-4">
                        <svg
                          width="20px"
                          height="15px"
                          viewBox="-4 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="#666666"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <g id="SVGRepo_iconCarrier">
                            <defs />
                            <g
                              id="Page-1"
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                id="Icon-Set-Filled"
                                transform="translate(-106.000000, -413.000000)"
                                fill="#666666"
                              >
                                <path
                                  d="M118,422 C116.343,422 115,423.343 115,425 C115,426.657 116.343,428 118,428 C119.657,428 121,426.657 121,425 C121,423.343 119.657,422 118,422 L118,422 Z M118,430 C115.239,430 113,427.762 113,425 C113,422.238 115.239,420 118,420 C120.761,420 123,422.238 123,425 C123,427.762 120.761,430 118,430 L118,430 Z M118,413 C111.373,413 106,418.373 106,425 C106,430.018 116.005,445.011 118,445 C119.964,445.011 130,429.95 130,425 C130,418.373 124.627,413 118,413 L118,413 Z"
                                  id="location"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                        <p className="pt-4 text-center text-xs">1100 - 1800 American BLVD</p>
                      </li>

                      <li className="flex items-center gap-4">
                        {/* <svg
                          fill="#000000"
                          width="20px"
                          height="15px"
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="-143 145 512 512"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {' '}
                            <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path>{' '}
                          </g>
                        </svg>

                        <p className="pt-4 text-center text-xs">
                          <Link href="/">
                            <a className="underline">connect with me on linkedin</a>
                          </Link>
                        </p> */}
                      </li>

                      <li className="flex items-center gap-4">
                        <p className="text-xs">
                          Learn more about an advisor's background on <br />
                          <Link href="https://brokercheck.finra.org/individual/summary/4855320">
                            <a className="underline" target="_blank">
                              {'HERE'}
                            </a>
                          </Link>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 contact-form-box ml-[8.333333%] basis-1/2">
                  <div className="form-box">
                    <form action="https://formsubmit.co/hello@glennsteinberg.com" method="POST">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              className="form-control text-white placeholder-white outline-0 ring-0"
                              id="name"
                              name="name"
                              placeholder="Name"
                              type="text"
                            />
                            <span className="alert-error"></span>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4 grid grid-cols-2 gap-8">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="form-control text-white placeholder-white outline-0 ring-0"
                              id="email"
                              name="email"
                              placeholder="Email*"
                              type="email"
                            />
                            <span className="alert-error"></span>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="form-control text-white placeholder-white outline-0 ring-0"
                              id="phone"
                              name="phone"
                              placeholder="Phone"
                              type="text"
                            />
                            <span className="alert-error"></span>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="form-control text-white placeholder-white outline-0 ring-0"
                              id="location"
                              name="location"
                              placeholder="Location"
                              type="text"
                            />
                            <span className="alert-error"></span>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="form-control text-white placeholder-white outline-0 ring-0"
                              id="subject"
                              name="subject"
                              placeholder="Subject"
                              type="text"
                            />
                            <span className="alert-error"></span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group comments">
                            <textarea
                              className="form-control text-white placeholder-white outline-0 ring-0"
                              id="comments"
                              name="comments"
                              placeholder="Book a session Today *"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-lg-12">
                          <button
                            type="submit"
                            name="submit"
                            id="submit"
                            className="flex items-center gap-3"
                          >
                            Send Message{' '}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 512 512"
                              className=""
                              fill="#1273eb"
                            >
                              <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="col-lg-12 alert-notification">
                        <div id="message" className="alert-msg"></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="contact-mobile"
            className="contact-area default-padding extra-margin bg-theme inc-shape my-[120px] block py-[120px] md:hidden"
          >
            <div className="container">
              <div className="row align-center -mx-[15px] flex flex-wrap items-center">
                <div className="col-lg-5 info  w-full md:basis-[41.666667%]">
                  <div className="content flex flex-col items-center justify-center">
                    <h2 className="">CONTACT</h2>
                    <p>"Need a session?"</p>
                    <div className="flex flex-col items-center justify-center">
                      <li className="flex items-center gap-2">
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {' '}
                            <path
                              d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
                              fill="#c7c7c7"
                            ></path>
                          </g>
                        </svg>
                        <p className="pt-4 text-center text-xs">+546ZE6918</p>
                      </li>
                      <li className="flex items-center gap-4">
                        <svg
                          width="20px"
                          height="15px"
                          viewBox="-4 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="#666666"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <g id="SVGRepo_iconCarrier">
                            <defs />
                            <g
                              id="Page-1"
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <g
                                id="Icon-Set-Filled"
                                transform="translate(-106.000000, -413.000000)"
                                fill="#666666"
                              >
                                <path
                                  d="M118,422 C116.343,422 115,423.343 115,425 C115,426.657 116.343,428 118,428 C119.657,428 121,426.657 121,425 C121,423.343 119.657,422 118,422 L118,422 Z M118,430 C115.239,430 113,427.762 113,425 C113,422.238 115.239,420 118,420 C120.761,420 123,422.238 123,425 C123,427.762 120.761,430 118,430 L118,430 Z M118,413 C111.373,413 106,418.373 106,425 C106,430.018 116.005,445.011 118,445 C119.964,445.011 130,429.95 130,425 C130,418.373 124.627,413 118,413 L118,413 Z"
                                  id="location"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                        <p className="pt-4 text-center text-xs">1100 - 1800 American BLVD</p>
                      </li>

                      <li className="flex items-center gap-4">
                        {/* <svg
                          fill="#000000"
                          width="20px"
                          height="15px"
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="-143 145 512 512"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {' '}
                            <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path>{' '}
                          </g>
                        </svg> */}

                        {/* <p className="pt-4 text-center text-xs">
                          <Link href="/">
                            <a className="underline">Connect with me on linkedin</a>
                          </Link>
                        </p> */}
                      </li>

                      <li className="flex items-center gap-4">
                        <p className="text-xs">
                          Learn more about an advisor's background <br />
                          <Link href="https://brokercheck.finra.org/individual/summary/4855320">
                            <a className="underline" target="_blank">
                              {'HERE'}
                            </a>
                          </Link>
                        </p>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 contact-form-box w-full md:ml-[8.333333%] md:basis-1/2">
                  <div className="form-box">
                    <form action="https://formsubmit.co/hello@glennsteinberg.com" method="POST">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              className="form-control text-white placeholder-white outline-0 ring-0"
                              id="name"
                              name="name"
                              placeholder="Name"
                              type="text"
                            />
                            <span className="alert-error"></span>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4 grid grid-cols-1 gap-8">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="form-control text-white placeholder-white outline-0 ring-0"
                              id="email"
                              name="email"
                              placeholder="Email*"
                              type="email"
                            />
                            <span className="alert-error"></span>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="form-control text-white placeholder-white outline-0 ring-0"
                              id="phone"
                              name="phone"
                              placeholder="Phone"
                              type="text"
                            />
                            <span className="alert-error"></span>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="form-control text-white placeholder-white outline-0 ring-0"
                              id="location"
                              name="location"
                              placeholder="Location"
                              type="text"
                            />
                            <span className="alert-error"></span>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="form-control text-white placeholder-white outline-0 ring-0"
                              id="subject"
                              name="subject"
                              placeholder="Subject"
                              type="text"
                            />
                            <span className="alert-error"></span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group comments">
                            <textarea
                              className="form-control text-white placeholder-white outline-0 ring-0"
                              id="comments"
                              name="comments"
                              placeholder="Book a session Today *"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-lg-12">
                          <button
                            type="submit"
                            name="submit"
                            id="submit"
                            className="flex items-center gap-3"
                          >
                            Send Message{' '}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 512 512"
                              className=""
                              fill="#1273eb"
                            >
                              <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="col-lg-12 alert-notification">
                        <div id="message" className="alert-msg"></div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="bg-dark text-light hidden md:block">
            <div className="container">
              <div className="f-items default-padding py-[120px]">
                <div className="row -mx-[15px] flex flex-wrap">
                  <div className="col-lg-4 col-md-6 item basis-1/3">
                    <div className="f-item about ">
                      <img src="/images/logo.png" alt="Logo" className="h-[85px] w-[168px]" />
                      <p>GLENN HOWARD STEINBERG</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 item contact_side basis-1/4">
                    <div className="f-item contact-widget">
                      <h4 className="widget-title">Contact Info</h4>
                      <div className="address">
                        <ul>
                          <li>
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512"
                                className="space_it"
                                fill="#1273eb"
                              >
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                              </svg>
                            </div>
                            <div className="content">
                              <strong className="text-white">Email:</strong>
                              <br />
                              <a href="mailto:hello@glennsteinberg.com">hello@glennsteinberg.com</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="container max-w-[1200px]">
                <div className="footer-bottom-box">
                  <div className="row -mx-[15px] flex flex-wrap">
                    <div className="col-lg-6">
                      <p className="">
                        © Copyright 2023. All Rights Reserved by Glenn Howard Steinberg.
                      </p>
                    </div>
                    <div className="col-lg-6 link text-right"></div>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          <footer className="bg-dark text-light block md:hidden">
            <div className="container">
              <div className="f-items default-padding py-[120px]">
                <div className="row -mx-[15px] flex flex-col">
                  <div className="col-lg-4 col-md-6 item">
                    <div className="f-item about px-3">
                      <img src="/images/logo.png" alt="Logo" className="h-[87px] w-[168px]" />
                      <p>GLENN H. STEINBERG</p>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 item contact_side basis-1/4">
                    <div className="f-item contact-widget">
                      <h4 className="widget-title">Contact Info</h4>
                      <div className="address px-3">
                        <ul>
                          <li>
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512"
                                className="space_it"
                                fill="#1273eb"
                              >
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                              </svg>
                            </div>
                            <div className="content">
                              <strong className="text-white">Email:</strong>
                              <br />
                              <a href="mailto:hello@glennsteinberg.com">hello@glennsteinberg.com</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="container max-w-[1200px]">
                <div className="footer-bottom-box">
                  <div className="row -mx-[15px] flex flex-wrap">
                    <div className="col-lg-6 px-6">
                      <p className="text-[14px]">
                        © Copyright 2023. All Rights Reserved by Glenn Howard Steinberg.
                      </p>
                    </div>
                    <div className="col-lg-6 link text-right"></div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&family=Poppins:wght@300;400;500;600;700&display=swap');

        .content h4 {
          text-transform: uppercase;
          color: #1273eb;
          font-size: 20px;
          font-family: 'Poppins', sans-serif;
          font-weight: 600 !important;
          margin-bottom: 25px;
          background: linear-gradient(90deg, rgba(18, 115, 235, 1) 0%, rgba(62, 220, 251, 1) 37%);
          -webkit-background-clip: text;
          -moz-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .content h2 {
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          margin: 0;
          color: #232323;
          line-height: 1.1;
        }
        .content a {
          margin-top: 40px;
          text-decoration: none;
        }

        .btn.btn-gradient {
          position: relative;
          z-index: 1;
          color: #ffffff;
        }
        .btn.btn-gradient::after {
          position: absolute;
          left: 0;
          top: 0;
          content: '';
          height: 100%;
          width: 100%;
          background-image: linear-gradient(to right, #1273eb, #18ebeb, #1273eb);
          background-size: 220% 150%;
          text-transform: uppercase;
          display: inline-block;
          color: #ffffff !important;
          background-color: #1273eb;
          z-index: -1;
          transition: all 0.35s ease-in-out;
        }

        .btn-md {
          padding: 17px 42px;
        }
        .btn {
          display: inline-block;
          font-weight: 600;
          text-transform: capitalize;
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          -ms-transition: all 0.35s ease-in-out;
          -o-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
          overflow: hidden;
          border-radius: 8px;
          font-size: 15px;
          text-transform: capitalize;
          letter-spacing: 0.5px;
          outline: medium none;
          font-family: 'Poppins', sans-serif;
        }
        .banner-area.auto-height .shape-thumb img {
          padding: 50px;
          margin-top: 120px;
          padding-bottom: 0;
        }
        #services .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          justify-items: center;
          align-items: center;
          text-align: center;
          margin-bottom: 60px;
        }

        .site-heading h4 {
          text-transform: uppercase;
          font-weight: 700;
          color: #1273eb;
          position: relative;
          z-index: 1;
          display: inline-block;
          background: linear-gradient(90deg, rgba(18, 115, 235, 1) 30%, rgba(4, 215, 242, 1) 100%);
          -webkit-background-clip: text;
          -moz-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: 'Poppins', sans-serif;
          font-size: 20px;
        }
        .site-heading h2 {
          display: block;
          font-weight: 700;
          font-family: 'Poppins', sans-serif;
          font-size: 36px;
          position: relative;
          margin-bottom: 0;
          color: #ffffff;
        }

        .site-heading .devider {
          display: inline-block;
          width: 50px;
          height: 2px;
          background: #1273eb;
          position: relative;
          z-index: 1;
          left: 10px;
        }
        .site-heading .devider:before {
          position: absolute;
          left: -15px;
          top: 0;
          content: '';
          height: 2px;
          width: 10px;
          background: #1273eb;
        }

        /* styles.css */
        .parent-container {
          overflow-x: auto;
          scrollbar-width: thin; /* or set to 0 for Firefox */
        }

        .parent-container::-webkit-scrollbar {
          width: 6px; /* Set the width of the scrollbar (adjust as needed) */
        }

        .parent-container::-webkit-scrollbar-thumb {
          background-color: transparent; /* Make the thumb transparent */
        }

        .parent-container::-webkit-scrollbar-track {
          background-color: transparent; /* Make the track transparent */
        }
        /* For Webkit-based browsers (Chrome, Safari and Opera) */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* For IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        .image-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          z-index: 1;
        }

        .info-header {
          display: block;
          font-weight: 500;
          font-family: 'Poppins', sans-serif;
          font-size: 20px;
          position: relative;
          margin-bottom: 0;
          color: #ffffff;
        }

        .info-para {
          color: #cccccc;
          margin: 0 0 15px;
          text-transform: none;
          font-weight: 400;
          margin-top: 13px;
        }
        .thumbs-services-area .item {
          position: relative;
          z-index: 1;
          margin: 0 15px;
        }

        .thumbs-services-area .item::after {
          position: absolute;
          left: -15px;
          top: 80px;
          right: -15px;
          content: '';
          bottom: 0;
          z-index: -1;
          border-radius: 7px;
        }

        .bg-gray {
          background: linear-gradient(
            90deg,
            rgba(237, 245, 255, 1) 0%,
            rgba(204, 223, 247, 1) 100%
          );
        }

        .about-us-area .about-items .thumb::after {
          position: absolute;
          left: 0;
          top: 0;
          content: '';
          height: 50%;
          width: 25px;
          background: #1273eb;
          z-index: -1;
          border-radius: 8px;
        }

        .about-us-area .about-items .thumb h2 {
          bottom: 50px;
          margin: 0;
          background: #ffffff;
          padding: 37px;
          padding-top: 30px;
          font-weight: 600;
          line-height: 1.1;
          color: #666666;
          border-radius: 8px;
        }

        .about-us-area .info h2 {
          font-weight: 600;
          margin-bottom: 25px;
          font-size: 36px;
          font-family: 'Poppins', sans-serif;
          font-weight: 600 !important;
          color: #232323;
        }

        .about-us-area .info p {
          margin-bottom: 25px;
          font-size: 15px;
          font-family: 'Open Sans', sans-serif;
          color: #666666;
        }

        .about-us-area .author .signature {
          border-right: 1px solid #999999;
          padding-right: 20px;
          margin-right: 20px;
        }

        .about-us-area .author h5 {
          font-weight: 600;
          margin-bottom: 5px;
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
        }

        .about-us-area .author span {
          font-family: 'Open Sans', sans-serif;
          font-size: 15px;
          color: #666666;
        }

        .about-us-area .about-items .info ul {
          margin-top: 30px;
        }

        .about-us-area .about-items .info ul li {
          margin-top: 10px;
          position: relative;
          z-index: 1;
          font-family: 'Poppins', sans-serif;
          color: #232323;
          font-weight: 500;
          font-size: 15px;
        }

        .expertise-area .item-heading {
          margin-bottom: 60px;
        }

        .expertise-area .info {
          padding-right: 35px;
        }

        .expertise-area .info h4 {
          text-transform: uppercase;
          color: #1273eb;
          font-weight: 600;
          background: linear-gradient(90deg, rgba(18, 115, 235, 1) 30%, rgba(4, 215, 242, 1) 100%);
          -webkit-background-clip: text;
          -moz-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          font-size: 20px;
        }

        .skill-items .progress-box {
          margin-bottom: 40px;
        }

        .skill-items .progress-box h5 {
          text-transform: capitalize;
          font-weight: 600;
          margin-bottom: 5px;
          text-align: left;
          position: relative;
          z-index: 1;
          font-size: 16px;
        }

        .skill-items .progress-box .progress {
          background: transparent;
          border-bottom: 2px solid #e7e7e7;
          box-shadow: inherit;
          border-radius: inherit;
          overflow: inherit;
        }

        .progress {
          display: -ms-flexbox;
          display: flex;
          height: 1rem;
          overflow: hidden;
          font-size: 0.75rem;
          background-color: #e9ecef;
          border-radius: 0.25rem;
        }

        .skill-items .progress-box .progress .progress-bar {
          height: 6px;
          border-radius: 30px;
          background: linear-gradient(90deg, rgba(18, 115, 235, 1) 30%, rgba(4, 215, 242, 1) 100%);
          top: 12px;
          position: relative;
          overflow: inherit;
        }

        .skill-items .progress-box .progress .progress-bar span {
          position: absolute;
          right: 0;
          top: -40px;
          display: block;
          font-size: 15px;
          color: #232323;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
        }

        .expertise-content {
          background-size: cover;
          background-position: top;
          position: relative;
          border-radius: 8px;
        }

        .expertise-area .expertise-content .single-item {
          border-right: 1px solid rgba(255, 255, 255, 0.6);
          z-index: 1;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.107) 0%,
            rgba(0, 0, 0, 0.782) 100%
          );
        }

        .expertise-area .expertise-content .item {
          padding: 50px;
          padding-top: 450px;
          position: relative;
          z-index: 1;
        }

        .expertise-area .expertise-content .content_ {
          position: absolute;
          transition: all 0.35s ease-in-out;
          transform: translateY(5px);
          left: 50px;
          right: 50px;
          bottom: 50px;
        }

        .expertise-area .expertise-content .single-item .item .content_:hover {
          position: absolute;
          transition: all 0.35s ease-in-out;
          transform: translateY(-100px);
          left: 50px;
          right: 50px;
          bottom: 50px;
        }

        .expertise-area .expertise-content .content_ h3 {
          font-size: 27px;
          margin-bottom: 15px;
          font-weight: normal;
          line-height: 1.2;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0;
          margin: 0;
        }

        .expertise-area .expertise-content .content_ h4 {
          font-weight: 600;
          font-size: 20px;
          margin-bottom: 15px;
        }

        .expertise-content .fixed-shape {
          position: absolute;
          left: -180px;
          bottom: -120px;
          height: 350px;
          width: 350px;
          background-size: contain;
          background-repeat: no-repeat;
          z-index: -1;
        }
        @media only screen and (max-width: 767px) {
          .expertise-area .expertise-content {
            text-align: center;
          }
        }
        @media only screen and (max-width: 767px) {
          .expertise-area .expertise-content .single-item {
            border-right: none;
          }
        }
        @media only screen and (max-width: 767px) {
          .expertise-area .expertise-content .single-item {
            border-right: none;
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.782) 100%,
              rgba(0, 0, 0, 0.782) 100%
            );
          }
        }
        @media only screen and (max-width: 767px) {
          .expertise-area .expertise-content .single-item .item {
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }
        }
        @media only screen and (max-width: 767px) {
          .expertise-area .expertise-content .item {
            padding: 15px;
            padding-top: 150px;
            padding-bottom: 50px;
          }
        }

        @media only screen and (max-width: 767px) {
          .expertise-area .expertise-content .content {
            position: inherit;
            transform: inherit;
            left: 0;
            right: 0;
            bottom: 0;
          }
        }

        .text-light {
          color: #f8f9fa !important;
          line-height: 1.2;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0;
          margin: 0;
        }

        .contact-area {
          position: relative;
          z-index: 1;
        }

        .bg-theme {
          background-color: #1273eb;
        }

        .contact-area::before {
          position: absolute;
          right: 0;
          top: 0;
          content: '';
          height: 100%;
          width: 120px;
          background: #ffffff !important;
          z-index: -1;
        }

        .contact-area::after {
          position: absolute;
          left: 0;
          top: 0;
          content: '';
          height: 100%;
          width: 120px;
          background: #ffffff;
          z-index: -1;
        }

        .contact-area .info .content {
          padding: 50px;
          background: #ffffff;
          position: relative;
          z-index: 1;
          padding-left: 80px;
          padding-top: 80px;
        }

        .contact-area .info h2 {
          font-weight: 600;
          margin-bottom: 30px;
          font-size: 36px;
          font-family: 'Poppins', sans-serif;
        }

        .contact-area .info p {
          color: #666666;
          margin: 0 0 15px;
          text-transform: none;
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
        }

        .contact-area .info ul {
          display: block;
          margin-top: 35px;
          margin: 0;
          list-style-type: none;
        }
        .contact-area .info .content::after {
          position: absolute;
          right: -30px;
          top: 30px;
          content: '';
          height: 100%;
          width: 100%;
          background: rgba(255, 255, 255, 0.2);
          z-index: -1;
        }
        .form-control {
          display: block;
          width: 100%;
          height: calc(1.5em + 0.75rem + 2px);
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #ced4da;
          border-radius: 0.25rem;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }
        .contact-area .form-box input,
        .contact-area .form-box textarea {
          padding: 20px;
          padding-left: 0;
          border: none;
          box-shadow: inherit;
          background: transparent;
          border-bottom: 1px solid rgba(255, 255, 255, 0.4);
          color: #ffffff !important;
          border-radius: inherit;
        }

        .contact-area .form-box textarea {
          min-height: 180px;
        }

        .contact-area .form-box button {
          padding: 15px 42px;
          border-radius: 5px;
          background: #ffffff;
          font-weight: 600;
          color: #1273eb;
        }

        .bg-dark {
          background-color: #1b1b1b !important;
        }

        @media only screen and (max-width: 991px) {
          #contact.contact-area.extra-margin {
            margin-top: 120px;
          }
        }

        @media only screen and (max-width: 767px) {
          #contact.contact-area.extra-margin {
            margin-top: 50px !important;
          }
          .contact-area::before {
            position: absolute;
            right: 0;
            top: 0;
            content: '';
            height: 100%;
            width: auto;
            background: #ffffff !important;
            z-index: -1;
          }

          .contact-area::after {
            position: absolute;
            left: 0;
            top: 0;
            content: '';
            height: 100%;
            width: auto;
            background: #ffffff;
            z-index: -1;
          }
          .contact-area .info .content::after {
            position: absolute;
            right: -30px;
            top: 30px;
            content: '';
            height: 100%;
            width: 100%;
            background: rgba(255, 255, 255, 0.2);
            z-index: -1;
            display: none;
          }
        }
        @media only screen and (max-width: 991px) {
          .contact-area.extra-margin {
            margin: 0;
          }
        }
        @media only screen and (max-width: 767px) {
          .default-padding {
            padding-top: 50px;
            padding-bottom: 50px;
          }
        }
        @media only screen and (max-width: 400px) {
          .contact-area .info .content {
            text-align: center;
          }
        }

        @media only screen and (max-width: 767px) {
          .contact-area .info .content {
            padding: 50px 30px;
            margin: 0 15px;
          }
        }

        @media only screen and (max-width: 767px) {
          .contact-area .form-box {
            margin: 0 15px;
            margin-top: 30px;
          }
        }

        footer {
          position: relative;
          z-index: 1;
        }

        footer .f-items .f-item.about {
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          padding-right: 40px;
          margin-right: 10px;
        }

        footer .widget-title,
        footer img {
          margin-bottom: 30px;
          font-weight: 600;
        }

        footer p {
          color: #a0a2a6 !important;
        }

        .contact_side {
          position: relative;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          padding-top: 30px;
        }

        footer .widget-title {
          margin-bottom: 30px;
          font-weight: 600 !important;
          font-size: 20px;
          color: #ffffff;
          font-weight: normal;
          line-height: 1.2;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0;
        }

        footer .f-items .f-item .address li:last-child {
          margin-bottom: -8px;
        }

        footer .f-items .f-item .address li {
          display: flex;
          margin-bottom: 25px;
        }
        footer .f-items .f-item .address li .space_it {
          display: inline-block;
          margin-right: 20px;
          color: #ffffff;
          font-size: 24px;
          color: #1273eb;
          position: relative;
          top: 5px;
        }

        .fa-envelope:before {
          content: '\f0e0';
        }

        footer .f-items .f-item .address li .content,
        footer .f-items .f-item .address li .content a {
          color: #a0a2a6;
        }

        footer .footer-bottom {
          overflow: hidden;
        }
        footer .footer-bottom-box {
          padding: 50px 0;
          padding-right: 80px;
          position: relative;
          z-index: 1;
        }

        footer .footer-bottom-box::after {
          position: absolute;
          right: 0;
          top: 0;
          content: '';
          height: 100%;
          width: 400%;
          background: #24282b;
          z-index: -1;
          opacity: 0.8;
          clip-path: polygon(0 0, 99% 0, 100% 100%, 10% 100%);
        }
        footer::after {
          position: absolute;
          right: 0;
          top: 0;
          content: '';
          height: 400px;
          width: 400px;
          background: url('/images/map.svg');
          background-size: cover;
          background-repeat: no-repeat;
          z-index: -1;
          opacity: 0.3;
        }
        @media only screen and (max-width: 767px) {
          .default-padding {
            padding-top: 50px;
            padding-bottom: 50px;
          }
        }
        @media only screen and (max-width: 767px) {
          footer .item:first-child {
            margin-top: 0;
          }
        }
        @media only screen and (max-width: 767px) {
          footer .item {
            margin-top: 50px;
          }
        }
        @media only screen and (max-width: 767px) {
          footer .f-items .f-item.about {
            border-right: none;
            padding-right: 0;
            margin-right: 0;
          }
        }
        @media only screen and (max-width: 767px) {
          footer .item {
            margin-top: 50px;
          }
          footer:after {
            position: absolute;
            right: 0;
            top: 0;
            content: '';
            height: 0px;
            width: 0px;
            background: url(/images/map.svg);
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            background-repeat: no-repeat;
            z-index: -1;
            opacity: 0.3;
            display: hidden;
          }

          .about-us-area .info h2 {
            font-weight: 600;
            margin-bottom: 25px;
            font-size: 30px;
            font-family: 'Poppins', sans-serif;
            font-weight: 600 !important;
            color: #232323;
          }
        }

        @media only screen and (max-width: 767px) {
          footer .footer-bottom-box {
            padding: 30px 0;
            padding-right: 0;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.3);
          }
        }
        @media only screen and (max-width: 767px) {
          footer .footer-bottom .text-right {
            text-align: center !important;
            margin-top: 15px;
          }
          footer .footer-bottom-box::after {
            position: absolute;
            display: none;
            right: 0;
            top: 0;
            content: '';
            height: 100%;
            width: 400%;
            background: #24282b;
            z-index: -1;
            opacity: 0.8;
            clip-path: polygon(0 0, 99% 0, 100% 100%, 10% 100%);
          }

          footer p {
            color: #a0a2a6 !important;
            line-height: 30px;
          }
        }
      `}</style>
    </main>
  )
}

export default Index
