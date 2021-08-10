import { useReducer } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { stringifyUrl, parse } from 'query-string'; // 쿼리스트링을 보다 쉽게 들고 올 수 있는 것 (바로 객체로 줌);
import { flow, omitBy, isEmpty } from 'lodash/fp';

const initialState = {
  q: '',
  orderBy: 'relevance',
  filter: '',
  printType: 'all',
};

function reducer(state, action) {
  switch (action.type) {
    case 'change':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

function useForm() {
  const history = useHistory();
  const location = useLocation();
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...parse(location.search),
  });

  function handleRouter(query) {
    const path = stringifyUrl({
      url: '/result', // 변수만들어서 뺴기
      query,
    });

    history.push(path);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const query = flow(omitBy(isEmpty))(state);

    handleRouter(query);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    dispatch({
      type: 'change',
      payload: {
        [name]: value,
      },
    });
  }

  function handleSelect(e) {
    const { name, value } = e.target;

    handleChange(e);
    handleRouter({
      ...parse(location.search),
      [name]: value,
    });
  }

  return {
    state,
    handleChange,
    handleSelect,
    handleSubmit,
  };
}

export default useForm;
