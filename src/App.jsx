
import './App.css';
import { DefaultLayout } from './components/layout/DefaultLayout';
import DashBoard from './pages/dashboard/DashBoard.page';

import Entry from './pages/entry/Entry.page'

function App() {
    return ( 
    <div className = "App">

        {/* <Entry/> */}
        <DefaultLayout>
            <DashBoard
            />
        </DefaultLayout>
    </div>
    );
}

export default App;