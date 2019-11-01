import * as Yup from 'yup';
import User from '../models/User';


class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed.' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string().min(6)
        .when('oldPassword', (oldPassword, field) => (oldPassword ? field.required() : field)),
      confirmPassword: Yup.string()
        .when('password', (password, field) => (password ? field.required.oneOf([Yup.ref('passwod')]) : field)),
    });

    const user_id = req.user;
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(user_id);

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({ error: 'Validation invalid.' });
    }

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(401).json({ error: 'User already exists, choose another email' });
      }
    }

    if (!(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: "Password doesn't match." });
    }

    const { id, name, provider } = user.update(req.body);

    return res.json({
      id, name, email, provider,
    });
  }
}

export default new UserController();
