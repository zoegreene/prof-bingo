const Sequelize = require('sequelize');
const { STRING } = Sequelize;

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/bingo', {
  logging: false
});

const Square = db.define('square', {
  expression: {
    type: STRING
  }
});

const syncAndSeed = async () => {
  await db.sync({ force: true });
  await Promise.all([
    Square.create({ expression: 'FREE SPACE: white turtleneck'}),
    Square.create({ expression: 'Any questions?'}),
    Square.create({ expression: 'Doesn\'t need to be complicated. Just take it nice and easy.' }),
    Square.create({ expression: 'By the way...'}),
    Square.create({ expression: 'We\'re back in business' }),
    Square.create({ expression: 'Moe, Lucy, Larry' }),
    Square.create({ expression: 'Dodger Blue' }),
    Square.create({ expression: 'Was that a yawn?' }),
    Square.create({ expression: 'Hey look...' }),
    Square.create({ expression: 'If I went over here...' }),
    Square.create({ expression: 'The bottom line here...' }),
    Square.create({ expression: 'I\'m gonna run this again' }),
    Square.create({ expression: 'I\'m gonna cheat a little bit' }),
    Square.create({ expression: '[Forgets to install package]' }),
    Square.create({ expression: 'At this stage of the game' }),
    Square.create({ expression: 'What I could end up doing...' }),
    Square.create({ expression: 'Notice that I get an error' }),
    Square.create({ expression: 'One thing that I\'m gonna end up doing here' }),
    Square.create({ expression: 'syncAndSeed()' }),
    Square.create({ expression: 'This pretty much covers everything' }),
    Square.create({ expression: 'Right off the bat...' }),
    Square.create({ expression: '[Calls on Stanley]'  }),
    Square.create({ expression: 'Foo, bar, bazz, quq' }),
    Square.create({ expression: 'What that ends up doing...' }),
    Square.create({ expression: 'One thing we could always do...' }),
    Square.create({ expression: 'I just wanna throw this out...' }),
    Square.create({ expression: '[Destructures]' }),
    Square.create({ expression: '[Acme]' }),
    Square.create({ expression: 'DRY it out' }),
    Square.create({ expression: 'One thing we know for sure' }),
    Square.create({ expression: 'Peet, tell us a story' }),
    Square.create({ expression: '[Horizontal row]' }),
    Square.create({ expression: 'John Cook, got a song?' }),
    Square.create({ expression: 'Take a piece of paper and sketch out the stack' }),
    Square.create({ expression: '[Forgets async]' })
  ])
}

module.exports = { db, Square, syncAndSeed };
