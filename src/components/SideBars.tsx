import React from 'react'
//THIS IS  FOR MY REFERENCE LAYOUT TO DIVIDE LAYOUT INTO DIFFERENT SECTIONS
export default function SideBars():JSX.Element {
  return (
    <div className="parent md:h-screen md:grid md:grid-cols-6">
      <section className="sidebar bg-green-400 md:col-span-1">Sidebar</section>
      <main className="main bg-blue-400 md:col-span-5">Main</main>
</div>
  )
}
