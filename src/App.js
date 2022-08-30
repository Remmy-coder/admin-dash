import Sidebar from "./componets/sidebar/Sidebar";
import Topbar from "./componets/topbar/Topbar";
import "./app.css"

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Sidebar />
          <div className="others">
            other pages
          </div>
      </div>
    </div>
  );
}

export default App;
