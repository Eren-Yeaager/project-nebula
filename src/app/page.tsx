import { ModeToggle } from "@/components/toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card1 } from "@/components/Card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
export default function Home() {
  return (
    <main>
      <div className="container flex justify-between items-center">
        <div className="flex mt-2 ml-2">
          <ModeToggle />
        </div>
        <div className="flex space-x-4 justify-center">
          <div className="button rounded-full px-4 py-2 transition duration-300 hover:bg-gray-600 hover:shadow-lg cursor-pointer">
            Home
          </div>
          <div className="button rounded-full px-4 py-2 transition duration-300 hover:bg-gray-600 hover:shadow-lg cursor-pointer">
            About
          </div>
        </div>
        <Button>Connect Wallet</Button>
      </div>

      <div className="card-container flex justify-center mt-4">
        <Card1 />
      </div>
    </main>
  );
}
