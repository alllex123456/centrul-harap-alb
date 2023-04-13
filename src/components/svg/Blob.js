import React from 'react';

function Blob(props) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
    >
      <path
        fill='url("#SvgjsLinearGradient1000")'
        stroke="hsl(340, 45%, 30%)"
        strokeWidth="0"
        d="M331.675 351.047c-34.424 12.042-171.858-63.22-164.921-90.314 6.937-27.094 179.057-87.304 206.544-72.251 27.487 15.052-7.199 150.523-41.623 162.565-34.424 12.042-171.858-63.22-164.921-90.314"
      ></path>
      <defs>
        <linearGradient id="SvgjsLinearGradient1000">
          <stop offset="0" stopColor="#e59443"></stop>
          <stop offset="1" stopColor="#eaaa69"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Blob;
