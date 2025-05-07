"use client";
import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function FineTuning() {
  const [activeTab, setActiveTab] = useState('new')
  const [selectedModel, setSelectedModel] = useState('llama2-7b')
  const [selectedDataset, setSelectedDataset] = useState('')
  const [epochs, setEpochs] = useState(3)
  const [batchSize, setBatchSize] = useState(8)
  const [learningRate, setLearningRate] = useState(2e-5)
  
  const baseModels = [
    { id: 'llama2-7b', name: 'LLaMA 2 7B' },
    { id: 'mistral-7b', name: 'Mistral 7B' },
    { id: 'mpt-7b', name: 'MPT 7B' },
  ]
  
  const datasets = [
    { id: 'customer-support', name: 'Customer Support Queries' },
    { id: 'legal-contracts', name: 'Legal Contract Data' },
    { id: 'medical-qa', name: 'Medical QA Pairs' },
  ]
  
  const activeJobs = [
    { 
      id: 1, 
      name: 'Medical QA Tuning', 
      model: 'LLaMA 2 7B', 
      dataset: 'Medical QA Pairs',
      progress: 75,
      timeRemaining: '1h 45m',
      startTime: '2025-04-30 14:30'
    }
  ]
  
  const completedJobs = [
    { 
      id: 2, 
      name: 'Customer Support Bot', 
      model: 'Mistral 7B', 
      dataset: 'Customer Support Queries',
      status: 'Completed',
      completionTime: '2025-04-29 18:15'
    },
    { 
      id: 3, 
      name: 'Legal Document Analysis', 
      model: 'MPT 7B', 
      dataset: 'Legal Contract Data',
      status: 'Completed',
      completionTime: '2025-04-25 09:45'
    }
  ]
  
  const trainingMetrics = [
    { epoch: 1, loss: 1.82, accuracy: 0.65 },
    { epoch: 2, loss: 1.43, accuracy: 0.72 },
    { epoch: 3, loss: 1.21, accuracy: 0.78 },
    { epoch: 4, loss: 1.05, accuracy: 0.82 },
    { epoch: 5, loss: 0.94, accuracy: 0.85 },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Fine-tuning</h1>
      </div>

      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('new')}
              className={`py-4 px-6 font-medium text-sm ${
                activeTab === 'new'
                  ? 'border-b-2 border-h2o-blue text-h2o-blue'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              New Fine-tuning Job
            </button>
            <button
              onClick={() => setActiveTab('active')}
              className={`py-4 px-6 font-medium text-sm ${
                activeTab === 'active'
                  ? 'border-b-2 border-h2o-blue text-h2o-blue'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Active Jobs
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`py-4 px-6 font-medium text-sm ${
                activeTab === 'completed'
                  ? 'border-b-2 border-h2o-blue text-h2o-blue'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Completed Jobs
            </button>
          </nav>
        </div>
      </div>

      {activeTab === 'new' && (
        <div className="card">
          <h2 className="text-xl font-semibold mb-6">Create New Fine-tuning Job</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Adam Epsilon
                </label>
                <input
                  type="text"
                  placeholder="1e-8"
                  className="input"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gradient Accumulation Steps
                </label>
                <input
                  type="text"
                  placeholder="1"
                  className="input"
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mt-6">
            <button className="btn btn-secondary mr-2">Cancel</button>
            <button className="btn btn-primary">Start Fine-tuning</button>
          </div>
        </div>
      )}

      {activeTab === 'active' && (
        <div className="space-y-6">
          {activeJobs.map(job => (
            <div key={job.id} className="card">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{job.name}</h3>
                <div className="flex">
                  <button className="btn btn-secondary mr-2">Pause</button>
                  <button className="btn btn-secondary text-red-600">Stop</button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Base Model</p>
                  <p className="font-medium">{job.model}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Dataset</p>
                  <p className="font-medium">{job.dataset}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Started</p>
                  <p className="font-medium">{job.startTime}</p>
                </div>
              </div>
              
              <div className="mb-2 flex justify-between">
                <span className="text-sm font-medium">Progress: {job.progress}%</span>
                <span className="text-sm text-gray-500">Time remaining: {job.timeRemaining}</span>
              </div>
              
              <div className="progress-bar mb-6">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${job.progress}%` }}
                ></div>
              </div>
              
              <div>
                <h4 className="text-md font-medium mb-2">Training Metrics</h4>
                <div className="bg-gray-50 p-4 rounded-lg h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={trainingMetrics}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="epoch" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Line yAxisId="left" type="monotone" dataKey="loss" stroke="#FF6B6B" name="Loss" />
                      <Line yAxisId="right" type="monotone" dataKey="accuracy" stroke="#4ECDC4" name="Accuracy" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          ))}
          
          {activeJobs.length === 0 && (
            <div className="card text-center py-12">
              <p className="text-gray-500 text-lg">No active fine-tuning jobs.</p>
              <button 
                className="btn btn-primary mt-4"
                onClick={() => setActiveTab('new')}
              >
                Create New Job
              </button>
            </div>
          )}
        </div>
      )}

      {activeTab === 'completed' && (
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Completed Fine-tuning Jobs</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base Model</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dataset</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completed</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {completedJobs.map((job) => (
                  <tr key={job.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.model}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.dataset}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        {job.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{job.completionTime}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-h2o-blue hover:text-h2o-light-blue mr-3">Details</button>
                      <button className="text-h2o-blue hover:text-h2o-light-blue">Deploy</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}