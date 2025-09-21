
import React from 'react';

interface SocialLinkButtonProps {
    href: string;
    icon: React.ReactNode;
    text: string;
}

const SocialLinkButton: React.FC<SocialLinkButtonProps> = ({ href, icon, text }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full bg-transparent border-2 border-brand-gold text-brand-gold font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 ease-in-out hover:bg-brand-gold/20 hover:shadow-lg transform hover:scale-105"
        >
            {icon}
            <span>{text}</span>
        </a>
    );
};

export default SocialLinkButton;
