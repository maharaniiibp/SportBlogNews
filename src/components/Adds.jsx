import React from 'react'

function Adds() {
  return (
    <>
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col mx-auto lg:flex-row my-28">
		<div className=" w-full lg:w-1/3 lg:ml-30" style={{backgroundImage:" url('https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta9d7bcdd0fb454e0/640440e0e785912a31cd315e/arsenal_nelson.jpg?quality=60&format=pjpg&auto=webp&width=1000')", backgroundPosition: "center center;", backgroundSize: "cover;"}}></div>
		<div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 dark:text-violet-400">
				<path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path> 
			</svg>
			<h2 className="text-3xl font-semibold leading-none">Menang 3 Kali Lagi, Arsenal Juara Liga Primer Inggris!</h2>
			<p className="mt-4 mb-8 text-sm"> Arsenal menunjukkan mental monster mereka saat comeback dramatis dari ketertinggal 2-0 untuk menang 3-2 atas Bournemouth.Legendar Arsenal Paul Merson yakin bekas timnya itu akan keluar sebagai juara Liga Primer Inggris jika sukses memenangkan tiga laga selanjutnya.</p>
            <a rel="noopener noreferrer" href="https://www.goal.com/id/berita/arsenal-juara-liga-primer-inggris-bournemouth/blt72e96168a5548364" className='px-2 py-3 text-lg font-medium '><button className='bg-red-700 rounded-3xl px-10 py-3 hover:bg-grey hover:bg-stone-500 text-white'>Simak Lebih lanjut</button></a>
		</div>
	</div>
</section>
    </>
  )
}

export default Adds;