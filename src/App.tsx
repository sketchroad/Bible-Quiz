/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  RotateCcw, 
  Clock,
  CheckCircle2,
  XCircle,
  Users,
  Play,
  Trash2,
  Trophy
} from 'lucide-react';
import { DEFAULT_VERSES } from './constants';
import { Verse, QuizSettings, QuizQuestion, AppView } from './types';
import confetti from 'canvas-confetti';

export default function App() {
  // Views: 'HOME', 'GAME', 'RESULTS'
  const [view, setView] = useState<AppView>('HOME');
  
  // Data State
  const [verses, setVerses] = useState<Verse[]>(DEFAULT_VERSES);
  const [settings, setSettings] = useState<QuizSettings>({
    teamName: ''
  });
  const [leaderboard, setLeaderboard] = useState<{team: string, score: number, id: number, date?: string}[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newVerse, setNewVerse] = useState({ 
    reference: '', 
    text: '',
    oxText: '',
    oxAnswer: 'O' as 'O' | 'X',
    blankText: '',
    blankAnswer: '',
    blankDistractors: ['', '', '']
  });
  
  // Game State
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  // Constants
  const GAME_TIME_LIMIT = 10;
  const QUESTION_COUNT = 20;

  // Sync verses and leaderboard
  useEffect(() => {
    const savedVerses = localStorage.getItem('bible_quiz_verses');
    if (savedVerses) {
      try {
        setVerses(JSON.parse(savedVerses));
      } catch (e) {
        setVerses(DEFAULT_VERSES);
      }
    } else {
      setVerses(DEFAULT_VERSES);
    }

    const savedResults = localStorage.getItem('bible_quiz_results');
    if (savedResults) {
      try {
        const parsed = JSON.parse(savedResults);
        if (Array.isArray(parsed)) {
          const sorted = [...parsed].sort((a, b) => (Number(b.score) || 0) - (Number(a.score) || 0));
          setLeaderboard(sorted);
        }
      } catch (e) {
        console.error('Failed to parse leaderboard', e);
      }
    }
  }, []);

  const saveResult = (finalScore: number) => {
    const newResult = {
      team: settings.teamName || '익명 팀',
      score: finalScore,
      id: Date.now(),
      date: new Date().toLocaleDateString('ko-KR', { year: '2-digit', month: '2-digit', day: '2-digit' })
    };
    const updatedLeaderboard = [newResult, ...leaderboard]
      .sort((a, b) => (Number(b.score) || 0) - (Number(a.score) || 0))
      .slice(0, 10);
    setLeaderboard(updatedLeaderboard);
    localStorage.setItem('bible_quiz_results', JSON.stringify(updatedLeaderboard));
  };

  const deleteResult = (id: number) => {
    const updated = leaderboard.filter(r => r.id !== id);
    setLeaderboard(updated);
    localStorage.setItem('bible_quiz_results', JSON.stringify(updated));
  };

  const handleAddVerse = () => {
    if (!newVerse.reference || !newVerse.text) {
      alert('말씀 구절과 원문은 필수 입력 사항입니다.');
      return;
    }
    
    const id = Date.now().toString();
    const questionsList: QuizQuestion[] = [];

    // Add OX Question if provided
    if (newVerse.oxText) {
      questionsList.push({
        id: `${id}-ox`,
        type: 'OX',
        questionText: newVerse.oxText,
        options: ['O', 'X'],
        correctAnswer: newVerse.oxAnswer
      });
    } else {
      // Default OX if text not specifically provided
      questionsList.push({
        id: `${id}-ox`,
        type: 'OX',
        questionText: newVerse.text,
        options: ['O', 'X'],
        correctAnswer: 'O'
      });
    }

    // Add Blank Question if provided
    if (newVerse.blankText && newVerse.blankAnswer) {
      const options = [newVerse.blankAnswer, ...newVerse.blankDistractors.filter(d => d.trim() !== '')];
      // Ensure we have some options if distractors are missing
      while (options.length < 4) {
        options.push(`대안 ${options.length + 1}`);
      }
      
      questionsList.push({
        id: `${id}-fb`,
        type: 'FILL_BLANK',
        questionText: newVerse.blankText,
        options: [...options].sort(() => Math.random() - 0.5),
        correctAnswer: newVerse.blankAnswer
      });
    }

    const verseToAdd: Verse = {
      id,
      reference: newVerse.reference,
      text: newVerse.text,
      questions: questionsList
    };

    const updatedVerses = [verseToAdd, ...verses];
    setVerses(updatedVerses);
    localStorage.setItem('bible_quiz_verses', JSON.stringify(updatedVerses));
    setNewVerse({ 
      reference: '', 
      text: '',
      oxText: '',
      oxAnswer: 'O',
      blankText: '',
      blankAnswer: '',
      blankDistractors: ['', '', '']
    });
    setShowAddForm(false);
  };

  const deleteVerse = (id: string) => {
    const updated = verses.filter(v => v.id !== id);
    setVerses(updated);
    localStorage.setItem('bible_quiz_verses', JSON.stringify(updated));
  };

  const resetToHome = () => {
    setView('HOME');
    setCurrentIdx(0);
    setScore(0);
    setIsAnswerSelected(false);
    setSelectedAnswer(null);
  };

  // Handlers
  const handleStartGame = () => {
    if (!settings.teamName.trim()) {
      alert('팀 이름을 입력해주세요!');
      return;
    }

    // Collect all available questions from the pool
    const pool: QuizQuestion[] = [];
    verses.forEach(v => {
      if (v.questions) {
        v.questions.forEach(q => {
          pool.push({
            ...q,
            verse: {
              text: v.text,
              reference: v.reference
            }
          });
        });
      }
    });

    if (pool.length === 0) {
      alert('죄송합니다. 현재 등록된 문제가 없습니다. 문제를 먼저 입력해주세요.');
      return;
    }

    // Shuffle and pick 20
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, QUESTION_COUNT).map(q => ({
      ...q,
      options: [...q.options].sort(() => Math.random() - 0.5)
    }));

    setQuestions(selected);
    setCurrentIdx(0);
    setScore(0);
    setView('GAME');
    setTimeLeft(GAME_TIME_LIMIT);
    setIsAnswerSelected(false);
    setSelectedAnswer(null);
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setIsAnswerSelected(false);
      setSelectedAnswer(null);
      setTimeLeft(GAME_TIME_LIMIT);
    } else {
      setView('RESULTS');
      saveResult(score);
      if (score > questions.length * 0.7) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleSelectAnswer = (answer: string) => {
    if (isAnswerSelected) return;
    
    setIsAnswerSelected(true);
    setSelectedAnswer(answer);
    
    if (answer === questions[currentIdx].correctAnswer) {
      setScore(prev => prev + 1);
    }
    
    setTimeout(() => {
      handleNextQuestion();
    }, 1500);
  };

  useEffect(() => {
    if (view === 'GAME' && !isAnswerSelected && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (view === 'GAME' && !isAnswerSelected && timeLeft === 0) {
      handleSelectAnswer('TIMEOUT_FALLBACK_NONE');
    }
  }, [view, timeLeft, isAnswerSelected]);

  // Helpers
  const renderHighlightedVerse = (original: string, question: string) => {
    const originalWords = original.split(' ');
    const questionWords = question.split(' ');
    
    return originalWords.map((word, i) => {
      // Find matching word in question - if not found or different, highlight it
      const isMatch = questionWords[i] === word;
      if (!isMatch) {
        return <span key={i} className="correct-diff-word">{word} </span>;
      }
      return <span key={i}>{word} </span>;
    });
  };

  return (
    <div className="h-screen max-h-screen bg-bg-main text-brand-dark font-sans selection:bg-[#E5E1D8] flex flex-col overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#E5E1D8] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#F2EFE9] rounded-full blur-[120px]" />
      </div>

      <nav className="relative z-30 border-b-2 border-border-gold bg-bg-main/70 backdrop-blur-md px-6 md:px-10 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={resetToHome}
            className="text-xl md:text-2xl font-serif font-black tracking-[0.3em] text-brand-dark hover:text-brand transition-colors focus:outline-none uppercase"
          >
            Bible Quiz
          </button>
        </div>
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <p className="text-[10px] md:text-sm font-serif italic text-brand-dark/80 font-semibold whitespace-nowrap">
            "주의 말씀은 내 발에 등이요 내 길에 빛이니이다"
          </p>
          <p className="text-[8px] md:text-[10px] font-black tracking-[0.4em] text-brand/60 uppercase">
            시편 119:105
          </p>
        </div>
      </nav>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-3 md:p-6 lg:p-10 max-w-[1200px] mx-auto w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {view === 'HOME' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="w-full h-full max-h-[80vh] flex flex-col gap-3 overflow-hidden max-w-5xl mx-auto"
            >
              <div className="flex-1 flex flex-col lg:flex-row gap-3 overflow-hidden min-h-0 items-stretch">
                {/* Left Side: Setup & Settings */}
                <div className="flex-1 lg:flex-[0.6] flex flex-col gap-2.5 overflow-hidden min-h-0">
                  <div className="bg-white p-3 md:p-3.5 rounded-[16px] shadow-sm border border-[#E5E1D8] shrink-0 space-y-2">
                    <div className="space-y-1">
                      <label className="flex items-center justify-center gap-1.5 text-[8px] font-black uppercase tracking-[0.2em] text-stone-400">
                        <Users size={10} className="text-brand/60" /> 팀 이름 설정
                      </label>
                      <input 
                        type="text" 
                        placeholder="팀 이름을 입력하세요..."
                        value={settings.teamName}
                        onChange={(e) => setSettings({...settings, teamName: e.target.value})}
                        className="w-full bg-accent-soft border-b border-border-gold rounded-t-lg px-2 py-2 focus:outline-none text-sm font-serif italic text-center placeholder:text-stone-300 transition-all focus:bg-[#EAE6DD]"
                        onKeyDown={(e) => e.key === 'Enter' && handleStartGame()}
                      />
                    </div>
                    <button
                      onClick={handleStartGame}
                      className="w-full bg-brand-dark text-white py-2.5 rounded-[12px] font-bold tracking-[0.15em] uppercase text-[8px] shadow-lg hover:bg-brand active:translate-y-[1px] transition-all flex items-center justify-center gap-2 group"
                    >
                      퀴즈 시작하기 <Play size={10} fill="currentColor" className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Leaderboard Section */}
                  <div className="bg-white/90 p-3 md:p-3.5 rounded-[20px] shadow-sm border border-[#E5E1D8] flex-1 flex flex-col min-h-0 overflow-hidden">
                    <div className="flex items-center justify-center gap-1.5 mb-2 text-[8px] font-black uppercase tracking-[0.2em] text-stone-400 shrink-0">
                      <Trophy size={10} className="text-amber-500" /> 명예의 전당 (TOP 10)
                    </div>
                    <div className="flex-1 overflow-y-auto pr-1 space-y-1 custom-scrollbar min-h-0">
                      {leaderboard.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-stone-300 italic opacity-40 py-2">
                          <Trophy size={16} className="mb-1 opacity-20" />
                          <p className="text-[7px] tracking-widest text-center">결과가 아직 없습니다</p>
                        </div>
                      ) : (
                        leaderboard.map((res, i) => (
                          <div key={res.id} className={`flex items-center justify-between p-1.5 md:p-2 rounded-lg border transition-all hover:bg-white hover:shadow-sm group ${i === 0 ? 'bg-amber-50/50 border-amber-100' : 'bg-stone-50/50 border-stone-100'}`}>
                            <div className="flex items-center gap-2">
                              <span className={`text-[10px] font-black font-serif italic w-3 text-center ${i === 0 ? 'text-amber-600' : 'text-stone-300'}`}>{i + 1}</span>
                              <div className="text-left">
                                <p className="text-[5px] font-black text-stone-300 uppercase tracking-tighter">TEAM</p>
                                <p className="font-serif italic font-semibold text-brand-dark text-[10px] truncate max-w-[40px] md:max-w-[70px]">{res.team}</p>
                              </div>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <div className="text-right">
                                <p className="font-black text-brand text-xs leading-none">{res.score}</p>
                              </div>
                              <button 
                                onClick={() => deleteResult(res.id)}
                                className="text-stone-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 p-0.5"
                              >
                                <Trash2 size={10} />
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex-1 lg:flex-[1] bg-white p-3 md:p-3.5 rounded-[20px] shadow-sm border border-[#E5E1D8] flex flex-col overflow-hidden min-h-0">
                  <div className="flex items-center justify-between mb-2 shrink-0 px-0.5">
                    <span className="text-[8px] font-black uppercase tracking-[0.1em] text-stone-400">말씀 라이브러리 ({verses.length})</span>
                    <button 
                      onClick={() => setShowAddForm(!showAddForm)}
                      className={`text-[7px] font-black uppercase tracking-[0.1em] px-2 py-0.5 rounded-full transition-all ${showAddForm ? 'bg-stone-100 text-stone-500' : 'bg-brand/10 text-brand'}`}
                    >
                      {showAddForm ? '닫기' : '+ 추가'}
                    </button>
                  </div>



                  {showAddForm && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mb-3 p-3 bg-accent-soft/40 rounded-xl border border-border-gold/20 shrink-0 space-y-3 max-h-[300px] overflow-y-auto custom-scrollbar"
                    >
                      <div className="space-y-1.5">
                        <p className="text-[8px] font-black uppercase tracking-widest text-brand/60">기본 정보</p>
                        <input 
                          value={newVerse.reference}
                          onChange={e => setNewVerse({...newVerse, reference: e.target.value})}
                          placeholder="말씀 구절 (예: 시편 23:1)"
                          className="w-full bg-white px-3 py-2 rounded-lg border border-stone-100 text-[10px] focus:border-brand/40 outline-none transition-all placeholder:text-stone-300"
                        />
                        <textarea 
                          value={newVerse.text}
                          onChange={e => setNewVerse({...newVerse, text: e.target.value})}
                          placeholder="말씀 원문 내용을 입력하세요..."
                          className="w-full bg-white px-3 py-2 rounded-lg border border-stone-100 text-[10px] h-12 focus:border-brand/40 outline-none transition-all placeholder:text-stone-300 resize-none font-serif"
                        />
                      </div>

                      <div className="space-y-1.5 pt-1.5 border-t border-border-gold/10">
                        <p className="text-[8px] font-black uppercase tracking-widest text-brand/60">OX 퀴즈 (선택)</p>
                        <textarea 
                          value={newVerse.oxText}
                          onChange={e => setNewVerse({...newVerse, oxText: e.target.value})}
                          placeholder="OX용 문제 텍스트"
                          className="w-full bg-white px-2 py-2 rounded-lg border border-stone-100 text-[9px] h-10 focus:border-brand/40 outline-none transition-all placeholder:text-stone-300 resize-none"
                        />
                        <div className="flex gap-1.5">
                          {['O', 'X'].map(val => (
                            <button
                              key={val}
                              onClick={() => setNewVerse({...newVerse, oxAnswer: val as 'O' | 'X'})}
                              className={`flex-1 py-1 px-1 rounded-md text-[9px] font-bold transition-all ${newVerse.oxAnswer === val ? (val === 'O' ? 'bg-brand text-white' : 'bg-red-500 text-white') : 'bg-white text-stone-400 border border-stone-100'}`}
                            >
                              {val}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-1.5 border-t border-border-gold/10">
                        <p className="text-[8px] font-black uppercase tracking-widest text-brand/60">빈칸 퀴즈 (선택)</p>
                        <textarea 
                          value={newVerse.blankText}
                          onChange={e => setNewVerse({...newVerse, blankText: e.target.value})}
                          placeholder="빈칸 문제 ( )"
                          className="w-full bg-white px-2 py-2 rounded-lg border border-stone-100 text-[9px] h-10 focus:border-brand/40 outline-none transition-all placeholder:text-stone-300 resize-none"
                        />
                        <div className="grid grid-cols-2 gap-1.5">
                          <input 
                            value={newVerse.blankAnswer}
                            onChange={e => setNewVerse({...newVerse, blankAnswer: e.target.value})}
                            placeholder="정답"
                            className="bg-white px-2 py-1.5 rounded-md border border-stone-100 text-[9px] focus:border-brand/40 outline-none"
                          />
                          {newVerse.blankDistractors.map((dist, idx) => (
                            <input 
                              key={idx}
                              value={dist}
                              onChange={e => {
                                const d = [...newVerse.blankDistractors];
                                d[idx] = e.target.value;
                                setNewVerse({...newVerse, blankDistractors: d});
                              }}
                              placeholder={`오답 ${idx + 1}`}
                              className="bg-white px-2 py-1.5 rounded-md border border-stone-100 text-[9px] focus:border-brand/40 outline-none"
                            />
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={handleAddVerse}
                        className="w-full bg-brand-dark text-white py-2.5 rounded-lg text-[9px] font-bold uppercase tracking-widest shadow-md hover:bg-brand transition-all mt-1"
                      >
                        라이브러리에 저장
                      </button>
                    </motion.div>
                  )}

                  <div className="flex-1 overflow-y-auto pr-1 space-y-1.5 custom-scrollbar">
                    {verses.map(v => (
                      <div key={v.id} className="p-3.5 bg-stone-50/50 rounded-[24px] border border-stone-100 group flex justify-between items-start transition-all hover:bg-white hover:border-brand/20">
                        <div className="flex-1 pr-3">
                          <p className="text-[9px] font-black text-brand/60 uppercase tracking-[0.1em] mb-0.5">{v.reference}</p>
                          <p className="text-xs font-serif italic text-brand-dark/80 leading-relaxed line-clamp-3">
                            {v.text}
                          </p>
                        </div>
                        <button 
                          onClick={() => deleteVerse(v.id)}
                          className="text-stone-200 hover:text-red-500 transition-colors shrink-0 p-1 opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {view === 'GAME' && questions.length > 0 && (
            <motion.div
              key="game"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="w-full h-full max-h-[80vh] flex-1 flex flex-col gap-3 overflow-hidden max-w-4xl"
            >
              {/* Top Bar: Progress & Score */}
              <div className="flex items-center justify-between px-2 md:px-6 shrink-0 w-full">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand/60">진행도</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-serif italic text-xl text-brand-dark font-bold">{currentIdx + 1}</span>
                      <span className="text-black font-bold text-[10px]">/ {questions.length}</span>
                    </div>
                  </div>
                  <div className="w-[1px] h-6 bg-border-gold opacity-30" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand/60">팀</span>
                    <span className="font-serif italic text-base text-brand-dark truncate max-w-[100px]">{settings.teamName}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/80 px-4 py-2 rounded-2xl border border-border-gold/30 shadow-sm">
                  <div className="flex items-center gap-2">
                     <Clock size={16} className={timeLeft <= 3 ? 'text-red-500 animate-pulse' : 'text-brand'} />
                     <span className={`text-2xl font-black font-mono leading-none w-8 text-center transition-colors ${timeLeft <= 3 ? 'text-red-500' : 'text-brand'}`}>
                       {timeLeft}
                     </span>
                  </div>
                  <div className="w-[1px] h-6 bg-stone-100" />
                  <div className="flex flex-col text-center">
                    <span className="text-[8px] font-black uppercase tracking-widest text-stone-400 leading-none mb-1">SCORE</span>
                    <span className="font-black text-xl text-brand leading-none">{score}</span>
                  </div>
                </div>

                <button 
                  onClick={() => { if(confirm('게임을 종료하고 홈으로 돌아갈까요?')) resetToHome() }}
                  className="p-2 rounded-full hover:bg-stone-100 transition-colors text-stone-200 hover:text-red-500"
                >
                  <RotateCcw size={18} />
                </button>
              </div>

              {/* Quiz Main Card */}
              <div className="flex-1 bg-white p-5 md:p-8 rounded-[32px] shadow-xl border border-[#F0ECE4] flex flex-col items-center justify-between text-center relative overflow-hidden min-h-[400px] md:min-h-[450px]">
                <div className="w-full relative z-10 flex-1 flex flex-col justify-center gap-1.5 md:gap-3 min-h-0 max-w-2xl">
                  {/* Instruction */}
                  <div className="flex flex-col items-center gap-0.5 shrink-0">
                    <h2 className="text-xs md:text-sm font-serif italic font-bold text-brand-dark/50 tracking-tight">
                      {questions[currentIdx].type === 'OX' ? '이 말씀이 원문과 일치할까요?' : '빈칸에 들어갈 알맞은 단어를 선택하세요'}
                    </h2>
                    <div className="w-6 h-0.5 bg-brand/10 rounded-full" />
                  </div>
                  
                  {/* Question (Verse) Content */}
                  <div className="flex-1 flex flex-col justify-center min-h-0 w-full overflow-hidden">
                    <div className="px-2 py-2">
                      <div className="text-sm sm:text-base md:text-lg lg:text-xl font-serif font-bold leading-[1.6] text-brand-dark drop-shadow-sm whitespace-pre-line break-keep italic">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={isAnswerSelected ? 'feedback' : 'question'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {isAnswerSelected && questions[currentIdx].verse 
                              ? (
                                <span className="block">
                                  {renderHighlightedVerse(questions[currentIdx].verse.text, questions[currentIdx].questionText)}
                                </span>
                              )
                              : questions[currentIdx].questionText}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Reference */}
                  <motion.div 
                    animate={{ opacity: isAnswerSelected ? 1 : 0.6 }}
                    className="flex items-center justify-center gap-3 shrink-0"
                  >
                    <div className="h-px w-6 bg-border-gold opacity-30" />
                    <p className="text-brand font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                      {questions[currentIdx].verse?.reference || ''}
                    </p>
                    <div className="h-px w-6 bg-border-gold opacity-30" />
                  </motion.div>
                </div>

                {/* Options Grid */}
                <div className={`grid w-full gap-2 md:gap-3 shrink-0 relative z-10 mt-4 ${questions[currentIdx].type === 'OX' ? 'grid-cols-2 max-w-[240px] md:max-w-xs mx-auto' : 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto'}`}>
                  {questions[currentIdx].options.map((option, idx) => {
                    const isCorrect = option === questions[currentIdx].correctAnswer;
                    const isSelected = selectedAnswer === option;
                    
                    let bgClass = "bg-white border-stone-200 text-brand-dark hover:border-brand/40 hover:bg-stone-50 shadow-sm";
                    if (isAnswerSelected) {
                      if (isCorrect) bgClass = "bg-brand text-white border-brand shadow-lg scale-105 z-20 ring-2 md:ring-4 ring-brand/10";
                      else if (isSelected) bgClass = "bg-red-600 text-white border-red-600 shadow-md opacity-100 z-10";
                      else bgClass = "opacity-10 bg-stone-50 text-stone-300 border-stone-100 grayscale scale-95";
                    }

                    return (
                      <motion.button
                        key={idx}
                        whileHover={!isAnswerSelected ? { y: -2, scale: 1.01 } : {}}
                        whileTap={!isAnswerSelected ? { scale: 0.98 } : {}}
                        onClick={() => handleSelectAnswer(option)}
                        disabled={isAnswerSelected}
                        className={`p-2 md:p-3 rounded-xl md:rounded-2xl border font-serif italic text-sm md:text-base transition-all flex items-center justify-center gap-2 relative ${bgClass} ${questions[currentIdx].type === 'OX' ? 'h-16 md:h-20' : 'h-12 md:h-14'}`}
                      >
                        <span className="relative z-10 truncate px-2">{option}</span>
                        {isAnswerSelected && isCorrect && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-2 top-2">
                            <CheckCircle2 size={16} className="text-white fill-white/20" />
                          </motion.div>
                        )}
                        {isAnswerSelected && isSelected && !isCorrect && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-2 top-2">
                            <XCircle size={16} className="text-white fill-white/20" />
                          </motion.div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                <div className="h-8 md:h-10 flex items-center justify-center shrink-0 w-full mt-2">
                  {isAnswerSelected && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center gap-1"
                    >
                      <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.3em] text-stone-300 animate-pulse">
                        다음 문제로 이동 중...
                      </span>
                      {questions[currentIdx].type === 'OX' && questions[currentIdx].correctAnswer === 'X' && (
                        <div className="bg-red-50/60 px-2 py-0.5 rounded-full border border-red-100">
                          <span className="text-[7px] md:text-[8px] font-bold text-red-300">틀린 부분을 확인하세요</span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {view === 'RESULTS' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="text-center w-full max-w-lg h-full max-h-[75vh] flex flex-col items-center justify-center flex-1 overflow-hidden"
            >
              <div className="bg-white p-8 md:p-12 rounded-[48px] shadow-2xl border border-[#F0ECE4] text-center w-full space-y-6 relative overflow-hidden backdrop-blur-sm max-h-full flex flex-col justify-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-brand/5 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Trophy size={36} className="text-amber-500 drop-shadow-xl md:w-10 md:h-10" />
                  </div>
                  <h2 className="text-[9px] font-black uppercase tracking-[0.5em] text-stone-400">
                    QUIZ COMPLETED
                  </h2>
                  <h3 className="text-xl md:text-3xl font-serif font-black italic text-brand-dark tracking-tight">
                    {settings.teamName}님, 수고하하셨습니다!
                  </h3>
                </div>
                
                <div className="py-5 md:py-6 border-y border-stone-100 flex flex-col items-center justify-center gap-2 relative">
                  <div className="absolute inset-0 bg-accent-soft/20 opacity-40 blur-3xl rounded-full" />
                  <span className="text-stone-300 text-[8px] font-black uppercase tracking-widest relative z-10">당신의 점수는</span>
                  <div className="flex items-baseline gap-2 relative z-10">
                    <span className="text-5xl md:text-7xl font-black text-brand drop-shadow-lg pr-1">{score}</span>
                    <span className="font-serif italic font-bold text-base md:text-xl text-brand-dark/40">Points</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-2 pt-1">
                  <button 
                    onClick={resetToHome}
                    className="flex-1 bg-brand-dark text-white py-3.5 md:py-4 rounded-xl text-[9px] font-black uppercase tracking-[0.3em] shadow-lg hover:bg-brand transition-all flex items-center justify-center gap-2"
                  >
                    <RotateCcw size={14} /> 다시 도전하기
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
