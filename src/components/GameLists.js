import Ml from '@/assets/ml.jpg';
import Pubgm from '@/assets/pubgm.jpg';
import Hok from '@/assets/hok.jpg';
import Pb from '@/assets/pb.jpg';
import Valo from '@/assets/valo.jpg';
import Genshin from '@/assets/genshin.jpg';

const games = [
    {
        id: 1,
        name: "Mobile Legends",
        slug: "mobile-legends",
        dev: "Moonton",
        pic: Ml,
        input: [
            {
                name: "Id",
                slug: "input1",
            },
            {
                name: "Server",
                slug: "input2"
            },
        ],
    },
    {
        id: 2,
        name: "PUBG Mobile",
        slug: "pubgm-global",
        dev: "Tencent Games",
        pic: Pubgm,
        input: [
            {
                name: "Id",
                slug: "input1",
            },
        ],
    },
    {
        id: 3,
        name: "Honor Of Kings",
        slug: "honor-of-kings",
        dev: "Tencent Games",
        pic: Hok,
        input: [
            {
                name: "Id",
                slug: "input1",
            },
        ],
    },
    {
        id: 4,
        name: "Point Blank",
        slug: "point-blank",
        dev: "Zepetto",
        pic: Pb,
        input: [
            {
                name: "Id",
                slug: "input1",
            },
        ],
    },
    {
        id: 5,
        name: "Valorant",
        slug: "valorant",
        dev: "Riot Games",
        pic: Valo,
        input: [
            {
                name: "Riot Id",
                slug: "input1",
            },
            {
                name: "Tag",
                slug: "input2",
            },
        ],
    },
    {
        id: 6,
        name: "Genshin Impact",
        slug: "genshin",
        dev: "Hoyoverse",
        pic: Genshin,
        input: [
            {
                name: "Id",
                slug: "input1",
            },
            {
                name: "Server",
                slug: "input2",
            },
        ],
    },
];

export default games;