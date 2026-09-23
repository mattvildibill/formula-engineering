import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Formula / Engineering Explorer',description:'Explore an original Formula reference car in interactive 3D. Active aerodynamics, 2025 DRS comparison, underfloor, exploded assemblies and cockpit.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
