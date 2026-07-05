import { SiGithub, SiX } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { Mail, FileText } from 'lucide-react';
import type { IconType } from 'react-icons';
import type { LucideIcon } from 'lucide-react';

export type LinkItem = {
  name: string;
  url: string | null;
  icon: IconType | LucideIcon;
  isButton?: boolean;
};

export const portfolio = {
  personal: {
    name: "Yash Wankhade",
    title: "Backend Engineer · Solana Smart Contract Developer",
    subtext: "Turbine3 Accelerated Builder (completed June 2026) · Colosseum Hackathon Builder",
    location: "Maharashtra, India",
    email: "yashwankhade5@gmail.com",
  },
  links: [
    { name: "GitHub", url: "https://github.com/yashwankhade5", icon: SiGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/yashwankhade18/", icon: FaLinkedin },
    { name: "X", url: "https://x.com/Yash_Dev1", icon: SiX },
    { name: "Email", url: "mailto:yashwankhade5@gmail.com", icon: Mail },
    { name: "Resume", url: null, icon: FileText, isButton: true },
  ] as LinkItem[],
  about: [
    "B.E. Computer Science & Engineering, SGBAU, CGPA 8.48/10, graduated 2023, Maharashtra, India.",
    "I build backend systems that have to be correct under pressure — high-concurrency servers, event-driven pipelines, idempotent APIs, and auth flows built around real threat models. My projects span WebSocket servers benchmarked at 5K–20K concurrent connections, production-patterned payment backends, and full-stack applications with proper session handling and database constraints.",
    "On top of that foundation, I've gone deep into Solana: zero-copy deserialization, PDA derivation, CPI flows, SPL tokens, and on-chain program security. Currently in the RektOff Rust Security Bootcamp, focused on low-level vulnerability research and smart contract auditing.",
    "Open to backend engineering roles across fintech, infrastructure, and developer tooling — web3 or not. Not looking for frontend positions."
  ],
  projects: [
    {
      title: "HorizonPay",
      description: "Stablecoin payment infrastructure on Solana — escrow-based checkout with idempotent sessions, server-validated transactions, and HMAC-signed webhook delivery.",
      problem: "Building trustless payment infrastructure on Solana without introducing custodial risk or allowing double-spend at the application layer.",
      architecture: "On-chain 7-slot circular buffer escrow in Rust with an advance_escrow() helper called atomically from pay/withdraw/update_withdrawal_amount instructions. Idempotent checkout sessions (merchant_id:order_id:amount key, DB UNIQUE constraint) with JWT-signed URLs and server-side tx validation before broadcast. Event-driven backend: WebSocket contract listener + 5-minute reconciliation cron, HMAC-signed webhooks delivered over raw bytes to avoid JSON key-order mismatches.",
      tags: ["Rust", "Anchor", "TypeScript", "Node.js", "Next.js", "PostgreSQL", "Prisma"],
      github: "https://github.com/yashwankhade5/HorizonPay",
      live: null,
      note: "Submitted to Colosseum Frontier Hackathon 2025/2026"
    },
    {
      title: "Latch",
      description: "On-chain wagered multiplayer game — players lock SOL into non-custodial PDA vaults and fight in real-time 1v1 arena combat. Live on Devnet.",
      problem: "Web3 gaming is fragmented and trust-broken — isolated single-use worlds with no persistent state, and wager pools that sit in centralized databases or clunky contracts, leaving player capital exposed if a server goes down.",
      solution: "A persistent, shared on-chain world where players connect a wallet, walk up to another player, and lock a mutual SOL wager straight into a non-custodial PDA vault — no external lobby, no middleman holding funds.",
      architecture: "Phaser 3 + Vite frontend for real-time 1v1 arena combat, with Socket.io/Node.js handling sub-15ms multiplayer state relay and server-authoritative hit detection to prevent client-side cheating. The Anchor program holds all wagered SOL in a PDA vault — the backend never touches funds — with a built-in claim_timeout instruction guaranteeing refunds if a match stalls or the backend crashes. Every state-changing action is authenticated via a single-use Ed25519 signature tied to the player's Solana wallet. Deployed and fully playable on Devnet.\n\nRoadmap: migrating match state to MagicBlock Ephemeral Rollups to remove the centralized backend relay entirely, ahead of a mainnet launch under a Squads multisig.",
      tags: ["Rust", "Anchor", "Phaser 3", "Socket.io", "TypeScript"],
      github: "https://github.com/yashwankhade5/Latch-game",
      live: "https://latch-game.netlify.app/",
      demo: "https://youtu.be/SefOlez6GVg?si=PFr9-rtFJ-u10XDi"
    },
    {
      title: "High-Concurrency WebSocket Chat App",
      description: "Full-stack real-time chat application benchmarked at 5K–20K concurrent connections with consistent sub-20ms message relay.",
      problem: "Most WebSocket servers collapse under real load — shared state becomes a bottleneck and connection handling isn't designed for vertical scaling from the start.",
      architecture: "Full-stack application with a React frontend and an event-driven Node.js backend designed ground-up for concurrency. Benchmarked at 5K–20K simultaneous connections with consistent sub-20ms message relay. Memory and CPU profiled to identify and eliminate bottlenecks — no external message broker, single-process vertical scale.",
      tags: ["TypeScript", "Node.js", "WebSocket", "React"],
      github: "https://github.com/yashwankhade5/Chatapp",
      live: null
    },
    {
      title: "Payment Backend Clone",
      description: "Production-patterned REST API with JWT auth, bcrypt hashing, Zod validation, and idempotent transfer endpoints that prevent double-spend at the database level.",
      problem: "Payment backends are a common source of double-spend bugs, auth vulnerabilities, and race conditions — most tutorial implementations get all three wrong.",
      architecture: "Production-patterned REST API with JWT-based auth, bcrypt password hashing, Zod schema validation on every input boundary, and idempotent transfer endpoints using a unique key constraint to prevent duplicate transactions at the database level.",
      tags: ["Node.js", "Express", "JWT", "Bcrypt", "Zod", "MongoDB"],
      github: null,
      live: null
    },
    {
      title: "CipherVault",
      description: "Solana governance dApp with on-chain multisig treasury, threshold approvals, and CPI-based SOL & SPL token transfers.",
      problem: "Building a trustless on-chain governance system where treasury funds can only move after reaching a threshold of approvals, with no single point of control.",
      architecture: "Anchor program with proposal + approval accounts, PDA-based vault authority, CPI for SOL & SPL token transfers. Features threshold multisig approvals for enhanced security.",
      tags: ["Rust", "Anchor", "React", "TypeScript", "Solana Web3.js"],
      github: "https://github.com/yashwankhade5/CipherVault",
      live: "https://ciphervault-frontend.vercel.app"
    },
    {
      title: "SolGuard",
      description: "Anchor program demonstrating secure account validation and constraint patterns against common Solana attack vectors.",
      problem: "On-chain guard logic in Rust — enforcing strict account constraints and invariants to prevent exploits.",
      architecture: "Secure account validation and constraint patterns implemented in Anchor to prevent common attack vectors and enforce strict state invariants.",
      tags: ["Rust", "Anchor", "Solana"],
      github: null,
      live: null
    },
    {
      title: "Token Launchpad / Staking / AMM",
      description: "Three independent Anchor programs on Devnet — configurable token launchpad, staking with precise reward math, and a constant-product AMM.",
      problem: "Three independent Anchor programs on Devnet covering core DeFi primitives.",
      architecture: "Configurable token launchpad, staking mechanism with precise reward math, and a constant-product AMM with robust liquidity pool management.",
      tags: ["Rust", "Anchor", "Solana"],
      github: null,
      live: null
    },
  ],
  skills: [
    {
      category: "Backend",
      items: ["TypeScript", "Node.js", "Express", "WebSocket", "REST APIs", "Prisma ORM", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Blockchain / Solana",
      items: ["Rust", "Anchor", "Pinocchio", "Solana Web3.js", "PDAs", "CPIs", "SPL Tokens", "Token Extensions", "On-chain state design", "MagicBlock (Ephemeral Rollups, VRF)", "Codama", "Shank", "tuk-tuk", "LiteSVM"]
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "TailwindCSS", "Wallet Adapter"]
    },
    {
      category: "Security & Auth",
      items: ["JWT", "Bcrypt", "Zod", "HMAC", "Idempotency design"]
    },
    {
      category: "Infra & Tools",
      items: ["Docker", "AWS EC2", "Vercel", "Nginx", "CI/CD", "Linux", "Git", "Postman"]
    }
  ],
  timeline: [
    {
      period: "June 2026 — Present",
      title: "RektOff Cohort 5 — Rust Security Bootcamp",
      description: "Intensive program focused on low-level Rust security, vulnerability research, and smart contract auditing patterns."
    },
    {
      period: "Completed June 2026",
      title: "Solana Turbine3 Accelerated Builder",
      description: "Advanced cohort for high-output Solana builders shipping production projects."
    },
    {
      period: "2025/2026",
      title: "Colosseum Frontier Hackathon",
      description: "HorizonPay submission."
    },
    {
      period: "2025",
      title: "Colosseum Hackathon",
      description: "CipherVault submission."
    },
    {
      period: "2025",
      title: "Solana Turbine3 Builder Program",
      description: "7-week intensive cohort focusing on Solana fundamentals and Anchor."
    },
    {
      period: "2025",
      title: "Harkirat Singh Cohort 3.0",
      description: "Full-stack, Web3, and DevOps comprehensive training."
    }
  ]
};