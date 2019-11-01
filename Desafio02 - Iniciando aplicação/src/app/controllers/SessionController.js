import jwt from 'jsonwebtoken';

import User from '../models/User';

import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      return res.status(400).json({ error: "User doesn't exist." });
    }

    if (!(await user.checkPassword(req.body.password))) {
      return res.status(401).json({ error: "Password doesn't match." });
    }

    const { id, email } = user;

    return res.json({ user: { id, email }, token: jwt.sign({ id }, authConfig.secret, { expiresIn: authConfig.expiresIn }) });
  }
}

export default new SessionController();
