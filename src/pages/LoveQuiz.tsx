import { useState } from 'react';
import { Heart, ArrowRight, ArrowLeft, Sparkles, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Snowfall from '@/components/Snowfall';
import FloatingHearts from '@/components/FloatingHearts';

interface Question {
  question: string;
  options: string[];
  romantic: string;
}

const questions: Question[] = [
  {
    question: "What made your heart skip when we first talked? 💕",
    options: ["Your voice", "Your humor", "Your care", "Everything about you"],
    romantic: "Every answer leads to you..."
  },
  {
    question: "Our late-night calls are... 🌙",
    options: ["The best part of my day", "Never long enough", "Where I feel closest to you", "All of the above"],
    romantic: "Time stops when we talk..."
  },
  {
    question: "When I think about March, I feel... ✈️",
    options: ["Butterflies everywhere", "Can't wait!", "Nervous but excited", "Like it's too far away"],
    romantic: "Every day brings us closer..."
  },
  {
    question: "The thing I love most about you is... 💖",
    options: ["Your beautiful smile", "Your stubborn strength", "Your caring heart", "I can't choose just one"],
    romantic: "You're perfect in every way..."
  },
  {
    question: "When we finally meet, the first thing I'll do is... 🤗",
    options: ["Hold you tight", "Look into your eyes", "Kiss you softly", "Never let go"],
    romantic: "That moment will be magical..."
  },
  {
    question: "Our love story is... 📖",
    options: ["Just beginning", "Already beautiful", "Different and special", "The best thing ever"],
    romantic: "And it only gets better..."
  },
  {
    question: "Distance has taught us... 🌍",
    options: ["Patience is powerful", "Love conquers all", "We're stronger together", "Every moment matters"],
    romantic: "Our bond is unbreakable..."
  },
  {
    question: "My favorite memory with you so far... 💭",
    options: ["Our first video call", "When you laugh", "Our deep conversations", "Every single moment"],
    romantic: "Making more memories soon..."
  },
];

const LoveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleNext = () => {
    if (selectedOption) {
      setAnswers([...answers, selectedOption]);
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedOption(null);
        } else {
          setShowResult(true);
        }
      }, 2000);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] || null);
      setAnswers(answers.slice(0, -1));
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedOption(null);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
        <Snowfall />
        <FloatingHearts />

        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <div className="bg-card/80 backdrop-blur-md rounded-3xl p-12 border border-primary/30 shadow-2xl shadow-primary/20">
              <Sparkles className="w-16 h-16 text-accent mx-auto mb-6 animate-pulse" />
              <h1 className="font-display text-4xl md:text-5xl text-primary mb-6">
                Perfect Match! 💕
              </h1>
              <div className="space-y-4 mb-8">
                <p className="font-script text-2xl text-secondary">
                  Lydia, every answer you give...
                </p>
                <p className="text-foreground/80 text-lg">
                  Shows me how special our connection is. Whether you believe in love or not,
                  what we have is real, rare, and worth fighting for.
                </p>
                <div className="py-6">
                  <div className="text-6xl animate-pulse">💖</div>
                </div>
                <p className="font-script text-xl text-accent">
                  "I'm not asking you to believe in love... I'm asking you to believe in us."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="romantic" onClick={restartQuiz}>
                  Play Again 🔄
                </Button>
                <Link to="/">
                  <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                    <Home className="w-4 h-4 mr-2" /> Back Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <Snowfall />
      <FloatingHearts />

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-muted z-50">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Back to home */}
      <Link to="/" className="fixed top-4 left-4 z-50">
        <Button variant="ghost" size="sm" className="text-foreground/70 hover:text-foreground">
          <Home className="w-4 h-4 mr-2" /> Home
        </Button>
      </Link>

      <div className="min-h-screen flex items-center justify-center p-4 pt-16">
        <div className="max-w-2xl mx-auto w-full">
          {/* Question counter */}
          <div className="text-center mb-8">
            <span className="text-primary/70 font-display text-lg">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>

          {/* Question card */}
          <div className={`bg-card/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-primary/30 shadow-2xl shadow-primary/20 transition-all duration-500 ${showMessage ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
            <Heart className="w-10 h-10 text-primary mx-auto mb-6 animate-pulse" fill="currentColor" />

            <h2 className="font-display text-2xl md:text-3xl text-foreground text-center mb-8">
              {currentQ.question}
            </h2>

            <div className="grid gap-4">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOption(option)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 border-2 ${selectedOption === option
                      ? 'bg-primary/20 border-primary text-foreground scale-[1.02]'
                      : 'bg-card/50 border-primary/20 text-foreground/80 hover:border-primary/50 hover:bg-primary/10'
                    }`}
                >
                  <span className="font-display text-lg">{option}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Romantic message overlay */}
          {showMessage && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-background/80 backdrop-blur-sm animate-fade-in">
              <div className="text-center p-8">
                <Heart className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" fill="currentColor" />
                <p className="font-script text-3xl text-secondary">{currentQ.romantic}</p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="text-foreground/70 hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>

            <Button
              variant="romantic"
              onClick={handleNext}
              disabled={!selectedOption || showMessage}
            >
              {currentQuestion === questions.length - 1 ? 'See Result' : 'Next'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveQuiz;
