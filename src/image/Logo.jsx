import * as React from 'react';

function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32.000000pt"
      height="32.000000pt"
      viewBox="0 0 32.000000 32.000000"
      {...props}
    >
      <path
        d="M140 290c0-6-6-10-12-7-19 7-48-11-42-26 5-15 91-9 87 6s-33 39-33 27zM30 145c0-69 3-125 8-125 4 0 7 56 7 125s-3 125-7 125c-5 0-8-56-8-125zM255 220c-3-5-4-10-1-10 2 0 11-3 20-6 11-4 16-1 16 10 0 18-25 22-35 6zM215 150c-30-59-30-56-6-63 14-3 23 6 40 40 25 52 26 59 6 67-11 4-22-9-40-44z"
        transform="matrix(.1 0 0 -.1 0 32)"
      />
    </svg>
  );
}

export default Logo;
