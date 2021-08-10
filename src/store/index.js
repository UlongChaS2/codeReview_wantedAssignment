import { configureStore } from '@reduxjs/toolkit';
import search from './search';
import books from './books';

export default configureStore({
  reducer: {
    search,
    books,
  },
});

// redux는 다 폴더 별로 다 나눠야 하지만 형태를 강제로 줘서 유지보수하기 좋음
// 좋은 점
