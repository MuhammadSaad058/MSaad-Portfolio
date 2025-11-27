import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import CustomCursor from "./components/CustomCursor";
import ClickSound from "./components/ClickSound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CustomCursor />
      <ClickSound />
      <Layout>
        <Index />
      </Layout>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

