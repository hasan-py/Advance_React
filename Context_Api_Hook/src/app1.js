import React,{useState,useEffect,useRef} from 'react';


const App = ()=> {
	const [data,setData] = useState({
		name:"Hasan",
		age:18
	})

	const changeHandle = ()=>{
		setData({name:data.name+"Hey It Change",age:data.age+1})
	}

	const myheading = useRef(null)

	useEffect(()=>{
		console.log(myheading.current.innerHTML)
	},[])
	
	return(

		<div className="container mt-5">
			<h3 ref={myheading}>{data.name}</h3>
			<p>{data.age}</p>
			<button onClick={changeHandle} type="button" className="btn btn-dark">Dark</button>
		</div>

	)
}

export default App

