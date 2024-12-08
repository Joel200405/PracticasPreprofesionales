import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanInscription from "./pages/PlanInscription";
import Convalidation from "./pages/Convalidation";
import FinalReport from "./pages/FinalReport";
import ReportReview from "./pages/ReportReview";
import Home from "./pages/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan-inscription" element={<PlanInscription />} />
        <Route path="/convalidation" element={<Convalidation />} />
        <Route path="/final-report" element={<FinalReport />} />
        <Route path="/report-review" element={<ReportReview />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);