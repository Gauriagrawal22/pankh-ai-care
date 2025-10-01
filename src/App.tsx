import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import CycleTracking from "./pages/CycleTracking";
import Symptoms from "./pages/Symptoms";
import AIInsights from "./pages/AIInsights";
import Diet from "./pages/Diet";
import MoodEnergy from "./pages/MoodEnergy";
import Wearables from "./pages/Wearables";
import Games from "./pages/Games";
import Reports from "./pages/Reports";
import Wellness from "./pages/Wellness";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="pankhai-ui-theme">
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
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/cycle-tracking" element={<CycleTracking />} />
            <Route path="/symptoms" element={<Symptoms />} />
            <Route path="/ai-insights" element={<AIInsights />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/mood-energy" element={<MoodEnergy />} />
            <Route path="/wearables" element={<Wearables />} />
            <Route path="/games" element={<Games />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="/settings" element={<Settings />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
