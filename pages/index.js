"use client";
import React from 'react'
import Link from 'next/link'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function Dashboard() {
  const projectStats = [
    { name: 'Active Projects', count: 4 },
    { name: 'Models Fine-tuned', count: 12 },
    { name: 'Datasets', count: 8 },
    { name: 'Deployments', count: 3 },
  ]

  const recentProjects = [
    { id: 1, name: 'Customer Support Bot', model: 'LLaMA 2', status: 'Training', progress: 65 },
    { id: 2, name: 'Legal Document Analysis', model: 'Mistral 7B', status: 'Completed', progress: 100 },
    { id: 3, name: 'Medical QA System', model: 'MPT 7B', status: 'Evaluating', progress: 85 },
  ]

  const performanceData = [
    { name: 'Project 1', accuracy: 78, loss: 0.34 },
    { name: 'Project 2', accuracy: 92, loss: 0.12 },
    { name: 'Project 3', accuracy: 85, loss: 0.23 },
    { name: 'Project 4', accuracy: 88, loss: 0.18 },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <Link href="/fine-tuning" className="btn btn-primary">
          Start Fine-tuning
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {projectStats.map((stat) => (
          <div key={stat.name} className="card flex items-center">
            <div className="rounded-full bg-h2o-light-blue bg-opacity-20 p-3 mr-4">
              <span className="text-xl text-h2o-blue">📊</span>
            </div>
            <div>
              <h3 className="text-gray-500 text-sm">{stat.name}</h3>
              <p className="text-2xl font-bold">{stat.count}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project.id} className="border-b pb-4 last:border-0 last:pb-0">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{project.name}</h3>
                  <span className="text-sm text-gray-500">{project.model}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">{project.status}</span>
                  <span className="text-sm font-medium">{project.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-bar-fill" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Performance Metrics</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="accuracy" fill="#3EB6F2" name="Accuracy (%)" />
                <Bar dataKey="loss" fill="#1BD7C8" name="Loss" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}