'use client'
import Adds from '@/components/Adds'
import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])
  const url = 'https://api.jsonbin.io/v3/b/64609e309d312622a35ddd49'
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url)
        const result = await response.json()
        setData(result.record)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  const [search, setSearch] = useState('')
  const [isLoading] = useState(false)
  const [labelCategory] = useState([
    { value: 'All', label: 'All News' },
    { value: 'footbal', label: 'Footbal' },
    { value: 'volley', label: 'Volley' },
    { value: 'badminton', label: 'Badminton' },
    { value: 'basket', label: 'Basket' },
  ])
  const [filterParam, setFilterParam] = useState('All')
  const [news, setnews] = useState(data)
  useEffect(() => {
    setnews(data)
    console.log(news)
  }, [])

  useEffect(() => {
    console.log(filterParam)
    const searchTerm = search.toLowerCase()
    const filteredData = data.filter((item) =>
      item.headline.toLowerCase().includes(searchTerm)
    )
    setnews(filteredData)
  }, [filterParam, search, data])

  console.log(filterParam)

  useEffect(() => {
    if (filterParam === 'All') {
      setnews(data)
    } else {
      console.log(filterParam)
      const filter = data.filter(
        (item) => item.category.toLowerCase() === filterParam.toLowerCase()
      )
      setnews(filter)
    }
  }, [filterParam])

  return (
    <div className="container mx-auto mb-16">
      <Adds />
      <div className="text-center font-bold">
        <h1 className="text-4xl text-red-700 mb-8 mt-20">Latest News</h1>
      </div>
      <div className="flex max-w-lg rounded overflow-hidden my-4 mx-auto mt-0 space-x-7">
        <form className="w-full max-w-sm bg-white/60 p-1">
          <div className="flex items-center border-b-2 border-red-700 py-2">
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Find your News..."
            />
          </div>
        </form>
        <div className="place-items-center flex-2">
          <select
            onChange={(e) => {
              setFilterParam(e.target.value)
            }}
            className="custom-select px-4 py-3 rounded-md hover:bg-stone-200  text-red-700"
            aria-label="Filter News By Category"
          >
            {labelCategory.map((item) => {
              return <option value={item.value}>{item.label}</option>
            })}
          </select>
          <span className="focus"></span>
        </div>
      </div>
      {!isLoading && data.length === 0 && (
        <div class="flex items-center justify-center mt-20">
          <div class="relative">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"></div>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-xl"></div>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl"></div>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white">
              <div class="p-8">
                <svg
                  class="animate-spin -ml-1 mr-3 h-16 w-16 text-pink-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm12 0l3 2.647A7.962 7.962 0 0120 12h-4zm-8-10v-4H8v4H4v2h4v4h2v-4h4v-2h-4z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
      {data.length !== 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {news.map((image) => (
            <div>
              <div
                key={image.id}
                image={image}
                coba={image.image}
                className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
              >
                <div className="absolute top-0 object-cover bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900">
                  <img
                    src={image.image}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                  <a
                    rel="noopener noreferrer"
                    href={`/${image.id}`}
                    className="px-3 py-2 text-md font-semibold tracking-wider uppercase text-gray-100 bgundefined"
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
                    className="font-bold text-2xl hover:underline text-gray-100"
                  >
                    {' '}
                    {image.headline}
                  </a>
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
