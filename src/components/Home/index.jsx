import React from 'react'
import news from '@/data/data.json'

const Main = () => {
  return (
    <div className="max-w-screen-xl p-5 mx-auto bg-white text-gray-100 mt-4 mb-6">
      <h1 className='text-black mb-2 text-4xl font-Montserrat'>Trending News</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:grid-rows-2">
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 lg:row-span-2 lg:h-full group bg-gray-500"
          style={{
            'background-image':
                `url(${news[9].image})`,
          }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              rel="noopener noreferrer"
              href={`/${news[9].id}`}
              className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline text-gray-100 bg-red-800"
            >
              {news[9].category}
            </a>
            <div className="flex flex-col justify-start text-center text-gray-100">
              <span className="leading-none uppercase">
                {news[9].date}
              </span>
            </div>
          </div>
          <h2 className="z-10 p-5">
            <a
              rel="noopener noreferrer"
              href={`/${news[9].id}`}
              className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold text-gray-100"
            >
              {news[9].headline}
            </a>
          </h2>
        </div>
        {[news[1],news[6],news[17],news[16]].map((image) => (
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
            style={{
              'background-image':
                `url(${image.image})`,
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
              <a
                rel="noopener noreferrer"
                href={image.url}
                className="px-3 py-2 text-xs font-semibold tracking-wider uppercase hover:underline text-gray-100 bg-red-800"
              >
                {image.category}
              </a>
              <div className="flex flex-col justify-start text-center text-gray-100">
                <span className="leading-none uppercase">{image.date}</span>
              </div>
            </div>
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href={`/${image.id}`}
                className="font-medium text-md group-hover:underline text-gray-100"
              >
                {' '}
                {image.headline}
              </a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Main
