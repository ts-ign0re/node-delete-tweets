import config from './config';
import T from './init-twit';

// T.get will return a promise of the response
const getLikes = async () => T.get('/favorites/list', {
  screen_name: config.screenName,
  count: 1000
});

function removeLikes() {
  getLikes().then(({ resp, data }) => {
    if (data.length === 0) {
      console.log('No likes to delete');
      return;
    }
    data.forEach(async (tweet) => {
      try {
        const { data: deleted_like } = await T.post('favorites/destroy', { id: tweet.id_str });
        console.log(`Deleted like with ID ${deleted_like.id}`);
      } catch (e) {
        if (e.statusCode === 404) {
          // skip
        } else {
          console.error(e);
        }
      }
    });
  }).catch(err => console.log(err));
}

removeLikes();