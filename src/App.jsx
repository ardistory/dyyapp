import './App.css';
import { ThemeProvider } from "@/components/theme-provider";
import { Link, Outlet } from "react-router";
import { ModeToggle } from './components/mode-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Toaster } from './components/ui/toaster';
import GameProvider from './components/GameProvider';
import Footer from './partials/Footer';
import Topbar from './partials/Topbar';

export default function App() {
  return (
    <ThemeProvider defaultTheme={'system'} storageKey="vite-ui-theme">
      <GameProvider>
        <Topbar />
        <Outlet />
        <Footer />
        <Toaster />
      </GameProvider>
    </ThemeProvider>
  );
}