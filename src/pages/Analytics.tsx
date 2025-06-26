import { motion } from 'framer-motion'
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Clock, 
  Trophy,
  Calendar,
  Users,
  Zap
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Progress } from '../components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const performanceData = [
  { month: 'Jan', score: 65, sessions: 8 },
  { month: 'Feb', score: 72, sessions: 12 },
  { month: 'Mar', score: 78, sessions: 15 },
  { month: 'Apr', score: 85, sessions: 18 },
  { month: 'May', score: 89, sessions: 22 }
]

const skillBreakdown = [
  { skill: 'Prospecting', current: 92, target: 95, improvement: '+8%' },
  { skill: 'Cold Calling', current: 85, target: 90, improvement: '+12%' },
  { skill: 'Objection Handling', current: 78, target: 85, improvement: '+15%' },
  { skill: 'Negotiation', current: 71, target: 80, improvement: '+18%' },
  { skill: 'Closing', current: 88, target: 92, improvement: '+5%' }
]

const weeklyActivity = [
  { day: 'Mon', sessions: 3, time: 45 },
  { day: 'Tue', sessions: 2, time: 30 },
  { day: 'Wed', sessions: 4, time: 60 },
  { day: 'Thu', sessions: 1, time: 15 },
  { day: 'Fri', sessions: 5, time: 75 },
  { day: 'Sat', sessions: 2, time: 30 },
  { day: 'Sun', sessions: 1, time: 20 }
]

export default function Analytics() {
  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold gradient-text">Performance Analytics</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Deep insights into your learning progress and skill development
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <Card className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border-0">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Overall Score</p>
              <p className="text-3xl font-bold text-purple-600">89.5</p>
              <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                +5.2 this month
              </Badge>
            </div>
            <div className="p-3 rounded-full bg-purple-100">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border-0">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Sessions</p>
              <p className="text-3xl font-bold text-teal-600">67</p>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                22 this month
              </Badge>
            </div>
            <div className="p-3 rounded-full bg-teal-100">
              <Target className="w-6 h-6 text-teal-600" />
            </div>
          </div>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border-0">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Study Time</p>
              <p className="text-3xl font-bold text-purple-600">24.5h</p>
              <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                8.2h this month
              </Badge>
            </div>
            <div className="p-3 rounded-full bg-purple-100">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border-0">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Rank</p>
              <p className="text-3xl font-bold text-teal-600">#5</p>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                ↑2 positions
              </Badge>
            </div>
            <div className="p-3 rounded-full bg-teal-100">
              <Trophy className="w-6 h-6 text-teal-600" />
            </div>
          </div>
        </Card>
      </motion.div>

      <Tabs defaultValue="progress" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto bg-white/80 backdrop-blur-sm border border-purple-200 rounded-lg">
          <TabsTrigger value="progress" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md">Progress</TabsTrigger>
          <TabsTrigger value="skills" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md">Skills</TabsTrigger>
          <TabsTrigger value="activity" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="progress" className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  <span>Performance Trend</span>
                </CardTitle>
                <CardDescription>
                  Your learning progress over the last 5 months
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="score" 
                        stroke="#8b5cf6" 
                        strokeWidth={3}
                        dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-teal-600" />
                  <span>Skill Assessment</span>
                </CardTitle>
                <CardDescription>
                  Detailed breakdown of your sales competencies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillBreakdown.map((skill, index) => (
                  <motion.div
                    key={skill.skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h4 className="font-medium">{skill.skill}</h4>
                        <p className="text-sm text-muted-foreground">
                          Current: {skill.current}% • Target: {skill.target}%
                        </p>
                      </div>
                      <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                        {skill.improvement}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <Progress value={skill.current} className="h-2 bg-purple-100" indicatorClassName="bg-gradient-to-r from-purple-500 to-teal-500" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Beginner</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span>Weekly Activity</span>
                </CardTitle>
                <CardDescription>
                  Your training sessions and time spent this week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyActivity}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="sessions" fill="#14b8a6" radius={4} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <Card className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border-0 text-center">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">18</p>
              <p className="text-sm text-muted-foreground">Sessions This Week</p>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border-0 text-center">
              <Clock className="w-8 h-8 text-teal-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">4.5h</p>
              <p className="text-sm text-muted-foreground">Total Practice Time</p>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border-0 text-center">
              <Trophy className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">92%</p>
              <p className="text-sm text-muted-foreground">Average Score</p>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}