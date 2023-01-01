import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './views/Dashboard';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
