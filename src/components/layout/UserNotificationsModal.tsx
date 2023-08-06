import * as React from 'react'
import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'

interface UserNotificationModalProps {
  isNotificationModalOpen: boolean
  closeNotificationModal: () => void
}

export const UserNotificationModal: React.FunctionComponent<UserNotificationModalProps> = ({
  isNotificationModalOpen,
  closeNotificationModal,
}) => {
  return (
    <Dialog
      isOpen={isNotificationModalOpen}
      onDismiss={closeNotificationModal}
      className="modal h-screen w-full overflow-auto lg:w-[35%]"
      style={{
        width: '35%',
        marginRight: '0',
        marginTop: '0',
        marginBottom: '0',
        marginLeft: 'auto',
        padding: '0px',
      }}
      aria-label="Menu"
    >
      <div className="h-full w-full">
        <div
          className="mb-8 mt-7 flex w-full items-end justify-end gap-4 py-2
      px-6"
        >
          <button onClick={closeNotificationModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bg-red-1 h-[30px] w-[30px]"
              viewBox="0 0 256 256"
            >
              <path fill="none" d="M0 0H256V256H0z"></path>
              <circle
                cx="128"
                cy="128"
                r="96"
                fill="none"
                stroke="#ff0000"
                strokeMiterlimit="10"
                strokeWidth="16"
              ></circle>
              <path
                fill="none"
                stroke="#ff0000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                d="M160 96L96 160"
              ></path>
              <path
                fill="none"
                stroke="#ff0000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
                d="M160 160L96 96"
              ></path>
            </svg>
          </button>
        </div>

        <div className="widget px-[50px]">
          <div className="h-[57px] w-[168px] bg-[url('/images/logo.png')] bg-cover bg-center bg-no-repeat"></div>
          <p className="mt-5 ">
            An Investment Advisor and Stock Broker with 18 years of experience worked with more
            than 3 prestigious brokerage firms in the U.S.
          </p>
        </div>

        <div className="widget address mt-[50px] px-[50px]">
          <div>
            <ul>
              <li>
                <div className="content">
                  <p>Email</p>
                  <strong>hello@glennsteinberg.com</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&family=Poppins:wght@300;400;500;600;700&display=swap');

        .widget p {
          font-family: 'Open Sans', sans-serif;
          font-size: 15px;
          color: #666666;
        }
      `}</style>
    </Dialog>
  )
}
