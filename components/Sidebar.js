import React from 'react'
import Link from 'next/link'

export default function Sidebar() {
  const navigation = [
    { name: 'Dashboard', href: '/', icon: '📊' },
    { name: 'Data', href: '/data', icon: '📁' },
    { name: 'Models', href: '/models', icon: '🧠' },
    { name: 'Fine-tuning', href: '/fine-tuning', icon: '⚙️' },
    { name: 'Evaluation', href: '/evaluation', icon: '📈' },
    { name: 'Deploy', href: '/deploy', icon: '🚀' },
  ]

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-h2o-gray text-white">
        <div className="flex items-center h-16 flex-shrink-0 px-4 bg-h2o-blue">
          <img src="/api/placeholder/40/40" alt="H2O.ai" className="h-8 w-auto" />
          <span className="ml-2 text-xl font-semibold">LLM Studio</span>
        </div>
        <div className="h-0 flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-h2o-blue"
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}