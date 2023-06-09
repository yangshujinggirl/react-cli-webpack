
const Index=()=>{
  const dataList=[
    {
      name:'qw',
      age:'18',
      id:1,
    },{
      name:'ert',
      age:'20',
      id:2
    }
  ]
  const handleInfo=(id)=>{
    console.log('id',id)
  }
  return <div>
    {
      dataList.map((el)=>(
        <p key={el.id} onClick={handleInfo}>
          <span>{el.name}</span>
          --
          <span>{el.age}</span>
        </p>
      ))
    }
  </div>
}

export default Index;