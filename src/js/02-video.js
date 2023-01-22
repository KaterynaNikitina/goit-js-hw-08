import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const TIME_DATA_PLAYER = 'timeToContinue';

player
  .setCurrentTime(localStorage.getItem(TIME_DATA_PLAYER))
  .then(() => {})
  .catch(() => {
    player.setCurrentTime(0);
  });

player.on('timeupdate', throttle(({ seconds }) => {
    const time = seconds;
    console.log(seconds);
    localStorage.setItem(TIME_DATA_PLAYER, seconds);
  }, 1000)
);
