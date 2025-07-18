import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const categories = [
  { name: "Engine Parts", href: "/category/engine-parts" },
  { name: "Brake System", href: "/category/brake-system" },
  { name: "Electrical", href: "/category/electrical" },
  { name: "Interior", href: "/category/interior" },
  { name: "Exterior", href: "/category/exterior" },
  { name: "Tools", href: "/category/tools" },
];

const customerService = [
  { name: "Contact Us", href: "/contact" },
  { name: "Shipping Policy", href: "/shipping" },
  { name: "Returns & Exchanges", href: "/returns" },
  { name: "FAQs", href: "/faqs" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          <div>
            <h3 className="text-base font-medium mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {customerService.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-medium mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>

        <Separator />
        
        <div className="py-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AHF Auto Parts. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
} 