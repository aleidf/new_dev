import * as React from 'react'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'
import Link from 'next/link'

interface MobileMenuModalProps {
  isMobileMenuModalOpen: boolean
  closeMobileMenuModal: () => void
}

export const MobileMenuModal: React.FunctionComponent<MobileMenuModalProps> = ({
  isMobileMenuModalOpen,
  closeMobileMenuModal,
}) => {
  return (
    <Dialog
      isOpen={isMobileMenuModalOpen}
      onDismiss={closeMobileMenuModal}
      className="modal h-screen w-full overflow-auto lg:w-[35%]"
      style={{
        width: '100%',
        height: 'auto',
        marginRight: '0',
        marginTop: '0',
        marginBottom: '0',
        marginLeft: 'auto',
        padding: '0px',
      }}
      aria-label="Menu"
    >
      <div className="h-full w-full px-5">
        <div
          className="mb-8 mt-7 flex w-full items-center justify-start gap-4 py-2
  "
        >
          <button onClick={closeMobileMenuModal}>
            <svg
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <title>cancel2</title>{' '}
                <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path>{' '}
              </g>
            </svg>
          </button>
          <div className="ml-14 h-[57px] w-[168px] bg-[url('/images/logo.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className="link_container flex  flex-col">
          <Link href="/">
            <a>HOME</a>
          </Link>
          <Link href="#services">
            <a>SERVICES</a>
          </Link>
          <Link href="#about-mobile">
            <a>ABOUT</a>
          </Link>
          <Link href="#contact-mobile">
            <a>CONTACT</a>
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

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&family=Poppins:wght@300;400;500;600;700&display=swap');

        .link_container a {
          text-decoration: none;
          transition: 0.5s ease-in-out;
          font-size: 13px;
          letter-spacing: 0.06em;
          padding: 10px 0px;
          text-transform: uppercase;
          font-family: 'Poppins', sans-serif;
          font-weight: 600 !important;
          color: #333333;
          background-color: transparent !important;
          border-bottom: #a9a9a9 solid 0.3px;
        }
      `}</style>
    </Dialog>
  )
}
