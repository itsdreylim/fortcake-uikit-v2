import { BoxProps } from "../Box";
import { DropdownMenuItems } from "../DropdownMenu/types";
export declare type MenuItemsType = {
    label: string;
    href: string;
    icon?: string;
    items?: DropdownMenuItems[];
    showOnMobile?: boolean;
    showItemsOnMobile?: boolean;
    isExternal?: boolean;
};
export interface MenuItemsProps extends BoxProps {
    items: MenuItemsType[];
    activeItem?: string;
    activeSubItem?: string;
}
