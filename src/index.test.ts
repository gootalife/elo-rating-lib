import { EloRating } from './index'

test('calc win plobability equal ratings', () => {
  expect(EloRating.calcWinPlobability(1500, 1500)).toBe(0.5)
})

test('calc win plobability with higher rating', () => {
  expect(EloRating.calcWinPlobability(1000, 1150)).toBe(0.29661499652817136)
})

test('1500 wins 1500', () => {
  const result = EloRating.calcNewRating(1500, 1500, 1, 1)
  expect(result.playerNewRating).toBe(1516)
  expect(result.opponentNewRating).toBe(1484)
})

test('1500 loses 1500', () => {
  const result = EloRating.calcNewRating(1500, 1500, 1, 0)
  expect(result.playerNewRating).toBe(1484)
  expect(result.opponentNewRating).toBe(1516)
})

test('1500 wins 1700', () => {
  const result = EloRating.calcNewRating(1500, 1700, 1, 1)
  expect(result.playerNewRating).toBe(1524)
  expect(result.opponentNewRating).toBe(1676)
})

test('1500 loses 1700', () => {
  const result = EloRating.calcNewRating(1500, 1700, 1, 0)
  expect(result.playerNewRating).toBe(1492)
  expect(result.opponentNewRating).toBe(1708)
})

test('1700 wins 1500', () => {
  const result = EloRating.calcNewRating(1700, 1500, 1, 1)
  expect(result.playerNewRating).toBe(1708)
  expect(result.opponentNewRating).toBe(1492)
})

test('1500 loses 1700', () => {
  const result = EloRating.calcNewRating(1500, 1700, 1, 0)
  expect(result.playerNewRating).toBe(1492)
  expect(result.opponentNewRating).toBe(1708)
})

test('1500 wins 1700 * 3', () => {
  const result1 = EloRating.calcNewRating(1500, 1700, 1, 1)
  const result2 = EloRating.calcNewRating(result1.playerNewRating, result1.opponentNewRating, 1, 1)
  const result3 = EloRating.calcNewRating(result2.playerNewRating, result2.opponentNewRating, 1, 1)
  expect(result3.playerNewRating).toBe(1568)
  expect(result3.opponentNewRating).toBe(1632)
})

test('1500 wins 3 out of 3 games against 1700', () => {
  const result = EloRating.calcNewRating(1500, 1700, 3, 3)
  expect(result.playerNewRating).toBe(1573)
  expect(result.opponentNewRating).toBe(1627)
})

test('1500 wins 2 out of 3 games against 1700', () => {
  const result = EloRating.calcNewRating(1500, 1700, 3, 2)
  expect(result.playerNewRating).toBe(1541)
  expect(result.opponentNewRating).toBe(1659)
})

test('1500 lose 1850', () => {
  const result = EloRating.calcNewRating(1500, 1850, 1, 0)
  expect(result.playerNewRating).toBe(1496)
  expect(result.opponentNewRating).toBe(1854)
})