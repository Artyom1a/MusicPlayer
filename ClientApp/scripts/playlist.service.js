const playlist = [
    {
        name: 'Carry_on_my_wayward_son',
        singer: 'AC/DC',
        path: './music/acdc_-_carry_on_my_wayward_son.mp3',
        mainplayer: './images/4.jpg',
        like: true
    },
    {
        name: 'flowers',
        singer: 'miley_cyrus',
        path: './music/miley_cyrus_-_flowers.mp3',
        mainplayer: './images/2.jpg',
        like: false
    },
    {
        name: 'gde_proshla_ti',
        singer: 'kravc__gio_pika_jodlex_remix',
        path: './music/kravc__gio_pika_-_gde_proshla_ti_jodlex_remix.mp3',
        mainplayer: './images/3.jpg',
        like: false
    },
    {
        name: 'Пozvoni',
        singer: 'dj_smash__nivesta',
        path: './music/dj_smash__nivesta_-_pozvoni.mp3',
        mainplayer: './images/cat.jpg',
        like: false
    },
    {
        name: 'send_me_an_angel',
        singer: 'scorpions',
        path: './music/scorpions_-_send_me_an_angel.mp3',
        mainplayer: './images/5.jpg',
        like: true
    }
];


function getAllMusic() {
    return playlist;
}