




import Footer from "@/components/Footer";
import { ModeToggle } from "@/components/ModeToogle";
import { SideNavbar } from "@/components/SideNavbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
            <div className="bg-white dark:bg-gray-800">
              <SideNavbar />
              <ModeToggle />
              <div className="h-screen">
                <main className="flex flex-1">
                  {children}
                </main>
                <Footer />
              </div>
            </div>         
  );
}
