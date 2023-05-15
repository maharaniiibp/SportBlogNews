import React from 'react'

export default function index() {
  const satu = [
    {
      gambar: '/photo/sejarah-badminton.jpg',
      desc: 'A badminton-like game was known in ancient Greece and Egypt - a game called battledore and shuttlecock - in which two players hit a feathered shuttlecock back and forth with tiny rackets. The game was played in India during the 18th Century, at which time it was called "Poona". In the 1860s it was adopted by British Army officers stationed in India. The officers took the game back to England, where it became a success at a party given by the Duke of Beaufort in 1873 at his estate called "Badminton" in Gloucestershire.',
    },
    {
      gambar: '/photo/sejarah-voli.jpg',
      desc: 'The year was 1895, and the place was the YMCA in Holyoke, Massachusetts; William Morgan was an instructor there and needed an indoor activity for his classes that could provide a vigorous physical workout without the aggressive physical contact that other sports at the time required. His other consideration was equipment; he wanted something simple that didn’t involve a huge bag of gear. With this, Morgan combined the elements of basketball, tennis, baseball and handball and in the process, managed to create one of the world’s most beloved sports.',
    },
    {
      gambar: '/photo/sejarah-basket.jpg',
      desc: 'Basketball began in 1891, it was invented by James Naismith, as being a less injury-prone sport than football. He was a 31-year-old graduate student when he created the sport, keeping players indoors during the winter. The game became established quite quickly, and it grew very popular into the 20th century. It first became popular in America and then branched out to get more popularity in other corners of the world. As the game became established in colleges first, the professional game, what we now know as the NBL, soon followed. The NBA then became established in 1946 and grew into a multibillion-dollar enterprise before the end of the 20th century, and as a result, the sport became an important part of American culture.',
    },
    {
      gambar: '/photo/sejarah-sepakbola.jpg',
      desc: 'Soccer, or better known to the rest of the world as football, is one of the oldest sports in history. Dating back to 206 B.C., there are accounts of Chinese soldiers playing Tsu’chu, “kicking the ball,” to supplement their training regiments during the Han Dynasty. While many other ancient cultures played games involving a ball, Tsu’chu was the first to not allow hands. The goals consisted of a net attached to two bamboo poles and elevated 30 feet in the air. This is quite the contrast to modern goals that sit on the ground and extend eight feet high and 24 feet wide. The particular style of playing a game with a ball centered around one’s feet spread throughout the world. ',
    },
  ]
  return (
    <section
      id="about Garena"
      className="flex flex-col lg:gap-4 lg:flex-col w-full"
    >
      <div className="text">
        <h1 className="text-5xl font-PermanentMarker w-[800px text-center">
          History
        </h1>
        <p className="text-lg text-center mt-4 mb-4">
          The history of sport is a history of power and progress. From ancient
          origins to first breakthroughs. Sometimes sport makes history,
          sometimes sport is history.
        </p>
      </div>

      <div className="justify-center mx-automax w-full max-h-fit">
        <ul className="flex flex-col items-center">
          {satu.map((item, index) => (
            <li
              className={`flex flex-rowbox-border md:box-content bg-zinc-400 rounded-md overflow-hidden mx-8 mb-4  hover:shadow-2xl max-w-screen-lg text-left p-4 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              key={index}
            >
              <div
                className={`w-4/12  h-[200px] order-${
                  index % 2 === 0 ? '1' : '2'
                }`}
              >
                <img
                  src={item.gambar}
                  alt="image"
                  className="w-[750px] object-scale-down h-[200px]"
                />
              </div>
              <div
                className={`flex items-center w-11/12 order-${
                  index % 2 === 0 ? '2' : '1'
                }`}
              >
                <p className="px-10">
                  {index % 2 === 0 ? '' : ''}
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
