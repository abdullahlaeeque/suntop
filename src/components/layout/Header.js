// components/layout/Header.js
'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, Contact, Contact2, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function Header() {
    const navItems = [
        { name: 'Products', href: '/products' },
        { name: 'Distributors', href: '/distributors' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
    ];
    const router = useRouter();
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 py-4">
                {/* Main Header Container */}
                <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-blue-200 shadow-md shadow-blue-100">
                    <div className="px-2 md:px-6 py-3">
                        <div className="flex items-center justify-between">

                            {/* Logo */}
                            <Link href="/" className="flex items-center space-x-3 group">
                                <div className="w-12 h-12 relative">
                                    <Image
                                        src="/suntop.jpeg"
                                        alt="Suntop International Logo"
                                        fill
                                        className="object-contain rounded-xl"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs sm:text-sm md:text-lg font-bold text-gray-900">
                                        Suntop International Group
                                    </span>

                                    <span className="text-xs text-gray-600 font-medium hidden sm:inline">
                                        Pharmaceuticals & Healthcare
                                    </span>
                                </div>
                            </Link>

                            {/* Desktop Navigation */}
                            <nav className="hidden lg:flex items-center space-x-8">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="relative text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 group/nav"
                                    >
                                        {item.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover/nav:w-full"></span>
                                    </Link>
                                ))}
                            </nav>

                            {/* Right Actions */}
                            <div className="flex items-center space-x-3">
                                {/* Action Buttons */}
                                <div className="flex items-center space-x-2">

                                    {/* <Contact size={92} className="h-1 w-1 text-gray-600" /> */}
                                    <div className="flex space-x-3">
                                        {/* WhatsApp */}
                                        <a
                                            href="https://wa.me/917089935433"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-green-600 text-white hover:bg-green-700 rounded-lg p-2 transition-all duration-300 hover:scale-110"
                                            aria-label="WhatsApp"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.188-3.55-8.444" />
                                            </svg>
                                        </a>

                                        {/* Instagram */}
                                        <a
                                            href="https://instagram.com/_glucomat_"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gradient-to-r text-white from-purple-600 to-pink-600 rounded-lg p-2 transition-all duration-300 hover:scale-110"
                                            aria-label="Instagram"
                                        >
                                            <Instagram className="w-4 h-4" />
                                        </a>
                                    </div>



                                    {/* Mobile Menu Trigger */}
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="lg:hidden rounded-xl bg-white/80 backdrop-blur-sm border border-blue-200 hover:bg-blue-50 hover:shadow-md transition-all duration-200"
                                            >
                                                <Menu className="h-5 w-5 text-gray-600" />
                                            </Button>
                                        </SheetTrigger>
                                        <SheetContent className="bg-white/90 backdrop-blur-md border-l border-blue-200 ps-3">
                                            <div className="flex flex-col space-y-6 mt-8">
                                                {/* Mobile Logo */}
                                                <div className="flex items-center space-x-3 pb-6 border-b border-blue-200">
                                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center border border-blue-200">
                                                        <span className="text-blue-600 font-bold text-sm">S</span>
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-900">Suntop International</span>
                                                </div>

                                                {/* Mobile Navigation */}
                                                {navItems.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-blue-100"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}

                                                {/* Mobile Search */}

                                            </div>
                                        </SheetContent>
                                    </Sheet>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}