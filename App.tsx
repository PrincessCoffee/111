import React, { useState, useEffect } from 'react';
import SocialLinkButton from './components/SocialLinkButton';
import MenuModal from './components/MenuModal';
import { SOCIAL_LINKS as socialLinksData, MENU_CATEGORIES as menuCategoriesData } from './constants';
import { MenuIcon } from './components/icons';
import type { MenuCategory } from './types';

type Language = 'ar' | 'en';

interface TranslationFile {
    appName: string;
    tagline: string;
    socials: { [key: string]: string };
    viewMenuButton: string;
    copyright: string;
    menuTitle: string;
    menuCategories: { [key: string]: string };
    menu: { [key: string]: { name: string; description: string; } };
}

const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState<Language>('ar');
    const [translations, setTranslations] = useState<{ ar: TranslationFile; en: TranslationFile } | null>(null);

    useEffect(() => {
        const loadTranslations = async () => {
            try {
                const [arResponse, enResponse] = await Promise.all([
                    fetch('./locales/ar.json'),
                    fetch('./locales/en.json')
                ]);

                if (!arResponse.ok || !enResponse.ok) {
                   throw new Error('Failed to fetch translation files');
                }

                const ar = await arResponse.json();
                const en = await enResponse.json();
                setTranslations({ ar, en });
            } catch (error) {
                console.error("Error loading translations:", error);
            }
        };

        loadTranslations();
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => (prev === 'ar' ? 'en' : 'ar'));
    };

    if (!translations) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 bg-black font-tajawal text-brand-gold text-xl">
                Loading...
            </div>
        );
    }
    
    const t = translations[language];

    const socialLinks = socialLinksData.map(link => ({
        ...link,
        name: t.socials[link.id],
    }));

    const menuCategories: MenuCategory[] = menuCategoriesData.map(category => ({
        name: t.menuCategories[category.id],
        items: category.items.map(item => ({
            name: t.menu[item.id].name,
            description: t.menu[item.id].description,
        }))
    }));

    return (
        <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden font-tajawal">
            <div className="w-full max-w-sm mx-auto text-center relative z-10 bg-brand-green border-2 border-brand-gold rounded-3xl p-8 shadow-2xl">
                
                <div className="absolute top-4 right-4 z-20">
                    <button
                        onClick={toggleLanguage}
                        className="text-brand-gold font-bold py-1 px-3 rounded-md border border-brand-gold hover:bg-brand-gold/20 transition-colors text-sm"
                        aria-label="Toggle language"
                    >
                        {language === 'ar' ? 'EN' : 'AR'}
                    </button>
                </div>
                
                <header className="mb-8">
                    <img 
                        src="https://i.imgur.com/k2gY1rC.png" 
                        alt={t.appName} 
                        className="w-40 h-40 mx-auto object-cover"
                    />
                    <h1 className="text-5xl font-extrabold mt-6 text-white">
                        {t.appName}
                    </h1>
                    <p className="text-brand-gold text-lg mt-2 font-bold">{t.tagline}</p>
                </header>

                <main className="space-y-4">
                    {socialLinks.map((link) => (
                        <SocialLinkButton 
                            key={link.id} 
                            href={link.href} 
                            icon={link.icon} 
                            text={link.name}
                        />
                    ))}
                    
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="group w-full bg-brand-gold text-brand-green font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:shadow-lg transform hover:scale-105"
                    >
                        <MenuIcon className="w-6 h-6" />
                        <span>{t.viewMenuButton}</span>
                    </button>
                </main>
                
                <footer className="mt-12 text-center text-gray-200 text-sm">
                    <p>{t.copyright}</p>
                </footer>
            </div>
            
            <MenuModal 
                isOpen={isMenuOpen} 
                onClose={() => setIsMenuOpen(false)} 
                menuCategories={menuCategories}
                title={t.menuTitle}
            />
        </div>
    );
};

export default App;