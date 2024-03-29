import { Route, Routes } from "react-router-dom";
import SignInPage from "../../Screen/SignIn";
import Dashboard from "../../Views/Dashboard";
import SignUpPage from '../../Screen/Signup'
import PostDataPage from "../../Screen/PostData";
import DetailCartScreen from "../../Screen/DetailScreen";


function AppRouter() {
     return(
        <Routes>
            <Route>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/SignIn" element={<SignInPage/>} />
                <Route path="/SignUp" element={<SignUpPage/>} />
                <Route path="/PostData" element={<PostDataPage/>} />
                <Route path="/DetailScreen" element={<DetailCartScreen/>} />

            </Route>
        </Routes>
     )
}

export default AppRouter;