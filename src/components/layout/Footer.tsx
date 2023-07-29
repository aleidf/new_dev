import * as React from 'react'
import Link from 'next/link'

export const EmploymentFormsFooter: React.FunctionComponent = () => {
  return (
    <>
      <footer className="w-full bg-[#ffffff] py-6 px-4 md:px-10">
        <div className="md:flex md:flex-wrap md:justify-between md:gap-10">
          <div>
            <h1 className=" text-2xl font-bold">Joseph Sullivan Anderson</h1>
            <p className="mt-3 font-sans text-lg opacity-70">Investment Advisor & Broker</p>
            <p className="mt-3 font-sans text-lg opacity-70">CFP®, CPA, ChFC</p>

            <div className="mt-7">
              <Link href="https://wa.me/message/FTS4MEM5Y3UOM1">
                <a className="text-sm text-[#60a5fa] underline">Let&apos;s Connect</a>
              </Link>
            </div>
          </div>

          <div className="links">
            <div>
              <Link href="/">
                <a className="border-black text-sm font-medium text-black hover:border-b-[1px]">
                  HOME
                </a>
              </Link>
            </div>
            <div className="mt-2">
              <Link href="/">
                <a className="border-black text-sm font-medium text-black hover:border-b-[1px]">
                  ABOUT
                </a>
              </Link>
            </div>
            <div className="mt-2">
              <Link href="/">
                <a className="border-black text-sm font-medium text-black hover:border-b-[1px]">
                  MY TEAM
                </a>
              </Link>
            </div>
            <div className="mt-2">
              <Link href="/">
                <a className="border-black text-sm font-medium text-black hover:border-b-[1px]">
                  PLANNING
                </a>
              </Link>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <Link href="/">
                <a className="text-sm text-[#60a5fa] underline">+1 210-444-2295</a>
              </Link>
            </div>
            <div className="mt-3 flex items-center gap-6 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <Link href="/">
                <a className="text-sm text-[#60a5fa] underline">
                  811 MAIN STREET, Suite 1850 HOUSTON, TX 77002
                </a>
              </Link>
            </div>

            <div className="mt-2 h-[259px] w-full bg-[url('/images/map.png')] bg-cover bg-center object-cover"></div>
          </div>
        </div>

        <div className="mt-6 h-[1px] w-full bg-[#1b1f2733]"></div>
        <p className="mt-[56px] text-justify text-xs">
          Securities and Mutual Fund orders can only be placed by phone or in person. We will not
          process orders sent electronically, including but not limited to, communications sent via
          the Internet, mobile and cellular technologies, and electronic mail. Also, communications
          transmitted by you electronically represents your consent to two-way communication by
          electronic means. If you receive communications in error, please contact the sender and
          delete the material from any electronic means on which it exists.
        </p>
        <p className="mt-3 text-justify  text-xs">
          © 2022 The PA Securities is an affiliate of Citi Private Bank a business of Citigroup
          Global Market inc. All rights reserved.
        </p>
        <p className="mt-3 text-justify text-xs">
          Citigroup Global Market is the marketing name for The Citigroup Global Market Life
          Insurance Company (CM) (life and disability Insurance, annuities, and life insurance with
          long-term care benefits) and its subsidiaries, including Citigroup Global Market Long Term
          Care Insurance Company (CGMLTCI) (long-term care insurance), Citigroup Global Market
          Investment Services, LLC (CGMIS) (investment brokerage services), a registered investment
          adviser, broker-dealer, and member of FINRA and SIPC, and Citigroup Global Market Wealth
          Management Company® (CGMWMC) (investment advisory and trust services), a federal savings
          bank. CGM and its subsidiaries are in Houston.
        </p>
        <p className="mt-3 text-justify text-xs">
          The products and services referenced are offered and sold only by appropriately appointed
          and licensed entities and financial advisors and representatives. Financial advisors and
          representatives and their staff might not represent all entities shown or provide all the
          products or services discussed on this website. Not all products and services are
          available in all states. Not all Citigroup Global Market representatives are advisors.
          Only those representatives with &quot;Advisor&quot; in their title or who otherwise
          disclose their status as an advisor of CGWMC are credentialed as CGWMC representatives to
          provide investment advisory services.
        </p>
        <p className="mt-3 text-justify text-xs">
          Depending on the products and/or services being recommended or considered, refer to the
          appropriate disclosure brochure for important information on the Citigroup Global Market
          Wealth Management Company, its services, fees and conflicts of interest before investing.
          To obtain a copy of one or more of these brochures, contact your representative.
        </p>
        <p className="mt-3 text-justify text-xs">
          Joseph Sullivan Anderson is primarily licensed in TX and may be licensed in other states.
        </p>

        <div className="mt-8 h-[56px] w-[212px] bg-[url('/new_assets/logo.png')] bg-cover bg-center bg-no-repeat"></div>
      </footer>

      <style jsx>{`
        .subscribe-bg {
          background: linear-gradient(90deg, #0184d6 0%, #004067 114.15%);
        }
      `}</style>
    </>
  )
}
