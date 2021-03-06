import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import IconFilter from './IconFilter';

function LinkToFilter() {
  const location = useLocation();

  return (
    <Link
      to={{
        pathname: '/filters',
        search: location.search,
      }}
      className={styles.wrapper}
    >
      <IconFilter />
    </Link>
  );
}

const styles = {
  wrapper: 'text-blue-500 hover:text-blue-700',
};

export default LinkToFilter;

// LinkToFilter를 다른 곳으로 옮기는게 좋지 않을까?
