import { useState, useEffect } from 'react';

function Hook() {
  const [count, setCount] = useState(0); // 초기값은 0
  useEffect(() => {
    console.log('컴포넌트가 마운트되었습니다!');
  }, []); // 빈 배열 → 최초 1회 실행

  return (
    <div>
      <h1>Hook Page</h1>
      <section>
        <h2>useState 예제</h2>
        <h3>현재 카운트 : {count}</h3>
        <div>
          <button onClick={() => setCount(count + 1)}>+1 증가</button>
          <button onClick={() => setCount(count - 1)}>-1 감소</button>
          <button onClick={() => setCount(0)}>초기화</button>
        </div>
      </section>
      <section>
        <h2>useEffect 예제</h2>
        <h3>console.log 확인</h3>
      </section>
    </div>
  );
}

export default Hook
