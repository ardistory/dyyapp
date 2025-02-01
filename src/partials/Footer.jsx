import { Github, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <div className={'fixed bottom-0 w-full bg-white dark:bg-black dark:text-white h-16 flex items-center border-t'}>
            <div className={'container mx-auto flex justify-evenly items-center px-3 md:px-[440px]'}>
                <span className={'text-2xl font-bold tracking-tighter inline-flex items-center justify-center italic font-inter'}>Follow</span>
                <div className={'flex gap-2'}>
                    <Instagram onClick={() => window.open('https://instagram.com/ardistory___')} className={'cursor-pointer'} />
                    <Github onClick={() => window.open('https://github.com/ardistory')} className={'cursor-pointer'} />
                </div>
            </div>
        </div>
    );
}