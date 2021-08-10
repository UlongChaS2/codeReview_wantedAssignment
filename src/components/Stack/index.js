import React from 'react';
import { css } from 'emotion';

function Stack({ children, gaps, direction = 'vertical' }) {
  const dir = direction === 'vertical' ? 'top' : 'left';
  const style = css`
    ${gaps.map(
      (gap, index) => `& > *:nth-child(${index + 1}) { 
        margin-${dir}: ${gap}px 
      }`
    )}
  `;

  return <div className={style}>{children}</div>;
}

// 가독성이 너무 떨어지는 스타일 컴포넌트, 이름과 맞지 않는 컴포넌트
// stack이라서 쌓은 다는 의미인 줄 알았지만 코드를 보니 각 요소마다 margin값을 다르게 스타일을 주는 컴포넌트였음
// 차라리 style폴더에 margin 값을 조정하는 의미의 이름으로 부여하는 것이 좋을 것 같음

export default Stack;
