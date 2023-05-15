import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

function getFood(id) {
  const [data, setData] = useState([])

  const url = 'https://api.jsonbin.io/v3/b/64609e309d312622a35ddd49'
  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch(url)
        const result = await data.json()
        console.log(result.record)
        setData(result.record)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])
  console.log('id = ' + id)
  const item = data.find((e) => e.id === Number(id))
  console.log('item = ' + item)
  if (typeof item === 'object') {
    return item
  }
  return {}
}

function Detail() {
  const router = useRouter()
  const { slug } = router.query
  console.log('slug = ' + slug)
  const food = getFood(slug)

  if (Object.keys(food).length === 1) {
    return <div>Item not found</div>
  }
  return (
    <>
      <div className="items-center container lg:max-w-screen-lg mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-12">
          {/* News's details */}
          <div className="flex-1 items-center max-w border border-opacity-50 rounded-md shadow-lg p-6 ">
            {/* News's image */}
            <div className="mx-auto relative md:w-96 md:h-96 ">
              <img
                src={food.image}
                alt={food.name}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h2 className="text-3xl font-semibold items-center mx-auto">
              {food.headline}
            </h2>
            <p className="mt-6 w-7/8 truncate">
              Source :{' '}
              <a
                href={food.url}
                target="_blank"
                className="italic text-black hover:underline mx-auto"
              >
                {food.url}
              </a>
            </p>
            <p className="mt-4">{food.desc}</p>
            <div className="mt-4">
              <p className="mt-4">{food.date}</p>
              <div className="mt-4 flex items-center space-x-3"></div>
              <div className="flex flex-col">
                <div className="w-24 mt-4 border rounded py-2 px-8 bg-orange-900 hover:text-gray-600 hover:bg-gray-100 border-gray-600 hover:border-gray-600 focus:ring-4 focus:ring-opacity-50 focus:ring-gray-500 text-white transition-colors disabled:cursor-not-allowed flex flex-row">
                  <Link href="/News">Back</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Detail