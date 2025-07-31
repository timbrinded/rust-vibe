import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export function meta() {
  return [
    { title: "Rust Programming Language - Fan Page" },
    { name: "description", content: "A passionate fan page for the Rust programming language" },
  ];
}

export default function RustFanPage() {
  const [activeSection, setActiveSection] = useState("features");
  const [quizScore, setQuizScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const features = [
    {
      icon: "⚡",
      title: "Blazingly Fast",
      description: "Rust is blazingly fast and memory-efficient with no runtime or garbage collector.",
    },
    {
      icon: "🛡️",
      title: "Memory Safe",
      description: "Rust's ownership model guarantees memory-safety and thread-safety.",
    },
    {
      icon: "🔧",
      title: "Zero-Cost Abstractions",
      description: "High-level ergonomics with low-level control and performance.",
    },
    {
      icon: "🌐",
      title: "Great Ecosystem",
      description: "Cargo and crates.io make dependency management a breeze.",
    },
    {
      icon: "🤝",
      title: "Friendly Community",
      description: "One of the most welcoming and helpful programming communities.",
    },
    {
      icon: "💡",
      title: "Modern Features",
      description: "Pattern matching, traits, generics, and powerful macros.",
    },
  ];

  const quizQuestions = [
    {
      question: "What makes Rust unique among systems programming languages?",
      options: [
        "It's the fastest language ever",
        "Memory safety without garbage collection",
        "It only runs on Linux",
        "It was created by Mozilla",
      ],
      correct: 1,
    },
    {
      question: "What is Rust's package manager called?",
      options: ["npm", "pip", "cargo", "rustup"],
      correct: 2,
    },
    {
      question: "What symbol represents a mutable reference in Rust?",
      options: ["&", "&mut", "*", "mut&"],
      correct: 1,
    },
  ];

  const codeExamples = [
    {
      title: "Hello, Rust!",
      code: `fn main() {
    println!("Hello, fellow Rustaceans! 🦀");
}`,
    },
    {
      title: "Pattern Matching",
      code: `match favorite_language {
    "Rust" => println!("Excellent choice! 🎉"),
    "C++" => println!("Try Rust, you'll love it!"),
    _ => println!("Have you heard about Rust?"),
}`,
    },
    {
      title: "Zero-Cost Abstractions",
      code: `let sum: i32 = (1..=100)
    .filter(|x| x % 2 == 0)
    .map(|x| x * x)
    .sum();`,
    },
  ];

  const getRankName = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage === 100) return "🦀 Rust King Crab";
    if (percentage >= 67) return "🦀 Crab Person";
    if (percentage >= 33) return "🥚 Crab Roe";
    return "🐚 Shell Dweller";
  };

  const handleQuizAnswer = (selectedIndex: number) => {
    setSelectedAnswer(selectedIndex);
    setShowFeedback(true);
    
    if (selectedIndex === quizQuestions[currentQuestion].correct) {
      setQuizScore(quizScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setQuizScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setQuizComplete(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-block"
          >
            <div className="w-32 h-32 bg-orange-600 rounded-full flex items-center justify-center text-6xl font-bold mb-6 mx-auto shadow-2xl">
              R
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"
          >
            Rust Programming Language
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-orange-300"
          >
            A language empowering everyone to build reliable and efficient software
          </motion.p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-orange-600/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-4 py-4 overflow-x-auto">
            {["features", "why-love", "examples", "ferris", "quiz", "community"].map((section) => (
              <Button
                key={section}
                onClick={() => setActiveSection(section)}
                variant={activeSection === section ? "default" : "outline"}
                size="sm"
                className={`whitespace-nowrap ${
                  activeSection === section
                    ? "bg-orange-600 hover:bg-orange-700"
                    : "bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 border-orange-600/30 hover:border-orange-500"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Features Section */}
        {activeSection === "features" && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12">🚀 Why Rust is Amazing</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-gray-800/50 backdrop-blur-sm border-orange-600/30 hover:border-orange-500 transition-all">
                    <CardHeader>
                      <div className="text-4xl mb-2">{feature.icon}</div>
                      <CardTitle className="text-orange-400">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Why I Love Rust Section */}
        {activeSection === "why-love" && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12">❤️ Why I'm a Rust Fanatic</h2>
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl p-8 backdrop-blur-sm">
              <ul className="space-y-4">
                {[
                  "The compiler is like a helpful friend that catches bugs before they happen",
                  "Writing Rust code feels like solving puzzles - challenging but incredibly rewarding",
                  "No more segfaults or data races - I can sleep peacefully at night",
                  "The ownership system makes me think about my code design in better ways",
                  "Cargo is the best package manager I've ever used - period",
                  "The error messages actually help you fix problems instead of confusing you",
                  "It's fast enough for systems programming but safe enough for web services",
                  "The community is incredibly supportive and innovative",
                ].map((reason, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-lg"
                  >
                    <span className="text-2xl">🦀</span>
                    <span>{reason}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>
        )}

        {/* Code Examples Section */}
        {activeSection === "examples" && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12">💻 Beautiful Rust Code</h2>
            <div className="space-y-6">
              {codeExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900 border border-orange-600/30 rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold mb-4 text-orange-400">{example.title}</h3>
                  <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                    <code className="text-orange-300 font-mono">{example.code}</code>
                  </pre>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Ferris Section */}
        {activeSection === "ferris" && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl font-bold mb-12">🦀 Meet Ferris the Crab</h2>
            <motion.div
              animate={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-9xl mb-8"
            >
              🦀
            </motion.div>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl mb-6">
                Ferris is the unofficial mascot of Rust! This adorable crab represents the Rust
                community's friendly and welcoming nature.
              </p>
              <div className="grid grid-cols-2 gap-4 text-left">
                {[
                  "🦀 Standard Ferris - The happy crab we all know and love",
                  "😴 Sleepy Ferris - When your code compiles on the first try",
                  "🎓 Teacher Ferris - Helping newcomers learn Rust",
                  "🏃 Speedy Ferris - Representing Rust's blazing performance",
                ].map((ferris, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 p-4 rounded-lg"
                  >
                    {ferris}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Quiz Section */}
        {activeSection === "quiz" && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12">🎯 Test Your Rust Knowledge</h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl p-8">
                {!quizComplete ? (
                  <>
                    <p className="text-xl mb-6 text-orange-300">
                      Question {currentQuestion + 1} of {quizQuestions.length} • Score: {quizScore}
                    </p>
                    <h3 className="text-2xl font-bold mb-6">
                      {quizQuestions[currentQuestion].question}
                    </h3>
                    <div className="space-y-3">
                      {quizQuestions[currentQuestion].options.map((option, index) => {
                        let buttonStyle = "w-full text-left p-4 bg-gray-800/50 rounded-lg border transition-all";
                        
                        if (showFeedback && selectedAnswer !== null) {
                          if (index === quizQuestions[currentQuestion].correct) {
                            buttonStyle += " bg-green-600/30 border-green-500 text-green-300";
                          } else if (index === selectedAnswer) {
                            buttonStyle += " bg-red-600/30 border-red-500 text-red-300";
                          } else {
                            buttonStyle += " bg-gray-800/30 border-gray-600 text-gray-400";
                          }
                        } else {
                          buttonStyle += " hover:bg-gray-700/50 border-orange-600/30 hover:border-orange-500";
                        }

                        return (
                          <motion.button
                            key={index}
                            whileHover={!showFeedback ? { scale: 1.02 } : {}}
                            whileTap={!showFeedback ? { scale: 0.98 } : {}}
                            onClick={() => !showFeedback && handleQuizAnswer(index)}
                            disabled={showFeedback}
                            className={buttonStyle}
                          >
                            {option} {showFeedback && index === quizQuestions[currentQuestion].correct && "✅"}
                            {showFeedback && index === selectedAnswer && index !== quizQuestions[currentQuestion].correct && "❌"}
                          </motion.button>
                        );
                      })}
                    </div>
                    
                    {showFeedback && (
                      <div className="mt-6 text-center">
                        <p className="text-lg mb-4">
                          {selectedAnswer === quizQuestions[currentQuestion].correct 
                            ? "🎉 Correct! Well done!" 
                            : "❌ Not quite, but keep learning!"}
                        </p>
                        <Button
                          onClick={handleNextQuestion}
                          className="bg-orange-600 hover:bg-orange-700"
                          size="lg"
                        >
                          {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "See Results"}
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-4">🎯 Quiz Complete!</h3>
                    <div className="text-6xl mb-4">{getRankName(quizScore, quizQuestions.length).split(' ')[0]}</div>
                    <h4 className="text-2xl font-bold text-orange-300 mb-4">
                      {getRankName(quizScore, quizQuestions.length)}
                    </h4>
                    <p className="text-xl mb-6">
                      You scored {quizScore} out of {quizQuestions.length} ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                    </p>
                    <div className="text-lg text-gray-300 mb-6">
                      {quizScore === quizQuestions.length && "Perfect! You're a true Rustacean! 🦀"}
                      {quizScore === 2 && "Great job! You know your Rust basics!"}
                      {quizScore === 1 && "Good start! Keep learning about Rust!"}
                      {quizScore === 0 && "No worries! Every Rustacean starts somewhere!"}
                    </div>
                    <Button
                      onClick={resetQuiz}
                      className="bg-orange-600 hover:bg-orange-700"
                      size="lg"
                    >
                      Try Again
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.section>
        )}

        {/* Community Section */}
        {activeSection === "community" && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl font-bold mb-12">🌟 Join the Rust Community</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of the friendliest and most helpful programming community!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Official Website", url: "https://www.rust-lang.org/" },
                { name: "The Rust Book", url: "https://doc.rust-lang.org/book/" },
                { name: "Community Forum", url: "https://users.rust-lang.org/" },
                { name: "Discord Server", url: "https://discord.gg/rust-lang" },
                { name: "Crates.io", url: "https://crates.io/" },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-orange-600 hover:bg-orange-700 rounded-full transition-colors shadow-lg"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-orange-600/50 py-12 px-4 text-center">
        <motion.p
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="text-3xl text-orange-500 mb-4"
        >
          🦀 Proud Rustacean Since Forever 🦀
        </motion.p>
        <p className="text-gray-400">Made with ❤️ and Rust enthusiasm</p>
      </footer>
    </div>
  );
}