import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronsUpDown, UsersRound } from 'lucide-react';
import { Link } from 'react-router';

export default function Topbar() {
    return (
        <div className={'absolute left-0 top-0 w-full bg-white dark:bg-black dark:text-white h-16 flex items-center border-b'}>
            <div className={'container mx-auto flex justify-between px-3 md:px-96'}>
                <span className={'text-2xl font-bold tracking-tighter inline-flex items-center justify-center italic font-inter'}>DyyApp_</span>
                <div className={'flex gap-2'}>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button>
                                Menu
                                <ChevronsUpDown />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link to={'/'} className={'flex items-center gap-2'}>
                                    <UsersRound size={20} /> Username Checker
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
}