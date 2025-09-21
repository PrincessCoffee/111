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
        <div className="font-tajawal">
            <div className="w-full max-w-sm mx-auto text-center relative bg-gradient-to-br from-teal-700 via-teal-600 to-teal-700 border-4 border-yellow-500 rounded-3xl p-8 shadow-2xl" style={{
                background: 'linear-gradient(135deg, #2d5552 0%, #3a6b67 50%, #2d5552 100%)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}>
                
                <div className="absolute top-4 right-4 z-20">
                    <button
                        onClick={toggleLanguage}
                        className="text-yellow-400 font-bold py-1 px-3 rounded-md border border-yellow-400 hover:bg-yellow-400/20 transition-colors text-sm"
                        aria-label="Toggle language"
                    >
                        {language === 'ar' ? 'EN' : 'AR'}
                    </button>
                </div>
                
                <header className="mb-8">
                    <div className="relative mb-6">
                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 p-1 shadow-2xl">
                            <div className="w-full h-full rounded-full bg-white p-1">
                                <div className="w-full h-full rounded-full bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center relative overflow-hidden">
                                    <img 
                                        src="https://i.imgur.com/k2gY1rC.png" 
                                        alt={t.appName} 
                                        className="w-20 h-20 object-cover rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-4xl font-extrabold text-white mb-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                        {t.appName}
                    </h1>
                    <p className="text-yellow-400 text-lg font-bold" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>{t.tagline}</p>
                </header>

                <main className="space-y-3 mb-8">
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
                        className="w-full bg-yellow-500 text-teal-800 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:shadow-lg transform hover:scale-105 text-lg"
                        style={{
                            background: 'linear-gradient(135deg, #eab308 0%, #f59e0b 100%)',
                            boxShadow: '0 4px 15px rgba(234, 179, 8, 0.3)'
                        }}
                    >
                        <MenuIcon className="w-6 h-6" />
                        <span>{t.viewMenuButton}</span>
                    </button>
                </main>
                
                <footer className="text-center text-teal-200 text-sm opacity-80">
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