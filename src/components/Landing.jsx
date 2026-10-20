import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import "./Landing.css";

import sticker from "../assets/blah.png";
import frog from "../assets/frog.png";

const fireflies = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  left: `${(i * 37.7 + 11) % 100}%`,
  top: `${(i * 23.9 + 8) % 100}%`,
  size: 2 + (i % 4),
  delay: (i % 9) * 0.45,
  duration: 3 + (i % 6),
}));

function Landing({ onEnter }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="landing-background" />
      <div className="landing-glow landing-glow-one" />
      <div className="landing-glow landing-glow-two" />

      {/* Floating golden fireflies */}
      <div className="fireflies" aria-hidden="true">
        {fireflies.map((fly) => (
          <motion.span
            key={fly.id}
            className="firefly"
            style={{
              left: fly.left,
              top: fly.top,
              width: fly.size,
              height: fly.size,
            }}
            animate={
              reduceMotion
                ? {}
                : {
                    y: [0, -22, 12, 0],
                    x: [0, 12, -9, 0],
                    opacity: [0.2, 1, 0.35, 0.2],
                    scale: [0.7, 1.5, 0.8, 0.7],
                  }
            }
            transition={{
              duration: fly.duration,
              delay: fly.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Decorative doodles */}
      <motion.span
        className="floating-doodle doodle-one"
        animate={reduceMotion ? {} : { y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        aria-hidden="true"
      >
        ✧
      </motion.span>

      <motion.span
        className="floating-doodle doodle-two"
        animate={reduceMotion ? {} : { rotate: [0, 30, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        aria-hidden="true"
      >
        ✦
      </motion.span>

      <motion.span
        className="floating-doodle doodle-three"
        animate={reduceMotion ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        aria-hidden="true"
      >
        ♡
      </motion.span>

      {/* Header */}
      <header className="landing-header">
        <a href="#home" className="landing-logo">
          <span className="logo-star" aria-hidden="true">✧</span>
          For Athifa
        </a>

        <span className="landing-chapter">CHAPTER 01 / 05</span>
      </header>

      {/* Main content */}
      <main className="landing-main" id="home">
        {/*
          .landing-text groups heading, description and button for the
          desktop left column. On phones/tablets it uses display: contents,
          so the order becomes: heading → illustration → description → button.
        */}
        <div className="landing-text">
          {/* 1. Heading with frog beside it */}
          <div className="landing-intro">
            <div className="landing-copy">
              <motion.p
                className="landing-kicker"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                ✦ A little something I made for you ✦
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                A little
                <br />
                <em>apology</em>
                <br />
                for a big
                <br />
                heart<span className="landing-period">.</span>
              </motion.h1>

              <motion.div
                className="landing-heart-icon"
                animate={reduceMotion ? {} : { scale: [1, 1.15, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                aria-hidden="true"
              >
                <span className="heart-line" />
                <Heart size={22} strokeWidth={1.5} />
                <span className="heart-line" />
              </motion.div>
            </div>

            <motion.img
              src={frog}
              alt="A cute little frog"
              className="frog-sticker"
              draggable={false}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                reduceMotion
                  ? { opacity: 1, scale: 1 }
                  : {
                      opacity: 1,
                      scale: 1,
                      y: [0, -7, 0],
                      rotate: [-4, 3, -4],
                    }
              }
              transition={{
                opacity: { delay: 0.6, duration: 0.7 },
                scale: { delay: 0.6, duration: 0.7 },
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          </div>

          {/* 3. Description */}
          <motion.div
            className="landing-description"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <p>Not every story unfolds the way we wish it would.</p>
            <p>Sometimes, words and feelings get tangled.</p>
            <p>
              This is my little attempt to make things right,
              <span className="landing-recipient"> Athifa.</span>
            </p>
          </motion.div>

          {/* 4. Button */}
          <motion.div
            className="landing-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.button
              type="button"
              className="landing-enter"
              onClick={onEnter}
              whileHover={reduceMotion ? {} : { scale: 1.05 }}
              whileTap={reduceMotion ? {} : { scale: 0.96 }}
            >
              A little more, if you&apos;ll listen
              <ArrowRight size={17} aria-hidden="true" />
            </motion.button>

            <span className="landing-handwritten">with a sincere heart ♡</span>
          </motion.div>
        </div>

        {/* 2. Illustration */}
        <motion.div
          className="landing-art"
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="sticker-halo" aria-hidden="true" />
          <div className="art-magic-circle" aria-hidden="true" />

          <motion.img
            src={sticker}
            alt="Fairytale illustration made for Athifa"
            className="girl-sticker"
            draggable={false}
            animate={reduceMotion ? {} : { y: [0, -9, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <Sparkles className="art-sparkle art-sparkle-one" size={28} aria-hidden="true" />
          <Sparkles className="art-sparkle art-sparkle-two" size={20} aria-hidden="true" />
          <Sparkles className="art-sparkle art-sparkle-three" size={16} aria-hidden="true" />

          <span className="art-note">
            you deserve better
            <br />
            a little note,
            <br />
            just for you ♡
          </span>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        <span>A LITTLE NOTE</span>
        <span className="footer-star" aria-hidden="true">✧</span>
        <span>A SINCERE HEART</span>
      </footer>
    </motion.section>
  );
}

export default Landing;