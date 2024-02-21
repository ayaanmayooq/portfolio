import { GeistMono } from 'geist/font/mono';

export function Footer() {
    return (
        <footer className="bottom-0 text-center my-5">
            <a className="" href="https://github.com/ayaanmayooq/portfolio" target="_blank">
                <span className={`${GeistMono.className} block px-3`}>
                    Engineered by Ayaan<br />using Nextjs
                </span>
            </a>
        </footer>
    );
}