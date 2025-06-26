import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  MessageCircle, 
  ThumbsUp, 
  Award,
  TrendingUp,
  Search,
  Share2,
  Bookmark,
  MoreVertical
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Avatar, AvatarFallback } from '../components/ui/avatar'
import { Input } from '../components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'

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
    trending: true
  },
  {
    id: 2,
    author: 'Sarah Williams',
    avatar: 'SW',
    title: 'My cold email template that gets 42% response rate',
    content: 'After testing dozens of variations, this template consistently outperforms. The key is personalization in the first line...',
    category: 'Prospecting',
    likes: 89,
    comments: 23,
    time: '5 hours ago',
    trending: true
  },
  {
    id: 3,
    author: 'David Park',
    avatar: 'DP',
    title: 'Closing deals faster with the 2-call close method',
    content: "Instead of the traditional 3-4 call process, I've developed a framework that helps close deals in just 2 calls...",
    category: 'Closing',
    likes: 56,
    comments: 18,
    time: '1 day ago',
    trending: false
  }
]

const topContributors = [
  { name: 'Emma Thompson', points: 2340, badge: 'Elite', avatar: 'ET' },
  { name: 'James Wilson', points: 1890, badge: 'Expert', avatar: 'JW' },
  { name: 'Lisa Chen', points: 1650, badge: 'Expert', avatar: 'LC' },
  { name: 'Robert Kumar', points: 1420, badge: 'Pro', avatar: 'RK' }
]

const upcomingEvents = [
  {
    title: 'Live Q&A: Enterprise Sales Strategies',
    host: 'John Maxwell',
    date: 'Tomorrow, 2:00 PM EST',
    attendees: 156
  },
  {
    title: 'Workshop: AI Tools for Sales',
    host: 'Tech Sales Academy',
    date: 'Friday, 3:00 PM EST',
    attendees: 89
  }
]

export default function Community() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold gradient-text">Sales Community</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Connect, share, and learn from top sales professionals worldwide
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4 items-center"
      >
        <div className="relative flex-1 w-full sm:max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search discussions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-purple-200 focus:border-purple-500 focus:ring-purple-500"
          />
        </div>
        <Button className="bg-gradient-to-r from-purple-500 to-teal-500 text-white hover:from-purple-600 hover:to-teal-600">
          <MessageCircle className="w-4 h-4 mr-2" />
          Start Discussion
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          <Tabs defaultValue="trending" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-lg">
              <TabsTrigger value="trending" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md">
                <TrendingUp className="w-4 h-4 mr-2" />
                Trending
              </TabsTrigger>
              <TabsTrigger value="recent" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md">
                Recent
              </TabsTrigger>
              <TabsTrigger value="following" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md">
                Following
              </TabsTrigger>
            </TabsList>

            <TabsContent value="trending" className="space-y-4">
              {discussions.map((discussion, index) => (
                <motion.div
                  key={discussion.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback className="bg-gradient-to-br from-purple-500 to-teal-500 text-white">
                              {discussion.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{discussion.author}</p>
                            <p className="text-sm text-muted-foreground">{discussion.time}</p>
                          </div>
                        </div>
                        {discussion.trending && (
                          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold mb-2">{discussion.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{discussion.content}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline" className="border-purple-200 text-purple-600">
                            {discussion.category}
                          </Badge>
                          <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-purple-600 transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            <span>{discussion.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-purple-600 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            <span>{discussion.comments}</span>
                          </button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Share2 className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="recent" className="space-y-4">
              <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0">
                <CardContent className="p-8 text-center">
                  <Users className="w-12 h-12 text-purple-300 mx-auto mb-4" />
                  <p className="text-muted-foreground">Recent discussions will appear here</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="following" className="space-y-4">
              <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0">
                <CardContent className="p-8 text-center">
                  <Users className="w-12 h-12 text-purple-300 mx-auto mb-4" />
                  <p className="text-muted-foreground">Follow members to see their discussions here</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
                <Award className="w-5 h-5 text-yellow-500" />
                <span>Top Contributors</span>
              </CardTitle>
              <CardDescription>This month's most helpful members</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {topContributors.map((contributor, index) => (
                <motion.div
                  key={contributor.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-teal-500 text-white text-xs">
                        {contributor.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{contributor.name}</p>
                      <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-800">
                        {contributor.badge}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-teal-600">{contributor.points} pts</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span>Upcoming Events</span>
              </CardTitle>
              <CardDescription>Join live sessions with experts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="space-y-2 p-3 rounded-lg border border-dashed border-purple-200 hover:border-purple-300 transition-colors"
                >
                  <h4 className="font-medium text-sm">{event.title}</h4>
                  <p className="text-xs text-muted-foreground">Hosted by {event.host}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-orange-600">{event.date}</span>
                    <Badge variant="secondary" className="text-xs bg-teal-100 text-teal-800">
                      {event.attendees} attending
                    </Badge>
                  </div>
                  <Button size="sm" variant="outline" className="w-full border-purple-200 hover:bg-purple-100/50 text-xs">
                    Register
                  </Button>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}