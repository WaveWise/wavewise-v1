import React from 'react'

const CoastSVG = props => (
  <svg
    xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox='0 0 1080 1080'
    {...props}
  >
    <defs>
      <linearGradient
        id='a'
        x1={72.86}
        y1={53.86}
        x2={583.14}
        y2={564.14}
        gradientTransform='rotate(180 545 541)'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0} stopColor='#fff' />
        <stop offset={0.08} stopColor='#fafafa' />
        <stop offset={0.17} stopColor='#ececec' />
        <stop offset={0.26} stopColor='#d4d4d4' />
        <stop offset={0.37} stopColor='#b3b3b3' />
        <stop offset={0.47} stopColor='#888' />
        <stop offset={0.58} stopColor='#545454' />
        <stop offset={0.69} stopColor='#181818' />
        <stop offset={0.73} />
      </linearGradient>
      <linearGradient
        id='b'
        x1={72.86}
        y1={53.86}
        x2={583.14}
        y2={564.14}
        xlinkHref='#a'
      />
      <mask
        id='c'
        x={28}
        y={57}
        width={1004}
        height={968}
        maskUnits='userSpaceOnUse'
      >
        <path
          d='M1012 57a20 20 0 0 1 20 20v928a20 20 0 0 1-20 20H48a20 20 0 0 1 0-40h944V77a20 20 0 0 1 20-20z'
          fill='url(#a)'
        />
      </mask>
      <mask
        id='d'
        x={58}
        y={57}
        width={1004}
        height={968}
        maskUnits='userSpaceOnUse'
      >
        <path
          stroke='url(#b)'
          strokeWidth={40}
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M1042 77H78v928'
        />
      </mask>
    </defs>
    <title>Coast</title>
    <g data-name='Layer 2'>
      <g mask='url(#c)'>
        <path
          stroke='#78a1bb'
          strokeWidth={40}
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M128 1005h884V157'
        />
      </g>
      <g mask='url(#d)'>
        <path
          stroke='#8b786d'
          strokeWidth={40}
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M962 77H78v848'
        />
      </g>
    </g>
    <path
      d='M903.58 178.53c-17 12.56-260.91 162.06-260.91 162.06s-113.94 69-187.09 132c-64.95 66.07-117.19 138.1-166 217.62-37.18 63.32-82.34 145.92-113.2 211.11'
      stroke='#c6d8d3'
      strokeWidth={35.03}
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default CoastSVG
