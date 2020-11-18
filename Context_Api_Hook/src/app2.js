import React,{createContext,Fragment,useContext} from 'react';

const NameContext = createContext()
const AgeContext = createContext()


const Coder3 = ()=> {
	const name = useContext(NameContext)
	const age = useContext(AgeContext)
	return(
		<Fragment>
			<h3>Name : {name.name}</h3>
			<h3>Age : {age.age}</h3>
		</Fragment>
	)
}

const Coder2 = ()=> {
	const name = useContext(NameContext)
	const age = useContext(AgeContext)
	return(
		<Fragment>
			<h6>
				This is {name.name} and age is {age.age}
			</h6>
			<Coder3/>
		</Fragment>
	)
}



const Coder = ()=> {
	return(
		<Coder2 />
	)
}

const name = {
	name:"Hasan"
}

const App = ()=> {

	return(
		<NameContext.Provider value={name}>
		<AgeContext.Provider value={{age:15}}>
			<div className="App">	
				<Fragment>
						
						<Coder />
					
				</Fragment>
			</div>
		</AgeContext.Provider>
		</NameContext.Provider>
	)
}

export default App
