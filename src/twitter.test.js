import { get } from './twitter';
import Moment from 'moment';

test('get tweets', (done) => {
	get('javascript since:' + Moment().format('YYYY-MM-DD'))
	.subscribe(tweets => {
		expect(tweets[0].text).toBeDefined();
		done();
	})
})