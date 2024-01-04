
import { Inter } from 'next/font/google'
import './globals.css'
import * as React from "react";
import { Providers } from './providers';
import {Navbar, NavbarBrand, NavbarContent,NavbarMenuToggle, NavbarItem, Link, Button} from "@nextui-org/react";
import Header from './components/header/Header';


const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className='dark min-h-screen'>
        <body className="dark text-foreground bg-background min-h-screen flex flex-col">
          <Providers>
            <Header />
            <main className="w-full max-h-full h-full flex flex-col absolute top-0">
              <section className='w-full h-full bg-white relative top-16'>
                {children}
              </section>
              </main>
          </Providers>
        </body>
    </html>
  );
}
