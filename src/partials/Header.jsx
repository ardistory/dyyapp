import { Card, CardHeader, CardTitle } from '@/components/ui/card';

export default function Header() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <h1 className={'text-5xl italic font-inter font-bold tracking-tighter text-center'}>Username Checker</h1>
                </CardTitle>
            </CardHeader>
        </Card>
    );
}