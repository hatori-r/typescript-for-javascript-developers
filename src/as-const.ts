export {};

let name = 'Atstshi';

name = 'Ham';

let nickname = 'Ham' as const;
// nickname = 'Hamtaro';

let profile = {
  name: 'Atsushi',
  height: 178
} as const;

// profile.name = 'Ham';
// profile.height = 180;