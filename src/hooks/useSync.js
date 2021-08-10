import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../store/search';

function useSync() {
  const dispatch = useDispatch();
  const { search } = useLocation();

  useEffect(() => {
    if (!search) {
      return;
    }

    dispatch(setSearch(search));
  }, [dispatch, search]);
}

export default useSync;

// 쓰지 않음 지우기
