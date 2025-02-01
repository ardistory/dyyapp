import { GameContext } from '@/components/GameProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import axios from "axios";

export default function GameSelected() {
    const { games, idGame, setIdGame, setOutput } = useContext(GameContext);
    const gameFiltered = games.find(game => game.id == idGame);

    const [data, setData] = useState({});

    useEffect(() => {
        setData({});
    }, [idGame]);

    function handleChange(e) {
        setData(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value,
            slug: e.target.dataset.slug,
        }));
    }

    async function handleSubmit(data) {
        const url = (!data.input2) ? `${import.meta.env.VITE_URL}/${data.slug}/${data.input1}/` : `${import.meta.env.VITE_URL}/${data.slug}/${data.input1}/${data.input2}`;

        const config = {
            method: 'GET',
            url,
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_KEY,
                'x-rapidapi-host': import.meta.env.VITE_HOST,
            }
        };

        const response = await axios.request(config);
        response.data.error === true ? setOutput("failed") : setOutput(response);
        setIdGame(0);
        setData({});
    }

    return (
        (gameFiltered) ? (
            <Card>
                <CardHeader>
                    <div className={'flex items-center gap-2'}>
                        <img src={gameFiltered.pic} className={'w-12 rounded-lg'} />
                        <div>
                            <CardTitle>
                                {gameFiltered.name}
                            </CardTitle>
                            <CardDescription>
                                {gameFiltered.dev}
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className={'space-y-2'}>
                        {gameFiltered.input.map(input => (
                            <div key={input.slug} className="grid w-full items-center gap-1.5">
                                <Label htmlFor={input.slug}>{input.name}</Label>
                                <Input onChange={handleChange} value={data[input.slug] ?? ''} id={input.slug} data-slug={gameFiltered.slug} type="text" placeholder={input.name} />
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={() => handleSubmit(data)}>
                        <Search /> Check
                    </Button>
                </CardFooter>
            </Card>
        ) : (
            ''
        )
    );
}