var ap4 = new APlayer({
    element: document.getElementById('player4'),
    narrow: false, //Make Player Become Shorter
    autoplay: true, //Auto Play musics
    showlrc: false, //Show Lyrics
    mutex: true,
    theme: '#ad7a86', //Color of Theme
    mode: 'circulation', //"circulation" or "random"
    music: [{
            title: 'Sóng Gió',
            singer: 'Jack',
            url: '../audio/Song-Gio.mp3',
            pic: 'https://media.giphy.com/media/zyMoLcSt3gTvi/giphy.gif'
        },
        {
            title: 'Hồng Nhan',
            singer: 'Jack',
            url: '../audio/Hong-Nhan.mp3',
            pic: 'https://media.giphy.com/media/V0OggVqQxNIOI/giphy.gif'
        },
        {
            title: 'Bạc Phận',
            singer: 'jack',
            url: '../audio/Bac-Phan.mp3',
            pic: 'https://media.giphy.com/media/mgbWirdGsUDwA/giphy.gif'
        },
        {
            title: 'tết',
            singer: '911 Band',
            url: '../audio/tetmp3',
            pic: 'https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif'
        },
        {
            title: 'Habits',
            singer: 'Cover  BILLbilly01',
            url: 'musics/Habits (Stay High)  Cover  BILLbilly01 ft. Violette Wautier.mp3',
            pic: 'https://i.ytimg.com/vi/0h3NeVv8AGg/maxresdefault.jpg'
        }

    ]
});