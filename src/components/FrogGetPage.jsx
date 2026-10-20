
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowLeft, Heart, Sparkles } from "lucide-react";
import frogImage from "../assets/froggy.png";
import "./FrogGetPage.css";

export default function FrogGetPage({
    onBack,
    onContinue,
    hypnosisImage,
    coupleImage
}) {
    const reducedMotion = useReducedMotion();
    const quoteRef = useRef(null);
    const smallImageRef = useRef(null);

    const quoteInView = useInView(quoteRef, {
        once: true,
        amount: 0.25,
    });

    const imageInView = useInView(smallImageRef, {
        once: true,
        amount: 0.2,
    });

    return (
        <main className="frog-get-page">
            <div className="frog-get-glow frog-get-glow-one" />
            <div className="frog-get-glow frog-get-glow-two" />

            {/* Back button */}
            <header className="frog-get-header">
                {onBack && (
                    <button
                        type="button"
                        className="frog-get-back"
                        onClick={onBack}
                    >
                        <ArrowLeft size={16} />
                        Back
                    </button>
                )}

                <span className="frog-get-eyebrow">
                    <Sparkles size={14} />
                    A tiny enchanted detour
                    <Sparkles size={14} />
                </span>
                 <span className="landing-chapter">CHAPTER 04 / 05</span>
            </header>

            {/* 1. Hypnosis image */}
            <section className="frog-get-hero">
                <p className="frog-get-kicker">
                    Shhh… the frog has a very important mission.
                </p>

                <motion.div
                    className="frog-get-orbit"
                    initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9 }}
                >
                    <div className="frog-get-orbit-ring" />

                    <motion.div
                        className="frog-get-hypnosis-image"
                        animate={
                            reducedMotion
                                ? undefined
                                : { rotate: 360 }
                        }
                        transition={
                            reducedMotion
                                ? undefined
                                : {
                                    duration: 18,
                                    repeat: Infinity,
                                    ease: "linear",
                                }
                        }
                    >
                        <img
                            src={hypnosisImage || frogImage}
                            alt="The magical hypnosis image"
                        />
                    </motion.div>

                    <span className="frog-get-sparkle sparkle-one">✦</span>
                    <span className="frog-get-sparkle sparkle-two">✧</span>
                    <span className="frog-get-sparkle sparkle-three">♡</span>
                </motion.div>

            </section>

            {/* 2. Funny forgiveness quote */}
            <section className="frog-get-quote-section" ref={quoteRef}>
                <motion.div
                    className="frog-get-quote-card"
                    initial={
                        reducedMotion
                            ? false
                            : { opacity: 0, y: 35, rotate: -2 }
                    }
                    animate={
                        quoteInView
                            ? { opacity: 1, y: 0, rotate: 0 }
                            : undefined
                    }
                    transition={{ duration: 0.85, ease: "easeOut" }}
                >
                    <img
                        src={frogImage}
                        alt="Cute frog"
                        className="frog-get-quote-frog"
                    />

                    <p className="frog-get-handwriting">
                        A tiny message from the frog council…
                    </p>

                    <h1>
                        You are now under
                        <span> froggy hypnosis.</span>
                    </h1>

                    <div className="frog-get-divider">
                        <span />
                        <Sparkles size={16} />
                        <span />
                    </div>

                    <p className="frog-get-main-quote">
                        You will forget what happened…
                        <br />
                        You will remember that I am adorable…
                        <br />
                        And you will consider forgiving me.
                    </p>

                    <p className="frog-get-funny-note">
                        *Hypnosis may not work on stubborn humans.
                        Results may vary. Frog accepts no responsibility.* ♡
                    </p>

                    <p className="frog-get-final-line">
                        Okay, seriously… I'm sorry. Can I have one tiny smile?
                    </p>
                </motion.div>
            </section>

            {/* 3. Small image underneath */}
            <section className="frog-get-small-image-section" ref={smallImageRef}>
                <motion.div
                    className="frog-get-small-image-content"
                    initial={reducedMotion ? false : { opacity: 0, y: 25 }}
                    animate={
                        imageInView
                            ? { opacity: 1, y: 0 }
                            : undefined
                    }
                    transition={{ duration: 0.8 }}
                >
                    <p className="frog-get-memory-label">
                        <Heart size={14} fill="currentColor" />
                        One little memory
                        <Heart size={14} fill="currentColor" />
                    </p>

                    {coupleImage ? (
                        <img
                            className="frog-get-small-image"
                            src={coupleImage}
                            alt="A little memory together"
                        />
                    ) : (
                        <img
                            className="frog-get-small-image"
                            src={frogImage}
                            alt="A little frog sending love"
                        />
                    )}

                    <p className="frog-get-caption">
                        From one silly little frog, with love. ♡
                    </p>
                </motion.div>

            </section>

            <motion.button
                className="frog-get-continue"
                onClick={onContinue}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
            >
                One last thing ✨ →
            </motion.button>

            <footer className="frog-get-footer">
                Made with a little magic
                <Heart size={13} fill="currentColor" />
                and a hopeful heart
            </footer>
        </main>
    );
}
