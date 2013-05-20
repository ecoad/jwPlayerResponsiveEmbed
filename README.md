jwPlayerResponsiveEmbed
=======================

JS embed code for JW Video Player

This library allows for jQuery to be loaded after having initialised the Video.

The player will resize based on the parent container and maintain a given configurable aspect ratio, such as 16:9.

    <div class="video-container"></div>
    <script type='text/javascript' src='jwplayer.js'></script>
    <script type='text/javascript' src='jw-player-responsive-embed.js'></script>
    <script type='text/javascript'>
    if (typeof jwVideoId === 'undefined') { var jwVideoId = 1; }
    
    var sourceConfig = {
        sources: [
            { file: 'http://content.bitsontherun.com/videos/YM7WQSiN-U1HHvOrV.mp4' },
            { file: 'http://content.bitsontherun.com/videos/YM7WQSiN-EJ8fBsmZ.webm' }
        ],
        image: 'http://bespoke.coad.me/breathless/build/assets/graphics/video-still.jpg',
        aspectRatio: { width: 16, height: 9 }
    };
    
    jwPlayerAdvancedEmbed({
        videoId: jwVideoId++,
        sources: sourceConfig.sources,
        image: sourceConfig.image,
        jwPlayerKey: 'YOUR PREMIUM KEY',
        autostart: false,
        skinUrl: 'skin.xml',
        parentContainerCssSelector: '#container',
        videoAspectRatio: sourceConfig.aspectRatio
    });
    </script>

