class MovimentRemove {
  constructor(financeRepository) {
    this.financeRepository = financeRepository;
  }

  async execute(user_id, moviment_id) {
    const moviment = await this.financeRepository.movimentRemove(
      user_id,
      moviment_id,
    );

    if (!moviment) return { mesage: 'error deleting the moviment' };

    if (moviment.result.n !== 1)
      return { mesage: "you don't have permission to delete this moviment" };

    return moviment;
  }
}

module.exports = MovimentRemove;
