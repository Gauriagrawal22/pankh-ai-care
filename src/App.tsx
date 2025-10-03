import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ProtectedRoute from "@/components/ProtectedRoute";
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
            {/* Redirect root to login */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected routes */}
            <Route path="/dashboard" element={<ProtectedRoute><Index /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
            <Route path="/cycle-tracking" element={<ProtectedRoute><CycleTracking /></ProtectedRoute>} />
            <Route path="/symptoms" element={<ProtectedRoute><Symptoms /></ProtectedRoute>} />
            <Route path="/ai-insights" element={<ProtectedRoute><AIInsights /></ProtectedRoute>} />
            <Route path="/diet" element={<ProtectedRoute><Diet /></ProtectedRoute>} />
            <Route path="/mood-energy" element={<ProtectedRoute><MoodEnergy /></ProtectedRoute>} />
            <Route path="/wearables" element={<ProtectedRoute><Wearables /></ProtectedRoute>} />
            <Route path="/games" element={<ProtectedRoute><Games /></ProtectedRoute>} />
            <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
            <Route path="/wellness" element={<ProtectedRoute><Wellness /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            
            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
