import React from 'react';

function Fieldset({ legend, children }) {
  return (
    <fieldset>
      <legend className={styles.legend}>{legend}</legend>
      {children}
    </fieldset>
  );
}

const styles = {
  wrapper: '',
  legend: 'block mb-2 text-gray-700 text-sm font-bold',
};

// wrapper가 쓰이지 않는데 변수의 객체로 선언되어 있음 (제거 필요)

export default Fieldset;
