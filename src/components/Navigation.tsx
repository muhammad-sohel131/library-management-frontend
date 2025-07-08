import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

function Navigation() {
  return (
    <NavigationMenu className="mx-auto mb-20 bg-white shadow-md rounded-md px-4 py-2 w-full">
      <NavigationMenuList className="flex justify-center container mx-auto space-x-8">
        <NavigationMenuItem>
          <NavigationMenuLink className="text-gray-700 hover:text-blue-600 font-medium">
            <Link to="books">Books</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="text-gray-700 hover:text-blue-600 font-medium">
            <Link to="create-book">Add Book</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className="text-gray-700 hover:text-blue-600 font-medium">
            <Link to="borrow-summary">Borrow Summary</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navigation;
