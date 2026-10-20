
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Heart, Sparkles } from "lucide-react";
import "./ApologyLetter.css";
import { ArrowRight } from "lucide-react";


import frog from "../assets/forgive.png";
import athifaPhoto from "../assets/thuhh.png";
import sticker from "../assets/blah.png";

const stars = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    left: `${(i * 41 + 7) % 100}%`,
    top: `${(i * 29 + 11) % 100}%`,
    delay: (i % 8) * 0.35,
    duration: 3 + (i % 5),
}));

function ApologyLetter({ onBack,onContinue }) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.section
            className="apology-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
        >
            <div className="apology-background" />
            <div className="apology-glow" />

            <div className="apology-stars" aria-hidden="true">
                {stars.map((star) => (
                    <motion.span
                        key={star.id}
                        className="apology-star"
                        style={{
                            left: star.left,
                            top: star.top,
                        }}
                        animate={
                            reduceMotion
                                ? {}
                                : {
                                    opacity: [0.2, 1, 0.3],
                                    scale: [0.7, 1.3, 0.7],
                                    y: [0, -12, 0],
                                }
                        }
                        transition={{
                            duration: star.duration,
                            delay: star.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <header className="apology-header">
                <button
                    type="button"
                    className="apology-back"
                    onClick={onBack}
                >
                    <ArrowLeft size={16} />
                    <span>Back to the beginning</span>
                </button>

                 <span className="landing-chapter">CHAPTER 02 / 05</span>
            </header>

            <main className="apology-main">
                <motion.div
                    className="letter-heading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="letter-eyebrow">
                        ✧ A LETTER WRITTEN WITH SINCERITY ✧
                    </span>

                    <h1>
                        A letter from
                        <br />
                        <em>my heart.</em>
                    </h1>

                    <div className="letter-heading-divider">
                        <span />
                        <Heart size={17} />
                        <span />
                    </div>

                    <p>For Athifa, with a sincere heart ♡</p>
                </motion.div>

                <motion.article
                    className="royal-letter"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.9 }}
                >
                    <div className="letter-inner-border" />

                    <div className="letter-top-ornament">
                        <span>✧</span>
                        <span className="ornament-line" />
                        <Heart size={20} />
                        <span className="ornament-line" />
                        <span>✧</span>
                    </div>

                    <div className="letter-salutation">
                        My dearest Athifa,
                    </div>

                    <div className="letter-body">
                        <p>
                            Athifa, I'm genuinely sorry.
                        </p>

                        <p>
                            I owe you an apology, and I don't want to hide
                            behind my emotions or explain away the things
                            I've said to you.
                        </p>

                        <p>
                            I've said things that were hurtful, personal,
                            and completely unnecessary. Telling you to ask
                            your parents to get you ready for marriage was
                            one of those things. It was disrespectful, and
                            I had no right to bring your family or your
                            personal life into an argument like that.
                        </p>

                        <p>
                            There were other things I said, too, that I
                            should never have said to you. No matter how
                            upset, insecure, or overwhelmed I was feeling,
                            that didn't give me the right to speak to you
                            that way.
                        </p>

                        <p>
                            You didn't deserve to have personal things
                            thrown at you just because I was struggling
                            with my own emotions.
                        </p>

                        <div className="letter-sticker">
                            <span className="sticker-sparkle sticker-sparkle-left">
                                ✧
                            </span>

                            <motion.img
                                src={frog}
                                alt="A little frog sending a heartfelt apology"
                                animate={
                                    reduceMotion ? {} : { y: [0, -6, 0] }
                                }
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            <span className="sticker-caption">
                                a little heart, a sincere sorry ♡
                            </span>

                            <span className="sticker-sparkle sticker-sparkle-right">
                                ✦
                            </span>
                        </div>

                        <p>
                            I'm not writing this to prove that I had a
                            reason for everything, or to make you
                            understand my side before you can be upset
                            with me. I understand that my words may have
                            hurt you in ways I didn't stop to think about
                            at the time.
                        </p>

                        <p>
                            I wish I'd handled things differently. I wish
                            I'd taken a step back instead of saying things
                            I can't take back.
                        </p>

                        <p>
                            I'm truly sorry for the things I said, for
                            crossing boundaries I should have respected,
                            and for the hurt I caused you.
                        </p>

                        <p>
                            You don't owe me immediate forgiveness, a
                            reply, or reassurance that everything is okay.
                            I just wanted to acknowledge what I did wrong
                            and apologise to you sincerely.
                        </p>
                    </div>

                    <div className="letter-memory">
                        <div className="memory-frame">
                            <img
                                src={athifaPhoto}
                                alt="Athifa"
                                loading="lazy"
                            />
                            <span className="memory-frame-heart">♡</span>
                        </div>

                        <div className="memory-caption">
                            <span>For someone who matters</span>
                            <p>A little space, just for you.</p>
                        </div>
                    </div>

                    <div className="letter-closing">
                        <span className="closing-label">
                            With a genuinely sorry heart,
                        </span>

                        <p className="closing-message">
                            I'm sorry, Athifa. I really made it worse,
                            but I'm apologizing for that.
                        </p>

                        <div className="closing-heart">
                            <span />
                            <Heart size={19} />
                            <span />
                        </div>
                    </div>

                    <div className="letter-seal" aria-hidden="true">
                        <Heart size={23} fill="currentColor" />
                    </div>
                </motion.article>

                {onContinue && (
                    <button
                        className="letter-continue-button"
                        onClick={onContinue}
                    >
                        A little more about me
                        <ArrowRight size={16} />
                    </button>
                )}

                <motion.div
                    className="letter-footer-note"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <Sparkles size={15} />
                    <span>
                        No expectations. Just an apology from my heart.
                    </span>
                    <Sparkles size={15} />
                </motion.div>
            </main>

            <footer className="apology-footer">
                <span>A LETTER FROM THE HEART</span>
                <span>✧</span>
                <span>WRITTEN FOR ATHIFA</span>
            </footer>
        </motion.section>
    );
}

export default ApologyLetter;
