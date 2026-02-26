'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Activity, Database, Server, Cpu, ShieldCheck, GitCommit, GitBranch, Code } from 'lucide-react';

interface GitHubData {
  lastCommit: {
    message: string;
    repo: string;
    date: string;
    url: string;
  } | null;
  languages: { name: string; percent: number }[];
  totalRepos: number;
  avatar: string;
}

export default function DataMonitor() {
  const [lines, setLines] = useState<string[]>([]);
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulated Terminal Logic (Visuals)
  useEffect(() => {
    const logs = [
      "> INIT GITHUB API CONNECTION...",
      "> AUTH: PUBLIC_KEY_AKISCH01",
      "> FETCHING REPO METADATA...",
      "> AGGREGATING LANGUAGE STATS...",
      "> PARSING COMMIT HISTORY (JSON)...",
      "> CALCULATING DEVOPS METRICS...",
      "> STREAM: CONNECTED (200 OK)",
      "> LIVE TELEMETRY: ACTIVE"
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      setLines(prev => {
        const nextLines = [...prev, logs[index]];
        if (nextLines.length > 5) nextLines.shift();
        return nextLines;
      });
      index = (index + 1) % logs.length;
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  // Real ETL Logic: Fetch GitHub Data
  useEffect(() => {
    async function fetchGitHubData() {
      const CACHE_KEY = 'github_telemetry_v6';
      const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes

      // 1. Check Cache
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_DURATION) {
          setData(parsed.data);
          setLoading(false);
          return;
        }
      }

      try {
        const username = 'akisch01';
        
        // 2. Extract: Fetch Repos & Events in parallel
        const [reposRes, eventsRes, userRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}/repos?type=all&sort=updated&per_page=100`),
          fetch(`https://api.github.com/users/${username}/events/public?per_page=10`),
          fetch(`https://api.github.com/users/${username}`)
        ]);

        if (!reposRes.ok || !eventsRes.ok || !userRes.ok) {
          throw new Error('GitHub API Error: Rate limit or invalid response');
        }

        const repos = await reposRes.json();
        const events = await eventsRes.json();
        const user = await userRes.json();

        // 3. Transform: Process Languages (Weighted by Repository Size)
        const langBytes: Record<string, number> = {};
        let totalBytes = 0;
        
        if (Array.isArray(repos)) {
          repos.forEach((repo: any) => {
            if (repo.language && !['HTML', 'CSS', 'Jupyter Notebook', 'Hack'].includes(repo.language)) {
              // Use repo.size (in KB) as an approximation of language volume
              langBytes[repo.language] = (langBytes[repo.language] || 0) + repo.size;
              totalBytes += repo.size;
            }
          });
        }

        const languages = Object.entries(langBytes)
          .map(([name, bytes]) => ({ name, percent: Math.round((bytes / totalBytes) * 100) }))
          .sort((a, b) => b.percent - a.percent || a.name.localeCompare(b.name))
          .slice(0, 4); // Top 4 languages

        // 4. Transform: Get Last Commit from the most recently updated repo
        let lastCommit = null;
        if (Array.isArray(repos) && repos.length > 0) {
          // Repos are already sorted by updated_at descending
          const mostRecentRepo = repos[0];
          
          try {
            // Fetch the actual commits for this repo to get the real message
            const commitsRes = await fetch(`https://api.github.com/repos/${mostRecentRepo.full_name}/commits?per_page=1`);
            if (commitsRes.ok) {
              const commits = await commitsRes.json();
              if (Array.isArray(commits) && commits.length > 0) {
                lastCommit = {
                  message: commits[0].commit.message.split('\n')[0], // Get first line of commit message
                  repo: mostRecentRepo.name,
                  date: new Date(commits[0].commit.author.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' - ' + new Date(commits[0].commit.author.date).toLocaleDateString(),
                  url: commits[0].html_url
                };
              }
            }
          } catch (e) {
            console.error("Failed to fetch commit details", e);
          }
          
          // Fallback if commit fetch fails but we know the repo updated
          if (!lastCommit) {
            lastCommit = {
               message: 'Recent update (details unavailable)',
               repo: mostRecentRepo.name,
               date: new Date(mostRecentRepo.updated_at).toLocaleDateString(),
               url: mostRecentRepo.html_url
            };
          }
        }

        const finalData = {
          lastCommit,
          languages,
          totalRepos: Array.isArray(repos) ? repos.length : (user.public_repos || 0),
          avatar: user.avatar_url
        };

        // 5. Load: Save to State & Cache
        setData(finalData);
        localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: finalData }));
        
      } catch (error) {
        console.error("ETL Error:", error);
        // Fallback for demo if API fails
        setData({
          lastCommit: { message: "System Optimization", repo: "Portfolio_2025", date: "Now", url: "#" },
          languages: [
            { name: "Python", percent: 45 },
            { name: "TypeScript", percent: 30 },
            { name: "Java", percent: 15 },
            { name: "SQL", percent: 10 }
          ],
          totalRepos: 25,
          avatar: ""
        });
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  return (
    <section className="py-24 bg-black/40 backdrop-blur-md relative overflow-hidden border-y border-white/5">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: 'linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
             <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
             <h2 className="text-sm font-mono text-muted-foreground tracking-widest uppercase">
               GitHub Telemetry: <span className="text-green-500">CONNECTED</span>
             </h2>
          </div>
          <div className="hidden md:flex text-xs font-mono text-muted-foreground gap-4">
            <span>REGION: EU-WEST-1</span>
            <span>LATENCY: 24ms</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* 1. Terminal Window (The Logs) */}
          <div className="lg:col-span-2 rounded-xl bg-[#0d0d0d] border border-white/10 overflow-hidden font-mono text-sm relative group h-64 flex flex-col">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">etl-worker-01 — zsh</span>
            </div>
            <div className="p-6 flex-1 overflow-hidden flex flex-col justify-end">
              {lines.map((line, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-green-500/80 mb-2 font-mono text-xs md:text-sm"
                >
                  {line}
                </motion.div>
              ))}
              <div className="animate-pulse w-2 h-4 bg-green-500 mt-1" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent h-full w-full pointer-events-none opacity-20" />
          </div>

          {/* 2. Real Data Widgets */}
          <div className="grid grid-rows-3 gap-4">
            
            {/* Widget A: Last Commit */}
            <div className="rounded-xl bg-card border border-white/10 p-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-40 transition-opacity">
                <GitCommit className="w-12 h-12" />
              </div>
              <p className="text-xs text-muted-foreground font-mono mb-2">LATEST ACTIVITY (PUSH)</p>
              {loading ? (
                 <div className="animate-pulse h-6 w-32 bg-white/10 rounded" />
              ) : (
                <>
                  <div className="text-sm font-bold text-white truncate max-w-[90%]">
                    {data?.lastCommit?.message || 'No recent activity'}
                  </div>
                  <div className="flex justify-between items-end mt-2">
                    <span className="text-xs text-primary font-mono">{data?.lastCommit?.repo}</span>
                    <span className="text-[10px] text-muted-foreground">{data?.lastCommit?.date}</span>
                  </div>
                </>
              )}
            </div>

            {/* Widget B: Languages Stats */}
            <div className="rounded-xl bg-card border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 p-2 opacity-20">
                <Code className="w-12 h-12" />
              </div>
              <p className="text-xs text-muted-foreground font-mono mb-2">TOP LANGUAGES (DISTRIBUTION)</p>
              <div className="space-y-2">
                {loading ? (
                   <div className="animate-pulse space-y-2">
                     <div className="h-2 w-full bg-white/10 rounded" />
                     <div className="h-2 w-2/3 bg-white/10 rounded" />
                   </div>
                ) : (
                  data?.languages.slice(0, 3).map((lang, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <span className="w-16 font-mono text-muted-foreground">{lang.name}</span>
                      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${lang.percent}%` }}
                          transition={{ duration: 1, delay: idx * 0.2 }}
                          className={`h-full ${idx === 0 ? 'bg-primary' : idx === 1 ? 'bg-orange-500' : 'bg-red-500'}`}
                        />
                      </div>
                      <span className="w-8 text-right font-bold text-white">{lang.percent}%</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Widget C: Total Repos */}
            <div className="rounded-xl bg-card border border-white/10 p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-1">TOTAL REPOSITORIES</p>
                <div className="text-3xl font-bold text-white flex items-center gap-2">
                  {loading ? '...' : data?.totalRepos}
                  <GitBranch className="w-5 h-5 text-green-500" />
                </div>
              </div>
              <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 overflow-hidden relative">
                {data?.avatar && (
                  <img src={data.avatar} alt="Avatar" className="w-full h-full object-cover opacity-80" />
                )}
              </div>
            </div>
          </div>

        </div>
        
        {/* Pipeline Visualization */}
        <div className="mt-8 pt-8 border-t border-white/5 hidden md:flex items-center justify-between opacity-70 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4" />
            GITHUB REST API
          </div>
          <div className="flex-1 h-px bg-white/10 mx-4 relative overflow-hidden">
             <motion.div 
               className="absolute top-0 bottom-0 h-full w-20 bg-gradient-to-r from-transparent via-primary to-transparent"
               animate={{ x: ["-100%", "500%"] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             />
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            CLIENT-SIDE ETL
          </div>
          <div className="flex-1 h-px bg-white/10 mx-4 relative overflow-hidden">
            <motion.div 
               className="absolute top-0 bottom-0 h-full w-20 bg-gradient-to-r from-transparent via-primary to-transparent"
               animate={{ x: ["-100%", "500%"] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
             />
          </div>
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4" />
            DASHBOARD UI
          </div>
        </div>

      </div>
    </section>
  );
}
