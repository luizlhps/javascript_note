
import Home from '../../Home/Home';



function RequireAuth( {children}:{children:JSX.Element}) {
 const user = localStorage.getItem('token')
  if(user){
    return children
  }
 return <Home></Home>
}


export default RequireAuth;