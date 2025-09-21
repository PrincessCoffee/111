import React from 'react';
import type { SocialLinkData, MenuCategoryData } from './types';
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from './components/icons';

export const SOCIAL_LINKS: SocialLinkData[] = [
    {
        id: 'instagram',
        href: 'https://www.instagram.com/llooy_80?igsh=YWpudWk1eWNuY3Bj',
        icon: React.createElement(InstagramIcon, { className: 'w-6 h-6' }),
    },
    {
        id: 'tiktok',
        href: 'https://www.tiktok.com/@user4984378501180?_t=ZS-8zroZLu70lz&_r=1',
        icon: React.createElement(TikTokIcon, { className: 'w-6 h-6' }),
    },
    {
        id: 'whatsapp',
        href: 'https://wa.me/9647731982199',
        icon: React.createElement(WhatsAppIcon, { className: 'w-6 h-6' }),
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