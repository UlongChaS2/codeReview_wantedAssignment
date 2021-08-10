import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { Main, Result, Filters } from './pages'; // 한 번만에 페이지를 불러올 수 있어서 좋음
import store from './store';

function Routes() {
  const location = useLocation();
  // location이란 첫 번째 인자를 '객체'를 들고와야 그 안의 객체 요소 pathname을 이용하여 페이지 이동할 때마다 애니메이션을 사용할 수 있다.
  console.log(location);
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} className='absolute w-full' style={props}>
      <Switch location={location}>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/result'>
          <Result />
        </Route>
        <Route path='/filters'>
          <Filters />
        </Route>
      </Switch>
    </animated.div>
  ));
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className={styles.wrapper}>
          <Routes />
        </div>
      </Router>
    </Provider>
  );
}

// 바꾼 코드
// app 역할이 명확하지 않아서 Routes와 병합하는게 좋을 것 같음
// pathname을 상수로 뺀다.

// function App() {
//   const location = useLocation();
//   console.log(location);
//   const transitions = useTransition(location, (location) => location.pathname, {
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//   });

//   return (
//     <Provider store={store}>
//       <Router>
//         {/* {transitions.map(({ item: location, props, key }) => (
//           <animated.div key={key} className='absolute w-full' style={props}>
//             <Switch location={location} className={styles.wrapper}>
//               <Route component={Main} exact path='/' />
//               <Route component={Result} path='/result' />
//               <Route component={Filters} path='/filters' />
//             </Switch>
//           </animated.div>
//         ))} */}
//       </Router>
//     </Provider>
//   );
// }

const styles = {
  wrapper: 'relative max-w-screen-sm p-4 mx-auto',
};

export default App;
