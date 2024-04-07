import './App.css';

import {useRef, useEffect} from 'react';

export default function App() {
  const ref = useRef(null);

  useEffect(() => {
    // 👇️ use a ref (best)
    const element2 = ref.current;
    console.log(element2);

    // 👇️ use document.querySelector()
    // should only be used when you can't set a ref prop on the element
    // (you don't have access to the element)
    const element = document.querySelector('#container');
    console.log(element);
  }, []);

  return (
    <div>
      <div ref={ref} id="container">
        <h2>bobbyhadz.com</h2>
      </div>
    </div>
  );
}
