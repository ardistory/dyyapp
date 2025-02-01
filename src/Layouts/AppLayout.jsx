export default function AppLayout({ children }) {
    return (
        <div className={'w-full min-h-screen pb-[74px] dark:bg-black'}>
            <div className={'container mx-auto pt-[74px] px-2 md:px-96 space-y-2'}>
                {children}
            </div>
        </div>
    );
}