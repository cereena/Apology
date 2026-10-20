
import { motion, useReducedMotion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import "./LastPage.css";

const fireflies = [
  { left: "8%", top: "15%", delay: 0 },
  { left: "20%", top: "72%", delay: 1.2 },
  { left: "35%", top: "12%", delay: 2.1 },
  { left: "48%", top: "86%", delay: 0.7 },
  { left: "65%", top: "18%", delay: 1.8 },
  { left: "78%", top: "68%", delay: 0.4 },
  { left: "91%", top: "28%", delay: 2.5 },
  { left: "13%", top: "45%", delay: 1.5 },
  { left: "87%", top: "85%", delay: 0.9 },
  { left: "57%", top: "48%", delay: 2.8 },
  { left: "29%", top: "91%", delay: 1.1 },
  { left: "72%", top: "8%", delay: 0.3 },
];

export default function LastPage({
  backgroundImage,
  letterBackground,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.main
      className="last-page"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
      initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
    >
      <div className="last-page-overlay" />

       <span className="landing-chapter">CHAPTER 05 / 05</span>

      <div className="last-page-fireflies" aria-hidden="true">
        {fireflies.map((fly, index) => (
          <span
            key={index}
            className="last-page-firefly"
            style={{
              left: fly.left,
              top: fly.top,
              "--delay": `${fly.delay}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="last-page-content"
        style={{
          backgroundImage: `url("${letterBackground}")`,
        }}
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <div className="last-page-decoration">
          <Sparkles size={15} />
          <span>A ROYAL NOTE FROM MY HEART</span>
          <Sparkles size={15} />
        </div>

        <h1 className="last-page-title">
          One last thing...
        </h1>

        <div className="last-page-divider">
          <span />
          <Heart size={15} fill="currentColor" />
          <span />
        </div>

        <div className="last-page-letter">
          <p>
            I can't undo what I've said, and I can't expect a few
            paragraphs on a website to make everything okay.
          </p>

          <p>
            But I can acknowledge where I went wrong, apologise
            sincerely, and try to become someone who handles difficult
            feelings with more kindness than I did.
          </p>

          <p>
            You don't have to forgive me today, tomorrow, or ever if
            you're not ready. You don't owe me a conversation just
            because I finally found the words I should have used earlier.
          </p>

          <p>
            I just wanted you to know that I'm sorry, and that I
            genuinely wish you well.
          </p>
        </div>

        <div className="last-page-signoff">
          <span className="last-page-with">
            With sincerity,
          </span>

          <p className="last-page-signature">
            The girl who should've handled things differently. 🤍
          </p>
        </div>
      </motion.div>

      <div className="last-page-footer">
        Some words come late, but they can still be sincere.
      </div>
    </motion.main>
  );
}
