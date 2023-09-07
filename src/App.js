import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import data from "./data.json";
import LoginPage from "./components/LoginPage";
import GmsTemplate from "./components/gmsTemplate"; // this is GmsTemplate that has sidebar navigation
import PendingEmailsPage from "./components/PendingEmailsPage";
import SurveysPage from "./components/SurveysPage";
import HomePage from "./components/HomePage";
import SurveyRespons from "./components/SurveyResponse.js";
import EmailCenterPage from "./components/EmailCenterPage";
import ReportsPage from "./components/ReportsPage";
import FormCenterPage from "./components/FormCenterPage";
import WorkflowPage from "./components/WorkflowPage";
import LearningCenterPage from "./components/LearningCenterPage";
import TemplatePage from "./components/TemplatePage";
import UpgradePage from "./components/UpgradePage";
import GuestsProfile from "./components/GuestsProfilePage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [selectAll, setSelectAll] = useState(false);
  const [individualCheckboxes, setIndividualCheckboxes] = useState({});
  const [checkboxCount, setCheckboxCount] = useState(0);
  const [showBanner, setShowBanner] = useState(false);
  const [bookingsData, setBookingsData] = useState(data);

  const handleCheckAll = () => {
    const newCheckedBoxObj = {};
    if (!selectAll) {
      bookingsData.forEach((item) => {
        if (!item.isHidden) {
          // Only count visible checkboxes
          newCheckedBoxObj[item.id] = true;
        }
      });
    }
    setSelectAll(!selectAll); // toggles the selectAll
    setIndividualCheckboxes(newCheckedBoxObj);
    const updatedCount = checkedBoxCount(newCheckedBoxObj);
    setCheckboxCount(updatedCount);
  };

  const handleSelfCheck = (itemId) => {
    setIndividualCheckboxes((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  // Function to handle hiding a specific row (<li> with data)
  const hideRow = (id) => {
    const updatedData = bookingsData.map((item) =>
      item.id === id ? { ...item, isHidden: true } : item
    );
    setBookingsData(updatedData);
  };

  // Function to delete the <li> from table that is related to the checkbox with the id
  const deleteEntries = () => {
    const newData = bookingsData.filter(
      (item) => !individualCheckboxes[item.id]
    );
    // Recalculate checkedBoxesCount based on the updated newData
    const updatedCount = checkedBoxCount(
      newData.reduce((acc, item) => {   // acc is accumulator object
        acc[item.id] = true;            // accumulates the itemId of items in newData 
        return acc;                     // that are not selected for deletion
      }, {})     // initially acc is an empty object
    );
    setBookingsData(newData);
    localStorage.setItem("bookingsData", JSON.stringify(newData));
    setCheckboxCount(updatedCount);
    setShowBanner(false);
    // Clear individualCheckboxes state for deleted items
    setIndividualCheckboxes({});
  };


  // A utility function to count the number of selected checkboxes (or the remaining boxes)
  const checkedBoxCount = (boxState) => {
    return Object.values(boxState).filter(Boolean).length;
  };


  useEffect(() => {
    // Update checkboxCount whenever individualCheckboxes changes
    const checkedBoxesCount =
      Object.values(individualCheckboxes).filter(Boolean).length;
    setCheckboxCount(checkedBoxesCount);
  }, [individualCheckboxes]);

  useEffect(() => {
    setShowBanner(checkboxCount > 0);
  }, [checkboxCount]);

  useEffect(() => {
    const storedBookingsData = localStorage.getItem("data");
    if (storedBookingsData) {
      setBookingsData(JSON.parse(storedBookingsData));
    }
  }, []);

  // Function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/gms" />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />

        <Route
          path="/gms/*"
          element={
            isLoggedIn ? (
              <GmsTemplate
                onLogout={handleLogout}
                resetState={() => setBookingsData(data)}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        >
          <Route index element={<HomePage />} />
          <Route
            path="bookings"
            element={
              <PendingEmailsPage
                data={bookingsData}
                showBanner={showBanner}
                individualCheckboxes={individualCheckboxes}
                handleCheckAll={handleCheckAll}
                handleSelfCheck={handleSelfCheck}
                selectAll={selectAll}
                checkboxCount={checkboxCount}
                deleteEntries={deleteEntries}
                hideRow={hideRow}
              />
            }
          />
          <Route
            path="surveys"
            element={
              <SurveysPage
                data={bookingsData}
                showBanner={showBanner}
                individualCheckboxes={individualCheckboxes}
                handleCheckAll={handleCheckAll}
                handleSelfCheck={handleSelfCheck}
                selectAll={selectAll}
                checkboxCount={checkboxCount}
                deleteEntries={deleteEntries}
                hideRow={hideRow}
              />
            }
          />
          <Route
            path="upgrade"
            element={
              <UpgradePage
                data={bookingsData}
                individualCheckboxes={individualCheckboxes}
                handleSelfCheck={handleSelfCheck}
                hideRow={hideRow}
              />
            }
          />
          {/* Inseart the new route hear to load it from from GmsTemplate */}
          <Route path="template" element={<TemplatePage />} />
          <Route path="survey-response" element={<SurveyRespons />} />
          <Route path="email-center" element={<EmailCenterPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="form-center" element={<FormCenterPage />} />
          <Route path="workflow" element={<WorkflowPage />} />
          <Route path="learning-center" element={<LearningCenterPage />} />
          <Route path="profiles" element={<GuestsProfile />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
