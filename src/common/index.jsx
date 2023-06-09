import { Suspense  } from 'react';


export function sum(x,y){
  return x+y
}

export const math=(...args)=>{
  return args.reduce((a,b)=> a+ b,0)
}

export const getTotal=(x,y)=>{
  return x*y
}

export const lazyLoad =(Comp)=>{
  return <Suspense fallback={<div>Loading...</div>}>
    <Comp/>
  </Suspense>
}
