import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  PlayCircle, 
  CheckCircle, 
  Clock, 
  Star, 
  Trophy,
  Filter,
  Search,
  Zap,
  Target,
  Users,
  Brain
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Progress } from '../components/ui/progress'
import { Input } from '../components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'

const trainingModules = [
  {
    id: 1,
    title: 'Prospecting Fundamentals',
    description: 'Master the art of finding and qualifying high-value prospects',
    duration: '15 min',
    difficulty: 'Beginner',
    progress: 100,
    xp: 200,
    rating: 4.8,
    category: 'prospecting',
    icon: Target,
    color: 'bg-gradient-to-br from-teal-500 to-teal-600',
    completed: true
  },
  {
    id: 2,
    title: 'Advanced Cold Calling',
    description: 'Turn cold calls into warm conversations with proven techniques',
    duration: '22 min',
    difficulty: 'Intermediate',
    progress: 65,
    xp: 350,
    rating: 4.9,
    category: 'calling',
    icon: Zap,
    color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    completed: false
  },
  {
    id: 3,
    title: 'Objection Handling Mastery',
    description: 'Transform objections into opportunities with confidence',
    duration: '18 min',
    difficulty: 'Advanced',
    progress: 30,
    xp: 400,
    rating: 4.7,
    category: 'objections',
    icon: Brain,
    color: 'bg-gradient-to-br from-teal-600 to-purple-600',
    completed: false
  },
  {
    id: 4,
    title: 'Negotiation Psychology',
    description: 'Understand the psychology behind successful negotiations',
    duration: '25 min',
    difficulty: 'Advanced',
    progress: 0,
    xp: 500,
    rating: 4.9,
    category: 'negotiation',
    icon: Users,
    color: 'bg-gradient-to-br from-purple-600 to-teal-500',
    completed: false
  }
]

const achievements = [
  { title: 'Quick Learner', description: 'Completed 5 modules in a week', icon: Zap, earned: true },
  { title: 'Perfectionist', description: 'Scored 100% on 3 assessments', icon: Star, earned: true },
  { title: 'Team Player', description: 'Helped 10 peers in community', icon: Users, earned: false },
  { title: 'Sales Master', description: 'Completed all advanced modules', icon: Trophy, earned: false }
]

export default function TrainingHub() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')

  const filteredModules = trainingModules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDifficulty = selectedDifficulty === 'all' || 
                             module.difficulty.toLowerCase() === selectedDifficulty
    return matchesSearch && matchesDifficulty
  })

  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold gradient-text">
          Training Hub
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Level up your sales skills with bite-sized, interactive training modules crafted for conversion
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
            placeholder="Search training modules..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-purple-200 focus:border-purple-500 focus:ring-purple-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select 
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-2 border border-purple-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </motion.div>

      <Tabs defaultValue="modules" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto bg-white/80 backdrop-blur-sm border border-purple-200 rounded-lg">
          <TabsTrigger value="modules" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md">
            Training Modules
          </TabsTrigger>
          <TabsTrigger value="achievements" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-md rounded-md">
            Achievements
          </TabsTrigger>
        </TabsList>

        <TabsContent value="modules" className="space-y-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredModules.map((module, index) => {
              const Icon = module.icon
              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm h-full flex flex-col">
                    {module.completed && (
                      <Badge variant="secondary" className="absolute top-4 right-4 bg-teal-100 text-teal-800 border-teal-200">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Completed
                      </Badge>
                    )}
                    
                    <CardHeader className="pb-3">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg ${module.color} shadow-md`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <CardTitle className="text-lg text-gray-900">{module.title}</CardTitle>
                          <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{module.duration}</span>
                            </div>
                            <Badge variant="outline" className="text-xs border-purple-200 text-purple-600">
                              {module.difficulty}
                            </Badge>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span>{module.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4 flex-grow flex flex-col justify-between">
                      <CardDescription className="text-sm text-gray-600">
                        {module.description}
                      </CardDescription>
                      
                      <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Progress</span>
                              <span className="font-medium text-gray-900">{module.progress}%</span>
                            </div>
                            <Progress value={module.progress} className="h-2 bg-purple-100" indicatorClassName="bg-gradient-to-r from-purple-500 to-teal-500" />
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                              +{module.xp} XP
                            </Badge>
                            <Button 
                              size="sm" 
                              className={`text-white shadow-md transition-all duration-300 transform hover:scale-105 ${module.completed 
                                ? "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700"
                                : "bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600"
                              }`}
                            >
                              {module.completed ? (
                                <>
                                  <CheckCircle className="w-4 h-4 mr-2" />
                                  Review
                                </> 
                              ) : module.progress > 0 ? (
                                <>
                                  <PlayCircle className="w-4 h-4 mr-2" />
                                  Continue
                                </>
                              ) : (
                                <>
                                  <BookOpen className="w-4 h-4 mr-2" />
                                  Start
                                </> 
                              )}
                            </Button>
                          </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className={`hover:shadow-lg transition-all duration-300 h-full ${
                    achievement.earned 
                      ? 'border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-md' 
                      : 'opacity-60 bg-white/80 backdrop-blur-sm'
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full shadow-sm ${
                          achievement.earned 
                            ? 'bg-gradient-to-br from-yellow-400 to-orange-500' 
                            : 'bg-gray-300'
                        }`}>
                          <Icon className={`w-6 h-6 ${
                            achievement.earned ? 'text-white' : 'text-gray-500'
                          }`} />
                        </div>
                        <div className="flex-1 space-y-1">
                          <h3 className="font-semibold flex items-center space-x-2 text-gray-900">
                            <span>{achievement.title}</span>
                            {achievement.earned && (
                              <CheckCircle className="w-4 h-4 text-teal-500" />
                            )}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
