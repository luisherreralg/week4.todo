import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../../../features/home/page/home.page';
import TodoPage from '../../../features/todo/page/todo.page';

export function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="home" element={<HomePage></HomePage>}></Route>
                <Route path="todo" element={<TodoPage></TodoPage>}></Route>
                {/* IMPORTANTE QUE EL NAVIGATE ESTÉ EL ÚLTIMO */}
                <Route path="" element={<HomePage></HomePage>}></Route>
                <Route path="*" element={<Navigate replace to="" />}></Route>
            </Routes>
        </>
    );
}
