var jwPlayerAdvancedEmbed = function(config) {

    function init() {
        config.containerId = 'jw-player-embed-' + config.videoId;

        $('.video-container').eq(config.videoId - 1).append(
            $('<div />').html('Loading&hellip;').attr('id', config.containerId)
        );

        jwplayer.key = config.jwPlayerKey;

        setupVideo();
    }

    function setupVideo() {
        var videoDimensions = getVideoHeightWidth();

        jwplayer(config.containerId).setup({
            playlist: [{
                image: config.image,
                sources: config.sources
            }],
            controls: true,
            width: videoDimensions.width,
            height: videoDimensions.height,
            autostart: config.autostart,
            skin: config.skinUrl
        });

        jwplayer(config.containerId).setVolume(50);

        $(window).resize(function() {
            resizeVideo();
        });
    }

    function resizeVideo() {
        var videoDimensions = getVideoHeightWidth();

        jwplayer(config.containerId).resize(videoDimensions.width, videoDimensions.height);
    }

    function getVideoHeightWidth() {
        var width = $(config.parentContainerCssSelector).innerWidth();
        return {
            width: width,
            height: Math.round(width * (config.videoAspectRatio.height / config.videoAspectRatio.width))
        };
    }

    function checkJquery(){
        if (document.readyState == "complete") {
            init();
        } else {
            setTimeout(checkJquery, 9);
        }
    }

    checkJquery();
};