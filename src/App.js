import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import GmsTemplate from "./components/gmsTemplate"; // Import GmsTemplate
import PendingEmailsPage from "./components/PendingEmailsPage";
import SurveysPage from "./components/SurveysPage";
import HomePage from "./components/HomePage";
import data from "./data.json";
// import EmailTemplate from "./components/EmailTemplate";
import SurveyRespons from "./components/SurveyResponse.js";
import ProfilesPage from "./components/ProfilesPage";
import EmailCenterPage from "./components/EmailCenterPage";
import ReportsPage from "./components/ReportsPage";
import FormCenterPage from "./components/FormCenterPage";
import WorkflowPage from "./components/WorkflowPage";
import LearningCenterPage from "./components/LearningCenterPage";
import TemplatePage from "./components/TemplatePage";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // Booking and Survey functionality
  const [selectAll, setSelectAll] = useState(false);
  const [individualCheckboxes, setIndividualCheckboxes] = useState({});
  const [checkboxCount, setCheckboxCount] = useState(0);
  const [showBanner, setShowBanner] = useState(false);
  const [bookingsData, setBookingsData] = useState(data);

  const handleCheckAll = () => {
    const newCheckedBoxObj = {};

    if (!selectAll) {
      data.forEach((item) => {
        newCheckedBoxObj[item.id] = true;
      });
    }

    setSelectAll(!selectAll);
    setIndividualCheckboxes(newCheckedBoxObj);
  };

  const handleSelfCheck = (itemId) => {
    setIndividualCheckboxes((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

   // Function to handle hiding a specific row
   const hideRow = (id) => {
    const updatedData = bookingsData.map((item) =>
      item.id === id ? { ...item, isHidden: true } : item
    );
    setBookingsData(updatedData);
  };


  const deleteEntries = () => {
    const newData = bookingsData.filter(
      (item) => !individualCheckboxes[item.id]
    );

    setBookingsData(newData);
    localStorage.setItem("bookingsData", JSON.stringify(newData));

    const newCheckboxes = { ...individualCheckboxes };
    newData.forEach((item) => {
      newCheckboxes[item.id] = false;
      setShowBanner(false);
    });

    setIndividualCheckboxes(newCheckboxes);

    // Recalculate checkedBoxesCount based on the updated individualCheckboxes
    const updatedCount = checkedBoxCount(newCheckboxes);
    setCheckboxCount(updatedCount);
  };

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
  }, []); // Only run this effect on component mount

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
    <BrowserRouter>
      <Routes>
        <Route
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
              <GmsTemplate onLogout={handleLogout} resetState={()=>setBookingsData(data)}/>
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
          {/* <Route path="template" element={<EmailTemplate />} /> */}
          <Route path="template" element={<TemplatePage />} />
          <Route path="survey-response" element={<SurveyRespons />} />
          <Route path="profiles" element={<ProfilesPage />} />
          <Route path="email-center" element={<EmailCenterPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="form-center" element={<FormCenterPage />} />
          <Route path="workflow" element={<WorkflowPage />} />
          <Route path="learning-center" element={<LearningCenterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
