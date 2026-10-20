
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import "./MySide.css";

import frog from "../assets/random.png";


const chapters = [
  {
    number: "01",
    title: "A world I keep small",
    paragraphs: [
      "I'm someone who can talk to a lot of people, but when it comes to the people I let close to me, I'm selective. My world has always been small in the ways that matter most to me. It's Anzu, my chechi, and my parents. I value the peace I share with the people I love, and I've always wanted to protect it.",
      "When I entered this relationship, I brought something with me that I hadn't completely healed from.",
    ],
  },
  {
    number: "02",
    title: "The fear I carried",
    paragraphs: [
      "Before Anzu, I went through a painful breakup involving a third person. I remember trying so hard to be the “cool girlfriend” — the one who never questioned anything, never made a fuss, and never admitted when something hurt her.",
      "I thought being understanding meant keeping my discomfort to myself. I thought that if I never seemed jealous or bothered, maybe I could prevent anything from going wrong.",
      "But that relationship still ended, and I was left with fears I didn't really know how to understand, let alone heal from.",
      "So when I chose Anzu, I didn't just want a relationship. I wanted to feel safe in one. I wanted to love someone without constantly wondering whether something I couldn't see was slowly taking them away from me.",
    ],
  },
  {
    number: "03",
    title: "When fear started speaking for me",
    paragraphs: [
      "Then came the incident with Ebina.",
      "When someone shared a picture and asked whether Ebina and Anzu were in a relationship, something in me just sank. I tried calling Anzu, and when he didn't answer, I didn't know that he had fallen asleep. In that moment, my mind filled in the blanks with the thing I was most afraid of.",
      "I was scared, and I mistook that fear for certainty.",
      "Looking back, I realise I was reacting to what I imagined was happening, not necessarily what was happening. I should have given Anzu the chance to explain before allowing my assumptions to take over.",
    ],
  },
  {
    number: "04",
    title: "The things I began to see differently",
    paragraphs: [
      "And then there was the comment I saw between you and Karthik.",
      "Maybe you meant nothing by it. Maybe I interpreted it through the lens of everything I was already afraid of. But at the time, I saw it differently. I felt as though something precious to me wasn't being understood or respected, and I began looking at you and the entire group through that feeling.",
      "From that point on, things changed for me. It became harder to trust the situation, harder to feel at peace, and easier to become angry. Even small things started turning into arguments between Anzu and me.",
      "I was so busy trying to protect my relationship from something I feared might happen that I didn't stop to recognise the damage my own reactions were causing.",
    ],
  },
];

function Chapter({ chapter, index, reduceMotion }) {
  return (
    <motion.section
      className="story-chapter"
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.05 }}
    >
      <div className="chapter-number">{chapter.number}</div>

      <div className="chapter-content">
        <span className="chapter-kicker">
          CHAPTER {chapter.number}
        </span>

        <h2>{chapter.title}</h2>

        {chapter.paragraphs.map((paragraph, paragraphIndex) => (
          <p key={`${index}-${paragraphIndex}`}>{paragraph}</p>
        ))}
      </div>
    </motion.section>
  );
}

export default function MySide({ onBack, onContinue }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.main
      className="my-side-page"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
      transition={{ duration: 0.55 }}
    >
      <div className="my-side-glow my-side-glow-one" />
      <div className="my-side-glow my-side-glow-two" />


      <div className="my-side-fireflies" aria-hidden="true">
        {Array.from({ length: 65 }, (_, i) => (
          <span
            key={i}
            style={{
              "--firefly-left": `${(i * 47 + 11) % 100}%`,
              "--firefly-top": `${(i * 31 + 5) % 100}%`,
              "--firefly-delay": `${(i % 13) * -0.7}s`,
              "--firefly-duration": `${5 + (i % 7)}s`,
              "--firefly-size": `${2 + (i % 4)}px`,
              "--firefly-drift": `${((i % 5) - 2) * 24}px`,
            }}
          />
        ))}
      </div>


      <header className="my-side-header">
        <button className="my-side-back" onClick={onBack}>
          <ArrowLeft size={16} />
          <span>Back to my apology</span>
        </button>

        <div className="my-side-eyebrow">
          <Sparkles size={14} />
          <span>A LITTLE MORE OF MY HEART</span>
          <Sparkles size={14} />
        </div>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          How I Made Everything
          <em> 10x Worse</em>
        </motion.h1>

        <p className="my-side-subtitle">
          Maybe this will help you understand me a little better.
        </p>

        <div className="my-side-ornament" aria-hidden="true">
          <span />
          <Heart size={15} />
          <span />
        </div>
         <span className="landing-chapter">CHAPTER 03 / 05</span>

        <p className="my-side-disclaimer">
          A little context about my feelings — not an excuse for my actions.
        </p>
      </header>

      <article className="my-side-paper">
        <div className="paper-corner paper-corner-top" />
        <div className="paper-corner paper-corner-bottom" />

        <div className="paper-intro">
          <span className="paper-label">A PERSONAL CHAPTER</span>
          <h2>What was happening inside me</h2>
          <p>
            Some of my reactions came from places I hadn't healed.
            That doesn't make them right, but I want to be honest about them.
          </p>
        </div>

        <div className="story-timeline">
          {chapters.map((chapter, index) => (
            <Chapter
              key={chapter.number}
              chapter={chapter}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        <motion.div
          className="story-divider"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span />
          <Sparkles size={17} />
          <span />
        </motion.div>

        <section className="story-chapter love-chapter">
          <div className="chapter-number">05</div>

          <div className="chapter-content">
            <span className="chapter-kicker">CHAPTER 05</span>
            <h2>The love I was afraid of losing</h2>

            <p>
              I know how deeply I love Anzu. I know how much effort I've put
              into this relationship, how much it means to me, and how many
              memories I still want to make with him.
            </p>

            <p>
              He has made me feel loved in ways I'll always treasure. He has
              treated me like a queen, and I want to enjoy every moment I get
              to share with him.
            </p>

            <p>
              Maybe that's why the thought of losing him felt so frightening.
              Somewhere along the way, I started treating that fear as a reason
              to react instead of a feeling I needed to understand.
            </p>
          </div>
        </section>

        <motion.div
          className="my-side-sticker"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            className="sticker-frog"
            src={frog}
            alt="A little illustration"
          />

          <div className="sticker-note">
            <Sparkles size={14} />
            <span>Fear is a feeling, not proof.</span>
            <Sparkles size={14} />
          </div>
        </motion.div>


        <section className="accountability-card">
          <div className="accountability-icon">
            <ShieldCheck size={23} />
          </div>

          <span className="chapter-kicker">WHAT I UNDERSTAND NOW</span>

          <h2>My feelings were real. My assumptions weren't facts.</h2>

          <p>
            But Athifa, none of this makes the things I said to you okay.
          </p>

          <p>
            My past explains why certain situations hurt me so deeply. It
            doesn't give me the right to decide what your intentions were,
            judge your character, bring your family into an argument, or say
            things designed to hurt you.
          </p>

          <p>
            I could have communicated my discomfort. I could have stepped
            away. I could have spoken with Anzu about my fears without turning
            those fears into anger towards you.
          </p>

          <p>
            I didn't handle things that way, and I'm sorry.
          </p>
        </section>

        <section className="story-chapter final-chapter">
          <div className="chapter-number">06</div>

          <div className="chapter-content">
            <span className="chapter-kicker">CHAPTER 06</span>
            <h2>The part I need to own</h2>

            <p>
              I'm not telling you all this because I expect you to agree with
              me or see everything exactly as I did. I'm sharing it because I
              don't want my actions to be the only thing that explains who I
              am, and because I want to take responsibility for the parts of
              this situation that were mine to handle better.
            </p>

            <p>
              I was hurt, scared, and overwhelmed. But you were a person with
              feelings of your own, and I should never have forgotten that.
            </p>

            <p className="final-emphasis">
              You didn't deserve the things I said to you, regardless of what
              I believed was happening.
            </p>

            <p className="final-apology">I'm truly sorry for that, Athifa.</p>
          </div>
        </section>

        <footer className="my-side-signoff">
          <div className="signoff-heart">
            <Heart size={20} />
          </div>
          <p>
            This isn't me asking you to forget what happened.
            <br />
            It's me trying to understand it, own it, and do better.
          </p>
          <span className="signoff-script">With honesty, not excuses.</span>
        </footer>
      </article>

      <footer className="my-side-page-footer">
        <span>MADE WITH A LITTLE COURAGE</span>
        <span className="footer-dot">✦</span>
        <span>AND A LOT OF HONESTY</span>
      </footer>

      {onContinue && (
        <div className="my-side-next-wrap">
          <p>Thank you for reading this far.</p>
          <button className="my-side-next" onClick={onContinue}>
            Continue
            <ArrowRight size={17} />
          </button>
        </div>
      )}
    </motion.main>
  );
}
