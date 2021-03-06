class SignInService {
  constructor(usersRepository, cryptProvider, tokenProvider) {
    this.usersRepository = usersRepository;
    this.cryptProvider = cryptProvider;
    this.tokenPrivider = tokenProvider;
  }

  async execute(data) {
    const { email, password } = data;

    const user = await await this.usersRepository.findByEmail(email);

    if (!user) return { error: 'user not found' };

    const passwordMatch = await this.cryptProvider.compare(
      password,
      user.password,
    );

    if (!passwordMatch) return { error: "password doesn't match" };

    delete user.password;

    const token = await this.tokenPrivider.genarate(user.id);

    return {
      user,
      token,
    };
  }
}

module.exports = SignInService;
