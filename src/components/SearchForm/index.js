import React from 'react';
import { useLocation } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import LinkToFilter from './LinkToFilter';

function SearchForm() {
  const location = useLocation();
  const { state, handleChange, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      {/* fieldset으로 하나로 묶어줌으로써 잘 사용한 것 같음 */}
      <fieldset>
        <label htmlFor='searchInputs' className={styles.label}>
          {/* hidden으로 할 거 굳이 필요한가? */}
          <span hidden>검색어</span>
          <input
            type='search'
            id='searchInput' // 더 직관적인 명을 이용해서 알아보기 쉽게
            name='q' // 구글 API 때문에 q로 명시를 했지만 id 값도 굳이 q로 해야하나?
            defaultValue={state.q}
            placeholder='제목, 저자, 출판사를 검색해 보세요'
            required
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        <button type='submit' className={styles.submit}>
          검색
        </button>
      </fieldset>
      {location.pathname === '/result' && <LinkToFilter />}
      {/* result를 또한 변수를 이용해서 빼는 게 좋을 것 같음 */}
    </form>
  );
}

const styles = {
  wrapper: 'flex items-center justify-between sticky',
  label: 'mb-1 text-gray-700',
  input: 'w-64 h-8 px-2 border border-r-0 rounded-l focus:outline-none text-sm',
  submit:
    'h-8 px-4 rounded-r bg-blue-500 hover:bg-blue-700 text-white align-top',
};

export default SearchForm;
