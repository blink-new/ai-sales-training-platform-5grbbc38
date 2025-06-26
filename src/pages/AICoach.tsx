import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mic, 
  Play, 
  Square,
  Upload,
  Download,
  Brain,
  Clock,
  AlertCircle,
  CheckCircle,
  BarChart3
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Progress } from '../components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'

interface CoachingSession {
  id: string
  title: string
  date: string
  duration: string
  score: number
  status: 'completed' | 'analyzing' | 'pending'
  insights: {
    tone: number
    pace: number
    clarity: number
    engagement: number
  }
  feedback: string[]
  improvements: string[]
}

const recentSessions: CoachingSession[] = [
  {
    id: '1',
    title: 'Cold Call - Tech Startup Prospect',
    date: '2024-01-25',
    duration: '8:32',
    score: 87,
    status: 'completed',
    insights: {
      tone: 85,
      pace: 78,
      clarity: 92,
      engagement: 89
    },
    feedback: [
      'Great opening - you captured attention within the first 15 seconds',
      'Excellent active listening during the needs discovery phase',
      'Strong close with clear next steps'
    ],
    improvements: [
      'Consider slowing down pace during key value propositions',
      'Ask more qualifying questions about budget timeline',
      'Use more specific industry examples'
    ]
  },
  {
    id: '2',
    title: 'Product Demo - Enterprise Client',
    date: '2024-01-24',
    duration: '15:45',
    score: 92,
    status: 'completed',
    insights: {
      tone: 88,
      pace: 85,
      clarity: 95,
      engagement: 94
    },
    feedback: [
      'Outstanding product knowledge demonstration',
      'Effective use of storytelling to illustrate value',
      'Perfect pacing throughout the presentation'
    ],
    improvements: [
      'Include more interactive elements in demo',
      'Address potential objections proactively',
      'Strengthen the urgency in your closing'
    ]
  }
]

export default function AICoach() {
  const [isRecording, setIsRecording] = useState(false)
  const [selectedSession, setSelectedSession] = useState<CoachingSession>(recentSessions[0])

  const handleStartRecording = () => {
    setIsRecording(true)
  }

  const handleStopRecording = () => {
    setIsRecording(false)
  }

  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold gradient-text">AI Sales Coach</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get real-time feedback on your sales calls and presentations with AI-powered analysis
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-2 space-y-6"
        >
          <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-purple-600" />
                <span>Start a Coaching Session</span>
              </CardTitle>
              <CardDescription>
                Record a live call, practice session, or upload an existing recording for AI analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-4">
                <div className="relative">
                  <div className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto transition-all duration-300 shadow-lg ${
                    isRecording 
                      ? 'bg-red-500 shadow-red-500/50 animate-pulse' 
                      : 'bg-gradient-to-r from-purple-500 to-teal-500 hover:scale-105 cursor-pointer'
                  }`}>
                    {isRecording ? (
                      <Square 
                        className="w-12 h-12 text-white cursor-pointer" 
                        onClick={handleStopRecording}
                      />
                    ) : (
                      <Mic 
                        className="w-12 h-12 text-white cursor-pointer" 
                        onClick={handleStartRecording}
                      />
                    )}
                  </div>
                  {isRecording && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                    >
                      <Badge variant="destructive" className="animate-pulse">
                        Recording... 00:45
                      </Badge>
                    </motion.div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <p className="text-lg font-medium">
                    {isRecording ? 'Recording in progress...' : 'Click to start recording'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isRecording 
                      ? 'AI is analyzing your tone, pace, and content in real-time'
                      : 'Practice your pitch, role-play a scenario, or record a live call'
                    }
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-purple-100" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-12 space-x-2 border-purple-200 hover:bg-purple-100/50">
                  <Upload className="w-4 h-4" />
                  <span>Upload Recording</span>
                </Button>
                <Button variant="outline" className="h-12 space-x-2 border-teal-200 hover:bg-teal-100/50">
                  <Play className="w-4 h-4" />
                  <span>Practice Scenario</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0">
            <CardHeader>
              <CardTitle>Recent Session Analysis</CardTitle>
              <CardDescription>
                Detailed feedback from your latest coaching session
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="space-y-4">
                <TabsList className="grid w-full grid-cols-3 bg-purple-100/50 rounded-lg">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-md rounded-md">Overview</TabsTrigger>
                  <TabsTrigger value="feedback" className="data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-md rounded-md">Feedback</TabsTrigger>
                  <TabsTrigger value="transcript" className="data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-md rounded-md">Transcript</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(selectedSession.insights).map(([key, value]) => (
                      <div key={key} className="text-center space-y-2 p-4 bg-purple-50/50 rounded-lg">
                        <div className="capitalize text-sm text-muted-foreground">{key}</div>
                        <div className="text-2xl font-bold text-purple-600">{value}%</div>
                        <Progress value={value} className="h-2 bg-purple-200" indicatorClassName="bg-purple-500" />
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Overall Score</span>
                      <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                        {selectedSession.score}/100
                      </Badge>
                    </div>
                    <Progress value={selectedSession.score} className="h-3 bg-teal-100" indicatorClassName="bg-teal-500" />
                  </div>
                </TabsContent>

                <TabsContent value="feedback" className="space-y-4">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-medium text-teal-600 flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>What You Did Well</span>
                      </h4>
                      <ul className="space-y-2">
                        {selectedSession.feedback.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-orange-600 flex items-center space-x-2">
                        <AlertCircle className="w-4 h-4" />
                        <span>Areas for Improvement</span>
                      </h4>
                      <ul className="space-y-2">
                        {selectedSession.improvements.map((item, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="transcript" className="space-y-4">
                  <div className="bg-purple-50/50 rounded-lg p-4 space-y-3 max-h-60 overflow-y-auto">
                    <div className="text-xs text-muted-foreground">
                      [00:15] You: Hi Sarah, this is John from TechSolutions. I hope I'm catching you at a good time...
                    </div>
                    <div className="text-xs text-muted-foreground">
                      [00:22] Prospect: Sure, I have a few minutes. What's this about?
                    </div>
                    <div className="text-xs text-muted-foreground">
                      [00:25] You: I noticed your company just expanded to three new markets. Congratulations! I'm reaching out because we've helped similar companies...
                    </div>
                    <div className="text-center text-xs text-muted-foreground py-2">
                      ... Full transcript available after analysis completion
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full border-purple-200 hover:bg-purple-100/50">
                    <Download className="w-4 h-4 mr-2" />
                    Download Transcript
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-teal-600" />
                <span>Progress Tracking</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-purple-600">89.5</div>
                <div className="text-sm text-muted-foreground">Average Score</div>
                <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                  +5.2 this week
                </Badge>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Sessions This Month</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total Practice Time</span>
                  <span className="font-medium">3h 24m</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Improvement Rate</span>
                  <span className="font-medium text-teal-600">+18%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0">
            <CardHeader>
              <CardTitle>Recent Sessions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentSessions.map((session) => (
                <motion.div
                  key={session.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors hover:bg-purple-100/50 ${
                    selectedSession.id === session.id ? 'border-purple-300 bg-purple-50/80' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedSession(session)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm line-clamp-2">{session.title}</h4>
                      <Badge variant="outline" className="text-xs border-teal-200 text-teal-700">
                        {session.score}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>{session.duration}</span>
                      </div>
                      <span>{session.date}</span>
                    </div>
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