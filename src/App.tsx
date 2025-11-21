import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardLayout from "./components/layout/DashboardLayout";
import Overview from "./pages/Overview";
import DonationsAnalytics from "./pages/DonationsAnalytics";
import RequestLifecycle from "./pages/RequestLifecycle";
import HospitalGovernance from "./pages/HospitalGovernance";
import Heatmap from "./pages/Heatmap";
import Alerts from "./pages/Alerts";
import AuditLog from "./pages/AuditLog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="donations-analytics" element={<DonationsAnalytics />} />
            <Route path="request-lifecycle" element={<RequestLifecycle />} />
            <Route path="hospital-governance" element={<HospitalGovernance />} />
            <Route path="heatmap" element={<Heatmap />} />
            <Route path="alerts" element={<Alerts />} />
            <Route path="audit-log" element={<AuditLog />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
