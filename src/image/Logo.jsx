import * as React from "react"

function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32px"
      height="32px"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <path
        d="M4.5-.5h22c.283.79.783 1.456 1.5 2a196.24 196.24 0 010 28c-.717.544-1.217 1.21-1.5 2h-22c-.283-.79-.783-1.456-1.5-2a196.249 196.249 0 010-28C3.717.956 4.217.29 4.5-.5zm2 2a96.23 96.23 0 0119 1 85.002 85.002 0 010 26 50.501 50.501 0 01-20 0c-1.59-9.242-1.257-18.242 1-27z"
        opacity={0.639}
      />
      <path
        d="M9.5 5.5c3.708 1.05 3.54 2.384-.5 4-1.28-.113-2.113-.78-2.5-2a44.27 44.27 0 003-2z"
        opacity={0.511}
      />
      <path
        d="M13.5 6.5c3.726-.323 7.393.01 11 1l-5.5 1c-2.295-.046-4.129-.713-5.5-2z"
        opacity={0.623}
      />
      <path
        d="M10.5 10.5c1.528.017 2.028.684 1.5 2-1.113 1.83-2.613 2.663-4.5 2.5a3.943 3.943 0 01-1-2c1.573-.337 2.906-1.17 4-2.5z"
        opacity={0.483}
      />
      <path
        d="M13.5 11.5c3.726-.323 7.393.01 11 1l-5.5 1c-2.295-.046-4.129-.713-5.5-2z"
        opacity={0.623}
      />
      <path
        d="M10.5 15.5c1.725.342 2.225 1.343 1.5 3-1.93 2.605-3.764 2.605-5.5 0 1.684-.65 3.017-1.65 4-3z"
        opacity={0.457}
      />
      <path
        d="M13.5 17.5c3.726-.323 7.393.01 11 1l-5.5 1c-2.295-.047-4.129-.713-5.5-2z"
        opacity={0.623}
      />
      <path
        d="M9.5 21.5c3.708 1.05 3.54 2.384-.5 4-1.28-.113-2.113-.78-2.5-2a44.273 44.273 0 003-2z"
        opacity={0.511}
      />
      <path
        d="M13.5 22.5c3.726-.323 7.393.01 11 1l-5.5 1c-2.295-.047-4.129-.713-5.5-2z"
        opacity={0.623}
      />
    </svg>
  )
}

export default Logo
