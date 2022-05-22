export default function Shape() {
   return (
      <svg
         width={390}
         height={100}
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g clipPath="url(#a)">
            <g filter="url(#b)">
               <path
                  d="M0 12s76.077 15.982 127 20c26.339 2.078 41.554 3 68 3 26.446 0 40.661-.922 67-3 50.923-4.018 128-20 128-20v88H0V12Z"
                  fill="url(#c)"
                  fillOpacity={0.26}
               />
               <path
                  d="m0 12 .051-.245-.301-.063v88.558h390.5V11.693l-.301.062L390 12l-.052-.245h-.002l-.011.003-.042.009-.166.034-.655.134a1425.855 1425.855 0 0 1-11.959 2.38c-8.02 1.56-19.245 3.684-32.06 5.932-25.633 4.498-57.623 9.496-83.073 11.504-26.336 2.078-40.543 2.999-66.98 2.999-26.437 0-41.645-.921-67.98-3-25.449-2.007-57.19-7.005-82.572-11.503a1713.788 1713.788 0 0 1-31.717-5.932 1382.596 1382.596 0 0 1-11.813-2.38 385.09 385.09 0 0 1-.647-.134l-.164-.034-.042-.009-.01-.002H.052L0 12Z"
                  stroke="#7582F4"
                  strokeOpacity={0.5}
                  strokeWidth={0.5}
               />
            </g>
            <g filter="url(#d)">
               <path
                  d="M174 0h42c32 0 41.501 24.14 51.732 48.699C278.325 74.124 289 100 324 100H66c35 0 45.675-25.875 56.268-51.301C132.499 24.139 142 0 174 0Z"
                  fill="url(#e)"
               />
               <path
                  d="M174 .25h42c15.923 0 26.229 6 33.838 15.05 7.372 8.77 12.215 20.404 17.156 32.275l.508 1.22.102.247c5.259 12.623 10.576 25.385 18.921 35.006 7.047 8.125 16.252 14.007 29.384 15.702H74.091c13.133-1.695 22.337-7.577 29.385-15.702 8.345-9.62 13.661-22.383 18.92-35.006l.103-.247.507-1.22c4.941-11.87 9.784-23.505 17.156-32.274C147.771 6.25 158.077.25 174 .25Z"
                  stroke="#7582F4"
                  strokeOpacity={0.5}
                  strokeWidth={0.5}
               />
            </g>
         </g>
         <defs>
            <linearGradient
               id="c"
               x1={271.51}
               y1={12}
               x2={271.51}
               y2={100}
               gradientUnits="userSpaceOnUse"
            >
               <stop stopColor="#3A3A6A" />
               <stop offset={1} stopColor="#25244C" />
            </linearGradient>
            <linearGradient
               id="e"
               x1={245.615}
               y1={100}
               x2={245.615}
               y2={0}
               gradientUnits="userSpaceOnUse"
            >
               <stop stopColor="#262C51" />
               <stop offset={1} stopColor="#3E3F74" />
            </linearGradient>
            <filter
               id="b"
               x={-50.5}
               y={-38.616}
               width={491}
               height={189.116}
               filterUnits="userSpaceOnUse"
               colorInterpolationFilters="sRGB"
            >
               <feFlood floodOpacity={0} result="BackgroundImageFix" />
               <feGaussianBlur in="BackgroundImage" stdDeviation={25} />
               <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_359_1687"
               />
               <feBlend
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_359_1687"
                  result="shape"
               />
            </filter>
            <filter
               id="d"
               x={62}
               y={0}
               width={266}
               height={108}
               filterUnits="userSpaceOnUse"
               colorInterpolationFilters="sRGB"
            >
               <feFlood floodOpacity={0} result="BackgroundImageFix" />
               <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
               />
               <feOffset dy={4} />
               <feGaussianBlur stdDeviation={2} />
               <feComposite in2="hardAlpha" operator="out" />
               <feColorMatrix values="0 0 0 0 0.458824 0 0 0 0 0.509804 0 0 0 0 0.956863 0 0 0 1 0" />
               <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_359_1687"
               />
               <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_359_1687"
                  result="shape"
               />
            </filter>
            <clipPath id="a">
               <path fill="#fff" d="M0 0h390v100H0z" />
            </clipPath>
         </defs>
      </svg>
   )
}
