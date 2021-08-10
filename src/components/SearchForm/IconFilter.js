import React from 'react';

function IconFilter() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      enableBackground='new 0 0 24 24'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      className='fill-current'
    >
      <g>
        <path d='M0,0h24 M24,24H0' fill='none' />
        <path d='M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6c0,0,3.72-4.8,5.74-7.39 C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z' />
        <path d='M0,0h24v24H0V0z' fill='none' />
      </g>
    </svg>
  );
}

// 컴포넌트가 아닌 에셋 폴더에 파일로 넣는게 좋을 것 같다

export default IconFilter;

// public에 있으면 배포했을 때 접근을 할 수 없다. public에 넣었던 이유는 절대경로로 빠르게 쓸 수 있어서,,,?
