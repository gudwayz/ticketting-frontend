
import './App.css';
import { DefaultLayout } from './components/layout/DefaultLayout';
import { TicketDetails } from './pages/tickets/TicketDetails.page';
//import TicketLists from './pages/ticket-listing/TicketLists.page';
//import DashBoard from './pages/dashboard/DashBoard.page';

//import Entry from './pages/entry/Entry.page'
//import AddTicket from './pages/new-ticket/AddTicket.page';

function App() {
    return ( 
    <div className = "App">

        {/* <Entry/> */}
        <DefaultLayout>
            {/* <DashBoard
            /> */}
            {/* <AddTicket/> */}
            {/* <TicketLists/> */}
            <TicketDetails/>
        </DefaultLayout>
    </div>
    );
}

export default App;