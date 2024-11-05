import PageTitle from './components/PageTitle/PageTitle.component';
import EventBoard from './components/EventBoard/EventBoard.component';
import upcomingEvents from './upcoming-events.json';

function App() {
  return (
    <>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </>
  );
}

export default App;
