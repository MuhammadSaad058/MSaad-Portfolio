import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
            {/* Desktop Sidebar */}
            <Sidebar />

            {/* Mobile Navbar - Hidden on Desktop */}
            <div className="md:hidden">
                <Navbar />
            </div>

            {/* Main Content Area */}
            <main className="md:pl-64 min-h-screen transition-all duration-300 ease-in-out">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
