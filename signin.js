const express=require('express');
const jwt=require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app=express();
const PORT=process.env.PORT || 3000;
app.use(express.static('static'));
app.use(cookieParser());
app.use(express.json());

const users=[
	{ id: 1, email: 'caporusson1@nku.edu', password: 'password1' },
	{ id: 2, email: 'johndoe@nku.edu', password: 'password2' }
];

app.post('/api/auth/signin',(req,res)=>{
	const { username, password } = req.body;
	const user = users.find(u => u.username === username && u.password === password);
	if (user) {
		const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
		res.cookie('token', 'Bearer ' + token, { httpOnly: true, secure: true });
		res.json({ status:1,jwt:token });
	} else {
		res.status(401).send({ status:-1,jwt:'Invalid credentials'});
	}
});

app.get('/api/auth/signout',(req,res)=>{
	res.cookie('token', '', { httpOnly: true, secure: true });
});

app.get('/',(req, res) => {
	const bearerHeader = req.headers['authorization'];
	console.log(bearerHeader);
	if(!bearerHeader){
		const token = req.cookies.token;
		console.log(token);
	}
	res.send('Welcome to our website');
});

function verifyToken(req, res, next) {
	let bearerHeader = req.headers['authorization'];
	if(!bearerHeader){
		bearerHeader= req.cookies.token;
	}
	if (typeof bearerHeader !== 'undefined') {
		const bearerToken = bearerHeader.split(' ')[1];
		jwt.verify(bearerToken, process.env.JWT_SECRET, (err, authData) => {
			if (err) {
				res.sendStatus(403);
			} else {
				req.user = authData;
				next();
			}
		});
	} else {
		res.sendStatus(403);
	}
}


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});