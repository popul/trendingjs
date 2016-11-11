import Rx from 'rxjs/Rx';
import Twit from 'twit';

if (!process.env.CONSUMER_KEY ||
	!process.env.CONSUMER_KEY ||
	!process.env.CONSUMER_KEY ||
	!process.env.CONSUMER_KEY) {
	throw new Error('url parameter must be provided');
}

const T = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,
});

const TGet = Rx.Observable.bindCallback(T.get.bind(T));

export function get(q, count) {
	return TGet('search/tweets', { 
		q,
		count
	})
	.map(ev => ev[1].statuses)
}
