import { Route, Routes } from "react-router-dom";
import SignInPage from "../../Screen/SignIn";


function AppRouter() {
     return(
        <Routes>
            <Route>
                <Route path="/SignInPage" element={<SignInPage/>} />
            </Route>
        </Routes>
     )
}

export default AppRouter;