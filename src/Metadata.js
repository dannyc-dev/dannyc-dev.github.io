export const PREVIEW_FEED = [
    /**
     * Preview Feed Schema
     * 'title': 'post title'
     * 'subtitle': 'post subtitle'
     * 'desc': 'post description -- around 50-100 words describing post'
     * 'img_src': 'Image preview filename *IMPORTANT* Must be found inside the src/app/route-home/feed-preview/assets/ directory'
     * 'link': 'React router link'
     * 'img_info': '[Optional] Image preview info'
     * 'exclude': 'Exclude from Blogs - Defaults to showing on blog page'
     */
     {
        'title': 'Lorem ipsum dolor sit amet.',
        'subtitle': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel.',
        'desc': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed mauris ultricies, tempor nisl vel, tincidunt ante. Etiam suscipit nisi id faucibus maximus. Nulla porta diam leo, eu bibendum nulla vestibulum ut. Maecenas in bibendum neque. Etiam venenatis leo ut odio porttitor, vel sollicitudin est tincidunt. Suspendisse facilisis justo sit.`,
        'img_src': 'placeholder.jpeg',
        'link': 'battle-arena-2',
        'img_info': null,
        'exlcude': true
    },
    {
        'title': 'Lorem ipsum dolor sit amet.',
        'subtitle': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel.',
        'desc':  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed mauris ultricies, tempor nisl vel, tincidunt ante. Etiam suscipit nisi id faucibus maximus. Nulla porta diam leo, eu bibendum nulla vestibulum ut. Maecenas in bibendum neque. Etiam venenatis leo ut odio porttitor, vel sollicitudin est tincidunt. Suspendisse facilisis justo sit.`,
        'img_src': 'memory_preview.png',
        'link': 'battle-arena',
        'img_info': 'This is a snapshot of the graphical memory viewer of the Battle Arena Game by Cheat Engine.',
        'exlcude': false
    },
]
