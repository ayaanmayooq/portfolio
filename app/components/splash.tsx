import { useEffect, useState } from 'react';
import './splash.css';
import { time } from 'console';

export function SplashScreen() {
    return (
        <div className={`preloader fade-out z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}>
            <div className="reveal-line-up border-b border-zinc-400">
                </div>
            <div className="reveal-line-down border-t border-zinc-400">
            </div>
            <div className='name'>
                <p className='animated-text'>ayaan</p>
            </div>
        </div>
    );
};
