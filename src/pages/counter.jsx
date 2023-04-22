import {useState} from 'react'
export default function Counter() {
    console.log('Counter.render begin');
    const [counter, setCounter] = useState(1);
    return (
           <>
               <p>counter={counter}</p>     

               <button onClick={() => {                   
                    console.log('Click event begin');
                    // 保持state不变
                    setCounter(() => {
                        console.log('update 1');
                        return counter;
                    })

                    // state + 1
                    setCounter(() => {
                        console.log('update 2');
                        return counter + 1;
                    })

                    // state + 1
                    setCounter(() => {
                        console.log('update 3');
                        return counter + 2;
                    })
                    console.log('Click event end');
               }}>setCounter</button>
           </>
   )
}

function Display({ counter }) {
    console.log('Display.render', counter);
    return <p>{counter}</p>
}