import { useEffect, useState } from "react";
import questions from "./data/data.ts";

const App: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(
    localStorage.getItem("bingAutoRefresh") === "true"
  );
  const [count, setCount] = useState<number>(30);

  useEffect(() => {
    let mainInterval: ReturnType<typeof setInterval> | null = null;
    const subTimeouts: ReturnType<typeof setTimeout>[] = [];

    const doSearch = () => {
      for (let i = 0; i < 4; i++) {
        const timeout = setTimeout(() => {
          const randomId = questions[Math.floor(Math.random() * questions.length)].id;
          const randomQuestion = questions.find(q => q.id === randomId);

          window.open(
            `https://www.bing.com/search?q=${randomQuestion ? randomQuestion.question : "No question Found"
            }&qs=n&form=QBRE`,
            "_blank"
          );

          setCount(prev => {
            if (prev <= 1) {
              setIsRunning(false);
              localStorage.removeItem("bingAutoRefresh");
              if (mainInterval) clearInterval(mainInterval);
              return 0;
            }
            return prev - 1;
          });
        }, i * 15000); // 3 seconds apart
        subTimeouts.push(timeout);
      }
    };

    if (isRunning) {
      localStorage.setItem("bingAutoRefresh", "true");
      doSearch(); // first batch immediately
      mainInterval = setInterval(() => {
        doSearch(); // next batch every 15 minutes
      }, 17 * 60 * 1000);
    }

    return () => {
      if (mainInterval) clearInterval(mainInterval);
      subTimeouts.forEach(t => clearTimeout(t));
    };
  }, [isRunning]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Auto Refresh Bot</h1>
      <p>Remaining Refreshes: {count}</p>
      <button onClick={() => setIsRunning(true)} disabled={isRunning || count === 0}>
        Start Auto Refresh
      </button>
      <button onClick={() => setIsRunning(false)} disabled={!isRunning}>
        Stop Auto Refresh
      </button>
    </div>
  );
};

export default App;
