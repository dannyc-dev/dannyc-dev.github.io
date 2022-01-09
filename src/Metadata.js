export const PREVIEW_FEED = [
    /**
     * Preview Feed Schema
     * 'title': 'post title'
     * 'subtitle': 'post subtitle'
     * 'desc': 'post description -- around 50-100 words describing post'
     * 'img_src': 'Image preview filename *IMPORTANT* Must be found inside the src/app/route-home/feed-preview/assets/ directory'
     * 'link': 'React router link'
     * 'img_info': '[Optional] Image preview info'
     */
     {
        'title': 'Hooks, hooks, and more hooks',
        'subtitle': 'Taking our trainer internal: trying out process injection, api hooking, and detours.',
        'desc': `Exploring ways of getting direct access to battle arena's memory by taking our trainer internal. Looking at different ways to read and write to process memory from the inside. Coming sooon!`,
        'img_src': 'placeholder.jpeg',
        'link': 'battle-arena-2',
        'img_info': null,
    },
    {
        'title': 'Kicking it old school',
        'subtitle': 'Making an external trainer to cheat in our own game.',
        'desc':  `I explored static access pointers by building out a spimple turn based command-line battle game. Reverse engineer, scan for byte patterns, and read+write to process memory to control our fate in game.`,
        'img_src': 'memory_preview.png',
        'link': 'battle-arena',
        'img_info': 'This is a snapshot of the graphical memory viewer of the Battle Arena Game by Cheat Engine.',
    },
]
