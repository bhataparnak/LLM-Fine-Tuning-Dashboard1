"use client";
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'

export default function Data() {
  const [datasets, setDatasets] = useState([
    { 
      id: 1, 
      name: 'Customer Support Queries', 
      format: 'CSV', 
      records: 12500, 
      size: '45MB',
      dateAdded: '2025-04-12'
    },
    { 
      id: 2, 
      name: 'Legal Contract Data', 
      format: 'JSON', 
      records: 3200, 
      size: '18MB',
      dateAdded: '2025-04-05'
    },
    { 
      id: 3, 
      name: 'Medical QA Pairs', 
      format: 'JSONL', 
      records: 8750, 
      size: '32MB',
      dateAdded: '2025-03-28'
    }
  ])

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'text/csv': ['.csv'],
      'application/json': ['.json', '.jsonl']
    },
    onDrop: acceptedFiles => {
      console.log('Files dropped:', acceptedFiles)
      // Handle file processing here
    }
  })

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Data Management</h1>
        <button className="btn btn-primary">Process Dataset</button>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-4">Upload Dataset</h2>
        <div 
          {...getRootProps()} 
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-h2o-blue"
        >
          <input {...getInputProps()} />
          <div className="text-gray-500">
            <p className="text-lg mb-2">Drag & drop files here, or click to select files</p>
            <p className="text-sm">Supported formats: CSV, JSON, JSONL</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Available Datasets</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Format</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Records</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Added</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {datasets.map((dataset) => (
                <tr key={dataset.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{dataset.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dataset.format}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dataset.records.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dataset.size}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dataset.dateAdded}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-h2o-blue hover:text-h2o-light-blue mr-4">View</button>
                    <button className="text-red-600 hover:text-red-800">Delete</button>
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