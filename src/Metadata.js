export const PREVIEW_FEED = [
    /**
     * Preview Feed Schema
     * 'title': 'post title'
     * 'subtitle': 'post subtitle'
     * 'desc': 'post description -- around 50-100 words describing post'
     * 'img_src': 'Image preview filename *IMPORTANT* Must be found inside the src/app/route-home/feed-preview/assets/ directory'
     * 'link': 'React router link'
     * 'img_info': '[Optional] Image preview info'
     * 'exclude': 'Exclude from Home page - Defaults to showing on home page'
     */
     {
        'title': 'Coming Soon! DirectX Simulations',
        'subtitle': 'Something about making DirectX simulations',
        'desc': `I've been working on building 3D simulations with DirectX and want to share some of it. Expect this one to be heavy on samples of code and less of a walkthrough.`,
        'img_src': 'placeholder.jpeg',
        'link': 'battle-arena-2',
        'img_info': null,
        'exlcude': true
    },
    {
        'title': 'RPM +/- WPM',
        'subtitle': 'Creating an external trainer to read and write to process memory',
        'desc':  `The basics of reading and writing to process memory. Building out a command line RNG battle game and exploring different ways to read and write to it externally. Scan for byte patterns, reverse player structures, and rpm/wpm our way ahead of the competition in the arena. `,
        'img_src': 'memory_preview.png',
        'link': 'battle-arena',
        'img_info': 'This is a snapshot of the graphical memory viewer of the Battle Arena Game by Cheat Engine.',
        'exlcude': false
    },
]
