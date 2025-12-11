'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BreadcrumbNav() {
  const pathname = usePathname();
  if (pathname === '/') return null;
  const segments = pathname.split('/').filter((item) => item !== '');
  const backPath = segments.length > 1 
    ? `/${segments.slice(0, -1).join('/')}` 
    : '/';

  return (
    <nav className="w-full max-w-7xl mx-auto py-6 text-sm text-zinc-500 font-mono mb-8">
      <div className="flex items-center gap-2">
        <Link 
          href={backPath}
          className="hover:text-white transition-colors p-1 -ml-1"
          aria-label="Go back"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <span className="text-zinc-700">|</span>
        <Link href="/" className="hover:text-white transition-colors">
          ~/home
        </Link>
        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join('/')}`;
          const isLast = index === segments.length - 1;

          return (
            <div key={href} className="flex items-center">
              <span className="mx-2 text-zinc-700">/</span>
              {isLast ? (
                <span className="text-white font-semibold">
                  {segment}
                </span>
              ) : (
                <Link href={href} className="hover:text-white transition-colors">
                  {segment}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}