const { addPoints, scores } = require('../src/index.js');

// Mock do document.getElementById para não dar erro no Node
global.document = {
  getElementById: () => ({ textContent: '' })
};

beforeEach(() => {
  scores.team1 = 0;
  scores.team2 = 0;
});

test('adicionar +1 ponto para team1', () => {
  addPoints('team1', 1);
  expect(scores.team1).toBe(1);
});
