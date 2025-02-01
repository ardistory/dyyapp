import { GameContext } from '@/components/GameProvider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useContext } from 'react';

export default function Result() {
    const { output } = useContext(GameContext);

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Output
                </CardTitle>
                <CardDescription>
                    Berikut hasil pengecekan
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Card>
                    <CardHeader>
                        {(output.data) ? Object.keys(output.data.data).map(key => (
                            <div key={key}>
                                <CardHeader className={'grid grid-cols-5'}>
                                    <CardTitle className={'col-span-2'}>
                                        {key}
                                    </CardTitle>
                                    <CardTitle className={'col-span-3'}>
                                        {output.data.data[key]}
                                    </CardTitle>
                                </CardHeader>
                                <Separator />
                            </div>
                        )) : ''}
                    </CardHeader>
                </Card>
            </CardContent>
        </Card>
    );
}