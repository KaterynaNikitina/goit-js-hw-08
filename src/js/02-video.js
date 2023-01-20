import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const TIME_DATA_PLAYER = 'timeToContinue';

player.on("timeupdate", throttle(function (data) {
    const time = data.seconds;
    console.log(time);
    localStorage.setItem(TIME_DATA_PLAYER, time)
},1000));

player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});