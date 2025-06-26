import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  ThumbsUp, 
  MessageCircle, 
  TrendingUp,
  Award,
  Share2,
  Bookmark,
  Hash,
  Plus
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Avatar, AvatarFallback } from '../components/ui/avatar'
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs'

const discussions = [
  {
    id: 1,
    author: 'Michael Chen',
    avatar: 'MC',
    title: 'Tips for handling price objections in SaaS sales',
    content: "I've found that reframing the conversation around ROI works better than defending the price. Here's my 3-step approach...",
    category: 'Objection Handling',
    likes: 34,
    comments: 12,
    time: '2 hours ago',
    tags: ['saas', 'pricing', 'objections']
  },
  {
    id: 2,
    author: 'Sarah Johnson',
    avatar: 'SJ',
    title: 'How I increased my cold call success rate by 40%',
    content: 'The secret was in the opening line. Instead of asking for time, I started with a specific value prop...',
    category: 'Cold Calling',
    likes: 56,
    comments: 23,
    time: '5 hours ago',
    tags: ['coldcalling', 'prospecting', 'tips']
  },
  {
    id: 3,
    author: 'David Park',
    avatar: 'DP',
    title: 'Enterprise deal closed: lessons learned',
    content: 'Just closed a 6-figure enterprise deal after 8 months. Here are the key things that made the difference...',
    category: 'Success Stories',
    likes: 89,
    comments: 31,
    time: '1 day ago',
    tags: ['enterprise', 'success', 'closing']
  }
]

const topContributors = [
  { name: 'Emma Wilson', points: 2450, badge: 'Expert', avatar: 'EW' },
  { name: 'James Lee', points: 2280, badge: 'Expert', avatar: 'JL' },
  { name: 'Lisa Zhang', points: 1950, badge: 'Advanced', avatar: 'LZ' },
  { name: 'Tom Brown', points: 1720, badge: 'Advanced', avatar: 'TB' },
  { name: 'Ana Garcia', points: 1450, badge: 'Intermediate', avatar: 'AG' }
]

const trendingTopics = [
  { name: 'AI in Sales', posts: 45, growth: '+23%' },
  { name: 'Remote Selling', posts: 38, growth: '+18%' },
  { name: 'LinkedIn Strategies', posts: 32, growth: '+15%' },
  { name: 'Email Templates', posts: 28, growth: '+12%' },
  { name: 'Demo Best Practices', posts: 24, growth: '+10%' }
]

export default function Community() {
  const [activeTab, setActiveTab] = useState('discussions')

  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold gradient-text">Sales Community</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Connect with fellow sales professionals, share insights, and learn from real experiences
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4 items-center justify-between"
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
          <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-lg">
            <TabsTrigger value="discussions" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md">
              Discussions
            </TabsTrigger>
            <TabsTrigger value="trending" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md">
              Trending
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md">
              Leaderboard
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        <Button className="bg-gradient-to-r from-purple-500 to-teal-500 text-white shadow-md hover:from-purple-600 hover:to-teal-600">
          <Plus className="w-4 h-4 mr-2" />
          New Discussion
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          {activeTab === 'discussions' && (
            <div className="space-y-4">
              {discussions.map((discussion, index) => (
                <motion.div
                  key={discussion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gradient-to-br from-purple-500 to-teal-500 text-white">
                            {discussion.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <h3 className="font-semibold text-lg hover:text-purple-600 cursor-pointer transition-colors">
                                {discussion.title}
                              </h3>
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <span>{discussion.author}</span>
                                <span>•</span>
                                <span>{discussion.time}</span>
                                <span>•</span>
                                <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-800">
                                  {discussion.category}
                                </Badge>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-600">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          <p className="text-gray-600 line-clamp-2">
                            {discussion.content}
                          </p>
                          
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center space-x-4 text-sm">
                              <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600 transition-colors">
                                <ThumbsUp className="w-4 h-4" />
                                <span>{discussion.likes}</span>
                              </button>
                              <button className="flex items-center space-x-1 text-gray-500 hover:text-teal-600 transition-colors">
                                <MessageCircle className="w-4 h-4" />
                                <span>{discussion.comments}</span>
                              </button>
                              <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600 transition-colors">
                                <Share2 className="w-4 h-4" />
                                <span>Share</span>
                              </button>
                            </div>
                            <div className="flex items-center space-x-1">
                              {discussion.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs border-teal-200 text-teal-700">
                                  <Hash className="w-3 h-3 mr-1" />
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'trending' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {trendingTopics.map((topic, index) => (
                <motion.div
                  key={topic.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-lg">{topic.name}</h4>
                          <p className="text-sm text-muted-foreground">{topic.posts} posts this week</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {topic.growth}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'leaderboard' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {topContributors.map((contributor, index) => (
                <motion.div
                  key={contributor.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-purple-500 to-teal-500 text-white rounded-full font-bold">
                            {index + 1}
                          </div>
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className="bg-gradient-to-br from-purple-400 to-teal-400 text-white">
                              {contributor.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">{contributor.name}</h4>
                            <Badge variant="outline" className="text-xs border-purple-200 text-purple-600">
                              {contributor.badge}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-purple-600">{contributor.points}</p>
                          <p className="text-xs text-muted-foreground">points</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span>Community Stats</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Active Members</span>
                  <span className="font-bold text-lg">1,284</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Discussions Today</span>
                  <span className="font-bold text-lg">45</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Solutions Shared</span>
                  <span className="font-bold text-lg">892</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Avg Response Time</span>
                  <span className="font-bold text-lg">23m</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-teal-600" />
                <span>Your Contribution</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-purple-600">450</div>
                <div className="text-sm text-muted-foreground">Community Points</div>
                <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                  Rising Star
                </Badge>
              </div>
              
              <div className="space-y-3 pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <span>Posts Created</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Solutions Provided</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Likes Received</span>
                  <span className="font-medium">124</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full border-purple-200 hover:bg-purple-100/50">
                View Your Profile
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}