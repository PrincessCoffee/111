import React from 'react';
import type { MenuCategory } from '../types';
import { CloseIcon } from './icons';

interface MenuModalProps {
    isOpen: boolean;
    onClose: () => void;
    menuCategories: MenuCategory[];
    title: string;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, menuCategories, title }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
            onClick={onClose}
        >
            <div
                className="bg-brand-green border-2 border-brand-gold rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative animate-fade-in-up"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-brand-green p-4 border-b-2 border-brand-gold z-10 flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-brand-gold">{title}</h2>
                    <button 
                        onClick={onClose}
                        className="text-brand-gold hover:text-white transition-colors"
                        aria-label="Close menu"
                    >
                        <CloseIcon className="w-8 h-8"/>
                    </button>
                </div>
                
                <div className="p-6">
                    <div className="space-y-8">
                        {menuCategories.map((category) => (
                            <div key={category.name}>
                                <h3 className="text-2xl font-bold text-brand-gold mb-4 border-b-2 border-brand-gold/50 pb-2">
                                    {category.name}
                                </h3>
                                <ul className="space-y-6">
                                    {category.items.map((item) => (
                                        <li key={item.name} className="border-b border-brand-gold/30 pb-4 last:border-b-0">
                                            <div className="text-right sm:text-left rtl:sm:text-right">
                                                <h4 className="text-xl font-bold text-white">{item.name}</h4>
                                                <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuModal;