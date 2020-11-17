import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'


export const ShowList = ({edit})=> {
    const userName = useSelector(state => state.UserReducer)
    const dispatch = useDispatch()
    
    const removeHandler = (index)=> {
        dispatch({type:"REMOVE_USER",index:index})
    }

    return(
        <div className="col-6">
            <ul className="list-group">
                { userName.length>0 ? userName.map((item,index)=>{
                    return (
                        <li key={index} className="list-group-item">
                            <span className="float-left">{item.name}</span>
                            <span onClick={()=> removeHandler(index)} style={{ cursor:"pointer" }} className="mx-2 font-width-light float-right">X</span>
                            <span onClick={()=> edit(true,index,item.name)} style={{ cursor:"pointer" }} className="mx-2 font-width-light float-right">E</span>
                        </li>
                    )
                }):
                    <p className="alert alert-warning">No user list</p>
                }
            </ul>
        </div>
    )
}


const User = () => {
    const [input,setInput] = useState("")
    const [index,setIndex] = useState(null)
    const [edit,setEdit] = useState(false)
	const users = useSelector(state => state.UserReducer)
    const dipatch = useDispatch()
    
    const submitHandle = (e)=> {
        if(edit){
            e.preventDefault()
            dipatch({type:"EDIT_USER",payload:{name:input,index:index}})
            setInput("")
            setEdit(false)
            setIndex(null)
        }else{
            e.preventDefault()
            dipatch({type:"ADD_USER",payload:input})
            setInput("")
        }
    }
    
    const editHandle = (p,index,name)=>{
        setEdit(p)
        setInput(name)
        setIndex(index)
    }

  return (
    <div>
    	<h2>User</h2>
        <form onSubmit={(e)=> submitHandle(e)}>
            <input className="form-control" value={input} onChange={(e)=> setInput(e.target.value)} type="text" required/>
        </form>
        <br/>
        <h3>List</h3>
        <ShowList edit={editHandle}/>
    </div>
  )
}



export default User;