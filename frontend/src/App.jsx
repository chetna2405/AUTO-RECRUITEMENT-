import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout/AppLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import JobProfiles from "./pages/JobProfiles/JobProfiles";
import ProfileDetail from "./pages/ProfileDetail/ProfileDetail";
import CandidatesPage from "./pages/Candidates/Candidates";
import Results from "./pages/Results/Results";
import Review from "./pages/Review/Review";
import Verification from "./pages/Verification/Verification";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />
        <Route
          path="/profiles"
          element={
            <AppLayout>
              <JobProfiles />
            </AppLayout>
          }
        />
        <Route
          path="/profiles/:profileId"
          element={
            <AppLayout>
              <ProfileDetail />
            </AppLayout>
          }
        />
        <Route
          path="/profiles/:profileId/candidates"
          element={
            <AppLayout>
              <CandidatesPage />
            </AppLayout>
          }
        />
        <Route
          path="/profiles/:profileId/results"
          element={
            <AppLayout>
              <Results />
            </AppLayout>
          }
        />
        <Route
          path="/profiles/:profileId/candidates/:candidateId/review"
          element={
            <AppLayout>
              <Review />
            </AppLayout>
          }
        />
        <Route
          path="/profiles/:profileId/candidates/:candidateId/verification"
          element={
            <AppLayout>
              <Verification />
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

