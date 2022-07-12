import * as authServices from '../services/authServices.js';

export async function signIn(req, res) {
  const { email, password } = req.body;
  const auth = authServices.signIn(email, password); 
  return res.status(200).send(auth)  
}

export async function signUp(req, res) {
  const { name, email, password } = req.body;
  const user = await User.create({ name, email, password });
  const token = jwt.sign({ id: user._id }, process.env.APP_SECRET);
  return res.json({ user, token });
}

export async function signOut(req, res) {
  return res.json({ ok: true });
}

export async function recoveryPassword(req, res) {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: 'User not found' });
  }
  const token = jwt.sign({ id: user._id }, process.env.APP_SECRET);
  return res.json({ user, token });
}

