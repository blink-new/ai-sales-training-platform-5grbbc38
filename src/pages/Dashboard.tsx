import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Target, 
  Clock, 
  Users, 
  PlayCircle, 
  Award,
  ArrowRight,
  Mic,
  BookOpen,
  BarChart3
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Progress } from '../components/ui/progress'
import { Link } from 'react-router-dom'

const quickStats = [
  {
    title: 'Training Progress',
    value: '78%',
    change: '+12%',
    icon: TrendingUp,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Sessions This Week',
    value: '12',
    change: '+3',
    icon: Target,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100'
  },
  {
    title: 'Study Time',
    value: '4.2h',
    change: '+0.5h',
    icon: Clock,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Peer Ranking',
    value: '#5',
    change: '↑2',
    icon: Users,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  }
]

const recentActivities = [
  {
    type: 'completion',
    title: 'Completed "Objection Handling Mastery"',
    description: 'Scored 92% on the final assessment',
    time: '2 hours ago',
    points: '+150 XP'
  },
  {
    type: 'practice',
    title: 'Practiced Cold Calling Simulation',
    description: 'AI Coach rated your tone and pacing',
    time: '1 day ago',
    points: '+80 XP'
  },
  {
    type: 'community',
    title: 'Shared best practice in Community',
    description: 'Your tip got 12 likes from peers',
    time: '2 days ago',
    points: '+50 XP'
  }
]

const upcomingChallenges = [
  {
    title: 'Weekly Sales Sprint',
    description: 'Complete 5 role-play scenarios',
    progress: 60,
    deadline: '3 days left',
    reward: '500 XP + Badge'
  },
  {
    title: 'Negotiation Mastery',
    description: 'Master advanced negotiation techniques',
    progress: 25,
    deadline: '1 week left',
    reward: '750 XP + Certificate'
  }
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold gradient-text">
          Welcome back, Sarah! 🚀
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready to craft your next conversion? Your journey continues here.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {quickStats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <Badge variant="secondary" className="text-xs">
                      {stat.change} this week
                    </Badge>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PlayCircle className="w-5 h-5 text-purple-600" />
                <span>Quick Actions</span>
              </CardTitle>
              <CardDescription>
                Jump into your training with these popular activities
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/coach">
                <Button variant="outline" className="h-24 flex-col space-y-2 w-full border-purple-200 hover:bg-purple-100/50">
                  <Mic className="w-8 h-8 text-purple-600" />
                  <span>AI Call Coach</span>
                </Button>
              </Link>
              <Link to="/training">
                <Button variant="outline" className="h-24 flex-col space-y-2 w-full border-teal-200 hover:bg-teal-100/50">
                  <BookOpen className="w-8 h-8 text-teal-600" />
                  <span>Training Modules</span>
                </Button>
              </Link>
              <Link to="/analytics">
                <Button variant="outline" className="h-24 flex-col space-y-2 w-full border-purple-200 hover:bg-purple-100/50">
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                  <span>View Analytics</span>
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest learning achievements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-purple-50/50 transition-colors"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 animate-pulse"></div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                      <Badge variant="secondary" className="text-xs bg-teal-100 text-teal-800">
                        {activity.points}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <CardTitle>Sales Expert</CardTitle>
              <CardDescription>Level 8 • 3,150 XP</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress to Level 9</span>
                  <span>150/1000 XP</span>
                </div>
                <Progress value={15} className="h-2" />
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-teal-500 text-white">
                View All Achievements
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0">
            <CardHeader>
              <CardTitle>Active Challenges</CardTitle>
              <CardDescription>Complete these to earn big rewards</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingChallenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="space-y-3 p-3 rounded-lg border border-dashed border-purple-200/50 hover:border-purple-300 transition-colors"
                >
                  <div className="space-y-1">
                    <h4 className="font-medium text-sm">{challenge.title}</h4>
                    <p className="text-xs text-muted-foreground">{challenge.description}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>{challenge.progress}% complete</span>
                      <span className="text-orange-600">{challenge.deadline}</span>
                    </div>
                    <Progress value={challenge.progress} className="h-1.5" />
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs border-teal-200 text-teal-700">
                      {challenge.reward}
                    </Badge>
                    <Button size="sm" variant="ghost" className="text-xs h-6 px-2 text-purple-600 hover:bg-purple-100">
                      Continue
                    </Button>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}