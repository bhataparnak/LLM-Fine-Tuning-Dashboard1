import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* <img src="/api/placeholder/48/48" alt="H2O.ai Logo" className="h-8 w-auto" /> */}
              <span className="ml-2 text-xl font-bold text-h2o-blue">Forezy.ai LLM Studio</span>
            </Link> 
          </div>
          
          <div className="flex items-center">
            <button className="btn btn-primary mr-4">New Project</button>
            {/* <img src="/api/placeholder/40/40" alt="User" className="h-8 w-8 rounded-full" /> */}
          </div>
        </div>
      </div>
    </header>
  )
}