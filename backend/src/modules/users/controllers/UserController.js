const SignUpService = require('../service/SignUpService');

class UserController {
  async create(req, res) {
    const { name, email, password, passwordConfirm } = req.body;

    if (!name) return res.json({ message: 'name is required' });

    if (!email) return res.json({ message: 'email is required' });

    if (!password) return res.json({ message: 'password is required' });

    if (!passwordConfirm)
      return res.json({ message: 'password_confirm is required' });

    if (password !== passwordConfirm)
      return res.json({ message: 'password not match' });

    const user = await SignUpService.execute({
      name,
      email,
      password,
    });

    return res.json(user);
  }
}

module.exports = new UserController();
