import { ModeToggle } from "@/components/toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">About</div>
        </div>
        <Button>Connect Wallet</Button>
      </div>
    </main>
  );
}
