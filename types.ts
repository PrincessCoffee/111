import React from 'react';

// For props of components (with translated text)
export interface SocialLink {
    name: string;
    href: string;
    icon: string | React.ReactNode;
}

export interface MenuItem {
    name: string;
    description: string;
}

export interface MenuCategory {
    name: string;
    items: MenuItem[];
}


// For raw data in constants.ts
export interface SocialLinkData {
    id: 'instagram' | 'tiktok' | 'whatsapp';
    href: string;
    icon: string | React.ReactNode;
}

export interface MenuItemData {
    id: string;
}

export interface MenuCategoryData {
    id: 'cold' | 'hot';
    items: MenuItemData[];
}