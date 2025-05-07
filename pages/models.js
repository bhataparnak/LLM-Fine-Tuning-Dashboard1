"use client";
import React, { useState } from 'react'

export default function Models() {
  const [models, setModels] = useState([
    { 
      id: 1, 
      name: 'LLaMA 2 7B', 
      type: 'Base Model', 
      parameters: '7B', 
      status: 'Available',
      lastUsed: '2025-04-20'
    },
    { 
      id: 2, 
      name: 'Mistral 7B', 
      type: 'Base Model', 
      parameters: '7B', 
      status: 'Available',
      lastUsed: '2025-04-18'
    },
    { 
      id: 3, 
      name: 'MPT 7B', 
      type: 'Base Model', 
      parameters: '7B', 
      status: 'Available',
      lastUsed: '2025-04-10'
    },
    { 
      id: 4, 
      name: 'Customer Support-LLaMA-FT', 
      type: 'Fine-tuned', 
      parameters: '7B', 
      status: 'Available',
      lastUsed: '2025-04-25'
    }
  ])

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Model Repository</h1>
        <div>
          <button className="btn btn-secondary mr-2">Import Model</button>
          <button className="btn btn-primary">New Fine-tuning</button>
        </div>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-4">Available Models</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search models..."
            className="input"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parameters</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Used</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {models.map((model) => (
                <tr key={model.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{model.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{model.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{model.parameters}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      model.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {model.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{model.lastUsed}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-h2o-blue hover:text-h2o-light-blue mr-3">Details</button>
                    {model.type === 'Fine-tuned' && (
                      <button className="text-red-600 hover:text-red-800">Delete</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
