import { Link } from "gatsby"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer class="mt-12 text-blue-700 bg-blue-600 border-t body-font">
    <div class="bg-blueGray-900">
      <div class="container flex flex-col flex-wrap px-5 py-6 mx-auto sm:flex-row">
        <p class="text-sm text-center text-gray-200 sm:text-left ">
          © {`Your Company `} {new Date().getFullYear()}
        </p>
        <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
          <Link class="text-white hover:text-blue-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </Link>
          <Link class="ml-4 text-white hover:text-blue-500">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </Link>
          <Link class="ml-4 text-white hover:text-blue-500">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </Link>
        </span>
      </div>
    </div>
  </footer>
)

export default Footer
