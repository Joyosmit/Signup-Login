import { Route, Routes } from "react-router-dom";
import "./App.css"
import { Auth } from "./components/auth";
import login from "./components/login";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" Component={Auth} />
                <Route path="/login" Component={login}/>
                <Route path="/dashboard" Component={Dashboard}/>
            </Routes>

        </div>
    );
}

export default App;
