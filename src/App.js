import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Camera, MapPin, Calendar } from 'lucide-react';

export default function BirthdayLoveSite() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showSurprise, setShowSurprise] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ScrollReveal = ({ children, delay = 0 }) => {
    return <div>{children}</div>;
  };

  const FloatingHeart = ({ delay = 0, left = '10%' }) => (
    <div
      className="absolute text-pink-300 opacity-20 animate-float"
      style={{
        left,
        animationDelay: `${delay}s`,
        animationDuration: '6s',
      }}
    >
      <Heart className="w-8 h-8" fill="currentColor" />
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 min-h-screen relative overflow-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-pink-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating hearts background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <FloatingHeart delay={0} left="10%" />
        <FloatingHeart delay={1} left="80%" />
        <FloatingHeart delay={2} left="30%" />
        <FloatingHeart delay={3} left="60%" />
        <FloatingHeart delay={4} left="90%" />
      </div>

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="text-center">
          <div className="mb-8 animate-bounce-slow">
            <Sparkles className="w-16 h-16 mx-auto text-pink-400" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400">
              Happy Birthday,
            </span>
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold text-purple-600 mb-8 animate-fade-in-delay">
            Baby 💕
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 animate-fade-in-delay-2">
            Scroll down for our story...
          </p>
          <div className="mt-12 animate-bounce">
            <div className="text-pink-400 text-4xl">↓</div>
          </div>
        </div>
      </div>

      {/* Story Timeline */}
      <div className="max-w-4xl mx-auto px-4 py-20 space-y-32">
        {/* The Rainy Day */}
        <ScrollReveal>
          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-purple-500" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                That Rainy Afternoon
              </h3>
            </div>
             <p className="text-lg text-gray-700 leading-relaxed mb-4">
    It was already four in the evening, and I’d been stuck in the library for hours trying to finish those CAED records. By the time Gopika and I finally stepped out, it had started drizzling — just enough to make us hurry into the cafeteria before we got soaked.
  </p>
  <p className="text-lg text-gray-700 leading-relaxed mb-4">
    We got inside still dry, and I remember thinking, “Okay nice, I’ll finish a little more and go.” Very me. I was just settling down when I saw two guys walking toward us. One of them was Amilek.
  </p>
  <p className="text-lg text-gray-700 leading-relaxed mb-4">
    And the other… was you. I’d seen you around campus before, but we never really <span className="italic">knew</span> each other. I mean, technically we’d spoken once — during exams, when you and your friends were looking for a place to keep your phones. I still remember handing your phone back later and the way you smiled. My friends teased me for days when they realized you were “that guy.”
  </p>
  <p className="text-lg text-gray-700 leading-relaxed italic text-purple-600">
    But that day in the cafeteria… you were still just someone I was about to meet properly. And I had no idea how much you’d end up meaning to me.
  </p>
          </div>
          
        </ScrollReveal>

        {/* The First Words */}
        <ScrollReveal delay={1}>
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-pink-500" fill="currentColor" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                "Let's be friends"
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              You and Amilek were talking to Gopika, and I turned away to grab glue from my bag — fully minding my own business. I wasn’t expecting anything. But when I looked up… there you were. Standing right in front of me. Close enough that I had to actually look <span className="italic">up</span> at you.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              You said something like "hello," and then — completely out of nowhere — you hit me with:
            </p>
            <p className="text-2xl text-gray-800 font-semibold text-center my-6 px-4 py-3 bg-white rounded-lg shadow-sm">
              "Let's be friends. I want to get to know you."
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Who <span className="italic">says</span> it like that?? Nobody actually walks up and announces friendship like it's a business proposal. But we both knew what you meant. And honestly? I'm glad you didn't say "girlfriend" right there because I didn't even know your <span className="italic">name</span> yet. That would've been absolutely unhinged.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I glanced to the side and caught Gopika watching with the most entertained expression on her face — like she'd bought front-row tickets to this entire movie scene. The way she looked at me… she knew something was happening before I did.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed italic text-pink-600 mb-4">
              So I just said, "Okay... we can be friends."
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The rain stopped right after. Before leaving, I looked at Amilek and whispered, “Don’t tell anyone about this.” 
            </p>
          </div>
        </ScrollReveal>

        {/* The Texts */}
        <ScrollReveal delay={2}>
          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                That Night, You Texted
              </h3>
              <div className="text-6xl mb-4">💬</div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              That night, you texted me. Just a simple "hi." Nothing special…
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
             I replied, and somehow the conversation just kept going. Not forced, not awkward — just two people talking about whatever popped into our heads. Hours passed without either of us noticing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Then it became our routine. Every single morning, you'd text: <span className="font-semibold">"Good morning."</span>
              <br />
              Every single night: <span className="font-semibold">"Good night."</span>
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              It wasn’t dramatic or over the top — just consistent. And that consistency felt really nice.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              But then came internals, and you stopped texting. No good morning. No good night. Nothing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              And I was <span className="italic">upset</span>. Which was ridiculous because we weren't even officially together yet. But I couldn't help it — I'd gotten used to you being there.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed italic text-purple-600 mb-4">
              You noticed. You apologized. And the way you handled it — with so much maturity and care — made me think, "Wow. This is a good man."
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              That's when I started falling. Not because of grand gestures, but because of moments like that. The quiet ones. The real ones.
            </p>
          </div>
        </ScrollReveal>

        {/* Bengal */}
        <ScrollReveal delay={1}>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-blue-500" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                When You Left for Home
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Then you had to go home to Bengal. And even though we weren’t dating — even though we were both pretending we were “cool” about whatever was happening — I still felt sad. More than I expected to.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I tried acting normal, like it didn’t bother me. But you saw right through me, didn't you? You always do.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I remember sitting with you at the bus stop before you left. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
  And then you said something I didn’t expect — something so honest it completely caught me off guard:  
  <span className="italic text-pink-600">“No matter where I go… a piece of my heart will be wherever you are. I can’t rest properly when you’re not with me.” </span>  
  I won’t lie… that line? That melted me on the spot. 
</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              While you were home, we kept talking — just more honest conversations. Little by little, we started opening up about things we didn’t normally share with other people.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold text-purple-700 mb-4">
              The first feeling I had for you wasn't attraction. It was respect.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              You told me about your childhood — how people teased you for your stutter, and how your father taught you something that shaped you: to stand firm and care only about the opinions that truly matter.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              You weren't insecure. You weren't bitter. You grew through it all with such grace and strength.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed italic text-blue-600">
              That maturity? That quiet confidence? It hit me harder than anything else could have.
            </p>
          </div>
        </ScrollReveal>

        {/* Cubbon Park - The Chaos */}
        <ScrollReveal delay={2}>
          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                September 20 — The Almost-Day
              </h3>
              <div className="text-6xl mb-4">🌳</div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              You came back. And we finally made plans to meet at Cubbon Park on September 20.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
             You had your own plan too — you were going to tell me how you felt. That was supposed to be <span className="italic">the</span> day — the official beginning of us.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              But then my period decided to crash the party. Full surprise attack. Stained pants. Zero warning. The universe really said: “Not today.”
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              And you? You didn't panic. You didn't make it awkward. You stayed calm, made sure I felt okay, got me home safely.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed italic text-pink-600">
              And honestly? That moment said more about you than any proposal ever could.
            </p>
          </div>
        </ScrollReveal>

        {/* September 21 - The Real Day */}
        <ScrollReveal delay={1}>
          <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl p-8 md:p-12 shadow-xl border-4 border-pink-300 hover:shadow-2xl transition-shadow duration-300">
            <div className="text-center mb-8">
              <div className="text-7xl mb-4">💖</div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                September 21
              </h3>
              <p className="text-xl text-purple-600 font-semibold">
                The Day You Asked
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center">
              The next day — September 21 — we tried again. Same place, same plan, but this time the universe behaved. No chaos, no disasters, just… us.
            </p>
            <p className="text-2xl text-gray-800 font-bold text-center mb-4">
              And you asked. 💕
            </p>
            <p className="text-2xl text-gray-800 font-bold text-center mb-4">
              And I said yes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center italic text-purple-600">
              Just like that, everything changed. We became official. We became <span className="font-semibold">us</span>.
            </p>
          </div>
        </ScrollReveal>

        {/* Our Park */}
        <ScrollReveal delay={2}>
          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Our Place
              </h3>
              <div className="text-6xl mb-4">🌿</div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              After that, while you were dropping me home, we found it — the park. Our park. Near the bus stop, quiet and hidden like it was waiting for us to find it.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              And that’s where we hugged. Not a quick, polite hug — the kind that lasts because neither person wants to let go. The kind that makes everything else around you fade out for a moment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed italic text-pink-600 mb-4">
              (And yes, your hands <span className="italic">did</span> slide up the back of my shirt. You were bold like that. Still are, honestly. 😏)
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              From that day on, the park became ours. After college, we'd walk there together, hand in hand, heading straight to our little spot like it was a daily ritual. Hours would disappear while we talked, laughed, teased each other, and stole quiet moments — those soft waist-hugs where I’d lean into you without even thinking about it.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold text-purple-700">
              It was simple. Soft. Real. The kind of beginning that feels gentle and safe — like finding a place that already feels like home.
            </p>
          </div>
        </ScrollReveal>

        {/* October 9 - First Kiss */}
        <ScrollReveal delay={1}>
          <div className="bg-gradient-to-br from-red-100 to-pink-200 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="text-center mb-8">
              <div className="text-7xl mb-4">💋</div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                October 9
              </h3>
              <p className="text-xl text-pink-600 font-semibold">
                Our First Kiss
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Remember what I told you?
            </p>
            <p className="text-xl text-gray-800 font-semibold text-center my-6 px-4 py-3 bg-white rounded-lg shadow-sm">
              "If you quit smoking and never touch a cigarette again, I'll kiss you."
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              And you quit.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed italic text-pink-700 mb-4">
              Our first kiss happened under that old tree in our park — the one that’s gone now. Every time I think about it, it feels unreal that the tree isn’t there anymore, but the moment still lives in my head so clearly.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The park has changed so much. We don’t go there anymore — it wouldn’t feel like the same place anyway... and sometimes I miss it more than I should.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold text-purple-700">
              But those memories? The feeling of that first kiss, your arms around me, the way my heart raced? Those are untouched. Forever ours.
            </p>
          </div>
        </ScrollReveal>

        {/* Growing Together */}
        <ScrollReveal delay={2}>
          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Growing Together
              </h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
               As time went on, the park stopped being enough for us. Not because we didn’t love it, but because some moments — the real, vulnerable, close ones — needed a space that felt a little more private. A space just for us. So we started going to hotel rooms.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              In the beginning, I was terrified. My heart would race. But you? You were always the steady one. Calm. Gentle. You never rushed me. Never crossed a line. Never made me feel like I had to do anything before I was ready.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              You always made sure I felt safe. That I was okay. That everything we did was because <span className="italic">we</span> wanted to, together. You made everything feel safe. Soft. Ours.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed italic text-purple-600">
              Those moments were ours — private, tender, real. The kind of memories that make me smile out of nowhere, blush at the smallest thought, and feel grateful that we learned each other slowly… and together.
            </p>
          </div>
        </ScrollReveal>

        {/* Photo Section */}
        <ScrollReveal delay={1}>
  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
    
    <div className="flex items-center gap-3 mb-8 justify-center">
      <Camera className="w-8 h-8 text-purple-500" />
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
        Us 💕
      </h3>
    </div>

    <div className="bg-white rounded-2xl p-4 shadow-lg flex justify-center">
      <img
        src="/11.jpg"
        alt="Us"
        className="rounded-xl w-auto h-auto max-w-full"
      />
    </div>

    <p className="text-center text-gray-600 mt-6 italic">
      Ugh, I just want to kiss you so badly… come here, umwahh😘
    </p>
  </div>
</ScrollReveal>

        {/* Looking Forward */}
        <ScrollReveal delay={2}>
          <div className="bg-gradient-to-br from-yellow-100 to-pink-200 rounded-3xl p-8 md:p-12 shadow-xl text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="text-7xl mb-6">✨</div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              And Now...
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Sometimes I catch myself thinking about how far we’ve come, and it still feels a bit unreal.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              When I think about the future now, I think about home — the one we’ll build together.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
               I imagine our little family too. Two kids, a warm house, laughter in every corner, and us figuring things out side by side.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              That’s the future I’m holding onto. Our home. Our family. Our peace.
            </p>
            <p className="text-lg text-gray-600 mt-6 italic">
              And I can’t wait for the day it’s real. We have so many more chapters to write together.
            </p>
          </div>
        </ScrollReveal>

        {/* Surprise Button */}
        <ScrollReveal delay={1}>
          <div className="text-center py-20">
            {!showSurprise ? (
              <button
                onClick={() => setShowSurprise(true)}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 py-6 rounded-full text-2xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
              >
                Click for a Surprise 🎁
              </button>
            ) : (
              <div className="bg-white/80 backdrop-blur rounded-3xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto relative">
                {/* Heart Rain Effect */}
                <div className="fixed inset-0 pointer-events-none z-50">
                  {[...Array(30)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-pink-400 animate-heart-rain"
                      style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${3 + Math.random() * 2}s`,
                        fontSize: `${20 + Math.random() * 20}px`,
                      }}
                    >
                      ❤️
                    </div>
                  ))}
                </div>
                
                <div className="text-7xl mb-6">💝</div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Happy Birthday, Babyyy
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Thank you for walking up to me in that cafeteria and saying "let's be friends" like it was the most normal thing in the world.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Thank you for being the person who actually sees me — all of me — and still chooses me every single day.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Thank you for every good morning text that made me smile before I even got out of bed, every good night message that made me fall asleep happy.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Thank you for every hug that felt like home, every kiss that made my heart race, every moment you made me feel safe, seen, and loved.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Thank you for quitting smoking for me. For handling my chaos with grace. For being patient when I was scared. For never making me feel anything less than cherished.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                   Sometimes I feel like I'm a terrible girlfriend and you deserve someone calmer, someone who doesn't freak out or get overwhelmed so easily…
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mb-4">
                  Thank you for staying — even when I made it hard. Thank you for choosing me, again and again.
                </p>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mt-8">
                  I love you so much, baby. More than I knew I could love anyone. 💕
                </p>
                <p className="text-lg text-gray-600 mt-6 italic">
                  Here's to another year of us — and every year after that, for as long as we both shall live. ✨
                </p>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-100vh) rotate(360deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-in 0.5s backwards;
        }
        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-in 1s backwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}