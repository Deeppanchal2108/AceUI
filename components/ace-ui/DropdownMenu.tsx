"use client";
import { useState, useRef, useEffect } from 'react';
import { LucideIcon } from 'lucide-react';
import {
   
    MoreHorizontal,
    
} from 'lucide-react';

interface MenuItem {
    icon: LucideIcon;
    label: string;
    id: string;
    href?: string;
    external?: boolean;
    disabled?: boolean;
}

interface DropdownMenuProps {
    triggerIcon?: LucideIcon;
    triggerText?: string;
    menuItems?: MenuItem[];
    buttonText?: string;
    buttonHref?: string;
    buttonExternal?: boolean;
    className?: string;
    triggerClassName?: string;
    menuClassName?: string;
    itemClassName?: string;
    buttonClassName?: string;
    position?: 'left' | 'right' | 'center';
    width?: string;
    iconSize?: string;
    triggerIconSize?: string;
    disabled?: boolean;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
    triggerIcon: TriggerIcon = MoreHorizontal,
    triggerText = "More",
    menuItems = [],
    buttonText = "Post",
    buttonHref = "/post",
    buttonExternal = false,
    className = "",
    triggerClassName = "",
    menuClassName = "",
    itemClassName = "",
    buttonClassName = "",
    position = "left",
    width = "w-72",
    iconSize = "w-5 h-5",
    triggerIconSize = "w-5 h-5",
    disabled = false
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleItemClick = (item: MenuItem): void => {
        if (item.disabled) return;

        setIsOpen(false);

        if (item.href) {
            if (item.external) {
                const newWindow = window.open(item.href, '_blank', 'noopener,noreferrer');
                if (newWindow) newWindow.focus();
            } else {
                // Use setTimeout to ensure dropdown closes first
                setTimeout(() => {
                    window.location.href = item.href!;
                }, 100);
            }
        }
    };

    const handleButtonClick = (): void => {
        setIsOpen(false);

        if (buttonHref) {
            if (buttonExternal) {
                const newWindow = window.open(buttonHref, '_blank', 'noopener,noreferrer');
                if (newWindow) newWindow.focus();
            } else {
                // Use setTimeout to ensure dropdown closes first
                setTimeout(() => {
                    window.location.href = buttonHref;
                }, 100);
            }
        }
    };

    const getPositionClasses = (): string => {
        switch (position) {
            case 'right':
                return 'right-0';
            case 'center':
                return 'left-1/2 transform -translate-x-1/2';
            default:
                return 'left-0';
        }
    };

    return (
        <div className={`relative inline-block ${className}`} ref={dropdownRef}>
            {/* Trigger Button */}
            <button
                onClick={() => !disabled && setIsOpen(!isOpen)}
                disabled={disabled}
                className={`flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${triggerClassName}`}
            >
                <TriggerIcon className={`text-gray-600 ${triggerIconSize}`} />
                <span className="text-gray-800 font-medium">{triggerText}</span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className={`absolute top-full mt-2 ${width} bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 transform transition-all duration-200 ease-out origin-top scale-100 opacity-100 ${getPositionClasses()} ${menuClassName}`}>
                    <div className="py-2">
                        {menuItems.map((item: MenuItem, index: number) => {
                            const IconComponent = item.icon;
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleItemClick(item)}
                                    disabled={item.disabled}
                                    className={`w-full flex items-center gap-4 px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-150 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent ${itemClassName}`}
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-150 group-disabled:group-hover:bg-gray-100">
                                        <IconComponent className={`text-gray-600 ${iconSize}`} />
                                    </div>
                                    <span className="text-gray-800 font-medium text-base">
                                        {item.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Action Button */}
                    {buttonText && (
                        <div className="px-4 pb-4 pt-2 border-t border-gray-100">
                            <button
                                onClick={handleButtonClick}
                                className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200 shadow-sm hover:shadow-md ${buttonClassName}`}
                            >
                                {buttonText}
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};