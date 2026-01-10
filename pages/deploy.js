import React, { useState } from 'react'

export default function Deploy() {
  const [deployments, setDeployments] = useState([
    { 
      id: 1, 
      name: 'Customer Support Assistant', 
      model: 'Customer Support-LLaMA-FT', 
      status: 'Active',
      endpoint: 'api.forezy.ai/llm/cs-assistant',
      requests: '15.2k',
      latency: '145ms',
      createdAt: '2025-04-15'
    },
    { 
      id: 2, 
      name: 'Legal Document Analyzer', 
      model: 'Legal-Mistral-FT', 
      status: 'Active',
      endpoint: 'api.forezy.ai/llm/legal-analyzer',
      requests: '8.7k',
      latency: '178ms',
      createdAt: '2025-04-10'
    }
  ])

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Model Deployment</h1>
        <button className="btn btn-primary">Deploy Model</button>
      </div>

      <div className="card mb-6">
        <h2 className="text-xl font-semibold mb-4">Active Deployments</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">API Endpoint</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requests</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Latency</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {deployments.map((deployment) => (
                <tr key={deployment.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{deployment.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deployment.model}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                      {deployment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-mono">{deployment.endpoint}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deployment.requests}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deployment.latency}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deployment.createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-h2o-blue hover:text-h2o-light-blue mr-3">Settings</button>
                    <button className="text-red-600 hover:text-red-800">Stop</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Deploy New Model</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Deployment Name
              </label>
              <input
                type="text"
                placeholder="Enter deployment name"
                className="input"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Model to Deploy
              </label>
              <select className="select">
                <option value="">Select a model</option>
                <option value="customer-support-llama-ft">Customer Support-LLaMA-FT</option>
                <option value="legal-mistral-ft">Legal-Mistral-FT</option>
                <option value="medical-mpt-ft">Medical-MPT-FT</option>
              </select>
            </div>
          </div>
          
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Deployment Environment
              </label>
              <select className="select">
                <option value="cloud">Cloud</option>
                <option value="on-premise">On-premise</option>
                <option value="edge">Edge Device</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Instance Type
              </label>
              <select className="select">
                <option value="cpu-small">CPU - Small (2 vCPU, 8GB RAM)</option>
                <option value="cpu-medium">CPU - Medium (4 vCPU, 16GB RAM)</option>
                <option value="gpu-small">GPU - Small (1 GPU, 16GB VRAM)</option>
                <option value="gpu-large">GPU - Large (4 GPU, 80GB VRAM)</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4 mt-4">
          <h3 className="text-lg font-medium mb-2">Advanced Settings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Max Batch Size
              </label>
              <input
                type="text"
                placeholder="4"
                className="input"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantization
              </label>
              <select className="select">
                <option value="none">None</option>
                <option value="int8">INT8</option>
                <option value="int4">INT4</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Auto-scaling
              </label>
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="autoscaling"
                  className="h-4 w-4 text-h2o-blue"
                />
                <label htmlFor="autoscaling" className="ml-2 text-sm text-gray-700">
                  Enable auto-scaling
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Authentication
              </label>
              <select className="select">
                <option value="api-key">API Key</option>
                <option value="oauth">OAuth 2.0</option>
                <option value="none">No Authentication</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <button className="btn btn-secondary mr-2">Cancel</button>
          <button className="btn btn-primary">Deploy Model</button>
        </div>
      </div>
    </div>
  )
}
              