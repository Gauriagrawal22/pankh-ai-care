import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CycleTracking from "./pages/CycleTracking";
import Symptoms from "./pages/Symptoms";
import AIInsights from "./pages/AIInsights";
import Diet from "./pages/Diet";
import MoodEnergy from "./pages/MoodEnergy";
import Wearables from "./pages/Wearables";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Index />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cycle-tracking" element={<CycleTracking />} />
          <Route path="/symptoms" element={<Symptoms />} />
          <Route path="/ai-insights" element={<AIInsights />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/mood-energy" element={<MoodEnergy />} />
          <Route path="/wearables" element={<Wearables />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
