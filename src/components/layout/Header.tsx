/* eslint-disable no-var */
import Link from 'next/link'
import * as React from 'react'

export const EmploymentFormsHeader: React.FunctionComponent = () => {
  React.useEffect(() => {
    //javascript for navigation bar effect on scroll
    window.addEventListener('scroll', function () {
      var header = document.querySelector('header')
      header?.classList.toggle('sticky', window.scrollY > 0)
    })

    //javascript for responsive navigation sidebar menu
    var menu = document.querySelector('.menu')
    var menuBtn = document.querySelector('.menu-btn')
    var closeBtn = document.querySelector('.close-btn')

    menuBtn?.addEventListener('click', () => {
      menu?.classList.add('active')
    })

    closeBtn?.addEventListener('click', () => {
      menu?.classList.remove('active')
    })
  }, [])

  return (
    <>
      {/* <div classNameName="w-full bg-[#0f497b] py-2 px-2 md:px-20">
        <header className="w-full">
          <div className="flex items-center gap-9">
            <div className="flex flex-col items-center justify-center">
              <svg
                className="block h-8"
                viewBox="0 0 1000 264"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M90.3499 185.698L89.5809 186.467C81.1226 194.925 71.511 199.539 61.1303 199.539C39.6002 199.539 24.2215 184.16 24.2215 161.861C24.2215 139.177 39.6002 123.799 61.1303 123.799C71.511 123.799 81.1226 128.412 89.5809 136.87L90.3499 137.639L103.806 121.492V120.723C92.2722 107.266 78.4314 100.73 61.5148 100.73C44.5982 100.73 29.2195 106.497 18.07 116.878C5.76701 128.028 0 143.406 0 162.245C0 180.315 5.76701 196.078 18.07 206.844C29.2195 217.224 44.5982 222.991 61.5148 222.991C78.4314 222.991 91.8877 216.455 103.806 202.999V202.23L90.3499 186.082V185.698Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M119.185 101.884V219.915H143.022V101.884H119.185Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M233.756 194.541C227.989 198.385 221.453 200.308 216.071 200.308C208.381 200.308 204.537 196.463 204.537 186.851V124.567H229.143V101.884H204.537V64.975L181.084 78.0469V101.884H160.323V124.567H181.084V191.465C181.084 209.535 191.465 221.838 207.612 221.838C218.762 222.607 225.298 219.146 229.143 216.84H229.912V216.071L235.679 193.387L233.756 194.541Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M251.442 101.884V219.915H276.048V101.884H251.442Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M881.584 0H875.817L874.664 9.61169C778.162 12.303 758.554 87.2741 758.554 87.2741C758.554 87.2741 776.24 76.1246 801.999 76.1246C828.527 76.1246 838.908 86.5052 838.908 86.5052C838.908 86.5052 855.825 73.0488 879.277 73.0488C902.73 73.0488 919.646 86.5052 919.646 86.5052C919.646 86.5052 930.027 76.1246 955.786 76.1246C982.314 76.1246 1000 87.2741 1000 87.2741C1000 87.2741 980.008 11.9185 883.122 9.61169L881.968 0H881.584Z"
                  fill="#ED323D"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M863.899 223.376C878.893 223.376 886.582 214.148 886.582 197.616C886.582 190.311 886.582 84.1984 886.582 84.1984C883.506 83.045 878.124 83.045 875.048 84.1984C875.048 84.1984 875.048 189.158 875.048 197.616C875.048 208.766 870.434 212.611 863.899 212.611C856.594 212.611 852.365 208.766 852.365 197.616C852.365 194.541 849.673 191.849 847.366 191.849C844.291 191.849 841.599 194.541 841.599 197.616C841.599 214.533 849.289 223.376 864.283 223.376H863.899Z"
                  fill="#ED323D"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M372.549 186.082C366.013 193.772 355.632 201.461 344.483 201.461C326.413 201.461 316.417 188.389 316.417 158.016C316.417 133.41 325.644 120.338 342.945 120.338C355.248 120.338 366.398 128.797 372.165 135.717V185.698L372.549 186.082ZM396.002 209.535V101.884H372.165V113.033C365.629 105.729 354.095 99.5771 341.792 99.5771C316.417 99.5771 293.349 119.185 293.349 159.17C293.349 204.537 314.11 223.376 340.638 223.376C353.71 223.376 363.322 217.609 372.549 209.919V211.842C372.549 235.679 364.86 244.906 330.258 246.828L338.716 263.745C382.93 262.591 396.386 245.675 396.386 209.919L396.002 209.535Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M482.891 126.49C477.893 123.799 471.742 121.876 464.052 121.876C448.674 121.876 440.215 132.257 440.215 152.249V219.531H416.378V101.499H440.215V112.649C445.213 104.96 455.594 99.1926 468.281 99.1926C477.893 99.1926 484.429 101.115 489.812 104.191L483.276 126.105L482.891 126.49Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M571.703 161.476C571.703 183.007 559.4 201.077 541.33 201.077C523.26 201.077 510.188 186.851 510.188 160.707C510.188 136.87 521.722 121.107 540.177 121.107C559.785 121.107 572.088 136.486 572.088 161.476H571.703ZM595.54 160.707C595.54 123.03 572.088 99.1926 540.946 99.1926C509.804 99.1926 485.967 121.876 485.967 161.476C485.967 198.385 509.419 222.991 540.561 222.991C572.472 222.991 595.54 199.539 595.54 160.707Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M681.661 219.915V209.535C675.125 217.993 662.822 222.991 650.519 222.991C621.299 222.991 606.305 204.921 606.305 169.935V101.884H630.142V169.166C630.142 193.003 639.754 201.461 655.517 201.461C671.665 201.461 681.276 190.311 681.276 171.088V101.884H705.113V219.915H681.276H681.661Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M805.075 163.399C805.075 188.774 795.463 201.461 777.778 201.461C765.475 201.461 754.325 193.003 748.558 186.082V135.333C755.094 128.028 765.475 120.338 777.009 120.338C794.694 120.338 805.075 133.41 805.075 163.014V163.399ZM828.912 162.63C828.912 118.032 808.151 99.1926 781.622 99.1926C768.166 99.1926 757.785 104.96 748.558 112.649V101.499H725.106V263.745L748.558 251.442V209.15C755.863 216.455 767.397 222.607 780.469 222.607C805.844 222.607 828.912 202.999 828.912 162.245V162.63Z"
                  fill="white"
                ></path>
              </svg>
              <p className="mt-1 font-sans text-[10px] font-semibold text-white">
                {' '}
                GLOBAL MARKETS INC.
              </p>
            </div>
            <div className="h-10 w-[2px] bg-white"></div>
            <div className="">
              <div className="logo flex items-center gap-3">
                <div className="h-8 w-8 bg-[url('/images/favicon.png')] bg-cover bg-center"></div>
                <div>
                  <p className="font-sans text-sm font-bold text-white">JosephSullivan</p>
                  <p className="font-sans text-xs font-normal text-white">Citigroup Trader</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div> */}

      <header id="header">
        <a href="#" className="brand">
          {/* 
                    <!-- june image logo section --> */}
          <div className="h-[57px] w-[168px] bg-[url('/images/logo.png')] bg-no-repeat"></div>
          {/* <!-- june image logo section --> */}
        </a>
        <div>
          <div className="menu">
            <div className="btn">
              <i className="fas fa-times close-btn"></i>
            </div>
            <div className="link_container">
              <Link href="/">
                <a>HOME</a>
              </Link>
              <Link href="/">
                <a>SERVICES</a>
              </Link>
              <Link href="/">
                <a>ABOUT</a>
              </Link>
              <Link href="/">
                <a>CONTACTS</a>
              </Link>
              <Link href="/">
                <a>Contact Us</a>
              </Link>
              {/* <div className="attr-nav">
                <ul>
                  <li className="side-menu">
                    <a href="#">
                      <span className="bar-1"></span>
                      <span className="bar-2"></span>
                      <span className="bar-3"></span>
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        #header {
          z-index: 999;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 10px 140px;
          transition: 0.6s;
          box-shadow: rgb(102, 102, 102) 0px 0px 0px 0px;
        }
        #header.sticky {
          background: #ffffff;
          // padding: 5px 100px;
          padding: 10px 140px;
        }
        #header2.sticky2 {
          background: #ececea;
          padding: 2px 50px;
        }

        #header.sticky a {
          color: #000000 !important;
        }
        #header2.sticky2 a {
          color: #000000 !important;
        }

        #header.sticky .apply_now_btn {
          color: #ffffff !important;
        }

        #header .menu .link_container a {
          text-decoration: none;
          transition: 0.5s ease-in-out;
          font-size: 13px;
          letter-spacing: 0.06em;
          padding: 35px 15px;
          text-transform: uppercase;
          font-family: 'Poppins', sans-serif;
          font-weight: 600 !important;
          color: #333333;
          background-color: transparent !important;
        }
        .attr-nav {
          display: inline-block;
          float: right;
          margin-left: 50px;
        }

        .navbar .attr-nav .side-menu {
          position: relative;
          float: right;
          width: 40px;
          height: 100%;
          margin-left: 16px;
          padding: 38px 0;
        }

        .navbar .attr-nav .side-menu span {
          position: absolute;
          right: 0;
          top: 0;
          content: '';
          height: 2px;
          width: 40px;
          background: #232323;
          transition: all 0.35s ease-in-out;
        }

        .navbar .attr-nav .side-menu span:nth-child(2) {
          top: 8px;
          width: 35px;
        }

        .navbar .attr-nav .side-menu span {
          position: absolute;
          right: 0;
          top: 0;
          content: '';
          height: 2px;
          width: 40px;
          background: #232323;
          transition: all 0.35s ease-in-out;
        }

        .navbar .attr-nav .side-menu span:nth-child(3) {
          top: 16px;
          width: 30px;
        }

        .attr-nav > ul > li.side-menu > a {
          padding-right: 0 !important;
        }

        .attr-nav > ul > li > a {
          font-size: 16px;
          padding: 8px 10px !important;
        }
        .attr-nav > ul > li > a {
          color: #333333;
          display: block;
          padding: 32px 0 !important;
          position: relative;
        }
      `}</style>
    </>
  )
}
