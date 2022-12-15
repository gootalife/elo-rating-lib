export const EloRating = {
  calcWinPlobability: (playerRating: number, opponentRating: number) => {
    return 1 / (1 + Math.pow(10, (opponentRating - playerRating) / 400))
  },
  calcNewRating: (playerRating: number, opponentRating: number, totalGames: number, playerWins: number, k: number = 32): NewRatingCalculationResult => {
    if (playerWins > totalGames || playerWins < 0 || totalGames <= 0) {
      throw new Error('Invalid args were detected.')
    }
    const playerWinPlobability = EloRating.calcWinPlobability(playerRating, opponentRating)
    const newPlayerRating = playerRating + Math.round(k * (playerWins - totalGames * playerWinPlobability))
    const newOpponentRating = opponentRating + Math.round(k * ((totalGames - playerWins) - totalGames * (1 - playerWinPlobability)))
    return { playerNewRating: newPlayerRating, opponentNewRating: newOpponentRating }
  }
}

type NewRatingCalculationResult = {
  playerNewRating: number,
  opponentNewRating: number
}