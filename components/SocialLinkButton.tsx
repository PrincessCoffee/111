
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
            className="group w-full bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 ease-in-out hover:bg-yellow-400/10 hover:border-yellow-300 hover:text-yellow-300 hover:shadow-lg transform hover:scale-105"
            style={{
                borderColor: '#facc15',
                color: '#facc15',
                boxShadow: '0 2px 10px rgba(250, 204, 21, 0.1)'
            }}
        >
            <span className="text-xl">{icon}</span>
            <span className="text-lg">{text}</span>
        </a>
    );
};

export default SocialLinkButton;
