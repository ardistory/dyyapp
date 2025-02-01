import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/Layouts/AppLayout';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import GameSelected from '../partials/GameSelected';
import Header from '@/partials/Header';
import { useContext } from 'react';
import { GameContext } from '@/components/GameProvider';
import { ToastAction } from '@/components/ui/toast';
import Result from '@/partials/Result';

export default function Home() {
    const { games, idGame, setIdGame, output, setOutput } = useContext(GameContext);
    const { toast } = useToast();

    return (
        <AppLayout>
            <Header />
            <Card>
                <CardHeader>
                    <CardTitle>
                        Games
                    </CardTitle>
                    <CardDescription>
                        Silahkan pilih game yang ingin anda cek
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className={'grid grid-cols-2 gap-2'}>
                        {games.map(game => (
                            <div onClick={() => {
                                setIdGame(game.id);
                                setOutput({});
                                toast({ title: game.name, description: game.dev, action: <ToastAction altText={'OK'}>OK</ToastAction>, });
                            }}
                                key={game.id} className={cn('flex items-center cursor-pointer gap-2 border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 p-1 rounded-md', idGame === game.id && 'ring dark:ring-white')}>
                                <div className={'w-12'}>
                                    <img src={game.pic} className={'rounded-lg'} />
                                </div>
                                <div className={'inline-flex flex-col'}>
                                    <span className={'font-semibold'}>{game.name}</span>
                                    <span>{game.dev}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <GameSelected />
            {output != 'failed' ? (output.data) && <Result /> : (
                <Card className={'ring ring-red-500'}>
                    <CardHeader>
                        <CardTitle>
                            Cek Gagal
                        </CardTitle>
                        <CardDescription>
                            Silahkan cek ulang id game anda
                        </CardDescription>
                    </CardHeader>
                </Card>
            )}
        </AppLayout>
    );
}