export type Platform = "dev.to" | "Medium" | "NodeShift";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number;
  tags: string[];
  external?: {
    url: string;
    platform: Platform;
  };
  /** Optional inline markdown body — only used for internally-hosted posts. */
  content?: string;
};

/**
 * Every post is owned and authored by Ayush Kumar.
 * External posts open on the original platform in a new tab.
 */
export const posts: Post[] = [
  // ──────────────────────────── Batch 3 (dev.to additions) ────────────────────────────
  {
    slug: "how-to-install-run-embeddinggemma-300m-locally",
    title: "How to Install run EmbeddingGemma 300m locally",
    excerpt:
      "Step-by-step walkthrough: How to Install run EmbeddingGemma 300m locally — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-19",
    readingTime: 10,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-run-embeddinggemma-300m-locally-223a",
      platform: "dev.to",
    },
  },
  {
    slug: "the-open-source-app-builder-that-ate-saas-dyad-ollama-setup",
    title: "The Open Source App Builder that Ate SaaS Dyad Ollama Setup",
    excerpt:
      "Step-by-step walkthrough: The Open Source App Builder that Ate SaaS Dyad Ollama Setup — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-19",
    readingTime: 11,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/the-open-source-app-builder-that-ate-saas-dyad-ollama-setup-47o2",
      platform: "dev.to",
    },
  },
  {
    slug: "zero-to-docs-hero-create-a-python-documentation-generator-with-gpt-5",
    title: "Zero to Docs Hero Create a Python Documentation Generator with GPT 5",
    excerpt:
      "Step-by-step walkthrough: Zero to Docs Hero Create a Python Documentation Generator with GPT 5 — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-19",
    readingTime: 12,
    tags: ["AI", "LLMs", "Tutorial"],
    external: {
      url: "https://dev.to/ayush7614/zero-to-docs-hero-create-a-python-documentation-generator-with-gpt-5-1jaj",
      platform: "dev.to",
    },
  },
  {
    slug: "how-i-built-a-gpt-oss-120b-parameter-coding-beast-that-reviews-fixes-and-writes-",
    title: "How i Built a GPT OSS 120b Parameter Coding Beast that Reviews Fixes and Writes",
    excerpt:
      "Step-by-step walkthrough: How i Built a GPT OSS 120b Parameter Coding Beast that Reviews Fixes and Writes — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-18",
    readingTime: 13,
    tags: ["AI", "Tutorial"],
    external: {
      url: "https://dev.to/ayush7614/how-i-built-a-gpt-oss-120b-parameter-coding-beast-that-reviews-fixes-and-writes-code-like-magic-4jog",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-devstral-small-11-locally",
    title: "How to Install Devstral Small 11 locally",
    excerpt:
      "Step-by-step walkthrough: How to Install Devstral Small 11 locally — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-18",
    readingTime: 14,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-devstral-small-11-locally-je9",
      platform: "dev.to",
    },
  },
  {
    slug: "llms-under-fire-red-teaming-with-deepteam-ollama",
    title: "LLMs Under Fire Red Teaming with Deepteam Ollama",
    excerpt:
      "Step-by-step walkthrough: LLMs Under Fire Red Teaming with Deepteam Ollama — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-18",
    readingTime: 15,
    tags: ["Security", "LLMs", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/llms-under-fire-red-teaming-with-deepteam-ollama-3l1i",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-deepseek-nano-vllm-locally",
    title: "How to Install DeepSeek Nano vLLM locally",
    excerpt:
      "Step-by-step walkthrough: How to Install DeepSeek Nano vLLM locally — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-17",
    readingTime: 10,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-deepseek-nano-vllm-locally-hne",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-fanar-1-9b-arabic-english-llm-locally",
    title: "How to Install Fanar 1 9b Arabic English LLM locally",
    excerpt:
      "Step-by-step walkthrough: How to Install Fanar 1 9b Arabic English LLM locally — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-17",
    readingTime: 11,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-fanar-1-9b-arabic-english-llm-locally-gol",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-and-run-sarvam-m-locally",
    title: "How to Install and run Sarvam M locally",
    excerpt:
      "Step-by-step walkthrough: How to Install and run Sarvam M locally — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-17",
    readingTime: 12,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-and-run-sarvam-m-locally-2b0i",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-nvidia-acereason-nemotron-14b-locally",
    title: "How to Install NVIDIA Acereason Nemotron 14b locally",
    excerpt:
      "Step-by-step walkthrough: How to Install NVIDIA Acereason Nemotron 14b locally — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-16",
    readingTime: 13,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-nvidia-acereason-nemotron-14b-locally-141i",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-nanovlm-worlds-smallest-model-locally",
    title: "How to Install NanoVLM Worlds Smallest Model locally",
    excerpt:
      "Step-by-step walkthrough: How to Install NanoVLM Worlds Smallest Model locally — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-16",
    readingTime: 14,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-nanovlm-worlds-smallest-model-locally-27eg",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-smoldocling-256m-preview-locally",
    title: "How to Install SmolDocling 256m Preview locally",
    excerpt:
      "Step-by-step walkthrough: How to Install SmolDocling 256m Preview locally — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-16",
    readingTime: 15,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-smoldocling-256m-preview-locally-11a1",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-qwen3-32b-gguf-locally",
    title: "How to Install Qwen3 32b GGUF locally",
    excerpt:
      "Step-by-step walkthrough: How to Install Qwen3 32b GGUF locally — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-15",
    readingTime: 10,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-qwen3-32b-gguf-locally-1d82",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-meta-perception-lm-8b-locally",
    title: "How to Install Meta Perception Lm 8b locally",
    excerpt:
      "Step-by-step walkthrough: How to Install Meta Perception Lm 8b locally — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-15",
    readingTime: 11,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-meta-perception-lm-8b-locally-662",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-nvidia-parakeet-tdt-06b-v2-locally",
    title: "How to Install NVIDIA Parakeet Tdt 06b V2 locally",
    excerpt:
      "Step-by-step walkthrough: How to Install NVIDIA Parakeet Tdt 06b V2 locally — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-15",
    readingTime: 12,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-nvidia-parakeet-tdt-06b-v2-locally-36ck",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-nari-dia-16-b-locally",
    title: "How to Install Nari Dia 16 B locally",
    excerpt:
      "Step-by-step walkthrough: How to Install Nari Dia 16 B locally — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-14",
    readingTime: 13,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-nari-dia-16-b-locally-3f0b",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-falcon-3-locally",
    title: "How to Install Falcon 3 locally",
    excerpt:
      "Step-by-step walkthrough: How to Install Falcon 3 locally — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-14",
    readingTime: 14,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-falcon-3-locally-3nhm",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-google-paligemma-2-locally",
    title: "How to Install Google PaliGemma 2 locally",
    excerpt:
      "Step-by-step walkthrough: How to Install Google PaliGemma 2 locally — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-14",
    readingTime: 15,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-google-paligemma-2-locally-21ci",
      platform: "dev.to",
    },
  },
  {
    slug: "run-langtrace-open-source-observability-tool-for-llm-applications",
    title: "Run Langtrace Open Source Observability Tool for LLM Applications",
    excerpt:
      "Step-by-step walkthrough: Run Langtrace Open Source Observability Tool for LLM Applications — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-13",
    readingTime: 10,
    tags: ["Open Source", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/run-langtrace-open-source-observability-tool-for-llm-applications-2p11",
      platform: "dev.to",
    },
  },
  {
    slug: "running-ai-models-with-open-webui",
    title: "Running AI Models with Open WebUI",
    excerpt:
      "Step-by-step walkthrough: Running AI Models with Open WebUI — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-13",
    readingTime: 11,
    tags: ["Open Source", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/running-ai-models-with-open-webui-4nil",
      platform: "dev.to",
    },
  },
  {
    slug: "40-linux-commands-you-need-to-know-the-ultimate-guide-for-ubuntu-users",
    title: "40 Linux Commands You Need to Know the Ultimate Guide for Ubuntu Users",
    excerpt:
      "Step-by-step walkthrough: 40 Linux Commands You Need to Know the Ultimate Guide for Ubuntu Users — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-13",
    readingTime: 12,
    tags: ["DevOps", "Tutorial"],
    external: {
      url: "https://dev.to/ayush7614/40-linux-commands-you-need-to-know-the-ultimate-guide-for-ubuntu-users-2c6j",
      platform: "dev.to",
    },
  },
  {
    slug: "best-low-code-platforms-for-building-applications-in-2024",
    title: "Best Low Code Platforms for Building Applications in 2024",
    excerpt:
      "Step-by-step walkthrough: Best Low Code Platforms for Building Applications in 2024 — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-12",
    readingTime: 13,
    tags: ["AI", "Tutorial"],
    external: {
      url: "https://dev.to/ayush7614/best-low-code-platforms-for-building-applications-in-2024-203e",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-deploy-llama-31-405b-in-the-cloud",
    title: "How to Deploy Llama 31 405b in the cloud",
    excerpt:
      "Step-by-step walkthrough: How to Deploy Llama 31 405b in the cloud — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-12",
    readingTime: 14,
    tags: ["Cloud", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-llama-31-405b-in-the-cloud-2d2i",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-and-run-auraflow-image-generator-locally",
    title: "How to Install and run AuraFlow Image Generator locally",
    excerpt:
      "Step-by-step walkthrough: How to Install and run AuraFlow Image Generator locally — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-12",
    readingTime: 15,
    tags: ["AI", "Tutorial", "Local LLMs"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-and-run-auraflow-image-generator-locally-1652",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-deploy-molmo-7b-d-0924-in-the-cloud",
    title: "How to Deploy Molmo 7b D 0924 in the cloud",
    excerpt:
      "Step-by-step walkthrough: How to Deploy Molmo 7b D 0924 in the cloud — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-11",
    readingTime: 10,
    tags: ["Cloud", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-molmo-7b-d-0924-in-the-cloud-5824",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-configure-wireguard-vpn-in-the-cloud",
    title: "How to Configure WireGuard VPN in the cloud",
    excerpt:
      "Step-by-step walkthrough: How to Configure WireGuard VPN in the cloud — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-11",
    readingTime: 11,
    tags: ["DevOps", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-configure-wireguard-vpn-in-the-cloud-5eea",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-deploy-llama-31-nemotron-70b-instruct-on-a-virtual-machine-in-the-cloud",
    title: "How to Deploy Llama 31 Nemotron 70b Instruct on a Virtual Machine in the cloud",
    excerpt:
      "Step-by-step walkthrough: How to Deploy Llama 31 Nemotron 70b Instruct on a Virtual Machine in the cloud — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-11",
    readingTime: 12,
    tags: ["Cloud", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-llama-31-nemotron-70b-instruct-on-a-virtual-machine-in-the-cloud-3777",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-deploy-pixtral-12b-in-the-cloud",
    title: "How to Deploy Pixtral 12b in the cloud",
    excerpt:
      "Step-by-step walkthrough: How to Deploy Pixtral 12b in the cloud — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-10",
    readingTime: 13,
    tags: ["Cloud", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-pixtral-12b-in-the-cloud-6c0",
      platform: "dev.to",
    },
  },
  {
    slug: "running-a-dedicated-ethereum-rpc-node-in-a-virtual-machine",
    title: "Running a Dedicated Ethereum RPC Node in a Virtual Machine",
    excerpt:
      "Step-by-step walkthrough: Running a Dedicated Ethereum RPC Node in a Virtual Machine — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-10",
    readingTime: 14,
    tags: ["DevOps", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/running-a-dedicated-ethereum-rpc-node-in-a-virtual-machine-2fk4",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-deploy-granite-moe-1b-and-3b-in-the-cloud",
    title: "How to Deploy Granite Moe 1b and 3b in the cloud",
    excerpt:
      "Step-by-step walkthrough: How to Deploy Granite Moe 1b and 3b in the cloud — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-10",
    readingTime: 15,
    tags: ["Cloud", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-granite-moe-1b-and-3b-in-the-cloud-4o7c",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-deploy-solar-pro-22b-in-the-cloud",
    title: "How to Deploy Solar Pro 22b in the cloud",
    excerpt:
      "Step-by-step walkthrough: How to Deploy Solar Pro 22b in the cloud — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-09",
    readingTime: 10,
    tags: ["Cloud", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-solar-pro-22b-in-the-cloud-21ec",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-deploy-granite-dense-2b-and-8b-on-a-virtual-machine-in-the-cloud",
    title: "How to Deploy Granite Dense 2b and 8b on a Virtual Machine in the cloud",
    excerpt:
      "Step-by-step walkthrough: How to Deploy Granite Dense 2b and 8b on a Virtual Machine in the cloud — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-09",
    readingTime: 11,
    tags: ["Cloud", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-granite-dense-2b-and-8b-on-a-virtual-machine-in-the-cloud-2k2d",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-run-for-inference-llama-31-nemotron-51b-instruct",
    title: "How to run for Inference Llama 31 Nemotron 51b Instruct",
    excerpt:
      "Step-by-step walkthrough: How to run for Inference Llama 31 Nemotron 51b Instruct — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-09",
    readingTime: 12,
    tags: ["AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-run-for-inference-llama-31-nemotron-51b-instruct-kcm",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-minikube-on-ubuntu-virtual-machine",
    title: "How to Install Minikube on Ubuntu Virtual Machine",
    excerpt:
      "Step-by-step walkthrough: How to Install Minikube on Ubuntu Virtual Machine — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-08",
    readingTime: 13,
    tags: ["DevOps", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-minikube-on-ubuntu-virtual-machine-207e",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-deploy-internvl2-2b-in-the-cloud",
    title: "How to Deploy InternVL2 2b in the cloud",
    excerpt:
      "Step-by-step walkthrough: How to Deploy InternVL2 2b in the cloud — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-08",
    readingTime: 14,
    tags: ["Cloud", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-internvl2-2b-in-the-cloud-39a5",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-deploy-smollm2-17b-on-a-virtual-machine-in-the-cloud-with-ollama",
    title: "How to Deploy SmolLM2 17b on a Virtual Machine in the cloud with Ollama",
    excerpt:
      "Step-by-step walkthrough: How to Deploy SmolLM2 17b on a Virtual Machine in the cloud with Ollama — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-08",
    readingTime: 15,
    tags: ["Cloud", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-smollm2-17b-on-a-virtual-machine-in-the-cloud-with-ollama-5eke",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-run-microsoft-kosmos-25-locally",
    title: "How to Install run Microsoft Kosmos 25 locally",
    excerpt:
      "Step-by-step walkthrough: How to Install run Microsoft Kosmos 25 locally — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-07",
    readingTime: 10,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-run-microsoft-kosmos-25-locally-l5a",
      platform: "dev.to",
    },
  },
  {
    slug: "deepseek-v31-meets-promptfoo-jailbreaks-biases-beyond",
    title: "DeepSeek V31 Meets Promptfoo Jailbreaks Biases Beyond",
    excerpt:
      "Step-by-step walkthrough: DeepSeek V31 Meets Promptfoo Jailbreaks Biases Beyond — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-07",
    readingTime: 11,
    tags: ["Security", "LLMs", "AI"],
    external: {
      url: "https://dev.to/ayush7614/deepseek-v31-meets-promptfoo-jailbreaks-biases-beyond-4270",
      platform: "dev.to",
    },
  },
  {
    slug: "the-gpt-5-paradox-genius-in-thought-gaps-in-safety",
    title: "The GPT 5 Paradox Genius in Thought Gaps in Safety",
    excerpt:
      "Step-by-step walkthrough: The GPT 5 Paradox Genius in Thought Gaps in Safety — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-07",
    readingTime: 12,
    tags: ["AI", "LLMs", "Tutorial"],
    external: {
      url: "https://dev.to/ayush7614/the-gpt-5-paradox-genius-in-thought-gaps-in-safety-100p",
      platform: "dev.to",
    },
  },
  {
    slug: "reproducible-llm-benchmarking-gpt-5-vs-grok-4-with-promptfoo",
    title: "Reproducible LLM Benchmarking GPT 5 vs Grok 4 with Promptfoo",
    excerpt:
      "Step-by-step walkthrough: Reproducible LLM Benchmarking GPT 5 vs Grok 4 with Promptfoo — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-06",
    readingTime: 13,
    tags: ["Security", "LLMs", "AI"],
    external: {
      url: "https://dev.to/ayush7614/reproducible-llm-benchmarking-gpt-5-vs-grok-4-with-promptfoo-4i3c",
      platform: "dev.to",
    },
  },
  {
    slug: "the-ocr-model-that-outranks-gpt-4o",
    title: "The OCR Model that Outranks GPT 4o",
    excerpt:
      "Step-by-step walkthrough: The OCR Model that Outranks GPT 4o — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-06",
    readingTime: 14,
    tags: ["AI", "Tutorial", "Local LLMs"],
    external: {
      url: "https://dev.to/nodeshiftcloud/the-ocr-model-that-outranks-gpt-4o-586b",
      platform: "dev.to",
    },
  },
  {
    slug: "the-one-click-gpt-5-code-machine-how-i-built-my-own-ai-developer",
    title: "The One Click GPT 5 Code Machine how i Built my Own AI Developer",
    excerpt:
      "Step-by-step walkthrough: The One Click GPT 5 Code Machine how i Built my Own AI Developer — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-06",
    readingTime: 15,
    tags: ["AI", "LLMs", "Tutorial"],
    external: {
      url: "https://dev.to/ayush7614/the-one-click-gpt-5-code-machine-how-i-built-my-own-ai-developer-4j0n",
      platform: "dev.to",
    },
  },
  {
    slug: "100-game-changing-chatgpt-prompts-for-developers-product-managers-designers-and-",
    title: "100 Game Changing Chatgpt Prompts for Developers Product Managers Designers and",
    excerpt:
      "Step-by-step walkthrough: 100 Game Changing Chatgpt Prompts for Developers Product Managers Designers and — install, configure, and run with notes from hands-on testing.",
    date: "2026-05-05",
    readingTime: 10,
    tags: ["AI", "Tutorial", "DevTools"],
    external: {
      url: "https://dev.to/ayush7614/100-game-changing-chatgpt-prompts-for-developers-product-managers-designers-and-email-marketers-1c5i",
      platform: "dev.to",
    },
  },

  // ──────────────────────────── May 2026 (latest) ────────────────────────────
  {
    slug: "medusa-ai-security-scanner",
    title:
      "Medusa AI Security Scanner: Complete Guide to Securing AI Agents, MCP Servers & LLM Applications",
    excerpt:
      "A complete walkthrough of Medusa — scanning AI agents, MCP servers, and LLM apps for misconfigurations, prompt injection surfaces, and deployment risks.",
    date: "2026-05-18",
    readingTime: 14,
    tags: ["Security", "AI", "MCP", "LLMs"],
    external: {
      url: "https://medium.com/the-first-digit/medusa-ai-security-scanner-complete-guide-to-securing-ai-agents-mcp-servers-and-llm-applications-4b10548b90f2",
      platform: "Medium",
    },
  },
  {
    slug: "tradingagents-multi-agent-trading",
    title:
      "TradingAgents: Build a Multi-Agent AI Trading System That Thinks Like a Hedge Fund",
    excerpt:
      "Architecting a multi-agent trading stack — research agents, risk agents, execution agents, and the orchestration layer that makes them behave like a desk.",
    date: "2026-05-17",
    readingTime: 13,
    tags: ["AI", "Agents", "Tutorial"],
    external: {
      url: "https://medium.com/coinmonks/tradingagents-build-a-multi-agent-ai-trading-system-that-thinks-like-a-hedge-fund-5be2301c83d2",
      platform: "Medium",
    },
  },
  {
    slug: "pentest-ai-autonomous-pentesting-2026",
    title:
      "Pentest AI: The Complete Guide to AI-Powered Autonomous Penetration Testing in 2026",
    excerpt:
      "How autonomous AI pentesting actually works in 2026 — tooling, workflows, guardrails, and what to expect when you point an agent at your own perimeter.",
    date: "2026-05-16",
    readingTime: 15,
    tags: ["Security", "AI", "Agents"],
    external: {
      url: "https://medium.com/the-first-digit/pentest-ai-the-complete-guide-to-ai-powered-autonomous-penetration-testing-in-2026-10754ee997d6",
      platform: "Medium",
    },
  },
  {
    slug: "hacker-search-engines-osint-2026",
    title:
      "The Ultimate Guide to Hacker Search Engines & OSINT Tools in 2026",
    excerpt:
      "The OSINT stack I reach for in 2026 — hacker search engines, dorking patterns, and practical recon workflows for security researchers.",
    date: "2026-05-15",
    readingTime: 12,
    tags: ["Security", "Tutorial"],
    external: {
      url: "https://medium.com/the-first-digit/the-ultimate-guide-to-hacker-search-engines-osint-tools-in-2026-ad2f9ab2684d",
      platform: "Medium",
    },
  },
  {
    slug: "pentest-ai-agents-28-subagents",
    title:
      "Pentest AI Agents: 28 Specialized AI Subagents That Turn Claude Code Into a Cybersecurity Team",
    excerpt:
      "28 purpose-built subagents for offensive security — recon, exploit chaining, reporting — all orchestrated through Claude Code.",
    date: "2026-05-14",
    readingTime: 14,
    tags: ["Security", "AI", "Agents", "DevTools"],
    external: {
      url: "https://medium.com/the-first-digit/pentest-ai-agents-28-specialized-ai-subagents-that-turn-claude-code-into-a-cybersecurity-94c0914da6ca",
      platform: "Medium",
    },
  },
  {
    slug: "25-open-source-cybersecurity-tools",
    title:
      "25 Open-Source Cybersecurity Tools That Work Even When Your Budget Doesn't",
    excerpt:
      "Twenty-five OSS security tools that punch above their price tag — free, battle-tested, and enough to run a lean security program.",
    date: "2026-05-13",
    readingTime: 13,
    tags: ["Security", "Open Source"],
    external: {
      url: "https://medium.com/the-first-digit/25-open-source-cybersecurity-tools-that-work-even-when-your-budget-doesnt-2594b363ffb3",
      platform: "Medium",
    },
  },
  {
    slug: "solo-engineer-stack-2026",
    title:
      "The Solo Engineer Stack: How 10 Open-Source Repos Can Replace an Entire Engineering Team in 2026",
    excerpt:
      "Ten repos that cover the full solo-engineer surface area — from CI to observability to AI agents — without hiring a team.",
    date: "2026-05-12",
    readingTime: 11,
    tags: ["Open Source", "Engineering", "AI"],
    external: {
      url: "https://medium.com/faun/the-solo-engineer-stack-how-10-open-source-repos-can-replace-an-entire-engineering-team-in-2026-162440acc3cc",
      platform: "Medium",
    },
  },
  {
    slug: "6-open-source-ai-agents-next-level",
    title:
      "These 6 Open-Source AI Agents Are Next Level — and They're Changing How We Build Software",
    excerpt:
      "Six agent frameworks that are quietly reshaping how teams ship — not demos, but tools people actually run in production.",
    date: "2026-05-11",
    readingTime: 10,
    tags: ["AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/towardsdev/these-6-open-source-ai-agents-are-next-level-and-theyre-changing-how-we-build-software-2480ec83b3dc",
      platform: "Medium",
    },
  },
  {
    slug: "gemma-4-ollama-local-coding-agent",
    title:
      "I Replaced Codex with Gemma 4 + Ollama — Here's My Local AI Coding Agent",
    excerpt:
      "Swapping cloud Codex for a fully local Gemma 4 + Ollama coding agent — setup, prompts, and where it wins (and where it doesn't).",
    date: "2026-05-10",
    readingTime: 11,
    tags: ["Local AI", "LLMs", "DevTools"],
    external: {
      url: "https://medium.com/faun/i-replaced-codex-with-gemma-4-ollama-heres-my-local-ai-coding-agent-e18307e35d6f",
      platform: "Medium",
    },
  },
  {
    slug: "emerging-ai-agent-frameworks-2026-part-2",
    title:
      "Emerging AI Agent Frameworks Developers Should Watch in 2026 (Part 2)",
    excerpt:
      "Part two of the agent framework roundup — newer entrants, architecture patterns, and which ones are worth betting on this year.",
    date: "2026-05-09",
    readingTime: 12,
    tags: ["AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/faun/emerging-ai-agent-frameworks-developers-should-watch-in-2026-part-2-92d49e75e867",
      platform: "Medium",
    },
  },
  {
    slug: "ai-web-browsers-agents-2026",
    title:
      "AI Web Browsers & Agents in 2026: The Complete Selection Guide",
    excerpt:
      "Every serious AI browser and web-agent option in 2026 — compared on privacy, autonomy, extensibility, and real-world usefulness.",
    date: "2026-05-08",
    readingTime: 13,
    tags: ["AI", "Agents", "Tutorial"],
    external: {
      url: "https://medium.com/faun/ai-web-browsers-agents-in-2026-the-complete-selection-guide-54473dd879dd",
      platform: "Medium",
    },
  },
  {
    slug: "multica-claude-managed-agents-alternative",
    title:
      "The Open-Source Claude Managed Agents Alternative Is Here — Meet Multica",
    excerpt:
      "Multica as an OSS answer to managed Claude agents — architecture, setup, and how it compares for teams that want control.",
    date: "2026-05-07",
    readingTime: 10,
    tags: ["AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/faun/the-open-source-claude-managed-agents-alternative-is-here-meet-multica-7035cca69a5d",
      platform: "Medium",
    },
  },
  {
    slug: "mastra-ai-production-agents",
    title:
      "Mastra AI: The Modern Framework for Building Production-Ready AI Agents",
    excerpt:
      "A hands-on tour of Mastra — workflows, memory, tool calling, and the patterns that make agents production-grade instead of demo-grade.",
    date: "2026-05-06",
    readingTime: 11,
    tags: ["AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/faun/mastra-ai-the-modern-framework-for-building-production-ready-ai-agents-f7f39664c9ad",
      platform: "Medium",
    },
  },
  {
    slug: "gaia-amd-local-intelligent-systems",
    title:
      "GAIA by AMD: Running Intelligent Systems Fully on Your Own Machine",
    excerpt:
      "AMD's GAIA stack for running intelligent workloads locally — hardware sizing, install, and the use cases where on-device wins.",
    date: "2026-05-05",
    readingTime: 10,
    tags: ["Local AI", "AI", "Tutorial"],
    external: {
      url: "https://medium.com/faun/gaia-by-amd-running-intelligent-systems-fully-on-your-own-machine-04da1dc420a5",
      platform: "Medium",
    },
  },
  {
    slug: "llm-observability-tools-2026",
    title:
      "Top 19 LLM Observability Tools to Monitor & Evaluate AI Agents (2026 Guide)",
    excerpt:
      "Nineteen tools for tracing, evaluating, and debugging LLM agents in production — with notes on when each one actually earns its keep.",
    date: "2026-05-04",
    readingTime: 15,
    tags: ["AI", "LLMs", "Agents", "DevOps"],
    external: {
      url: "https://medium.com/towardsdev/top-19-llm-observability-tools-to-monitor-evaluate-ai-agents-2026-guide-9096d4b857ae",
      platform: "Medium",
    },
  },
  {
    slug: "open-source-ai-agent-frameworks-github",
    title:
      "The Open-Source AI Agent Frameworks That Deserve More Stars on GitHub",
    excerpt:
      "Underrated agent frameworks hiding in plain sight — why they matter, what they do differently, and links to get started.",
    date: "2026-05-03",
    readingTime: 11,
    tags: ["AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/faun/the-open-source-ai-agent-frameworks-that-deserve-more-stars-on-github-6f1fd0e3fc99",
      platform: "Medium",
    },
  },
  {
    slug: "archinstall-4-0-arch-linux",
    title:
      "Archinstall 4.0: A Modern New Way to Install Arch Linux — Full Guide & Features",
    excerpt:
      "Archinstall 4.0 makes Arch approachable again — full feature tour, install walkthrough, and the defaults I'd change on day one.",
    date: "2026-05-02",
    readingTime: 12,
    tags: ["Tutorial", "DevOps"],
    external: {
      url: "https://medium.com/the-first-digit/archinstall-4-0-a-modern-new-way-to-install-arch-linux-full-guide-features-44d0aaf1309e",
      platform: "Medium",
    },
  },
  {
    slug: "cybersecurity-ai-cai",
    title:
      "Cybersecurity AI (CAI): The Future of AI-Powered Security Automation",
    excerpt:
      "CAI and the shift toward AI-native security automation — what it automates, what it can't, and how teams should adopt it.",
    date: "2026-05-01",
    readingTime: 11,
    tags: ["Security", "AI", "Agents"],
    external: {
      url: "https://medium.com/the-first-digit/cybersecurity-ai-cai-the-future-of-ai-powered-security-automation-b7ffd25b5c93",
      platform: "Medium",
    },
  },
  {
    slug: "agentscope-real-world-agents",
    title:
      "AgentScope: Building Real-World AI Agents That Actually Work",
    excerpt:
      "AgentScope for multi-agent apps that survive contact with reality — roles, messaging, failure handling, and a working example.",
    date: "2026-04-30",
    readingTime: 11,
    tags: ["AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/towardsdev/agentscope-building-real-world-ai-agents-that-actually-work-2ace602ab387",
      platform: "Medium",
    },
  },
  {
    slug: "openviking-agent-memory-context",
    title:
      "OpenViking Explained: Reinventing Memory and Context for AI Agents",
    excerpt:
      "How OpenViking rethinks agent memory beyond flat vector stores — context layers, retrieval, and why it matters for long-running agents.",
    date: "2026-04-29",
    readingTime: 10,
    tags: ["AI", "Agents", "LLMs"],
    external: {
      url: "https://medium.com/faun/openviking-explained-reinventing-memory-and-context-for-ai-agents-c189b2bea61b",
      platform: "Medium",
    },
  },
  {
    slug: "strix-open-source-hacker",
    title:
      "Strix: The Open-Source Hacker That Tests Your App Like a Real Attacker",
    excerpt:
      "Strix as an autonomous offensive testing tool — setup, attack surfaces it finds, and how to run it safely against your own apps.",
    date: "2026-04-28",
    readingTime: 11,
    tags: ["Security", "AI", "Open Source"],
    external: {
      url: "https://medium.com/the-first-digit/strix-the-open-source-hacker-that-tests-your-app-like-a-real-attacker-4217e0c9e843",
      platform: "Medium",
    },
  },
  {
    slug: "modern-mobile-pentesting-stack-2026",
    title:
      "The Modern Mobile Pentesting Stack in 2026: Tools, Trends & Practical Workflows",
    excerpt:
      "The mobile pentest toolchain for 2026 — static, dynamic, network, and the workflows that tie them together on real engagements.",
    date: "2026-04-27",
    readingTime: 13,
    tags: ["Security", "Tutorial"],
    external: {
      url: "https://medium.com/the-first-digit/the-modern-mobile-pentesting-stack-in-2026-tools-trends-practical-workflows-c6a61aa01a36",
      platform: "Medium",
    },
  },
  {
    slug: "ai-driven-pentesting-tools-2026",
    title:
      "The Rise of AI-Driven Pentesting: 8 Open-Source Tools Security Teams Should Watch in 2026",
    excerpt:
      "Eight OSS tools bringing AI into the pentest workflow — recon, exploitation assist, reporting — and how to evaluate them responsibly.",
    date: "2026-04-26",
    readingTime: 12,
    tags: ["Security", "AI", "Open Source"],
    external: {
      url: "https://medium.com/the-first-digit/the-rise-of-ai-driven-pentesting-8-open-source-tools-security-teams-should-watch-in-2026-e849c8171450",
      platform: "Medium",
    },
  },
  {
    slug: "hindsight-ai-agent-memory",
    title:
      "Hindsight: The Future of AI Agent Memory Beyond Vector Databases",
    excerpt:
      "Hindsight's approach to durable agent memory — episodic recall, structured context, and why vectors alone aren't enough.",
    date: "2026-04-25",
    readingTime: 10,
    tags: ["AI", "Agents", "LLMs"],
    external: {
      url: "https://medium.com/faun/hindsight-the-future-of-ai-agent-memory-beyond-vector-databases-0e8745ff4b38",
      platform: "Medium",
    },
  },
  {
    slug: "openclaw-personal-ai-platform",
    title:
      "OpenClaw: The Journey From a Weekend Hack to a Personal AI Platform You Truly Own",
    excerpt:
      "How OpenClaw grew from a weekend project into a self-hosted personal AI platform — architecture, philosophy, and getting started.",
    date: "2026-04-24",
    readingTime: 11,
    tags: ["AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/faun/openclaw-the-journey-from-a-weekend-hack-to-a-personal-ai-platform-you-truly-own-76ce9395a315",
      platform: "Medium",
    },
  },
  {
    slug: "11-production-llm-serving-engines",
    title:
      "11 Production LLM Serving Engines: vLLM vs TGI vs Ollama and Beyond",
    excerpt:
      "Eleven serving engines compared for production — throughput, ops burden, GPU efficiency, and which I'd pick for each workload.",
    date: "2026-04-23",
    readingTime: 14,
    tags: ["LLMs", "DevOps", "Local AI"],
    external: {
      url: "https://medium.com/faun/11-production-llm-serving-engines-vllm-vs-tgi-vs-ollama-162874402840",
      platform: "Medium",
    },
  },
  {
    slug: "ai-agent-arsenal-20-open-source",
    title:
      "AI Agent Arsenal: 20 Battle-Tested Open-Source Powerhouses",
    excerpt:
      "Twenty OSS projects that form a complete agent-building arsenal — orchestration, tools, memory, eval, and deployment.",
    date: "2026-04-22",
    readingTime: 13,
    tags: ["AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/@techlatest.net/ai-agent-arsenal-20-battle-tested-open-source-powerhouses-ea3d4534d264",
      platform: "Medium",
    },
  },

  // ──────────────────────────── 2026 ────────────────────────────
  {
    slug: "mcp-server-stack-2026",
    title: "The MCP Server Stack: 10 Open-Source Essentials for 2026",
    excerpt:
      "The Model Context Protocol ecosystem has exploded. Here are the 10 open-source MCP servers I'd put in every agent stack going into 2026.",
    date: "2026-02-10",
    readingTime: 14,
    tags: ["MCP", "AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/towardsdev/the-mcp-server-stack-10-open-source-essentials-for-2026-cb13f080ca5c",
      platform: "Medium",
    },
  },
  {
    slug: "20-free-open-source-ai-tools-2026",
    title:
      "20 Free Open-Source AI Tools to Run Production-Grade Agents Without Paying LLM APIs in 2026",
    excerpt:
      "A field guide to running production-grade autonomous agents on zero API spend — 20 hand-picked open-source tools, real workflows, and the gotchas nobody mentions.",
    date: "2026-01-22",
    readingTime: 16,
    tags: ["AI", "Agents", "Open Source", "Local AI"],
    external: {
      url: "https://medium.com/faun/20-free-open-source-ai-tools-to-run-production-grade-agents-without-paying-llm-apis-in-2026-5f1ffdcbcc18",
      platform: "Medium",
    },
  },
  {
    slug: "untold-misadventures-red-teaming-kimi-k2",
    title: "The Untold Misadventures of Red-Teaming Kimi K2 with Promptfoo",
    excerpt:
      "I spent a week trying to break Moonshot's Kimi K2 with Promptfoo. Here's where it cracked, where it surprised me, and what I'd put in a red-team playbook.",
    date: "2026-01-08",
    readingTime: 11,
    tags: ["Red Teaming", "Security", "LLMs", "Promptfoo"],
    external: {
      url: "https://dev.to/ayush7614/the-untold-misadventures-of-red-teaming-kimi-k2-with-promptfoo-3hig",
      platform: "dev.to",
    },
  },
  {
    slug: "promptfoo-qwen3-coder-480b-vulnerabilities",
    title:
      "Promptfoo × Qwen3-Coder: Unmasking Vulnerabilities in 480 Billion Parameters",
    excerpt:
      "Pointing Promptfoo at Qwen3-Coder 480B-A35B revealed a surprising attack surface. Walking through the audit, the findings, and the patterns that repeat across frontier coder models.",
    date: "2025-12-18",
    readingTime: 13,
    tags: ["Red Teaming", "Security", "LLMs", "Promptfoo"],
    external: {
      url: "https://dev.to/ayush7614/promptfoo-x-qwen3-coder-unmasking-vulnerabilities-in-480-billion-parameters-17hb",
      platform: "dev.to",
    },
  },
  {
    slug: "glm-4-5-promptfoo-systematic-llm-audits",
    title: "GLM-4.5 vs Promptfoo: A Playbook for Systematic LLM Security Audits",
    excerpt:
      "A repeatable playbook for security-auditing any LLM — demonstrated end-to-end on GLM-4.5 using Promptfoo. Test plans, harnesses, and how to read the signal.",
    date: "2025-12-04",
    readingTime: 12,
    tags: ["Red Teaming", "Security", "LLMs", "Promptfoo"],
    external: {
      url: "https://dev.to/ayush7614/glm-45-vs-promptfoo-a-playbook-for-systematic-llm-security-audits-27ln",
      platform: "dev.to",
    },
  },
  {
    slug: "llms-under-fire-deepteam-ollama",
    title: "LLMs Under Fire: Red Teaming with DeepTeam + Ollama",
    excerpt:
      "Setting up DeepTeam against local Ollama models to stress-test prompt injection, jailbreaks, and harmful-output rates — all without leaving your laptop.",
    date: "2025-11-22",
    readingTime: 10,
    tags: ["Red Teaming", "Security", "Local AI", "LLMs"],
    external: {
      url: "https://nodeshift.com/blog/llms-under-fire-red-teaming-with-deepteam-ollama",
      platform: "NodeShift",
    },
  },
  {
    slug: "promptfoo-vs-deepteam-vs-pyrit-vs-garak",
    title:
      "Promptfoo vs DeepTeam vs PyRIT vs Garak: The Ultimate Red-Teaming Showdown for LLMs",
    excerpt:
      "Four major open-source LLM red-teaming frameworks, one merciless head-to-head. Coverage, ergonomics, plugin ecosystem, and which I'd actually ship with.",
    date: "2025-11-08",
    readingTime: 15,
    tags: ["Red Teaming", "Security", "LLMs", "Open Source"],
    external: {
      url: "https://dev.to/ayush7614/promptfoo-vs-deepteam-vs-pyrit-vs-garak-the-ultimate-red-teaming-showdown-for-llms-48if",
      platform: "dev.to",
    },
  },
  {
    slug: "promptfoo-ollama-deepseek-r1-cyber-warzone",
    title:
      "Promptfoo × Ollama × DeepSeek-R1: Turning My Model Into a Cyber Warzone",
    excerpt:
      "DeepSeek-R1 is impressive — and a great red-team target. Here's the full Promptfoo + Ollama harness I used to stress-test reasoning, refusals, and exploits.",
    date: "2025-10-24",
    readingTime: 11,
    tags: ["Red Teaming", "LLMs", "Local AI", "Promptfoo"],
    external: {
      url: "https://dev.to/ayush7614/promptfoo-x-ollama-x-deepseek-r1-turning-my-model-into-a-cyber-warzone-3ef5",
      platform: "dev.to",
    },
  },
  {
    slug: "from-openai-to-ollama-visual-llm-evals-promptfoo",
    title: "From OpenAI to Ollama: Visual LLM Evaluations with Promptfoo",
    excerpt:
      "Side-by-side visual evaluations of OpenAI hosted models and local Ollama runs — how to build a faithful eval harness when ground truth is fuzzy.",
    date: "2025-10-10",
    readingTime: 9,
    tags: ["LLMs", "Local AI", "Promptfoo", "Tutorial"],
    external: {
      url: "https://dev.to/ayush7614/from-openai-to-ollama-visual-llm-evaluations-with-promptfoo-2k03",
      platform: "dev.to",
    },
  },
  {
    slug: "ai-book-writing-system-acp-promptfoo",
    title:
      "How I Built and Evaluated an AI Book-Writing System with ACP and Promptfoo",
    excerpt:
      "An honest engineering diary on shipping an AI book-writing pipeline — Agent Communication Protocol, evaluator harness, and the failure modes that surprised me.",
    date: "2025-09-26",
    readingTime: 13,
    tags: ["AI", "Agents", "LLMs", "Promptfoo"],
    external: {
      url: "https://dev.to/ayush7614/how-i-built-and-evaluated-an-ai-book-writing-system-with-acp-and-promptfoo-18np",
      platform: "dev.to",
    },
  },

  // ──────────────────────── Late 2025 / Local LLMs ────────────────────────
  {
    slug: "install-run-openai-gpt-oss-locally",
    title: "How to Install & Run OpenAI GPT-OSS Locally",
    excerpt:
      "OpenAI shipped GPT-OSS — and yes, you can run it on your own metal. The complete setup, hardware sizing, and the inference tricks that matter.",
    date: "2025-09-12",
    readingTime: 10,
    tags: ["Local AI", "LLMs", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-run-openai-gpt-oss-locally-1lf0",
      platform: "dev.to",
    },
  },
  {
    slug: "install-run-gpt-oss-20b-120b-gguf-locally",
    title: "How to Install & Run GPT-OSS 20B and 120B GGUF Locally",
    excerpt:
      "Going beyond the base GPT-OSS — running the 20B and full 120B GGUF builds locally with sane quantization, sane VRAM, and reproducible benchmarks.",
    date: "2025-09-04",
    readingTime: 11,
    tags: ["Local AI", "LLMs", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-run-gpt-oss-20b-and-120b-gguf-locally-3833",
      platform: "dev.to",
    },
  },
  {
    slug: "qwen3-coder-480b-a35b-locally",
    title: "How to Install & Run Qwen3-Coder 480B A35B Instruct Locally",
    excerpt:
      "Wrangling Qwen3-Coder's 480B MoE on local hardware: weight layout, KV-cache strategies, and the dev workflow that actually keeps the model fast.",
    date: "2025-08-22",
    readingTime: 12,
    tags: ["Local AI", "LLMs", "Tutorial"],
    external: {
      url: "https://nodeshift.cloud/blog/how-to-install-run-qwen3-coder-480b-a35b-instruct-locally",
      platform: "NodeShift",
    },
  },
  {
    slug: "deepseek-v3-1-gguf-locally",
    title: "How to Install & Run DeepSeek V3.1 GGUF Locally",
    excerpt:
      "DeepSeek V3.1 in GGUF form is a strong daily driver. Hardware sizing, quant trade-offs, and an end-to-end install walkthrough.",
    date: "2025-08-08",
    readingTime: 9,
    tags: ["Local AI", "LLMs", "Tutorial"],
    external: {
      url: "https://nodeshift.cloud/blog/how-to-install-run-deepseek-v3-1-gguf-locally",
      platform: "NodeShift",
    },
  },
  {
    slug: "claude-4-opus-vs-sonnet",
    title: "Claude 4 Opus vs Sonnet: Benchmarks and Dev Workflow with Claude Code",
    excerpt:
      "Side-by-side benchmarks of Claude 4 Opus and Sonnet, with a practical Claude Code workflow that gets the most out of each tier.",
    date: "2025-07-26",
    readingTime: 10,
    tags: ["LLMs", "DevTools", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/claude-4-opus-vs-sonnet-benchmarks-and-dev-workflow-with-claude-code-11fa",
      platform: "dev.to",
    },
  },
  {
    slug: "opencode-open-source-claude-code-alternative",
    title:
      "Ultimate Hands-On Guide to OpenCode: Open-Source Claude Code Alternative",
    excerpt:
      "OpenCode is the open-source coding agent that finally feels like Claude Code. A complete hands-on guide — install, configure, hook up local models.",
    date: "2025-07-12",
    readingTime: 11,
    tags: ["DevTools", "Open Source", "AI", "Tutorial"],
    external: {
      url: "https://medium.com/faun/ultimate-hands-on-guide-to-opencode-open-source-claude-code-alternative-37af8f8928cb",
      platform: "Medium",
    },
  },
  {
    slug: "void-ollama-llms-ai-workbench",
    title:
      "Void + Ollama + LLMs: How I Turned My Code Editor Into a Full-Blown AI Workbench",
    excerpt:
      "Void is an open-source Cursor-style editor. Wired to Ollama, it becomes a local AI workbench that doesn't phone home. Full setup inside.",
    date: "2025-06-28",
    readingTime: 9,
    tags: ["DevTools", "Local AI", "Open Source"],
    external: {
      url: "https://dev.to/nodeshiftcloud/void-ollama-llms-how-i-turned-my-code-editor-into-a-full-blown-ai-workbench-eop",
      platform: "dev.to",
    },
  },
  {
    slug: "zed-ollama-llms-gpu-vm-setup",
    title:
      "Zed + Ollama + LLMs on a GPU VM: The Ultimate Local Dev Setup for Serious Coders",
    excerpt:
      "Zed is fast, Ollama is portable, and a GPU VM is finally cheap. Here's the dev setup I run all day — IDE, model server, and the network glue.",
    date: "2025-06-14",
    readingTime: 10,
    tags: ["DevTools", "Local AI", "DevOps"],
    external: {
      url: "https://dev.to/nodeshiftcloud/zed-ollama-llms-on-a-gpu-vm-the-ultimate-local-dev-setup-for-serious-coders-18pd",
      platform: "dev.to",
    },
  },
  {
    slug: "openhands-ai-engineer-locally",
    title:
      "Build an App with AI in Minutes Using OpenHands AI Engineer: Install Locally",
    excerpt:
      "OpenHands lets you ship working apps with an autonomous engineer agent. The install, the workflows, and the prompts I've found ship 10x more reliably.",
    date: "2025-05-30",
    readingTime: 11,
    tags: ["Agents", "AI", "Open Source", "DevTools"],
    external: {
      url: "https://dev.to/nodeshiftcloud/build-an-app-with-ai-in-minutes-using-openhands-ai-engineer-install-locally-2ogi",
      platform: "dev.to",
    },
  },
  {
    slug: "run-llama-4-locally-tool-calling",
    title: "Step-by-Step Guide to Run Llama 4 Locally with Tool Calling Enabled",
    excerpt:
      "Llama 4 is here — and it's tool-calling-native. Setting it up locally end-to-end, with a working agentic loop and traces you can inspect.",
    date: "2025-05-16",
    readingTime: 11,
    tags: ["Local AI", "LLMs", "Agents", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/step-by-step-guide-to-run-llama-4-locally-with-tool-calling-enabled-jg7",
      platform: "dev.to",
    },
  },
  {
    slug: "install-llama-33-70b-instruct-locally",
    title: "How to Install Llama 3.3 70B Instruct Locally",
    excerpt:
      "Llama 3.3 70B Instruct is the sweet-spot OSS model for most workloads. Full local-install guide with quantization and serving tips.",
    date: "2025-05-02",
    readingTime: 9,
    tags: ["Local AI", "LLMs", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-llama-33-70b-instruct-locally-3p1a",
      platform: "dev.to",
    },
  },
  {
    slug: "mastering-deepseek-tiny-small-vl2",
    title:
      "Mastering DeepSeek: Installing Tiny, Small, and VL2 Models with Inference and a Gradio Interface",
    excerpt:
      "A complete tour of the DeepSeek lineup — Tiny, Small, and VL2 — with reproducible inference scripts and a Gradio UI for quick experiments.",
    date: "2025-04-18",
    readingTime: 12,
    tags: ["Local AI", "LLMs", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/mastering-deepseek-installing-tiny-small-and-vl2-models-with-inference-and-a-gradio-interface-4d2m",
      platform: "dev.to",
    },
  },
  {
    slug: "install-deepseek-janus-pro-7b-locally",
    title: "How to Install DeepSeek Janus-Pro 7B Locally",
    excerpt:
      "DeepSeek Janus-Pro 7B is a strong multimodal model. The full install, weights layout, and a minimal inference example you can build on.",
    date: "2025-04-04",
    readingTime: 8,
    tags: ["Local AI", "LLMs", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-deepseek-janus-pro-7b-locally-5924",
      platform: "dev.to",
    },
  },
  {
    slug: "deploy-qwen25-coder-32b-cloud",
    title: "How to Deploy Qwen2.5-Coder-32B-Instruct in the Cloud",
    excerpt:
      "A pragmatic cloud-deploy walkthrough for Qwen2.5-Coder-32B-Instruct — sizing, serving, and the cost-vs-throughput knobs that matter.",
    date: "2025-03-22",
    readingTime: 9,
    tags: ["LLMs", "DevOps", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-qwen25-coder-32b-instruct-in-the-cloud-4o9m",
      platform: "dev.to",
    },
  },
  {
    slug: "ollama-web-llm-local-ai-search-assistant",
    title: "Ollama and Web-LLM: Building Your Own Local AI Search Assistant",
    excerpt:
      "Combine Ollama with Web-LLM to build a local AI search assistant — private, fast, and bookmark-friendly. The full architecture and code inside.",
    date: "2025-03-08",
    readingTime: 10,
    tags: ["Local AI", "LLMs", "Agents", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/ollama-and-web-llm-building-your-own-local-ai-search-assistant-3l5o",
      platform: "dev.to",
    },
  },
  {
    slug: "install-mistral-magistral-locally",
    title: "How to Install Mistral Magistral Locally",
    excerpt:
      "Mistral Magistral is the model I keep coming back to for reasoning tasks. A clean, reproducible local-install guide with serving notes.",
    date: "2025-02-22",
    readingTime: 8,
    tags: ["Local AI", "LLMs", "Tutorial"],
    external: {
      url: "https://nodeshift.com/blog/how-to-install-mistral-magistral-locally",
      platform: "NodeShift",
    },
  },
  {
    slug: "install-mistral-voxtral-locally",
    title: "How to Install Mistral Voxtral Locally",
    excerpt:
      "Mistral Voxtral brings speech-native intelligence to local stacks. A complete install + first-app guide with audio pipelines.",
    date: "2025-02-08",
    readingTime: 9,
    tags: ["Local AI", "LLMs", "Tutorial"],
    external: {
      url: "https://nodeshift.com/blog/how-to-install-mistral-voxtral-locally",
      platform: "NodeShift",
    },
  },

  // ──────────────────────────── Image & 3D ────────────────────────────
  {
    slug: "install-hunyuan3d-world-locally",
    title: "How to Install & Run Tencent Hunyuan3D-World 1.0 Locally",
    excerpt:
      "Tencent's Hunyuan3D-World 1.0 turns text into navigable 3D scenes. The local install, GPU sizing, and a first scene-generation walkthrough.",
    date: "2025-01-25",
    readingTime: 11,
    tags: ["Image Gen", "AI", "Tutorial"],
    external: {
      url: "https://nodeshift.cloud/blog/how-to-install-run-tencent-hunyuan3d-world-1-0-locally",
      platform: "NodeShift",
    },
  },
  {
    slug: "install-flux-1-kontext-dev-locally",
    title: "How to Install FLUX.1 Kontext Dev Locally",
    excerpt:
      "FLUX.1 Kontext Dev is a context-aware image model that punches above its weight. Full local install and a workflow notebook to copy.",
    date: "2025-01-12",
    readingTime: 9,
    tags: ["Image Gen", "Local AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-flux1-kontext-dev-locally-1b0d",
      platform: "dev.to",
    },
  },
  {
    slug: "run-flux-1-schnell-pro-cloud",
    title: "How to Run FLUX.1 Schnell and Pro Image Generator in the Cloud",
    excerpt:
      "Running FLUX.1 Schnell and Pro on a GPU VM with sensible defaults, queueing, and a UI you can put in front of a team.",
    date: "2024-12-20",
    readingTime: 10,
    tags: ["Image Gen", "Cloud", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-run-flux-1-schnell-and-pro-image-generator-in-the-cloud-4d7h",
      platform: "dev.to",
    },
  },

  // ──────────────────────────── Medical / Specialized ────────────────────────────
  {
    slug: "ai-chest-x-ray-analyzer-medgemma-27b",
    title: "Building an AI-Powered Chest X-Ray Analyzer with MedGemma 27B and Gradio",
    excerpt:
      "An end-to-end build of a chest X-ray analyzer using Google's MedGemma 27B and Gradio — model loading, preprocessing, and a usable clinician-facing UI.",
    date: "2024-12-06",
    readingTime: 12,
    tags: ["AI", "LLMs", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/building-an-ai-powered-chest-x-ray-analyzer-with-medgemma-27b-and-gradio-21cd",
      platform: "dev.to",
    },
  },
  {
    slug: "datadog-toto-cloud-time-series-forecaster",
    title:
      "How I Built a Cloud Time-Series Forecaster with Datadog Toto Open Base 1.0",
    excerpt:
      "A complete walkthrough of building a production-grade time-series forecaster on top of Datadog's open Toto Base 1.0 — schemas, batching, deployment.",
    date: "2024-11-22",
    readingTime: 11,
    tags: ["AI", "DevOps", "Cloud"],
    external: {
      url: "https://nodeshift.com/blog/how-i-built-a-cloud-time-series-forecaster-with-datadog-toto-open-base-1-0",
      platform: "NodeShift",
    },
  },

  // ──────────────────────────── Cybersecurity ────────────────────────────
  {
    slug: "vulhunt-vulnerability-hunting-framework",
    title: "VulHunt: Open-Source Vulnerability Hunting Framework",
    excerpt:
      "VulHunt — an open-source framework for hunting vulnerabilities at scale. Architecture, plugin model, and how I use it on bug-bounty engagements.",
    date: "2024-11-08",
    readingTime: 9,
    tags: ["Security", "Open Source"],
    external: {
      url: "https://medium.com/the-first-digit/vulhunt-open-source-vulnerability-hunting-framework-bde9cdb66dab",
      platform: "Medium",
    },
  },
  {
    slug: "top-50-blackarch-linux-tools",
    title: "Top 50 Must-Know BlackArch Linux Tools for Penetration Testing",
    excerpt:
      "The 50 BlackArch tools I reach for most on penetration tests — what each does, when to use it, and the command patterns I keep cheat-sheeted.",
    date: "2024-10-24",
    readingTime: 18,
    tags: ["Security", "Tutorial"],
    external: {
      url: "https://medium.com/the-first-digit/top-50-must-know-blackarch-linux-tools-for-penetration-testing-bbf49e81cef2",
      platform: "Medium",
    },
  },
  {
    slug: "top-15-kali-linux-gui-tools",
    title:
      "Top 15 Kali Linux GUI Tools Every Security Engineer Must Master — With Real Use Cases",
    excerpt:
      "Beyond the terminal — the 15 Kali GUI tools every security engineer should be fluent with, each illustrated with a real engagement scenario.",
    date: "2024-10-10",
    readingTime: 13,
    tags: ["Security", "Tutorial"],
    external: {
      url: "https://medium.com/the-first-digit/top-15-kali-linux-gui-tools-every-security-engineer-must-master-with-real-use-cases-d3412e9867fd",
      platform: "Medium",
    },
  },

  // ──────────────────────────── DevOps / Infra ────────────────────────────
  {
    slug: "ethereum-rpc-node-in-a-vm",
    title: "Running a Dedicated Ethereum RPC Node in a Virtual Machine",
    excerpt:
      "Operating a dedicated Ethereum RPC node on a VM — disk planning, snapshot tactics, peering, and the monitoring that catches bad sync states early.",
    date: "2024-09-26",
    readingTime: 12,
    tags: ["DevOps", "Cloud"],
    external: {
      url: "https://nodeshift.com/blog/running-a-dedicated-ethereum-rpc-node-in-a-virtual-machine",
      platform: "NodeShift",
    },
  },
  {
    slug: "vm-backup-borg-borgmatic-rclone",
    title:
      "How to Backup Virtual Machines to Object Storage with Borg, Borgmatic, Rclone, and Cron's Rsync",
    excerpt:
      "A complete backup architecture for VMs into S3-compatible object storage — Borg + Borgmatic + Rclone + cron rsync, with the restore drill I run quarterly.",
    date: "2024-09-12",
    readingTime: 14,
    tags: ["DevOps", "Tutorial"],
    external: {
      url: "https://nodeshift.com/blog/how-to-backup-virtual-machines-to-object-storage-with-borg-borgmatic-rclone-and-crons-rsync",
      platform: "NodeShift",
    },
  },
];

export const allTags = Array.from(
  new Set(posts.flatMap((p) => p.tags))
).sort();

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Posts that have inline content (renderable on /blog/[slug]). */
export const internalPosts = posts.filter((p) => p.content && !p.external);

export function getRelated(slug: string, limit = 3): Post[] {
  const post = getPost(slug);
  if (!post) return [];
  return posts
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => post.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.post);
}

/** Featured posts shown on the home page (most recent first). */
export function getFeatured(limit = 6): Post[] {
  return [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}
