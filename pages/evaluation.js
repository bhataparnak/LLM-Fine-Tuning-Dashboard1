"use client";
import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function Evaluation() {
  const [selectedModel, setSelectedModel] = useState('all')
  
  const evaluationModels = [
    { id: 'all', name: 'All Models' },
    { id: 'customer-support-llama-ft', name: 'Customer Support-LLaMA-FT' },
    { id: 'legal-mistral-ft', name: 'Legal-Mistral-FT' },
    { id: 'medical-mpt-ft', name: 'Medical-MPT-FT' },
  ]
  
  const metrics = [
    {
      name: 'Customer Support-LLaMA-FT',
      accuracy: 89,
      rouge: 76,
      bleurt: 85,
      latency: 120,
    },
    {
      name: 'Legal-Mistral-FT',
      accuracy: 92,
      rouge: 81,
      bleurt: 88,
      latency: 150,
    },
    {
      name: 'Medical-MPT-FT',
      accuracy: 85,
      rouge: 73,
      bleurt: 79,
      latency: 110,
    }
  ]
  
  const sampleExamples = [
    {
      id: 1,
      input: "What's your return policy for electronics?",
      reference: "Our electronics return policy allows returns within 30 days with receipt for a full refund. Items must be in original packaging and undamaged.",
      predictions: [
        {
          model: "Customer Support-LLaMA-FT",
          output: "For electronics, we offer a 30-day return window. You'll need to have your receipt, and the item must be in its original packaging without damage to qualify for a full refund.",
          scores: { accuracy: 95, rouge: 87, bleurt: 92 }
        },
        {
          model: "Base LLaMA 2 7B",
          output: "You can return electronics within 30 days for a refund.",
          scores: { accuracy: 78, rouge: 65, bleurt: 70 }
        }
      ]
    }
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Model Evaluation</h1>
        <button className="btn btn-primary">New Evaluation</button>
      </div>

      <div className="card mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Performance Metrics</h2>
          <select 
            className="border border-gray-300 rounded-md p-2"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
          >
            {evaluationModels.map(model => (
              <option key={model.id} value={model.id}>{model.name}</option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg h-64">
            <h3 className="text-lg font-medium mb-2">Accuracy & Quality Metrics</h3>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart data={metrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="accuracy" fill="#3EB6F2" name="Accuracy (%)" />
                <Bar dataKey="rouge" fill="#1BD7C8" name="ROUGE Score" />
                <Bar dataKey="bleurt" fill="#0063A3" name="BLEURT Score" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg h-64">
            <h3 className="text-lg font-medium mb-2">Latency (ms)</h3>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart data={metrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="latency" fill="#FF6B6B" name="Latency (ms)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Sample Evaluation Examples</h2>
        
        {sampleExamples.map(example => (
          <div key={example.id} className="border rounded-lg p-4 mb-4">
            <div className="mb-4">
              <h3 className="text-md font-medium mb-1">Input</h3>
              <p className="bg-gray-50 p-3 rounded">{example.input}</p>
            </div>
            
            <div className="mb-4">
              <h3 className="text-md font-medium mb-1">Reference Output</h3>
              <p className="bg-gray-50 p-3 rounded">{example.reference}</p>
            </div>
            
            <h3 className="text-md font-medium mb-2">Model Predictions</h3>
            
            <div className="space-y-4">
              {example.predictions.map((prediction, idx) => (
                <div key={idx} className="bg-gray-50 p-3 rounded">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">{prediction.model}</h4>
                    <div className="flex space-x-3">
                      <span className="text-sm">
                        <span className="font-medium">Accuracy:</span> {prediction.scores.accuracy}%
                      </span>
                      <span className="text-sm">
                        <span className="font-medium">ROUGE:</span> {prediction.scores.rouge}
                      </span>
                      <span className="text-sm">
                        <span className="font-medium">BLEURT:</span> {prediction.scores.bleurt}
                      </span>
                    </div>
                  </div>
                  <p>{prediction.output}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}