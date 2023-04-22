import Image from 'next/image'
import JCLoading from '../component/toast'
import { useRouter } from 'next/router'
import {getTestData} from '../request'
import { useEffect } from 'react'
import useDebounceFn from '../hook/useDebounedEffect'

export default function Home() {
  const router = useRouter()

  useEffect(()=>{
    JCLoading.show('进入页面')
    window.addEventListener('scroll', HandleScroll)
    return window.removeEventListener('scroll',HandleScroll)
  })
  const HandleScroll = (e:any) => {
    console.log(e.target.scrollTop)
    const imageToLazy = document.querySelectorAll('img[data-src]');
    const loadImage = function (image:any) {
        image.setAttribute('src', image.getAttribute('data-src'));
        image.addEventListener('load', function() {
            image.removeAttribute("data-src");
        })
      
    }
    
    const intersectionObserver = new IntersectionObserver(function(items, observer) {
      items.forEach(function(item) {
          if(item.isIntersecting) {
              loadImage(item.target);
              observer.unobserve(item.target);
          }
      });
  });

  imageToLazy.forEach(function(image){
      intersectionObserver.observe(image);
  })

    // imageToLazy.forEach(function(image){
    //     loadImage(image);
    // })

  }

   const toAbout = ()=>{
    console.log('yobarr')
    router.push('./about')
  }
  const getApi = async()=>{
    await getTestData().then(res => res.json())
    .then(res => { console.log(res); })
     .catch(err => console.log(err))
  }
  const submit = useDebounceFn(()=>{
    console.log('提交')
  
  },200,true)
  return (
    <div className='flex flex-col pt-20 text-lg'>
        <button onClick={()=>getApi()}> 调用接口</button>
        <button onClick={()=>toAbout()}>去About</button>
        <button onClick={()=>submit()}>提交</button>
        <img src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00121-1291.jpg" data-url="https://img.vis-viva.com.cn/website/audit/loading.svg"/>
        <img src="https://img2.baidu.com/it/u=432812097,2043169480&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" data-url="https://img.vis-viva.com.cn/website/audit/loading.svg"/>
        <img src="https://img0.baidu.com/it/u=3772941516,2242094373&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800" data-url="https://img.vis-viva.com.cn/website/audit/loading.svg"/>

    </div>
  )
}
