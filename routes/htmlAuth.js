var express = require('express');
var router = express.Router();
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

const {OAuth2Client} = require('google-auth-library');

/* GET home page. */
router.post('/', async function(req, res, next) {
const credential = req.params.credential;
console.log('Credential',credential);
const cookies = req.cookies;
const token = cookies.g_csrf_token
console.log('Cookies',cookies);

console.log('Token',token)

    const client = new OAuth2Client(process.env.CLIENT_ID);
async function verify() {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.SECRET_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  console.log("payload",payload);
  console.log("userid",userid)
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}
await verify().catch(console.error);
res.send('testing 123')
});

module.exports = router;