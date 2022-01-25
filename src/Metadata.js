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
        'title': 'Coming Soon! Pong!!!',
        'subtitle': 'Remaking the classic pong game with SFML',
        'desc': `Building the classic Pong game with the Simple and Fast Multimedia Library.`,
        'img_src': 'https://dannyc-assets.s3.amazonaws.com/placeholder.jpeg',
        'link': 'pong-sfml',
        'img_info': null,
        'exlcude': true
    },
    {
        'title': 'DirectX 3D Simulations',
        'subtitle': 'Building 3D simulations with DirectXTK',
        'desc': `Sharing a template for building 3D simulations with DirectX Toolkit. I wanted to share this starter template that I've used to build out some interesting 3D simulations. It uses a collection of helper classes for writing Direct3D 11 C++ code utilizing the DirectX Toolkit from Microsoft.`,
        'img_src': 'https://dannyc-assets.s3.amazonaws.com/d3d-sim/planet-small.gif',
        'link': 'd3d-template',
        'img_info': null
    },
    {
        'title': 'RPM +/- WPM',
        'subtitle': 'Creating an external trainer to read and write to process memory',
        'desc':  `The basics of reading and writing to process memory. Building out a command line RNG battle game and exploring different ways to read and write to it externally. Scan for byte patterns, reverse player structures, and rpm/wpm our way ahead of the competition in the arena. `,
        'img_src': 'https://dannyc-assets.s3.amazonaws.com/memory_preview.png',
        'link': 'battle-arena',
        'img_info': 'This is a snapshot of the graphical memory viewer of the Battle Arena Game by Cheat Engine.',
        'exlcude': false
    },
]
