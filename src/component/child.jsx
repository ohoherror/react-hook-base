import React, { useState, useEffect, useLayoutEffect } from 'react';

const Child = (props) => {
    const [ newhook, setnewhook ] = useState(props.hook);
    //这样写可以代替以前的componentDidMount，第二个参数为空数组，表示该useEffect只执行一次
    useEffect(() => {
        console.log('first componentDidMount');
    }, []);

    //第二个参数，数组里是hook,当hook变化时，useEffect会触发，当hook变化时，先销毁再执行第一个函数。
    useEffect( () => {
            setnewhook(props.hook + '222222222');
            console.log('useEffect');
            return () => {
                console.log('componentWillUnmount ');
            };
        },
        [ props.hook ]
    );
    //useLayoutEffect 强制useeffect的执行为同步，并且先执行useLayoutEffect内部的函数
    useLayoutEffect( () => {
            console.log('useLayoutEffect');
            return () => {
                console.log('useLayoutEffect componentWillUnmount');

            };
        },
        [ props.hook ]
    );

    return (
        <div>
            <p>{props.name}</p>
            {newhook}
        </div>

    );
};
export default Child
 