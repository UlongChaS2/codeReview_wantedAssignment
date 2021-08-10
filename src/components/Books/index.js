import React from 'react';
import uniqBy from 'lodash/uniqBy';
import Book from './Book';

function Books({ items }) {
  return (
    <div className={styles.wrapper}>
      {uniqBy(items, 'id').map((item) => (
        <Book key={item.id} defaultClassName={styles.item} {...item} />
      ))}
    </div>
  );
}

// 검색하고 더 이상 내용이 없을 때 더보기 누르면 error뜸
// items가 빈 배열로 들어올 때 조건부 렌더링을 이용해서 error가 안 뜨게 설정해놓기

const styles = {
  wrapper: 'mt-4',
  item: 'mt-4',
};

export default Books;
