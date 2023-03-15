# Delete Tweets

This is a node script to delete tweets via the Twitter API.

The script allow to delete batch of received tweets and you have to run script multiple times to delete all tweets in your personal account.

## To Run

#### 0. Before You Begin

This script uses node and the credentials from a [Twitter application you've
created on your own account](https://developer.twitter.com/en/apply-for-access).

If you don't want to use Yarn, you can just replace `yarn` with `npm`.

#### 1. Install the package dependencies:

```
yarn
```

#### 2. Generate configuration file

You can use:

```
yarn create-config
```

#### 3. Fill-out `config.ts` with your information

You need your screenname, API keys, and access tokens provided by Twitter when your application is approved.

#### 4. Run

To start deleting tweets:

```
yarn delete-tweets
```

To start unliking tweets from your timeline:

```
yarn unlike
```


#### Additional options

Cronjob runs script every 15 day of month

1. Open crontab `crontab -e`
2. Add this line `0 0 15 * * source ~/.profile && cd /home/<username>/delete-tweets && npm run delete-tweets`
3. Save and exit

