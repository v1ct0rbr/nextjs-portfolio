import React from 'react';

import dynamicIconImports from 'lucide-react/dynamicIconImports';
import Link from 'next/link';
import { NavigationMenuItem, NavigationMenuLink } from '../ui/navigation-menu';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Url } from 'next/dist/shared/lib/router/router';


interface NavItemProps {    
    label?: string;
    href: Url;   
}

const NavItem: React.FC<NavItemProps> = ({ label, href }) => {
    return (                                   
        <NavigationMenuItem>
          <Link href={href} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {label}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
    );
};

export default NavItem;