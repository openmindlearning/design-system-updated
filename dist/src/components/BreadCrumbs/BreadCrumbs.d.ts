import React from "react";
interface Props {
    /**
     * The list of elements to display as breadcrumbs.
     */
    breadCrumbs: string[];
    /**
     * The breadcrumb with the activeIndex is displayed in **bold**.
     * - Breadcrumbs with indices < activeIndex will show a checkmark on the left.
     * - Bradcrumbs with indices >= activeIndex will show their index number + 1 on the left.
     */
    activeIndex: number;
}
/**
Takes a list of elements and displays them as breadcrumbs.
*/
export declare const BreadCrumbs: ({ breadCrumbs, activeIndex }: Props) => React.ReactElement;
export {};
