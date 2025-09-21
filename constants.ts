import React from 'react';
import type { SocialLinkData, MenuCategoryData } from './types';

export const SOCIAL_LINKS: SocialLinkData[] = [
    {
        id: 'instagram',
        href: 'https://www.instagram.com/llooy_80?igsh=YWpudWk1eWNuY3Bj',
        icon: '📷',
    },
    {
        id: 'tiktok',
        href: 'https://www.tiktok.com/@user4984378501180?_t=ZS-8zroZLu70lz&_r=1',
        icon: '👆',
    },
    {
        id: 'whatsapp',
        href: 'https://wa.me/9647731982199',
        icon: '📞',
    },
];

export const MENU_CATEGORIES: MenuCategoryData[] = [
    {
        id: 'cold',
        items: [
            { id: 'iced_coffee' },
            { id: 'cappuccino_latte' },
        ]
    },
    {
        id: 'hot',
        items: [
            { id: 'princess_coffee' },
            { id: 'plain_coffee' },
            { id: 'medium_coffee' },
            { id: 'chocolate_coffee' },
            { id: 'galaxy_coffee' },
            { id: 'bounty_coffee' },
            { id: 'honey_coffee' },
            { id: 'sky_coffee' },
            { id: 'karak_chai' },
        ]
    }
];