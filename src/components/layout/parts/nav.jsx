import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ThemeToggle } from "../../../state/theme/toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "@/assets/adshub-logo.png";

export default function Navbar({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track window size for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 1024;
  const isTablet = windowWidth >= 1024 && windowWidth < 1280;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[var(--base)] border-b shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo section - always visible */}
            <div className="flex items-center">
              <NavLink to="/" className="flex items-center gap-2 sm:gap-3">
                <img
                  src={logo}
                  alt="AdsHub Logo"
                  className="h-8 w-auto sm:h-10"
                />
                <div className="hidden lg:block">
                  <h1 className="text-lg sm:text-xl font-bold leading-tight">
                    AdsHub
                  </h1>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Semua Bisa Diiklankan.
                  </p>
                </div>
              </NavLink>
            </div>

            {/* Desktop Navigation - hidden on mobile */}
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-between lg:mx-4 space-x-4">
              {/* Location selector */}
              <div className="w-40 xl:w-80">
                <Select>
                  <SelectTrigger className="w-full bg-muted/40 h-10 text-sm sm:text-base">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <CiLocationOn className="w-4 h-4 sm:w-5 sm:h-5" />
                      <SelectValue placeholder="Pilih Lokasi" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jakarta">Jakarta</SelectItem>
                    <SelectItem value="bandung">Bandung</SelectItem>
                    <SelectItem value="surabaya">Surabaya</SelectItem>
                    <SelectItem value="yogyakarta">Yogyakarta</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Input - grows to fill available space */}
              <div className="flex-1 max-w-md xl:max-w-lg">
                <div className="relative">
                  <Input
                    placeholder="Cari barang"
                    className="pl-10 h-10 bg-muted/40 text-sm sm:text-base"
                  />
                  <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Action buttons - different on mobile vs desktop */}
            <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
              {/* Only shown on mobile */}
              {isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Menu"
                  className="h-10 w-10"
                >
                  <RxHamburgerMenu className="w-6 h-6" />
                </Button>
              )}

              {/* Always visible */}
              <Button
                variant="ghost"
                size="icon"
                aria-label="Favorites"
                className="h-10 w-10"
              >
                <MdFavoriteBorder className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                aria-label="Notifications"
                className="h-10 w-10"
              >
                <IoIosNotificationsOutline className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>

              <ThemeToggle />

              {/* Only visible on desktop */}
              {!isMobile && (
                <Button variant="theme" size={isTablet ? "default" : "lg"}>
                  Jual
                </Button>
              )}

              {/* User menu */}
              <div className="flex items-center gap-2 sm:gap-3">
                {!isMobile && (
                  <span className="text-sm sm:text-base">Halo, puput</span>
                )}
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    PU
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu - only shown when open on mobile */}
      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--base)] pt-16">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-5">
            {/* Mobile search */}
            <div className="relative">
              <Input
                placeholder="Cari barang"
                className="pl-10 h-12 bg-muted/40 text-base"
              />
              <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            </div>

            {/* Mobile location */}
            <Select>
              <SelectTrigger className="w-full bg-muted/40 h-12 text-base">
                <div className="flex items-center gap-2">
                  <CiLocationOn className="w-5 h-5" />
                  <SelectValue placeholder="Pilih Lokasi" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jakarta">Jakarta</SelectItem>
                <SelectItem value="bandung">Bandung</SelectItem>
                <SelectItem value="surabaya">Surabaya</SelectItem>
                <SelectItem value="yogyakarta">Yogyakarta</SelectItem>
              </SelectContent>
            </Select>

            {/* Mobile nav links */}
            <nav className="flex flex-col gap-3">
              <Button variant="ghost" className="justify-start h-12 text-base">
                <MdFavoriteBorder className="mr-3 h-5 w-5" />
                Favorit
              </Button>
              <Button variant="ghost" className="justify-start h-12 text-base">
                <IoIosNotificationsOutline className="mr-3 h-5 w-5" />
                Notifikasi
              </Button>
              <Button
                variant="theme"
                className="justify-start"
              >
                Jual
              </Button>
            </nav>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
