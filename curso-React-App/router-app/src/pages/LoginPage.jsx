import { useHistory, useLocation } from "react-router-dom";
import UseAuth from "../auth/UseAuth"

export default function LoginPage() {
  const auth = UseAuth();
  const history = useHistory();
  const location = useLocation();
  const previusObjectUrl = location.state?.from
  console.log(previusObjectUrl)

  const handleLogin = () => {
    auth.login();
    history.push(previusObjectUrl || "/dashboard")
    
  }

  return (
    <div>
        <h1>Login Page</h1>
        <button onClick={handleLogin}>Signin</button>
    </div>
  )
}
