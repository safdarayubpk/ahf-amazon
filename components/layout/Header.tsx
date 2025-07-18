import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/ui/container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">AHF Auto Parts</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden w-full max-w-xl flex-1 mx-12 lg:flex items-center">
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="w-full pl-9"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/search">
                <Search className="h-5 w-5 lg:hidden" />
                <span className="sr-only">Search</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/account">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
} 