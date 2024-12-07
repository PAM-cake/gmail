import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Inbox from "./components/Inbox";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import Login from "./components/Login";

function App() {
  const user = true; // Replace with your actual user state or context

  return (
    <Router>
      <div>
        {/* Conditional rendering based on user authentication */}
        {user ? (
          <>
            {/* Navbar component */}
            <Navbar />

            {/* Sidebar and Routes container */}
            <div className="flex">
              <Sidebar />
              <Routes>
                {/* Route for the inbox (home) */}
                <Route path="/" element={<Inbox />} />
                {/* Route for a specific mail item */}
                <Route path="/mail/:id" element={<Mail />} />
              </Routes>
            </div>

            {/* Positioned SendMail component */}
            <div className="absolute w-[30%] bottom-0 right-20 z-10">
              <SendMail />
            </div>
          </>
        ) : (
         <Login/>
        )}
      </div>
    </Router>
  );
}

export default App;
