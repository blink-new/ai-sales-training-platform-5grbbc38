import React from 'react'
import { Bell } from 'lucide-react'

interface HeaderProps {
  currentUser: {
    name: string
    level: number
    xp: number
    avatar: string
  }
}

export const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Crafted for Conversion" 
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#dashboard" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Dashboard
            </a>
            <a href="#training" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Training
            </a>
            <a href="#coach" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              AI Coach
            </a>
            <a href="#analytics" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Analytics
            </a>
            <a href="#community" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Community
            </a>
          </nav>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {/* Level Badge */}
            <div className="bg-gradient-to-r from-purple-600 to-teal-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              Level {currentUser.level}
            </div>
            
            {/* XP Progress */}
            <div className="hidden sm:flex items-center space-x-2">
              <span className="text-sm text-gray-600">{currentUser.xp} XP</span>
              <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-teal-400 to-purple-500 rounded-full transition-all duration-300"
                  style={{ width: `${(currentUser.xp % 1000) / 10}%` }}
                />
              </div>
            </div>

            {/* Notifications */}
            <button className="relative p-2 text-gray-400 hover:text-purple-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-teal-500 rounded-full"></span>
            </button>

            {/* User Avatar */}
            <div className="flex items-center space-x-2">
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name}
                className="w-8 h-8 rounded-full border-2 border-purple-200"
              />
              <span className="hidden sm:block text-sm font-medium text-gray-700">
                {currentUser.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}