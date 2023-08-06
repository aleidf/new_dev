import React from 'react'

export const Preloader: React.FunctionComponent = () => {
  return (
    <>
      <div id="preloader">
        <div id="earna-preloader" className="earna-preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text-preloader="G" className="letters-loading">
                G
              </span>
              <span data-text-preloader="L" className="letters-loading">
                L
              </span>
              <span data-text-preloader="E" className="letters-loading">
                E
              </span>
              <span data-text-preloader="N" className="letters-loading">
                N
              </span>
              <span data-text-preloader="N" className="letters-loading">
                N
              </span>
            </div>
          </div>
          <div className="loader">
            <div className="row">
              <div className="col-3 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-left">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg"></div>
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&family=Poppins:wght@300;400;500;600;700&display=swap');

          @keyframes fadeOut {
            from {
              opacity: 1; /* Start with full opacity */
            }
            to {
              opacity: 0.2; /* End with lower opacity (change this value as needed) */
            }
          }

          .earna-preloader {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            cursor: default;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            height: 100%;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            z-index: 9000;
          }

          .earna-preloader .animation-preloader {
            z-index: 1000;
          }

          .earna-preloader .animation-preloader .spinner {
            -webkit-animation: spinner 1s infinite linear;
            animation: spinner 1s infinite linear;
            border-radius: 50%;
            border: 3px solid rgba(0, 0, 0, 0.2);
            border-top-color: #1273eb;
            height: 150px;
            margin: 0 auto 3.5em auto;
            width: 150px;
          }

          @keyframes spinner {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .earna-preloader .animation-preloader .spinner {
            -webkit-animation: spinner 1s infinite linear;
            animation: spinner 1s infinite linear;
            border-radius: 50%;
            border: 3px solid rgba(0, 0, 0, 0.2);
            border-top-color: #1273eb;
            height: 150px;
            margin: 0 auto 3.5em auto;
            width: 150px;
          }

           {
            /* .earna-preloader .animation-preloader .txt-loading {
            font: bold 5em 'Poppins', sans-serif;
            text-align: center;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          .earna-preloader .animation-preloader .txt-loading .letters-loading {
            color: rgba(0, 0, 0, 0.2);
            position: relative;
            animation: fadeOut 2s infinite alternate;
          }
          @keyframes letters-loading {
            0% {
              opacity: 0;
              color: rgba(0, 0, 0, 0.2);
            }
            50% {
              opacity: 1;
              color: #000000;
            }
            100% {
              opacity: 1; 
              color: #000000; 
            }
          }
          .earna-preloader
            .animation-preloader
            .txt-loading
            .letters-loading:not(:first-child):before {
            -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s;
          }

          .earna-preloader .animation-preloader .txt-loading .letters-loading:before {
            -webkit-animation: letters-loading 4s infinite;
            animation: letters-loading 4s infinite;
            color: #000000;
            content: attr(data-text-preloader);
            left: 0;
            opacity: 0;
            font-family: 'Poppins', sans-serif;
            position: absolute;
            top: -3px;
            -webkit-transform: rotateY(-90deg);
            transform: rotateY(-90deg);
          }

          .earna-preloader .animation-preloader .txt-loading .letters-loading {
            color: rgba(0, 0, 0, 0.2);
            position: relative;
          }

          .earna-preloader .animation-preloader .txt-loading {
            font: bold 5em 'Poppins', sans-serif;
            text-align: center;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          } */
          }
          @keyframes letters-loading {
             {
              /* 0% {
              opacity: 0;
              transform: translateY(-100%);
            }
            50% {
              opacity: 1;
              transform: translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateY(100%);
            } */
            }
             {
              /* 0% {
              opacity: 0;
              font-weight: 100;
              transform: scale(0);
            }
            50% {
              opacity: 1;
              font-weight: 500;
              transform: scale(1);
            }
            100% {
              opacity: 0;
              font-weight: 900;
              transform: scale(2);
            } */
            }
             {
              /* 0% {
              opacity: 0;
              font-weight: 100;
              transform: rotateY(180deg) scale(0);
            }
            50% {
              opacity: 1;
              font-weight: 500;
              transform: rotateY(0deg) scale(1);
            }
            100% {
              opacity: 0;
              font-weight: 900;
              transform: rotateY(-180deg) scale(2);
            } */
            }

             {
              /* 0% {
              opacity: 0;
              font-weight: 100;
              transform: rotateY(180deg) scale(1);
            }
            50% {
              opacity: 1;
              font-weight: 900;
              transform: rotateY(0deg) scale(1);
            }
            100% {
              opacity: 0;
              font-weight: 100;
              transform: rotateY(-180deg) scale(1);
            } */
            }
            0% {
              opacity: 0;
              font-weight: 100;
              transform: rotateY(180deg) scale(1);
            }
            50% {
              opacity: 1;
              font-weight: 900;
              transform: rotateY(0deg) scale(1);
            }
            100% {
              opacity: 0;
              font-weight: 100;
              transform: rotateY(-180deg) scale(1);
            }
          }

          .earna-preloader .animation-preloader .txt-loading .letters-loading {
            color: rgba(0, 0, 0, 0.2);
            position: relative;
            margin: 0 2px;
          }

          .earna-preloader .animation-preloader .txt-loading {
            font: bold 5em 'Poppins', sans-serif;
            text-align: center;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .earna-preloader .animation-preloader .txt-loading .letters-loading {
            color: rgba(0, 0, 0, 0.2);
            position: relative;
          }

          .earna-preloader .animation-preloader .txt-loading {
            font: bold 5em 'Poppins', sans-serif;
            text-align: center;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .earna-preloader .animation-preloader .txt-loading .letters-loading:before {
            -webkit-animation: letters-loading 4s infinite;
            animation: letters-loading 4s infinite;
            color: #000000;
            content: attr(data-text-preloader);
            left: 0;
            opacity: 0;
            font-family: 'Poppins', sans-serif;
            position: absolute;
            top: -3px;
            -webkit-transform: rotateY(-90deg);
            transform: rotateY(-90deg);
          }

          .earna-preloader .animation-preloader .txt-loading .letters-loading:before {
            -webkit-animation: letters-loading 4s infinite;
            animation: letters-loading 4s infinite;
            color: #000000;
            content: attr(data-text-preloader);
            left: 0;
            opacity: 0;
            font-family: 'Poppins', sans-serif;
            position: absolute;
            top: -3px;
            -webkit-transform: rotateY(-90deg);
            transform: rotateY(-90deg);
          }

          .earna-preloader .animation-preloader .txt-loading .letters-loading:nth-child(3):before {
            -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s;
          }

          .earna-preloader .animation-preloader .txt-loading .letters-loading:before {
            -webkit-animation: letters-loading 4s infinite;
            animation: letters-loading 4s infinite;
            color: #000000;
            content: attr(data-text-preloader);
            left: 0;
            opacity: 0;
            font-family: 'Poppins', sans-serif;
            position: absolute;
            top: -3px;
            -webkit-transform: rotateY(-90deg);
            transform: rotateY(-90deg);
          }

          .earna-preloader .animation-preloader .txt-loading .letters-loading:nth-child(4):before {
            -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s;
          }

          .earna-preloader .animation-preloader .txt-loading .letters-loading:before {
            -webkit-animation: letters-loading 4s infinite;
            animation: letters-loading 4s infinite;
            color: #000000;
            content: attr(data-text-preloader);
            left: 0;
            opacity: 0;
            font-family: 'Poppins', sans-serif;
            position: absolute;
            top: -3px;
            -webkit-transform: rotateY(-90deg);
            transform: rotateY(-90deg);
          }

          .earna-preloader .animation-preloader .txt-loading .letters-loading:nth-child(5):before {
            -webkit-animation-delay: 0.8s;
            animation-delay: 0.8s;
          }

          .earna-preloader .animation-preloader .txt-loading .letters-loading:before {
            -webkit-animation: letters-loading 4s infinite;
            animation: letters-loading 4s infinite;
            color: #000000;
            content: attr(data-text-preloader);
            left: 0;
            opacity: 0;
            font-family: 'Poppins', sans-serif;
            position: absolute;
            top: -3px;
            -webkit-transform: rotateY(-90deg);
            transform: rotateY(-90deg);
          }
        `}
      </style>
    </>
  )
}

export default Preloader
