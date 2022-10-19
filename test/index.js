const { generate } = require('../src')



it('get Rgb String', () => {
  expect(generate('#68380E', 1)).toBe('#FFF7E8');
  expect(generate('#68380E', 2)).toBe('#E1CBAA');
  expect(generate('#68380E', 3)).toBe('#C3A175');
  expect(generate('#68380E', 4)).toBe('#A47A49');
  expect(generate('#68380E', 5)).toBe('#865727');
  expect(generate('rgb(189, 16, 224)', 1, 'rgb')).toBe('rgb(255, 232, 255)');
});
