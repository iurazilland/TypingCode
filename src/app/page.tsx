import Link from 'next/link';
import styles from './Landing.module.css';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Master Coding <br />
            <span className={styles.accent}>Typing & Syntax</span>
          </h1>
          <p className={styles.subtitle}>
            Boost your coding speed and accuracy with our interactive typing practice platform.
            Support for Python, JavaScript, C++, and more. Real-time execution and gamified progression.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/practice" className={styles.primaryBtn}>
              Start Practice
            </Link>
            <Link href="/signup" className={styles.secondaryBtn}>
              Create Account
            </Link>
          </div>
        </div>
        {/* Visual/Image Placeholder */}
        <div className={styles.heroVisual}>
          <div className={styles.codeWindow}>
            <div className={styles.codeHeader}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
            <pre className={styles.codeContent}>
              <code>
                <span style={{ color: '#c678dd' }}>class</span> <span style={{ color: '#e5c07b' }}>TypingMaster</span>:{'\n'}
                <span style={{ color: '#c678dd' }}>def</span> <span style={{ color: '#61afef' }}>__init__</span>(<span style={{ color: '#e06c75' }}>self</span>, <span style={{ color: '#d19a66' }}>language</span>):{'\n'}
                <span style={{ color: '#e06c75' }}>self</span>.language = language{'\n'}
                <span style={{ color: '#e06c75' }}>self</span>.wpm = <span style={{ color: '#d19a66' }}>0</span>{'\n'}
                {'\n'}
                <span style={{ color: '#c678dd' }}>def</span> <span style={{ color: '#61afef' }}>practice</span>(<span style={{ color: '#e06c75' }}>self</span>):{'\n'}
                <span style={{ color: '#7f848e' }}># Analyze typing speed</span>{'\n'}
                <span style={{ color: '#c678dd' }}>if</span> <span style={{ color: '#e06c75' }}>self</span>.wpm &gt; <span style={{ color: '#d19a66' }}>100</span>:{'\n'}
                <span style={{ color: '#e06c75' }}>print</span>(<span style={{ color: '#98c379' }}>"Unstoppable!"</span>){'\n'}
                <span style={{ color: '#c678dd' }}>else</span>:{'\n'}
                <span style={{ color: '#e06c75' }}>print</span>(<span style={{ color: '#98c379' }}>"Keep going!"</span>){'\n'}
                {'\n'}
                <span style={{ color: '#c678dd' }}>def</span> <span style={{ color: '#61afef' }}>main</span>():{'\n'}
                coder = <span style={{ color: '#e5c07b' }}>TypingMaster</span>(<span style={{ color: '#98c379' }}>"Python"</span>){'\n'}
                coder.practice(){'\n'}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <h3>Real-time Execution</h3>
          <p>Run your Python code instantly in the browser with Pyodide engine.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Smart Typing Guide</h3>
          <p>Visual hints and ghost hands help you build muscle memory for special characters.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Progression System</h3>
          <p>Advance through 100+ levels from basic syntax to complex algorithms.</p>
        </div>
      </section>
    </div>
  );
}
