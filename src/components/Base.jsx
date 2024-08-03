import React, {useEffect, useState} from 'react';

const Base = () => {
    const [data,setData] = useState([]);
    const [users,setUsers] = useState([]);
    const [state,setState] = useState("");
    useEffect(()=>{
        apiCaller();
    },[state]);
    
    const apiCaller = async()=>{
        let res = (await fetch("https://dummyjson.com/users"));
        res = await res.json();
        const {users} = res;
        if(state!==""){
            let result = users.filter(user=>user.address.state=== state);
            setUsers(result);
            console.log(result);
        } else{
            setUsers(users);
        }
    }
    return (
    <div>
        <input type="text" name="" id="" value={state} onChange={e=>setState(e.target.value)}/>
        <ul>
            {users.map(user=>{
                return (
                    <li>{user.lastName}</li>
                );
            })}
        </ul>
    </div>
  )
}

export default Base