function fetchSide(){
  console.log('fetchSide')
  return new Promise((resolve,reject)=> {
    resolve([{name:'home',linkUrl:'home'}])
  })
}

export async function loader(){
  const sideData = await fetchSide();
  return sideData;
}