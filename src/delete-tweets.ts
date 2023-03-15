import config from './config';
import T from './init-twit';


const getTimeline = async () => await T.get('/statuses/user_timeline', {
  screen_name: config.screenName,
  count: 10000
});

async function deleteTweets() {
  // get tweets list
  const { data: tweets_feed } = (await getTimeline());
  tweets_feed.forEach(async (tweet) => {
    // delete tweet
    const { data: deleted_tweet } = await T.post('statuses/destroy/:id', { id: tweet.id_str });
    console.log(`Deleted tweet with ID ${deleted_tweet.id}`);
  });
}

deleteTweets();
