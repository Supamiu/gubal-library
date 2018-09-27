import * as functions from 'firebase-functions';
import * as path from 'path';

export const universal = functions.https.onRequest((request, response) => {
  require(path.join(process.cwd(), '/dist/gubal-webpack/server')).app(request, response);
});
