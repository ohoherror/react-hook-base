import React, { useState, useEffect, useLayoutEffect } from 'react';

 import {Child} from '../component/child'

//箭头函数的写法，改变状态

const UseEffect = (props) => {

    //创建了一个叫hook的变量，sethook方法可以改变这个变量,初始值为‘react hook 是真的好用啊’

    const [ hook, sethook ] = useState('react hook 是真的好用啊');

    const [ name ] = useState('baby张');

    return (

        <header className="UseEffect-header">

            <h3>UseEffect</h3>

            <Child hook={hook} name={name} />

            {/**上面的变量和下面方法也是可以直接使用的 */}

            <button onClick={() => sethook('我改变了react hook 的值' + new Date().getTime())}>改变hook</button>

        </header>

    );

};
export default UseEffect;