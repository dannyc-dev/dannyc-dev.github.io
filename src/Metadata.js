export const PREVIEW_FEED = [
    /**
     * Preview Feed Schema
     * 'title': 'post title'
     * 'subtitle': 'post subtitle'
     * 'desc': 'post description -- around 50-100 words describing post'
     * 'img_src': 'Image preview filename - remote'
     * 'link': 'React router link'
     * 'img_info': '[Optional] Image preview info'
     * 'exclude': 'Exclude from Home page - Defaults to showing on home page'
     */
     {
        'title': 'Game Jam - Alley Cat Sim',
        'subtitle': 'Building a game in Unreal Engine 4',
        'desc': `My first unreal engine project, a city based alley cat exploration game (more of a prototype in terms of playable content). I used this project to learn my way around Unreal Engine 4 - just in time for a new version to be released. Read more about the gameplay and game design, watch some sample gameplay, and download the sample inside.`,
        'img_src': 'https://dannyc-assets.s3.amazonaws.com/placeholder.jpeg',
        'link': 'alley-cat',
        'img_info': null,
        // 'exlcude': true
    },
    {
        'title': 'DirectX 3D Simulations',
        'subtitle': 'Building out 3D simulations with DirectXTK',
        'desc': `Sharing a template I put together for building 3D simulations with DirectX Toolkit. I wanted to share this starter template that I used to build out some interesting 3D simulations. It's a collection of helper classes that uses Microsoft's DirectX 11 Toolkit to build out custom simulations that's highly customizable to add special effects and lighting.`,
        'img_src': 'https://dannyc-assets.s3.amazonaws.com/d3d-sim/planet-small.gif',
        'link': 'd3d-template',
        'img_info': null
    },
    {
        'title': 'RPM +/- WPM',
        'subtitle': 'Creating an external trainer to read and write to process memory',
        'desc':  `Kickin' it old school with the basics of reading and writing to process memory. To do this I built out a simple command line game with static pointer offsets and looked at different ways to reverse engineer player structures, do some basic byte pattern matching, and read and write to the processes memory externally.`,
        'img_src': 'https://dannyc-assets.s3.amazonaws.com/memory_preview.png',
        'link': 'battle-arena',
        'img_info': 'This is a snapshot of the graphical memory viewer of the Battle Arena Game by Cheat Engine.',
        'exlcude': false
    },
]
