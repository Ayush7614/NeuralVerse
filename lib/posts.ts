export type Platform = "dev.to" | "Medium" | "NodeShift" | "MCP Wormhole";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number;
  tags: string[];
  external?: {
    url: string;
    image?: string;
    platform: Platform;
  };
  /** Optional inline markdown body — only used for internally-hosted posts. */
  content?: string;
};

/**
 * Every post is owned and authored by Ayush Kumar.
 * External posts open on the original platform in a new tab.
 */
const rawPosts = [
  // ──────────────────────────── Batch 3 (dev.to additions) ────────────────────────────
  {
    slug: "how-to-install-run-embeddinggemma-300m-locally",
    title: "How to Install run EmbeddingGemma 300m locally",
    excerpt:
      "Step-by-step walkthrough: How to Install run EmbeddingGemma 300m locally — install, configure, and run with notes from hands-on testing.",
    date: "2025-09-08",
    readingTime: 10,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-run-embeddinggemma-300m-locally-223a",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fib3uchvtqealw0om728i.png",
      platform: "dev.to",
    },
  },
  {
    slug: "the-open-source-app-builder-that-ate-saas-dyad-ollama-setup",
    title: "The Open Source App Builder that Ate SaaS Dyad Ollama Setup",
    excerpt:
      "Step-by-step walkthrough: The Open Source App Builder that Ate SaaS Dyad Ollama Setup — install, configure, and run with notes from hands-on testing.",
    date: "2025-08-22",
    readingTime: 11,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/the-open-source-app-builder-that-ate-saas-dyad-ollama-setup-47o2",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffkhr4wge9oq5pkn7mani.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "zero-to-docs-hero-create-a-python-documentation-generator-with-gpt-5",
    title: "Zero to Docs Hero Create a Python Documentation Generator with GPT 5",
    excerpt:
      "Step-by-step walkthrough: Zero to Docs Hero Create a Python Documentation Generator with GPT 5 — install, configure, and run with notes from hands-on testing.",
    date: "2025-08-08",
    readingTime: 12,
    tags: ["AI", "LLMs", "Tutorial"],
    external: {
      url: "https://dev.to/ayush7614/zero-to-docs-hero-create-a-python-documentation-generator-with-gpt-5-1jaj",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flkd9ibsm3s8zg0mdi1h0.png",
      platform: "dev.to",
    },
  },
  {
    slug: "how-i-built-a-gpt-oss-120b-parameter-coding-beast-that-reviews-fixes-and-writes-",
    title: "How i Built a GPT OSS 120b Parameter Coding Beast that Reviews Fixes and Writes",
    excerpt:
      "Step-by-step walkthrough: How i Built a GPT OSS 120b Parameter Coding Beast that Reviews Fixes and Writes — install, configure, and run with notes from hands-on testing.",
    date: "2025-08-07",
    readingTime: 13,
    tags: ["AI", "Tutorial"],
    external: {
      url: "https://dev.to/ayush7614/how-i-built-a-gpt-oss-120b-parameter-coding-beast-that-reviews-fixes-and-writes-code-like-magic-4jog",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpcx30pb50vncv55bmhay.png",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-devstral-small-11-locally",
    title: "How to Install Devstral Small 11 locally",
    excerpt:
      "Step-by-step walkthrough: How to Install Devstral Small 11 locally — install, configure, and run with notes from hands-on testing.",
    date: "2025-07-12",
    readingTime: 14,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-devstral-small-11-locally-je9",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnm0i61j5z8m10ch4qgsg.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "llms-under-fire-red-teaming-with-deepteam-ollama",
    title: "LLMs Under Fire Red Teaming with Deepteam Ollama",
    excerpt:
      "Step-by-step walkthrough: LLMs Under Fire Red Teaming with Deepteam Ollama — install, configure, and run with notes from hands-on testing.",
    date: "2025-06-26",
    readingTime: 15,
    tags: ["Security", "LLMs", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/llms-under-fire-red-teaming-with-deepteam-ollama-3l1i",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2xvvdhfpqszl9nahpvrr.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-deepseek-nano-vllm-locally",
    title: "How to Install DeepSeek Nano vLLM locally",
    excerpt:
      "Step-by-step walkthrough: How to Install DeepSeek Nano vLLM locally — install, configure, and run with notes from hands-on testing.",
    date: "2025-06-24",
    readingTime: 10,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-deepseek-nano-vllm-locally-hne",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhnvg2dbfmxwk5w4d3a28.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-fanar-1-9b-arabic-english-llm-locally",
    title: "How to Install Fanar 1 9b Arabic English LLM locally",
    excerpt:
      "Step-by-step walkthrough: How to Install Fanar 1 9b Arabic English LLM locally — install, configure, and run with notes from hands-on testing.",
    date: "2025-06-18",
    readingTime: 11,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-fanar-1-9b-arabic-english-llm-locally-gol",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8oc342pocwrvhtljtn3b.png",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-and-run-sarvam-m-locally",
    title: "How to Install and run Sarvam M locally",
    excerpt:
      "Step-by-step walkthrough: How to Install and run Sarvam M locally — install, configure, and run with notes from hands-on testing.",
    date: "2025-06-06",
    readingTime: 12,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-and-run-sarvam-m-locally-2b0i",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4cdpopitji1bbi6oepso.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-nvidia-acereason-nemotron-14b-locally",
    title: "How to Install NVIDIA Acereason Nemotron 14b locally",
    excerpt:
      "Step-by-step walkthrough: How to Install NVIDIA Acereason Nemotron 14b locally — install, configure, and run with notes from hands-on testing.",
    date: "2025-06-04",
    readingTime: 13,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-nvidia-acereason-nemotron-14b-locally-141i",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fl69joiwxwjcfmxl5swi6.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-nanovlm-worlds-smallest-model-locally",
    title: "How to Install NanoVLM Worlds Smallest Model locally",
    excerpt:
      "Step-by-step walkthrough: How to Install NanoVLM Worlds Smallest Model locally — install, configure, and run with notes from hands-on testing.",
    date: "2025-05-20",
    readingTime: 14,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-nanovlm-worlds-smallest-model-locally-27eg",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhlb4e6ni0by9ke94hzx5.webp",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-smoldocling-256m-preview-locally",
    title: "How to Install SmolDocling 256m Preview locally",
    excerpt:
      "Step-by-step walkthrough: How to Install SmolDocling 256m Preview locally — install, configure, and run with notes from hands-on testing.",
    date: "2025-05-20",
    readingTime: 15,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-smoldocling-256m-preview-locally-11a1",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fb04muxfq29y6ykm40hr3.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-qwen3-32b-gguf-locally",
    title: "How to Install Qwen3 32b GGUF locally",
    excerpt:
      "Step-by-step walkthrough: How to Install Qwen3 32b GGUF locally — install, configure, and run with notes from hands-on testing.",
    date: "2025-05-16",
    readingTime: 10,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-qwen3-32b-gguf-locally-1d82",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwumhw4y4sbhd8yilqu19.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-meta-perception-lm-8b-locally",
    title: "How to Install Meta Perception Lm 8b locally",
    excerpt:
      "Step-by-step walkthrough: How to Install Meta Perception Lm 8b locally — install, configure, and run with notes from hands-on testing.",
    date: "2025-05-13",
    readingTime: 11,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-meta-perception-lm-8b-locally-662",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fbz2jlvgw4s640kx33dza.jpeg",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-nvidia-parakeet-tdt-06b-v2-locally",
    title: "How to Install NVIDIA Parakeet Tdt 06b V2 locally",
    excerpt:
      "Step-by-step walkthrough: How to Install NVIDIA Parakeet Tdt 06b V2 locally — install, configure, and run with notes from hands-on testing.",
    date: "2025-05-11",
    readingTime: 12,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-nvidia-parakeet-tdt-06b-v2-locally-36ck",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F704nqfs445mpk7kgs6fb.jpeg",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-nari-dia-16-b-locally",
    title: "How to Install Nari Dia 16 B locally",
    excerpt:
      "Step-by-step walkthrough: How to Install Nari Dia 16 B locally — install, configure, and run with notes from hands-on testing.",
    date: "2025-05-05",
    readingTime: 13,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-nari-dia-16-b-locally-3f0b",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjzyuvy8e7sn6e9w903fa.jpeg",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-falcon-3-locally",
    title: "How to Install Falcon 3 locally",
    excerpt:
      "Step-by-step walkthrough: How to Install Falcon 3 locally — install, configure, and run with notes from hands-on testing.",
    date: "2025-05-08",
    readingTime: 14,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-falcon-3-locally-3nhm",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgzl0bpdbm3jx66y2b4ip.jpeg",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-google-paligemma-2-locally",
    title: "How to Install Google PaliGemma 2 locally",
    excerpt:
      "Step-by-step walkthrough: How to Install Google PaliGemma 2 locally — install, configure, and run with notes from hands-on testing.",
    date: "2024-12-18",
    readingTime: 15,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-google-paligemma-2-locally-21ci",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fn0u6n32et0yaea6ve0be.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "run-langtrace-open-source-observability-tool-for-llm-applications",
    title: "Run Langtrace Open Source Observability Tool for LLM Applications",
    excerpt:
      "Step-by-step walkthrough: Run Langtrace Open Source Observability Tool for LLM Applications — install, configure, and run with notes from hands-on testing.",
    date: "2024-12-02",
    readingTime: 10,
    tags: ["Open Source", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/run-langtrace-open-source-observability-tool-for-llm-applications-2p11",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fh1iswdj6xlmn0atfkeyl.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "running-ai-models-with-open-webui",
    title: "Running AI Models with Open WebUI",
    excerpt:
      "Step-by-step walkthrough: Running AI Models with Open WebUI — install, configure, and run with notes from hands-on testing.",
    date: "2024-11-17",
    readingTime: 11,
    tags: ["Open Source", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/running-ai-models-with-open-webui-4nil",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F23r9qw7m6drr2wv5vsp1.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "40-linux-commands-you-need-to-know-the-ultimate-guide-for-ubuntu-users",
    title: "40 Linux Commands You Need to Know the Ultimate Guide for Ubuntu Users",
    excerpt:
      "Step-by-step walkthrough: 40 Linux Commands You Need to Know the Ultimate Guide for Ubuntu Users — install, configure, and run with notes from hands-on testing.",
    date: "2024-08-10",
    readingTime: 12,
    tags: ["DevOps", "Tutorial"],
    external: {
      url: "https://dev.to/ayush7614/40-linux-commands-you-need-to-know-the-ultimate-guide-for-ubuntu-users-2c6j",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffiqfiihefsprh1s53ezm.png",
      platform: "dev.to",
    },
  },
  {
    slug: "best-low-code-platforms-for-building-applications-in-2024",
    title: "Best Low Code Platforms for Building Applications in 2024",
    excerpt:
      "Step-by-step walkthrough: Best Low Code Platforms for Building Applications in 2024 — install, configure, and run with notes from hands-on testing.",
    date: "2024-08-12",
    readingTime: 13,
    tags: ["AI", "Tutorial"],
    external: {
      url: "https://dev.to/ayush7614/best-low-code-platforms-for-building-applications-in-2024-203e",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpn3untrjf0448d2mju7q.png",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-deploy-llama-31-405b-in-the-cloud",
    title: "How to Deploy Llama 31 405b in the cloud",
    excerpt:
      "Step-by-step walkthrough: How to Deploy Llama 31 405b in the cloud — install, configure, and run with notes from hands-on testing.",
    date: "2024-08-19",
    readingTime: 14,
    tags: ["Cloud", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-llama-31-405b-in-the-cloud-2d2i",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxj63vg7tiacpanjteu5m.png",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-and-run-auraflow-image-generator-locally",
    title: "How to Install and run AuraFlow Image Generator locally",
    excerpt:
      "Step-by-step walkthrough: How to Install and run AuraFlow Image Generator locally — install, configure, and run with notes from hands-on testing.",
    date: "2024-09-13",
    readingTime: 15,
    tags: ["AI", "Tutorial", "Local LLMs"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-and-run-auraflow-image-generator-locally-1652",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F6b0j82x2p3uw3cq52wj4.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-deploy-molmo-7b-d-0924-in-the-cloud",
    title: "How to Deploy Molmo 7b D 0924 in the cloud",
    excerpt:
      "Step-by-step walkthrough: How to Deploy Molmo 7b D 0924 in the cloud — install, configure, and run with notes from hands-on testing.",
    date: "2024-10-11",
    readingTime: 10,
    tags: ["Cloud", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-molmo-7b-d-0924-in-the-cloud-5824",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5k9cid86gicz0jclpc1b.png",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-configure-wireguard-vpn-in-the-cloud",
    title: "How to Configure WireGuard VPN in the cloud",
    excerpt:
      "Step-by-step walkthrough: How to Configure WireGuard VPN in the cloud — install, configure, and run with notes from hands-on testing.",
    date: "2024-10-18",
    readingTime: 11,
    tags: ["DevOps", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-configure-wireguard-vpn-in-the-cloud-5eea",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F71fjlpe8v3ggl5llpbnk.png",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-deploy-llama-31-nemotron-70b-instruct-on-a-virtual-machine-in-the-cloud",
    title: "How to Deploy Llama 31 Nemotron 70b Instruct on a Virtual Machine in the cloud",
    excerpt:
      "Step-by-step walkthrough: How to Deploy Llama 31 Nemotron 70b Instruct on a Virtual Machine in the cloud — install, configure, and run with notes from hands-on testing.",
    date: "2024-10-21",
    readingTime: 12,
    tags: ["Cloud", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-llama-31-nemotron-70b-instruct-on-a-virtual-machine-in-the-cloud-3777",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fi9290w4i360q1cdz790f.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-deploy-pixtral-12b-in-the-cloud",
    title: "How to Deploy Pixtral 12b in the cloud",
    excerpt:
      "Step-by-step walkthrough: How to Deploy Pixtral 12b in the cloud — install, configure, and run with notes from hands-on testing.",
    date: "2024-10-18",
    readingTime: 13,
    tags: ["Cloud", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-pixtral-12b-in-the-cloud-6c0",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fh59kpbbxm1fh8i8yi9g9.png",
      platform: "dev.to",
    },
  },
  {
    slug: "running-a-dedicated-ethereum-rpc-node-in-a-virtual-machine",
    title: "Running a Dedicated Ethereum RPC Node in a Virtual Machine",
    excerpt:
      "Step-by-step walkthrough: Running a Dedicated Ethereum RPC Node in a Virtual Machine — install, configure, and run with notes from hands-on testing.",
    date: "2024-10-18",
    readingTime: 14,
    tags: ["DevOps", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/running-a-dedicated-ethereum-rpc-node-in-a-virtual-machine-2fk4",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flsqwxuvb38165ncm6nrt.png",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-deploy-granite-moe-1b-and-3b-in-the-cloud",
    title: "How to Deploy Granite Moe 1b and 3b in the cloud",
    excerpt:
      "Step-by-step walkthrough: How to Deploy Granite Moe 1b and 3b in the cloud — install, configure, and run with notes from hands-on testing.",
    date: "2024-10-23",
    readingTime: 15,
    tags: ["Cloud", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-granite-moe-1b-and-3b-in-the-cloud-4o7c",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feg300tii2unoyu6xk036.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-deploy-solar-pro-22b-in-the-cloud",
    title: "How to Deploy Solar Pro 22b in the cloud",
    excerpt:
      "Step-by-step walkthrough: How to Deploy Solar Pro 22b in the cloud — install, configure, and run with notes from hands-on testing.",
    date: "2024-10-25",
    readingTime: 10,
    tags: ["Cloud", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-solar-pro-22b-in-the-cloud-21ec",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgoxpttbwxkrn7y1wcuoo.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-deploy-granite-dense-2b-and-8b-on-a-virtual-machine-in-the-cloud",
    title: "How to Deploy Granite Dense 2b and 8b on a Virtual Machine in the cloud",
    excerpt:
      "Step-by-step walkthrough: How to Deploy Granite Dense 2b and 8b on a Virtual Machine in the cloud — install, configure, and run with notes from hands-on testing.",
    date: "2024-10-28",
    readingTime: 11,
    tags: ["Cloud", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-granite-dense-2b-and-8b-on-a-virtual-machine-in-the-cloud-2k2d",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwz21pjky6yg72948k72h.png",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-run-for-inference-llama-31-nemotron-51b-instruct",
    title: "How to run for Inference Llama 31 Nemotron 51b Instruct",
    excerpt:
      "Step-by-step walkthrough: How to run for Inference Llama 31 Nemotron 51b Instruct — install, configure, and run with notes from hands-on testing.",
    date: "2024-11-03",
    readingTime: 12,
    tags: ["AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-run-for-inference-llama-31-nemotron-51b-instruct-kcm",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fc4tzticfrpzhawem0f50.png",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-minikube-on-ubuntu-virtual-machine",
    title: "How to Install Minikube on Ubuntu Virtual Machine",
    excerpt:
      "Step-by-step walkthrough: How to Install Minikube on Ubuntu Virtual Machine — install, configure, and run with notes from hands-on testing.",
    date: "2024-11-06",
    readingTime: 13,
    tags: ["DevOps", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-minikube-on-ubuntu-virtual-machine-207e",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F6xf0o2mxhpdw38zmjc2b.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-deploy-internvl2-2b-in-the-cloud",
    title: "How to Deploy InternVL2 2b in the cloud",
    excerpt:
      "Step-by-step walkthrough: How to Deploy InternVL2 2b in the cloud — install, configure, and run with notes from hands-on testing.",
    date: "2024-11-08",
    readingTime: 14,
    tags: ["Cloud", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-internvl2-2b-in-the-cloud-39a5",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7kg03q7s6da4a8hn28jk.png",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-deploy-smollm2-17b-on-a-virtual-machine-in-the-cloud-with-ollama",
    title: "How to Deploy SmolLM2 17b on a Virtual Machine in the cloud with Ollama",
    excerpt:
      "Step-by-step walkthrough: How to Deploy SmolLM2 17b on a Virtual Machine in the cloud with Ollama — install, configure, and run with notes from hands-on testing.",
    date: "2024-11-14",
    readingTime: 15,
    tags: ["Cloud", "AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-smollm2-17b-on-a-virtual-machine-in-the-cloud-with-ollama-5eke",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F91abi8y9gp8rk11njem1.jpeg",
      platform: "dev.to",
    },
  },
  {
    slug: "how-to-install-run-microsoft-kosmos-25-locally",
    title: "How to Install run Microsoft Kosmos 25 locally",
    excerpt:
      "Step-by-step walkthrough: How to Install run Microsoft Kosmos 25 locally — install, configure, and run with notes from hands-on testing.",
    date: "2025-09-08",
    readingTime: 10,
    tags: ["Local LLMs", "Tutorial", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-run-microsoft-kosmos-25-locally-l5a",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4cdcphkkg0fw0zc2sgis.png",
      platform: "dev.to",
    },
  },
  {
    slug: "deepseek-v31-meets-promptfoo-jailbreaks-biases-beyond",
    title: "DeepSeek V31 Meets Promptfoo Jailbreaks Biases Beyond",
    excerpt:
      "Step-by-step walkthrough: DeepSeek V31 Meets Promptfoo Jailbreaks Biases Beyond — install, configure, and run with notes from hands-on testing.",
    date: "2025-08-31",
    readingTime: 11,
    tags: ["Security", "LLMs", "AI"],
    external: {
      url: "https://dev.to/ayush7614/deepseek-v31-meets-promptfoo-jailbreaks-biases-beyond-4270",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5oisrg918g3nymzd6rai.png",
      platform: "dev.to",
    },
  },
  {
    slug: "the-gpt-5-paradox-genius-in-thought-gaps-in-safety",
    title: "The GPT 5 Paradox Genius in Thought Gaps in Safety",
    excerpt:
      "Step-by-step walkthrough: The GPT 5 Paradox Genius in Thought Gaps in Safety — install, configure, and run with notes from hands-on testing.",
    date: "2025-08-14",
    readingTime: 12,
    tags: ["AI", "LLMs", "Tutorial"],
    external: {
      url: "https://dev.to/ayush7614/the-gpt-5-paradox-genius-in-thought-gaps-in-safety-100p",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5gwci47d82rk14uunhkp.png",
      platform: "dev.to",
    },
  },
  {
    slug: "reproducible-llm-benchmarking-gpt-5-vs-grok-4-with-promptfoo",
    title: "Reproducible LLM Benchmarking GPT 5 vs Grok 4 with Promptfoo",
    excerpt:
      "Step-by-step walkthrough: Reproducible LLM Benchmarking GPT 5 vs Grok 4 with Promptfoo — install, configure, and run with notes from hands-on testing.",
    date: "2025-08-26",
    readingTime: 13,
    tags: ["Security", "LLMs", "AI"],
    external: {
      url: "https://dev.to/ayush7614/reproducible-llm-benchmarking-gpt-5-vs-grok-4-with-promptfoo-4i3c",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fc2v3t57vknl0u22dko2z.png",
      platform: "dev.to",
    },
  },
  {
    slug: "the-ocr-model-that-outranks-gpt-4o",
    title: "The OCR Model that Outranks GPT 4o",
    excerpt:
      "Step-by-step walkthrough: The OCR Model that Outranks GPT 4o — install, configure, and run with notes from hands-on testing.",
    date: "2025-08-22",
    readingTime: 14,
    tags: ["AI", "Tutorial", "Local LLMs"],
    external: {
      url: "https://dev.to/nodeshiftcloud/the-ocr-model-that-outranks-gpt-4o-586b",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpzwi7g63i3uh6uhpm7dn.png",
      platform: "dev.to",
    },
  },
  {
    slug: "the-one-click-gpt-5-code-machine-how-i-built-my-own-ai-developer",
    title: "The One Click GPT 5 Code Machine how i Built my Own AI Developer",
    excerpt:
      "Step-by-step walkthrough: The One Click GPT 5 Code Machine how i Built my Own AI Developer — install, configure, and run with notes from hands-on testing.",
    date: "2025-08-08",
    readingTime: 15,
    tags: ["AI", "LLMs", "Tutorial"],
    external: {
      url: "https://dev.to/ayush7614/the-one-click-gpt-5-code-machine-how-i-built-my-own-ai-developer-4j0n",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fkehnirvpvsbr8bz4l8dj.png",
      platform: "dev.to",
    },
  },
  {
    slug: "100-game-changing-chatgpt-prompts-for-developers-product-managers-designers-and-",
    title: "100 Game Changing Chatgpt Prompts for Developers Product Managers Designers and",
    excerpt:
      "Step-by-step walkthrough: 100 Game Changing Chatgpt Prompts for Developers Product Managers Designers and — install, configure, and run with notes from hands-on testing.",
    date: "2024-08-11",
    readingTime: 10,
    tags: ["AI", "Tutorial", "DevTools"],
    external: {
      url: "https://dev.to/ayush7614/100-game-changing-chatgpt-prompts-for-developers-product-managers-designers-and-email-marketers-1c5i",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgl3khpc1tou6if1zsmrk.png",
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
    date: "2026-05-13",
    readingTime: 14,
    tags: ["Security", "AI", "MCP", "LLMs"],
    external: {
      url: "https://medium.com/the-first-digit/medusa-ai-security-scanner-complete-guide-to-securing-ai-agents-mcp-servers-and-llm-applications-4b10548b90f2",
      image: "https://miro.medium.com/v2/resize:fit:700/1*dWXtY6CZN8VWjTMKDiaBRA.png",
      platform: "Medium",
    },
  },
  {
    slug: "tradingagents-multi-agent-trading",
    title:
      "TradingAgents: Build a Multi-Agent AI Trading System That Thinks Like a Hedge Fund",
    excerpt:
      "Architecting a multi-agent trading stack — research agents, risk agents, execution agents, and the orchestration layer that makes them behave like a desk.",
    date: "2026-05-02",
    readingTime: 13,
    tags: ["AI", "Agents", "Tutorial"],
    external: {
      url: "https://medium.com/coinmonks/tradingagents-build-a-multi-agent-ai-trading-system-that-thinks-like-a-hedge-fund-5be2301c83d2",
      image: "https://miro.medium.com/v2/resize:fit:700/1*MkFPFEtyW63r0LBuPGrvIA.png",
      platform: "Medium",
    },
  },
  {
    slug: "pentest-ai-autonomous-pentesting-2026",
    title:
      "Pentest AI: The Complete Guide to AI-Powered Autonomous Penetration Testing in 2026",
    excerpt:
      "How autonomous AI pentesting actually works in 2026 — tooling, workflows, guardrails, and what to expect when you point an agent at your own perimeter.",
    date: "2026-05-14",
    readingTime: 15,
    tags: ["Security", "AI", "Agents"],
    external: {
      url: "https://medium.com/the-first-digit/pentest-ai-the-complete-guide-to-ai-powered-autonomous-penetration-testing-in-2026-10754ee997d6",
      image: "https://miro.medium.com/v2/resize:fit:700/1*lEzuhRX6Hry5X23Q91J9Gw.png",
      platform: "Medium",
    },
  },
  {
    slug: "hacker-search-engines-osint-2026",
    title:
      "The Ultimate Guide to Hacker Search Engines & OSINT Tools in 2026",
    excerpt:
      "The OSINT stack I reach for in 2026 — hacker search engines, dorking patterns, and practical recon workflows for security researchers.",
    date: "2026-05-12",
    readingTime: 12,
    tags: ["Security", "Tutorial"],
    external: {
      url: "https://medium.com/the-first-digit/the-ultimate-guide-to-hacker-search-engines-osint-tools-in-2026-ad2f9ab2684d",
      image: "https://miro.medium.com/v2/resize:fit:700/1*FFDrTZO5LIGRgfcdb8mILA.png",
      platform: "Medium",
    },
  },
  {
    slug: "pentest-ai-agents-28-subagents",
    title:
      "Pentest AI Agents: 28 Specialized AI Subagents That Turn Claude Code Into a Cybersecurity Team",
    excerpt:
      "28 purpose-built subagents for offensive security — recon, exploit chaining, reporting — all orchestrated through Claude Code.",
    date: "2026-05-01",
    readingTime: 14,
    tags: ["Security", "AI", "Agents", "DevTools"],
    external: {
      url: "https://medium.com/the-first-digit/pentest-ai-agents-28-specialized-ai-subagents-that-turn-claude-code-into-a-cybersecurity-94c0914da6ca",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*scbhIY9wqtZPYqGKoTPGXA.png",
      platform: "Medium",
    },
  },
  {
    slug: "25-open-source-cybersecurity-tools",
    title:
      "25 Open-Source Cybersecurity Tools That Work Even When Your Budget Doesn't",
    excerpt:
      "Twenty-five OSS security tools that punch above their price tag — free, battle-tested, and enough to run a lean security program.",
    date: "2026-04-28",
    readingTime: 13,
    tags: ["Security", "Open Source"],
    external: {
      url: "https://medium.com/the-first-digit/25-open-source-cybersecurity-tools-that-work-even-when-your-budget-doesnt-2594b363ffb3",
      image: "https://miro.medium.com/v2/resize:fit:700/1*FGCDyVMat7j28SzgDY50Rg.png",
      platform: "Medium",
    },
  },
  {
    slug: "solo-engineer-stack-2026",
    title:
      "The Solo Engineer Stack: How 10 Open-Source Repos Can Replace an Entire Engineering Team in 2026",
    excerpt:
      "Ten repos that cover the full solo-engineer surface area — from CI to observability to AI agents — without hiring a team.",
    date: "2026-04-23",
    readingTime: 11,
    tags: ["Open Source", "Engineering", "AI"],
    external: {
      url: "https://medium.com/faun/the-solo-engineer-stack-how-10-open-source-repos-can-replace-an-entire-engineering-team-in-2026-162440acc3cc",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*faHSAcsRZBeQ078OojWqmg.png",
      platform: "Medium",
    },
  },
  {
    slug: "6-open-source-ai-agents-next-level",
    title:
      "These 6 Open-Source AI Agents Are Next Level — and They're Changing How We Build Software",
    excerpt:
      "Six agent frameworks that are quietly reshaping how teams ship — not demos, but tools people actually run in production.",
    date: "2026-04-21",
    readingTime: 10,
    tags: ["AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/towardsdev/these-6-open-source-ai-agents-are-next-level-and-theyre-changing-how-we-build-software-2480ec83b3dc",
      image: "https://miro.medium.com/v2/resize:fit:700/1*J6BH_jY1v7-HDJodxoOKnA.png",
      platform: "Medium",
    },
  },
  {
    slug: "gemma-4-ollama-local-coding-agent",
    title:
      "I Replaced Codex with Gemma 4 + Ollama — Here's My Local AI Coding Agent",
    excerpt:
      "Swapping cloud Codex for a fully local Gemma 4 + Ollama coding agent — setup, prompts, and where it wins (and where it doesn't).",
    date: "2026-04-15",
    readingTime: 11,
    tags: ["Local AI", "LLMs", "DevTools"],
    external: {
      url: "https://medium.com/faun/i-replaced-codex-with-gemma-4-ollama-heres-my-local-ai-coding-agent-e18307e35d6f",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*j1Z3pSnajTeZFdxb-TNf2Q.png",
      platform: "Medium",
    },
  },
  {
    slug: "emerging-ai-agent-frameworks-2026-part-2",
    title:
      "Emerging AI Agent Frameworks Developers Should Watch in 2026 (Part 2)",
    excerpt:
      "Part two of the agent framework roundup — newer entrants, architecture patterns, and which ones are worth betting on this year.",
    date: "2026-04-14",
    readingTime: 12,
    tags: ["AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/faun/emerging-ai-agent-frameworks-developers-should-watch-in-2026-part-2-92d49e75e867",
      image: "https://miro.medium.com/v2/resize:fit:720/1*KYOxnZaKtOoNqzSdwt5XTQ.png",
      platform: "Medium",
    },
  },
  {
    slug: "ai-web-browsers-agents-2026",
    title:
      "AI Web Browsers & Agents in 2026: The Complete Selection Guide",
    excerpt:
      "Every serious AI browser and web-agent option in 2026 — compared on privacy, autonomy, extensibility, and real-world usefulness.",
    date: "2026-04-13",
    readingTime: 13,
    tags: ["AI", "Agents", "Tutorial"],
    external: {
      url: "https://medium.com/faun/ai-web-browsers-agents-in-2026-the-complete-selection-guide-54473dd879dd",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*FmCyeKB6ysotpxP4NBs-pA.png",
      platform: "Medium",
    },
  },
  {
    slug: "multica-claude-managed-agents-alternative",
    title:
      "The Open-Source Claude Managed Agents Alternative Is Here — Meet Multica",
    excerpt:
      "Multica as an OSS answer to managed Claude agents — architecture, setup, and how it compares for teams that want control.",
    date: "2026-04-10",
    readingTime: 10,
    tags: ["AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/faun/the-open-source-claude-managed-agents-alternative-is-here-meet-multica-7035cca69a5d",
      image: "https://miro.medium.com/v2/resize:fit:700/1*zifVRC4hhA62xYUZlFVLng.png",
      platform: "Medium",
    },
  },
  {
    slug: "mastra-ai-production-agents",
    title:
      "Mastra AI: The Modern Framework for Building Production-Ready AI Agents",
    excerpt:
      "A hands-on tour of Mastra — workflows, memory, tool calling, and the patterns that make agents production-grade instead of demo-grade.",
    date: "2026-04-09",
    readingTime: 11,
    tags: ["AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/faun/mastra-ai-the-modern-framework-for-building-production-ready-ai-agents-f7f39664c9ad",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*yVq8P3a2sYIxiND3L-wYdQ.png",
      platform: "Medium",
    },
  },
  {
    slug: "gaia-amd-local-intelligent-systems",
    title:
      "GAIA by AMD: Running Intelligent Systems Fully on Your Own Machine",
    excerpt:
      "AMD's GAIA stack for running intelligent workloads locally — hardware sizing, install, and the use cases where on-device wins.",
    date: "2026-04-08",
    readingTime: 10,
    tags: ["Local AI", "AI", "Tutorial"],
    external: {
      url: "https://medium.com/faun/gaia-by-amd-running-intelligent-systems-fully-on-your-own-machine-04da1dc420a5",
      image: "https://miro.medium.com/v2/resize:fit:700/1*I1qdNsC20l5f6tEVpWymfQ.png",
      platform: "Medium",
    },
  },
  {
    slug: "llm-observability-tools-2026",
    title:
      "Top 19 LLM Observability Tools to Monitor & Evaluate AI Agents (2026 Guide)",
    excerpt:
      "Nineteen tools for tracing, evaluating, and debugging LLM agents in production — with notes on when each one actually earns its keep.",
    date: "2026-04-03",
    readingTime: 15,
    tags: ["AI", "LLMs", "Agents", "DevOps"],
    external: {
      url: "https://medium.com/towardsdev/top-19-llm-observability-tools-to-monitor-evaluate-ai-agents-2026-guide-9096d4b857ae",
      image: "https://miro.medium.com/v2/resize:fit:700/1*fPiu40bVQ1amKV-G_Kyv2w.png",
      platform: "Medium",
    },
  },
  {
    slug: "open-source-ai-agent-frameworks-github",
    title:
      "The Open-Source AI Agent Frameworks That Deserve More Stars on GitHub",
    excerpt:
      "Underrated agent frameworks hiding in plain sight — why they matter, what they do differently, and links to get started.",
    date: "2026-04-02",
    readingTime: 11,
    tags: ["AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/faun/the-open-source-ai-agent-frameworks-that-deserve-more-stars-on-github-6f1fd0e3fc99",
      image: "https://miro.medium.com/v2/resize:fit:700/1*1zln3QJq45MYBOHsrRtZJg.png",
      platform: "Medium",
    },
  },
  {
    slug: "archinstall-4-0-arch-linux",
    title:
      "Archinstall 4.0: A Modern New Way to Install Arch Linux — Full Guide & Features",
    excerpt:
      "Archinstall 4.0 makes Arch approachable again — full feature tour, install walkthrough, and the defaults I'd change on day one.",
    date: "2026-03-31",
    readingTime: 12,
    tags: ["Tutorial", "DevOps"],
    external: {
      url: "https://medium.com/the-first-digit/archinstall-4-0-a-modern-new-way-to-install-arch-linux-full-guide-features-44d0aaf1309e",
      image: "https://miro.medium.com/v2/resize:fit:700/1*AK9dSM_ncVy8zkHXvtu7vQ.png",
      platform: "Medium",
    },
  },
  {
    slug: "cybersecurity-ai-cai",
    title:
      "Cybersecurity AI (CAI): The Future of AI-Powered Security Automation",
    excerpt:
      "CAI and the shift toward AI-native security automation — what it automates, what it can't, and how teams should adopt it.",
    date: "2026-03-30",
    readingTime: 11,
    tags: ["Security", "AI", "Agents"],
    external: {
      url: "https://medium.com/the-first-digit/cybersecurity-ai-cai-the-future-of-ai-powered-security-automation-b7ffd25b5c93",
      image: "https://miro.medium.com/v2/resize:fit:700/1*HtRNF-N2c_QX15I-PbTH-w.png",
      platform: "Medium",
    },
  },
  {
    slug: "agentscope-real-world-agents",
    title:
      "AgentScope: Building Real-World AI Agents That Actually Work",
    excerpt:
      "AgentScope for multi-agent apps that survive contact with reality — roles, messaging, failure handling, and a working example.",
    date: "2026-03-27",
    readingTime: 11,
    tags: ["AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/towardsdev/agentscope-building-real-world-ai-agents-that-actually-work-2ace602ab387",
      image: "https://miro.medium.com/v2/resize:fit:700/1*1a83TEfkGxAmBNA3RuNeVg.png",
      platform: "Medium",
    },
  },
  {
    slug: "openviking-agent-memory-context",
    title:
      "OpenViking Explained: Reinventing Memory and Context for AI Agents",
    excerpt:
      "How OpenViking rethinks agent memory beyond flat vector stores — context layers, retrieval, and why it matters for long-running agents.",
    date: "2026-03-25",
    readingTime: 10,
    tags: ["AI", "Agents", "LLMs"],
    external: {
      url: "https://medium.com/faun/openviking-explained-reinventing-memory-and-context-for-ai-agents-c189b2bea61b",
      image: "https://miro.medium.com/v2/resize:fit:700/1*FFXQGHRduJsL4Tj9spCHDg.png",
      platform: "Medium",
    },
  },
  {
    slug: "strix-open-source-hacker",
    title:
      "Strix: The Open-Source Hacker That Tests Your App Like a Real Attacker",
    excerpt:
      "Strix as an autonomous offensive testing tool — setup, attack surfaces it finds, and how to run it safely against your own apps.",
    date: "2026-03-23",
    readingTime: 11,
    tags: ["Security", "AI", "Open Source"],
    external: {
      url: "https://medium.com/the-first-digit/strix-the-open-source-hacker-that-tests-your-app-like-a-real-attacker-4217e0c9e843",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*8UbfYEbD5Kh1ZgK7TkXUBw.png",
      platform: "Medium",
    },
  },
  {
    slug: "modern-mobile-pentesting-stack-2026",
    title:
      "The Modern Mobile Pentesting Stack in 2026: Tools, Trends & Practical Workflows",
    excerpt:
      "The mobile pentest toolchain for 2026 — static, dynamic, network, and the workflows that tie them together on real engagements.",
    date: "2026-03-21",
    readingTime: 13,
    tags: ["Security", "Tutorial"],
    external: {
      url: "https://medium.com/the-first-digit/the-modern-mobile-pentesting-stack-in-2026-tools-trends-practical-workflows-c6a61aa01a36",
      image: "https://miro.medium.com/v2/resize:fit:700/1*OI3bbnLaAQ6IaYy-T-L1Fw.png",
      platform: "Medium",
    },
  },
  {
    slug: "ai-driven-pentesting-tools-2026",
    title:
      "The Rise of AI-Driven Pentesting: 8 Open-Source Tools Security Teams Should Watch in 2026",
    excerpt:
      "Eight OSS tools bringing AI into the pentest workflow — recon, exploitation assist, reporting — and how to evaluate them responsibly.",
    date: "2026-03-19",
    readingTime: 12,
    tags: ["Security", "AI", "Open Source"],
    external: {
      url: "https://medium.com/the-first-digit/the-rise-of-ai-driven-pentesting-8-open-source-tools-security-teams-should-watch-in-2026-e849c8171450",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*kGnuK7XcYnpI7t7QFPNmOA.png",
      platform: "Medium",
    },
  },
  {
    slug: "hindsight-ai-agent-memory",
    title:
      "Hindsight: The Future of AI Agent Memory Beyond Vector Databases",
    excerpt:
      "Hindsight's approach to durable agent memory — episodic recall, structured context, and why vectors alone aren't enough.",
    date: "2026-03-17",
    readingTime: 10,
    tags: ["AI", "Agents", "LLMs"],
    external: {
      url: "https://medium.com/faun/hindsight-the-future-of-ai-agent-memory-beyond-vector-databases-0e8745ff4b38",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*UoNLWkW1cfP6FqrjNasoCQ.png",
      platform: "Medium",
    },
  },
  {
    slug: "openclaw-personal-ai-platform",
    title:
      "OpenClaw: The Journey From a Weekend Hack to a Personal AI Platform You Truly Own",
    excerpt:
      "How OpenClaw grew from a weekend project into a self-hosted personal AI platform — architecture, philosophy, and getting started.",
    date: "2026-02-02",
    readingTime: 11,
    tags: ["AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/faun/openclaw-the-journey-from-a-weekend-hack-to-a-personal-ai-platform-you-truly-own-76ce9395a315",
      image: "https://miro.medium.com/v2/resize:fit:700/1*EFZbh0s3MdOAyehvmZRtug.png",
      platform: "Medium",
    },
  },
  {
    slug: "11-production-llm-serving-engines",
    title:
      "11 Production LLM Serving Engines: vLLM vs TGI vs Ollama and Beyond",
    excerpt:
      "Eleven serving engines compared for production — throughput, ops burden, GPU efficiency, and which I'd pick for each workload.",
    date: "2026-01-12",
    readingTime: 14,
    tags: ["LLMs", "DevOps", "Local AI"],
    external: {
      url: "https://medium.com/faun/11-production-llm-serving-engines-vllm-vs-tgi-vs-ollama-162874402840",
      image: "https://miro.medium.com/v2/resize:fit:700/1*Jw_6jSiefEW6qw8FM1wkoA.png",
      platform: "Medium",
    },
  },
  {
    slug: "ai-agent-arsenal-20-open-source",
    title:
      "AI Agent Arsenal: 20 Battle-Tested Open-Source Powerhouses",
    excerpt:
      "Twenty OSS projects that form a complete agent-building arsenal — orchestration, tools, memory, eval, and deployment.",
    date: "2025-12-31",
    readingTime: 13,
    tags: ["AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/@techlatest.net/ai-agent-arsenal-20-battle-tested-open-source-powerhouses-ea3d4534d264",
      image: "https://miro.medium.com/v2/resize:fit:700/0*dv_p_iOPVscnIT8q.png",
      platform: "Medium",
    },
  },

  // ──────────────────────────── 2026 ────────────────────────────
  {
    slug: "mcp-server-stack-2026",
    title: "The MCP Server Stack: 10 Open-Source Essentials for 2026",
    excerpt:
      "The Model Context Protocol ecosystem has exploded. Here are the 10 open-source MCP servers I'd put in every agent stack going into 2026.",
    date: "2025-12-19",
    readingTime: 14,
    tags: ["MCP", "AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/towardsdev/the-mcp-server-stack-10-open-source-essentials-for-2026-cb13f080ca5c",
      image: "https://miro.medium.com/v2/resize:fit:1024/0*z5Re4a_BqVNumqZj.png",
      platform: "Medium",
    },
  },
  {
    slug: "20-free-open-source-ai-tools-2026",
    title:
      "20 Free Open-Source AI Tools to Run Production-Grade Agents Without Paying LLM APIs in 2026",
    excerpt:
      "A field guide to running production-grade autonomous agents on zero API spend — 20 hand-picked open-source tools, real workflows, and the gotchas nobody mentions.",
    date: "2026-01-08",
    readingTime: 16,
    tags: ["AI", "Agents", "Open Source", "Local AI"],
    external: {
      url: "https://medium.com/faun/20-free-open-source-ai-tools-to-run-production-grade-agents-without-paying-llm-apis-in-2026-5f1ffdcbcc18",
      image: "https://miro.medium.com/v2/resize:fit:700/1*PB9xBPthVyC9W4ZjQfX1fQ.png",
      platform: "Medium",
    },
  },
  {
    slug: "untold-misadventures-red-teaming-kimi-k2",
    title: "The Untold Misadventures of Red-Teaming Kimi K2 with Promptfoo",
    excerpt:
      "I spent a week trying to break Moonshot's Kimi K2 with Promptfoo. Here's where it cracked, where it surprised me, and what I'd put in a red-team playbook.",
    date: "2025-07-31",
    readingTime: 11,
    tags: ["Red Teaming", "Security", "LLMs", "Promptfoo"],
    external: {
      url: "https://dev.to/ayush7614/the-untold-misadventures-of-red-teaming-kimi-k2-with-promptfoo-3hig",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F22p8txkyac31l3r8hozs.png",
      platform: "dev.to",
    },
  },
  {
    slug: "promptfoo-qwen3-coder-480b-vulnerabilities",
    title:
      "Promptfoo × Qwen3-Coder: Unmasking Vulnerabilities in 480 Billion Parameters",
    excerpt:
      "Pointing Promptfoo at Qwen3-Coder 480B-A35B revealed a surprising attack surface. Walking through the audit, the findings, and the patterns that repeat across frontier coder models.",
    date: "2025-08-01",
    readingTime: 13,
    tags: ["Red Teaming", "Security", "LLMs", "Promptfoo"],
    external: {
      url: "https://dev.to/ayush7614/promptfoo-x-qwen3-coder-unmasking-vulnerabilities-in-480-billion-parameters-17hb",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgy73wfghew8i45ryzm0a.png",
      platform: "dev.to",
    },
  },
  {
    slug: "glm-4-5-promptfoo-systematic-llm-audits",
    title: "GLM-4.5 vs Promptfoo: A Playbook for Systematic LLM Security Audits",
    excerpt:
      "A repeatable playbook for security-auditing any LLM — demonstrated end-to-end on GLM-4.5 using Promptfoo. Test plans, harnesses, and how to read the signal.",
    date: "2025-08-03",
    readingTime: 12,
    tags: ["Red Teaming", "Security", "LLMs", "Promptfoo"],
    external: {
      url: "https://dev.to/ayush7614/glm-45-vs-promptfoo-a-playbook-for-systematic-llm-security-audits-27ln",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fp08su003f9t5znj2j1oc.png",
      platform: "dev.to",
    },
  },
  {
    slug: "llms-under-fire-deepteam-ollama",
    title: "LLMs Under Fire: Red Teaming with DeepTeam + Ollama",
    excerpt:
      "Setting up DeepTeam against local Ollama models to stress-test prompt injection, jailbreaks, and harmful-output rates — all without leaving your laptop.",
    date: "2025-06-26",
    readingTime: 10,
    tags: ["Red Teaming", "Security", "Local AI", "LLMs"],
    external: {
      url: "https://nodeshift.com/blog/llms-under-fire-red-teaming-with-deepteam-ollama",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2xvvdhfpqszl9nahpvrr.jpg",
      platform: "NodeShift",
    },
  },
  {
    slug: "promptfoo-vs-deepteam-vs-pyrit-vs-garak",
    title:
      "Promptfoo vs DeepTeam vs PyRIT vs Garak: The Ultimate Red-Teaming Showdown for LLMs",
    excerpt:
      "Four major open-source LLM red-teaming frameworks, one merciless head-to-head. Coverage, ergonomics, plugin ecosystem, and which I'd actually ship with.",
    date: "2025-07-01",
    readingTime: 15,
    tags: ["Red Teaming", "Security", "LLMs", "Open Source"],
    external: {
      url: "https://dev.to/ayush7614/promptfoo-vs-deepteam-vs-pyrit-vs-garak-the-ultimate-red-teaming-showdown-for-llms-48if",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2b6m92vpt5ersekb9dj1.png",
      platform: "dev.to",
    },
  },
  {
    slug: "promptfoo-ollama-deepseek-r1-cyber-warzone",
    title:
      "Promptfoo × Ollama × DeepSeek-R1: Turning My Model Into a Cyber Warzone",
    excerpt:
      "DeepSeek-R1 is impressive — and a great red-team target. Here's the full Promptfoo + Ollama harness I used to stress-test reasoning, refusals, and exploits.",
    date: "2025-07-02",
    readingTime: 11,
    tags: ["Red Teaming", "LLMs", "Local AI", "Promptfoo"],
    external: {
      url: "https://dev.to/ayush7614/promptfoo-x-ollama-x-deepseek-r1-turning-my-model-into-a-cyber-warzone-3ef5",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Funnpgpm6kskvg94c4083.png",
      platform: "dev.to",
    },
  },
  {
    slug: "from-openai-to-ollama-visual-llm-evals-promptfoo",
    title: "From OpenAI to Ollama: Visual LLM Evaluations with Promptfoo",
    excerpt:
      "Side-by-side visual evaluations of OpenAI hosted models and local Ollama runs — how to build a faithful eval harness when ground truth is fuzzy.",
    date: "2025-06-29",
    readingTime: 9,
    tags: ["LLMs", "Local AI", "Promptfoo", "Tutorial"],
    external: {
      url: "https://dev.to/ayush7614/from-openai-to-ollama-visual-llm-evaluations-with-promptfoo-2k03",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7ietvecathrx9ngd5d0t.png",
      platform: "dev.to",
    },
  },
  {
    slug: "ai-book-writing-system-acp-promptfoo",
    title:
      "How I Built and Evaluated an AI Book-Writing System with ACP and Promptfoo",
    excerpt:
      "An honest engineering diary on shipping an AI book-writing pipeline — Agent Communication Protocol, evaluator harness, and the failure modes that surprised me.",
    date: "2025-07-20",
    readingTime: 13,
    tags: ["AI", "Agents", "LLMs", "Promptfoo"],
    external: {
      url: "https://dev.to/ayush7614/how-i-built-and-evaluated-an-ai-book-writing-system-with-acp-and-promptfoo-18np",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnfiotfobaj5h8qlujb6p.png",
      platform: "dev.to",
    },
  },

  // ──────────────────────── Late 2025 / Local LLMs ────────────────────────
  {
    slug: "install-run-openai-gpt-oss-locally",
    title: "How to Install & Run OpenAI GPT-OSS Locally",
    excerpt:
      "OpenAI shipped GPT-OSS — and yes, you can run it on your own metal. The complete setup, hardware sizing, and the inference tricks that matter.",
    date: "2025-08-06",
    readingTime: 10,
    tags: ["Local AI", "LLMs", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-run-openai-gpt-oss-locally-1lf0",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpv7sp0ree7sga9ar70se.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "install-run-gpt-oss-20b-120b-gguf-locally",
    title: "How to Install & Run GPT-OSS 20B and 120B GGUF Locally",
    excerpt:
      "Going beyond the base GPT-OSS — running the 20B and full 120B GGUF builds locally with sane quantization, sane VRAM, and reproducible benchmarks.",
    date: "2025-08-11",
    readingTime: 11,
    tags: ["Local AI", "LLMs", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-run-gpt-oss-20b-and-120b-gguf-locally-3833",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fv05bflyftwa0ao1xlvum.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "qwen3-coder-480b-a35b-locally",
    title: "How to Install & Run Qwen3-Coder 480B A35B Instruct Locally",
    excerpt:
      "Wrangling Qwen3-Coder's 480B MoE on local hardware: weight layout, KV-cache strategies, and the dev workflow that actually keeps the model fast.",
    date: "2025-08-11",
    readingTime: 12,
    tags: ["Local AI", "LLMs", "Tutorial"],
    external: {
      url: "https://nodeshift.cloud/blog/how-to-install-run-qwen3-coder-480b-a35b-instruct-locally",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgy73wfghew8i45ryzm0a.png",
      platform: "NodeShift",
    },
  },
  {
    slug: "deepseek-v3-1-gguf-locally",
    title: "How to Install & Run DeepSeek V3.1 GGUF Locally",
    excerpt:
      "DeepSeek V3.1 in GGUF form is a strong daily driver. Hardware sizing, quant trade-offs, and an end-to-end install walkthrough.",
    date: "2025-09-01",
    readingTime: 9,
    tags: ["Local AI", "LLMs", "Tutorial"],
    external: {
      url: "https://nodeshift.cloud/blog/how-to-install-run-deepseek-v3-1-gguf-locally",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5oisrg918g3nymzd6rai.png",
      platform: "NodeShift",
    },
  },
  {
    slug: "claude-4-opus-vs-sonnet",
    title: "Claude 4 Opus vs Sonnet: Benchmarks and Dev Workflow with Claude Code",
    excerpt:
      "Side-by-side benchmarks of Claude 4 Opus and Sonnet, with a practical Claude Code workflow that gets the most out of each tier.",
    date: "2025-05-24",
    readingTime: 10,
    tags: ["LLMs", "DevTools", "AI"],
    external: {
      url: "https://dev.to/nodeshiftcloud/claude-4-opus-vs-sonnet-benchmarks-and-dev-workflow-with-claude-code-11fa",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fkcwkhm3hht1ohpc4alt7.png",
      platform: "dev.to",
    },
  },
  {
    slug: "opencode-open-source-claude-code-alternative",
    title:
      "Ultimate Hands-On Guide to OpenCode: Open-Source Claude Code Alternative",
    excerpt:
      "OpenCode is the open-source coding agent that finally feels like Claude Code. A complete hands-on guide — install, configure, hook up local models.",
    date: "2026-03-16",
    readingTime: 11,
    tags: ["DevTools", "Open Source", "AI", "Tutorial"],
    external: {
      url: "https://medium.com/faun/ultimate-hands-on-guide-to-opencode-open-source-claude-code-alternative-37af8f8928cb",
      image: "https://miro.medium.com/v2/resize:fit:700/1*tn3V6JTyp0_2K0vpzee51w.png",
      platform: "Medium",
    },
  },
  {
    slug: "void-ollama-llms-ai-workbench",
    title:
      "Void + Ollama + LLMs: How I Turned My Code Editor Into a Full-Blown AI Workbench",
    excerpt:
      "Void is an open-source Cursor-style editor. Wired to Ollama, it becomes a local AI workbench that doesn't phone home. Full setup inside.",
    date: "2025-05-26",
    readingTime: 9,
    tags: ["DevTools", "Local AI", "Open Source"],
    external: {
      url: "https://dev.to/nodeshiftcloud/void-ollama-llms-how-i-turned-my-code-editor-into-a-full-blown-ai-workbench-eop",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fq1rsmav1qwpjyndobu7r.png",
      platform: "dev.to",
    },
  },
  {
    slug: "zed-ollama-llms-gpu-vm-setup",
    title:
      "Zed + Ollama + LLMs on a GPU VM: The Ultimate Local Dev Setup for Serious Coders",
    excerpt:
      "Zed is fast, Ollama is portable, and a GPU VM is finally cheap. Here's the dev setup I run all day — IDE, model server, and the network glue.",
    date: "2025-05-29",
    readingTime: 10,
    tags: ["DevTools", "Local AI", "DevOps"],
    external: {
      url: "https://dev.to/nodeshiftcloud/zed-ollama-llms-on-a-gpu-vm-the-ultimate-local-dev-setup-for-serious-coders-18pd",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqh1lvcxx3igos3noqd54.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "openhands-ai-engineer-locally",
    title:
      "Build an App with AI in Minutes Using OpenHands AI Engineer: Install Locally",
    excerpt:
      "OpenHands lets you ship working apps with an autonomous engineer agent. The install, the workflows, and the prompts I've found ship 10x more reliably.",
    date: "2024-11-13",
    readingTime: 11,
    tags: ["Agents", "AI", "Open Source", "DevTools"],
    external: {
      url: "https://dev.to/nodeshiftcloud/build-an-app-with-ai-in-minutes-using-openhands-ai-engineer-install-locally-2ogi",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fljg6cjpbqcrdivxjde98.jpeg",
      platform: "dev.to",
    },
  },
  {
    slug: "run-llama-4-locally-tool-calling",
    title: "Step-by-Step Guide to Run Llama 4 Locally with Tool Calling Enabled",
    excerpt:
      "Llama 4 is here — and it's tool-calling-native. Setting it up locally end-to-end, with a working agentic loop and traces you can inspect.",
    date: "2025-06-05",
    readingTime: 11,
    tags: ["Local AI", "LLMs", "Agents", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/step-by-step-guide-to-run-llama-4-locally-with-tool-calling-enabled-jg7",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fo7fz3d6thg31u885s2cv.png",
      platform: "dev.to",
    },
  },
  {
    slug: "install-llama-33-70b-instruct-locally",
    title: "How to Install Llama 3.3 70B Instruct Locally",
    excerpt:
      "Llama 3.3 70B Instruct is the sweet-spot OSS model for most workloads. Full local-install guide with quantization and serving tips.",
    date: "2024-12-18",
    readingTime: 9,
    tags: ["Local AI", "LLMs", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-llama-33-70b-instruct-locally-3p1a",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmtaelyr5qmomb4982ah0.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "mastering-deepseek-tiny-small-vl2",
    title:
      "Mastering DeepSeek: Installing Tiny, Small, and VL2 Models with Inference and a Gradio Interface",
    excerpt:
      "A complete tour of the DeepSeek lineup — Tiny, Small, and VL2 — with reproducible inference scripts and a Gradio UI for quick experiments.",
    date: "2025-02-06",
    readingTime: 12,
    tags: ["Local AI", "LLMs", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/mastering-deepseek-installing-tiny-small-and-vl2-models-with-inference-and-a-gradio-interface-4d2m",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnewmtzhajzd1pkkkmxa5.jpeg",
      platform: "dev.to",
    },
  },
  {
    slug: "install-deepseek-janus-pro-7b-locally",
    title: "How to Install DeepSeek Janus-Pro 7B Locally",
    excerpt:
      "DeepSeek Janus-Pro 7B is a strong multimodal model. The full install, weights layout, and a minimal inference example you can build on.",
    date: "2025-01-28",
    readingTime: 8,
    tags: ["Local AI", "LLMs", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-deepseek-janus-pro-7b-locally-5924",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5vw9wymks6dt7bq1vrkc.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "deploy-qwen25-coder-32b-cloud",
    title: "How to Deploy Qwen2.5-Coder-32B-Instruct in the Cloud",
    excerpt:
      "A pragmatic cloud-deploy walkthrough for Qwen2.5-Coder-32B-Instruct — sizing, serving, and the cost-vs-throughput knobs that matter.",
    date: "2024-11-22",
    readingTime: 9,
    tags: ["LLMs", "DevOps", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-deploy-qwen25-coder-32b-instruct-in-the-cloud-4o9m",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feb3aovpahy8szqaop7se.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "ollama-web-llm-local-ai-search-assistant",
    title: "Ollama and Web-LLM: Building Your Own Local AI Search Assistant",
    excerpt:
      "Combine Ollama with Web-LLM to build a local AI search assistant — private, fast, and bookmark-friendly. The full architecture and code inside.",
    date: "2024-11-29",
    readingTime: 10,
    tags: ["Local AI", "LLMs", "Agents", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/ollama-and-web-llm-building-your-own-local-ai-search-assistant-3l5o",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4cqlatemvu38g552w7nk.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "install-mistral-magistral-locally",
    title: "How to Install Mistral Magistral Locally",
    excerpt:
      "Mistral Magistral is the model I keep coming back to for reasoning tasks. A clean, reproducible local-install guide with serving notes.",
    date: "2025-09-17",
    readingTime: 8,
    tags: ["Local AI", "LLMs", "Tutorial"],
    external: {
      url: "https://nodeshift.com/blog/how-to-install-mistral-magistral-locally",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnm0i61j5z8m10ch4qgsg.jpg",
      platform: "NodeShift",
    },
  },
  {
    slug: "install-mistral-voxtral-locally",
    title: "How to Install Mistral Voxtral Locally",
    excerpt:
      "Mistral Voxtral brings speech-native intelligence to local stacks. A complete install + first-app guide with audio pipelines.",
    date: "2025-07-18",
    readingTime: 9,
    tags: ["Local AI", "LLMs", "Tutorial"],
    external: {
      url: "https://nodeshift.com/blog/how-to-install-mistral-voxtral-locally",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4cdcphkkg0fw0zc2sgis.png",
      platform: "NodeShift",
    },
  },

  // ──────────────────────────── Image & 3D ────────────────────────────
  {
    slug: "install-hunyuan3d-world-locally",
    title: "How to Install & Run Tencent Hunyuan3D-World 1.0 Locally",
    excerpt:
      "Tencent's Hunyuan3D-World 1.0 turns text into navigable 3D scenes. The local install, GPU sizing, and a first scene-generation walkthrough.",
    date: "2025-01-21",
    readingTime: 11,
    tags: ["Image Gen", "AI", "Tutorial"],
    external: {
      url: "https://nodeshift.cloud/blog/how-to-install-run-tencent-hunyuan3d-world-1-0-locally",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fr79gdej4d5x2xtd4kosa.jpg",
      platform: "NodeShift",
    },
  },
  {
    slug: "install-flux-1-kontext-dev-locally",
    title: "How to Install FLUX.1 Kontext Dev Locally",
    excerpt:
      "FLUX.1 Kontext Dev is a context-aware image model that punches above its weight. Full local install and a workflow notebook to copy.",
    date: "2025-07-02",
    readingTime: 9,
    tags: ["Image Gen", "Local AI", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-install-flux1-kontext-dev-locally-1b0d",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fr79gdej4d5x2xtd4kosa.jpg",
      platform: "dev.to",
    },
  },
  {
    slug: "run-flux-1-schnell-pro-cloud",
    title: "How to Run FLUX.1 Schnell and Pro Image Generator in the Cloud",
    excerpt:
      "Running FLUX.1 Schnell and Pro on a GPU VM with sensible defaults, queueing, and a UI you can put in front of a team.",
    date: "2024-08-28",
    readingTime: 10,
    tags: ["Image Gen", "Cloud", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/how-to-run-flux-1-schnell-and-pro-image-generator-in-the-cloud-4d7h",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdlcg07ogr7kowzpk2h4q.png",
      platform: "dev.to",
    },
  },

  // ──────────────────────────── Medical / Specialized ────────────────────────────
  {
    slug: "ai-chest-x-ray-analyzer-medgemma-27b",
    title: "Building an AI-Powered Chest X-Ray Analyzer with MedGemma 27B and Gradio",
    excerpt:
      "An end-to-end build of a chest X-ray analyzer using Google's MedGemma 27B and Gradio — model loading, preprocessing, and a usable clinician-facing UI.",
    date: "2025-07-12",
    readingTime: 12,
    tags: ["AI", "LLMs", "Tutorial"],
    external: {
      url: "https://dev.to/nodeshiftcloud/building-an-ai-powered-chest-x-ray-analyzer-with-medgemma-27b-and-gradio-21cd",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fqq51s2o8dw35z4y4vbiz.jpg",
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
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fh1iswdj6xlmn0atfkeyl.jpg",
      platform: "NodeShift",
    },
  },

  // ──────────────────────────── Cybersecurity ────────────────────────────
  {
    slug: "vulhunt-vulnerability-hunting-framework",
    title: "VulHunt: Open-Source Vulnerability Hunting Framework",
    excerpt:
      "VulHunt — an open-source framework for hunting vulnerabilities at scale. Architecture, plugin model, and how I use it on bug-bounty engagements.",
    date: "2026-03-17",
    readingTime: 9,
    tags: ["Security", "Open Source"],
    external: {
      url: "https://medium.com/the-first-digit/vulhunt-open-source-vulnerability-hunting-framework-bde9cdb66dab",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*-s4BhRzxp1UcSKOD0Ij8xA.png",
      platform: "Medium",
    },
  },
  {
    slug: "top-50-blackarch-linux-tools",
    title: "Top 50 Must-Know BlackArch Linux Tools for Penetration Testing",
    excerpt:
      "The 50 BlackArch tools I reach for most on penetration tests — what each does, when to use it, and the command patterns I keep cheat-sheeted.",
    date: "2026-02-06",
    readingTime: 18,
    tags: ["Security", "Tutorial"],
    external: {
      url: "https://medium.com/the-first-digit/top-50-must-know-blackarch-linux-tools-for-penetration-testing-bbf49e81cef2",
      image: "https://miro.medium.com/v2/0*UeeEmhqr8MjK9gcg.jpeg",
      platform: "Medium",
    },
  },
  {
    slug: "top-15-kali-linux-gui-tools",
    title:
      "Top 15 Kali Linux GUI Tools Every Security Engineer Must Master — With Real Use Cases",
    excerpt:
      "Beyond the terminal — the 15 Kali GUI tools every security engineer should be fluent with, each illustrated with a real engagement scenario.",
    date: "2026-01-05",
    readingTime: 13,
    tags: ["Security", "Tutorial"],
    external: {
      url: "https://medium.com/the-first-digit/top-15-kali-linux-gui-tools-every-security-engineer-must-master-with-real-use-cases-d3412e9867fd",
      image: "https://miro.medium.com/v2/resize:fit:700/1*rsR4P-bb_9BlCNeayqGVFA.png",
      platform: "Medium",
    },
  },

  // ──────────────────────────── DevOps / Infra ────────────────────────────
  {
    slug: "ethereum-rpc-node-in-a-vm",
    title: "Running a Dedicated Ethereum RPC Node in a Virtual Machine",
    excerpt:
      "Operating a dedicated Ethereum RPC node on a VM — disk planning, snapshot tactics, peering, and the monitoring that catches bad sync states early.",
    date: "2024-10-18",
    readingTime: 12,
    tags: ["DevOps", "Cloud"],
    external: {
      url: "https://nodeshift.com/blog/running-a-dedicated-ethereum-rpc-node-in-a-virtual-machine",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Flsqwxuvb38165ncm6nrt.png",
      platform: "NodeShift",
    },
  },
  {
    slug: "vm-backup-borg-borgmatic-rclone",
    title:
      "How to Backup Virtual Machines to Object Storage with Borg, Borgmatic, Rclone, and Cron's Rsync",
    excerpt:
      "A complete backup architecture for VMs into S3-compatible object storage — Borg + Borgmatic + Rclone + cron rsync, with the restore drill I run quarterly.",
    date: "2024-11-16",
    readingTime: 14,
    tags: ["DevOps", "Tutorial"],
    external: {
      url: "https://nodeshift.com/blog/how-to-backup-virtual-machines-to-object-storage-with-borg-borgmatic-rclone-and-crons-rsync",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fnp3mis8r4e413hrqdlee.jpg",
      platform: "NodeShift",
    },
  },

  // ──────────────────────────── June 2026 (MiniCPM-V + mcp-wormhole) ────────────────────────────
  {
    slug: "minicpm-v-mcp-server-give-your-agent-eyes",
    title: "MiniCPM-V MCP Server — Give Your Agent Eyes",
    excerpt:
      "Build an MCP server that exposes describe_image, ocr_document, and compare_images so any MCP host — Cursor, Claude Desktop, Hermes — can understand screenshots, receipts, and UI diffs through one protocol.",
    date: "2026-06-23",
    readingTime: 12,
    tags: ["AI", "MCP", "Agents", "Tutorial"],
    external: {
      url: "https://medium.com/@techlatest.net/minicpm-v-mcp-server-give-your-agent-eyes-cffb455b30a4",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*3k62GpbdLJcoX9Qk4uUUZQ.png",
      platform: "Medium",
    },
  },
  {
    slug: "private-photo-assistant-telegram-openclaw-minicpm-v",
    title:
      "Build a Private Photo Assistant on Telegram with OpenClaw + MiniCPM-V 4.6",
    excerpt:
      "A fully local photo assistant — receive images from Telegram, WhatsApp, or CLI, analyze them with MiniCPM-V 4.6 on Ollama, and return summaries, OCR, and suggested replies without images leaving your machine.",
    date: "2026-06-23",
    readingTime: 7,
    tags: ["Local AI", "Agents", "Tutorial", "Open Source"],
    external: {
      url: "https://medium.com/@techlatest.net/build-a-private-photo-assistant-on-telegram-with-openclaw-minicpm-v-4-6-61942273cbbc",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*J7QjvPLOiqVv6u6516Ucqw.png",
      platform: "Medium",
    },
  },
  {
    slug: "connect-vercel-to-cursor",
    title: "Connect Vercel to Cursor in 5 minutes",
    excerpt:
      "Complete walkthrough: API token setup, mcp.json config, verification, example prompts, and troubleshooting for Cursor + Vercel MCP.",
    date: "2026-06-23",
    readingTime: 8,
    tags: ["MCP", "Cursor", "Vercel", "Tutorial"],
    external: {
      url: "https://ayush7614.github.io/mcp-wormhole/#/blog/connect-vercel-to-cursor",
      image:
        "https://ayush7614.github.io/mcp-wormhole/demo/posters/poster-connect-vercel-cursor.gif",
      platform: "MCP Wormhole",
    },
  },
  {
    slug: "inside-vercel-mcp-server",
    title:
      "Inside @mcp-wormhole/vercel: 18 tools, 8 prompts, and browsable resources",
    excerpt:
      "Deep dive into the Vercel MCP server — architecture, deployment tools, prompt workflows, vercel:// resources, and live API verification.",
    date: "2026-06-23",
    readingTime: 14,
    tags: ["MCP", "Vercel", "Architecture", "Open Source"],
    external: {
      url: "https://ayush7614.github.io/mcp-wormhole/#/blog/inside-vercel-mcp-server",
      image:
        "https://ayush7614.github.io/mcp-wormhole/demo/posters/poster-inside-vercel-mcp.gif",
      platform: "MCP Wormhole",
    },
  },
  {
    slug: "inside-asana-mcp-server",
    title:
      "Inside @mcp-wormhole/asana: 66 tools, 18 prompts, and browsable resources",
    excerpt:
      "Deep dive into the Asana MCP server — architecture, tool categories, prompt workflows, asana:// resources, and how we verify against the live API.",
    date: "2026-06-22",
    readingTime: 16,
    tags: ["MCP", "Asana", "Architecture", "Open Source"],
    external: {
      url: "https://ayush7614.github.io/mcp-wormhole/#/blog/inside-asana-mcp-server",
      image:
        "https://ayush7614.github.io/mcp-wormhole/demo/posters/poster-inside-asana-mcp.gif",
      platform: "MCP Wormhole",
    },
  },
  {
    slug: "building-an-mcp-server",
    title: "Building your first MCP server in mcp-wormhole",
    excerpt:
      "From template to npm: package structure, tool design, prompts, resources, verification, and the PR checklist for new integrations.",
    date: "2026-06-20",
    readingTime: 14,
    tags: ["MCP", "TypeScript", "Architecture", "Open Source"],
    external: {
      url: "https://ayush7614.github.io/mcp-wormhole/#/blog/building-an-mcp-server",
      image:
        "https://ayush7614.github.io/mcp-wormhole/demo/posters/poster-building-mcp-server.gif",
      platform: "MCP Wormhole",
    },
  },
  {
    slug: "connect-asana-to-cursor",
    title: "Connect Asana to Cursor in 5 minutes",
    excerpt:
      "Complete walkthrough: PAT setup, mcp.json config, verification, example prompts, and troubleshooting for Cursor + Asana MCP.",
    date: "2026-06-18",
    readingTime: 10,
    tags: ["MCP", "Cursor", "Asana", "Tutorial"],
    external: {
      url: "https://ayush7614.github.io/mcp-wormhole/#/blog/connect-asana-to-cursor",
      image:
        "https://ayush7614.github.io/mcp-wormhole/demo/posters/poster-connect-asana-cursor.gif",
      platform: "MCP Wormhole",
    },
  },
  {
    slug: "introducing-mcp-wormhole",
    title: "Introducing mcp-wormhole: MCP servers for every tool",
    excerpt:
      "Why we built an open-source monorepo of MCP servers, how the architecture works, and what's shipping first on npm.",
    date: "2026-06-15",
    readingTime: 12,
    tags: ["MCP", "Architecture", "Open Source"],
    external: {
      url: "https://ayush7614.github.io/mcp-wormhole/#/blog/introducing-mcp-wormhole",
      image:
        "https://ayush7614.github.io/mcp-wormhole/demo/posters/poster-introducing-mcp-wormhole.gif",
      platform: "MCP Wormhole",
    },
  },

  // ──────────────────────────── June 2026 (Medium batch 4) ────────────────────────────
  {
    slug: "model-context-protocol-mcp-full-visual-guide",
    title: "Model Context Protocol (MCP) — Full Visual Guide",
    excerpt:
      "Connect AI hosts like Cursor, Claude Desktop, and VS Code Copilot to your databases, repos, APIs, and files through a standard wire protocol — the USB-C for AI apps, with hosts, clients, servers, and the three core primitives.",
    date: "2026-06-19",
    readingTime: 8,
    tags: ["AI", "MCP", "Agents", "Tutorial"],
    external: {
      url: "https://medium.com/@techlatest.net/model-context-protocol-mcp-full-visual-guide-ffbbf2121c38",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*yOIn1CQEqgYU0HjB1NFSYg.png",
      platform: "Medium",
    },
  },
  {
    slug: "ai-agents-masterclass-full-visual-guide",
    title: "AI Agents Masterclass — Full Visual Guide",
    excerpt:
      "Everything you need to understand, compare, and build AI agents — ReAct and ReWOO loops, multi-agent patterns, 15+ frameworks, MCP and A2A protocols, governance, and five runnable examples with visual diagrams.",
    date: "2026-06-17",
    readingTime: 22,
    tags: ["AI", "Agents", "Tutorial", "Open Source"],
    external: {
      url: "https://medium.com/@techlatest.net/ai-agents-masterclass-full-visual-guide-25245fbae260",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*SbCxBnRWucCtWPRyBR9fOg.png",
      platform: "Medium",
    },
  },
  {
    slug: "harness-engineering-full-visual-guide",
    title: "Harness Engineering — Full Visual Guide",
    excerpt:
      "The model is smart — the harness makes it reliable. A visual guide to instructions, state, verification, scope, and session lifecycle for coding agents that finish with proof, not vibes.",
    date: "2026-06-16",
    readingTime: 8,
    tags: ["AI", "Agents", "Engineering", "Tutorial"],
    external: {
      url: "https://medium.com/@techlatest.net/harness-engineering-full-visual-guide-9a8de52b42d2",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*WPasMPesFFfCNiLSSgdbaQ.png",
      platform: "Medium",
    },
  },
  {
    slug: "loop-engineering-goal-driven-ai-agents",
    title:
      "Loop Engineering Explained Visually: From Manual Prompts to Goal-Driven AI Agents",
    excerpt:
      "A visual guide to loop engineering — how to move from one-off prompts to goal-driven agents that plan, act, and iterate until the job is done.",
    date: "2026-06-16",
    readingTime: 10,
    tags: ["AI", "Agents", "Tutorial"],
    external: {
      url: "https://medium.com/@techlatest.net/loop-engineering-explained-visually-from-manual-prompts-to-goal-driven-ai-agents-f2c4d634c261",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*rBJzUuT_LA4TmrDS78vCCw.png",
      platform: "Medium",
    },
  },
  {
    slug: "when-to-fine-tune-llm-vs-prompting",
    title: "When to Fine-Tune an LLM (And When Prompting Is Enough)",
    excerpt:
      "A practical decision framework for fine-tuning vs prompting — data requirements, cost, latency, and the cases where each approach actually wins.",
    date: "2026-06-15",
    readingTime: 13,
    tags: ["AI", "LLMs", "Tutorial"],
    external: {
      url: "https://medium.com/@techlatest.net/when-to-fine-tune-an-llm-and-when-prompting-is-enough-c32d53261ac7",
      image: "https://miro.medium.com/v2/resize:fit:700/1*77WkckdxZOrNqgn3NjooJA.png",
      platform: "Medium",
    },
  },
  {
    slug: "openclaw-agent-masterclass",
    title: "OpenClaw Agent Masterclass — Full Tutorial",
    excerpt:
      "A complete OpenClaw walkthrough — setup, skills, gateways, and the patterns for running a personal AI platform you actually own.",
    date: "2026-06-12",
    readingTime: 12,
    tags: ["AI", "Agents", "Open Source", "Tutorial"],
    external: {
      url: "https://medium.com/@techlatest.net/openclaw-agent-masterclass-66d6a4f88cd5",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*oI6MzSkxhQ5PKAsHW8-Eag.png",
      platform: "Medium",
    },
  },
  {
    slug: "hermes-agent-masterclass",
    title: "Hermes Agent Masterclass — Full Tutorial",
    excerpt:
      "End-to-end Hermes agent tutorial — memory, skills, tool use, and production patterns for building agents that hold context across sessions.",
    date: "2026-06-12",
    readingTime: 10,
    tags: ["AI", "Agents", "Open Source", "Tutorial"],
    external: {
      url: "https://medium.com/towardsdev/hermes-agent-masterclass-full-tutorial-9f682bb28789",
      image: "https://miro.medium.com/v2/resize:fit:700/1*nNp10k2WuqYowvrxTBWh-g.png",
      platform: "Medium",
    },
  },
  {
    slug: "anthropic-cybersecurity-skills-tutorial",
    title: "Anthropic Cybersecurity Skills — Full Tutorial",
    excerpt:
      "How to use Anthropic's cybersecurity skills in Claude — threat modeling, code review, incident response workflows, and real security automation.",
    date: "2026-06-11",
    readingTime: 13,
    tags: ["Security", "AI", "Claude", "Tutorial"],
    external: {
      url: "https://medium.com/the-first-digit/anthropic-cybersecurity-skills-full-tutorial-4b3621f14c59",
      image: "https://miro.medium.com/v2/resize:fit:700/1*bSLv9CuQ0hdQ_PLswr6qHw.png",
      platform: "Medium",
    },
  },
  {
    slug: "build-ml-model-that-ships",
    title: "Build an ML Model That Actually Ships: A 6-Step Visual Walkthrough",
    excerpt:
      "Six visual steps from notebook to production — data, training, evaluation, packaging, deployment, and monitoring without the usual ML theatre.",
    date: "2026-06-10",
    readingTime: 7,
    tags: ["AI", "ML", "Tutorial"],
    external: {
      url: "https://medium.com/@techlatest.net/build-an-ml-model-that-actually-ships-a-6-step-visual-walkthrough-71f41b79b7a8",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*1UF7_wB8pcJxzS6-f6H6_w.png",
      platform: "Medium",
    },
  },
  {
    slug: "hermes-vs-openclaw-gateways-skills-migration",
    title:
      "Hermes vs OpenClaw: Gateways, Skills, Migration, and When to Pick Each",
    excerpt:
      "Comparing Hermes and OpenClaw — gateway architecture, skills models, migration paths, and which platform fits local-first vs managed agent workflows.",
    date: "2026-06-09",
    readingTime: 8,
    tags: ["AI", "Agents", "Open Source"],
    external: {
      url: "https://medium.com/towardsdev/hermes-vs-openclaw-gateways-skills-migration-and-when-to-pick-each-919477e3893b",
      image: "https://miro.medium.com/v2/resize:fit:700/1*MT4tN7fnXzICT1O6FwTXyQ.png",
      platform: "Medium",
    },
  },
  {
    slug: "git-for-agent-memory-hermes-skills",
    title: "Git for Agent Memory: Why You Should Treat Hermes Skills Like Code",
    excerpt:
      "Version-controlling agent skills and memory like source code — branching, diffs, rollbacks, and why git semantics map cleanly onto agent state.",
    date: "2026-06-08",
    readingTime: 8,
    tags: ["AI", "Agents", "Open Source", "Tutorial"],
    external: {
      url: "https://medium.com/@techlatest.net/git-for-agent-memory-why-you-should-treat-hermes-skills-like-code-61b03ed6f6b1",
      image: "https://miro.medium.com/v2/resize:fit:700/1*HHQK7L7-REdQw80dM2AGiA.png",
      platform: "Medium",
    },
  },
  {
    slug: "commands-vs-skills-vs-agents-claude-code",
    title: "Commands vs Skills vs Agents in Claude Code — What Goes Where",
    excerpt:
      "Where commands, skills, and agents belong in Claude Code — boundaries, composition patterns, and how to avoid turning every shortcut into an agent.",
    date: "2026-06-05",
    readingTime: 8,
    tags: ["Claude", "AI", "DevTools", "Tutorial"],
    external: {
      url: "https://medium.com/@techlatest.net/commands-vs-skills-vs-agents-in-claude-code-what-goes-where-a72d11b5281a",
      image: "https://miro.medium.com/v2/resize:fit:700/1*l4sCiR0ib-rNjYcQ8SphDw.png",
      platform: "Medium",
    },
  },
  {
    slug: "whatsapp-ai-fully-local-gemma",
    title: "Your AI on WhatsApp — Fully Local, Powered by Gemma",
    excerpt:
      "Running a fully local Gemma-powered assistant on WhatsApp — bridge setup, privacy boundaries, and a stack that never phones home.",
    date: "2026-06-04",
    readingTime: 6,
    tags: ["Local AI", "LLMs", "Agents", "Tutorial"],
    external: {
      url: "https://medium.com/@techlatest.net/your-ai-on-whatsapp-fully-local-powered-by-gemma-dc3aaf4f7097",
      image: "https://miro.medium.com/v2/resize:fit:700/1*IMKwgD9vdMkvukbUV533Dg.png",
      platform: "Medium",
    },
  },
  {
    slug: "deploy-qwen-3-6-agentic-rag",
    title: "Deploy a Qwen 3.6 Agentic RAG — Step-by-Step Walkthrough",
    excerpt:
      "Building and deploying an agentic RAG pipeline on Qwen 3.6 — retrieval, tool routing, evaluation hooks, and a production-minded layout.",
    date: "2026-06-03",
    readingTime: 6,
    tags: ["AI", "RAG", "Agents", "LLMs", "Tutorial"],
    external: {
      url: "https://medium.com/faun/deploy-a-qwen-3-6-agentic-rag-step-by-step-walkthrough-11d2993ff057",
      image: "https://miro.medium.com/v2/resize:fit:700/1*0bbnhAm37IRWKBB8yPhXQA.png",
      platform: "Medium",
    },
  },
  {
    slug: "cve-mcp-server-security-analyst",
    title: "CVE MCP Server: Turn Claude Into a Full-Spectrum Security Analyst",
    excerpt:
      "Wiring CVE intelligence into Claude via MCP — dependency graphs, exploit context, and analyst workflows that go beyond a flat scanner report.",
    date: "2026-06-01",
    readingTime: 12,
    tags: ["Security", "MCP", "AI", "Claude"],
    external: {
      url: "https://medium.com/the-first-digit/cve-mcp-server-turn-claude-into-a-full-spectrum-security-analyst-42be86718a27",
      image: "https://miro.medium.com/v2/resize:fit:700/1*TgH_VVk2_dhVW0rxPmVzCg.png",
      platform: "Medium",
    },
  },
  {
    slug: "claude-bughunter-ai-security-agent",
    title:
      "Claude-BugHunter: The Open-Source AI Security Agent That Turns Claude Code Into a Bug Bounty Hunter",
    excerpt:
      "Claude-BugHunter in practice — autonomous recon, vulnerability hypotheses, and the guardrails that keep an AI bug bounty agent useful instead of noisy.",
    date: "2026-05-25",
    readingTime: 11,
    tags: ["Security", "AI", "Claude", "Open Source"],
    external: {
      url: "https://medium.com/the-first-digit/claude-bughunter-the-open-source-ai-security-agent-that-turns-claude-code-into-a-bug-bounty-b480582a6925",
      image: "https://miro.medium.com/v2/resize:fit:700/1*MNrboXcDsx3uRK1PBN12OA.png",
      platform: "Medium",
    },
  },
  {
    slug: "cve-lite-cli-dependency-scanner",
    title:
      "CVE Lite CLI: The Dependency Scanner That Actually Tells You What to Run, Not Just What's Broken",
    excerpt:
      "CVE Lite CLI focuses on actionable output — which CVEs matter, what to upgrade first, and the commands to run instead of drowning you in JSON.",
    date: "2026-05-25",
    readingTime: 9,
    tags: ["Security", "DevTools", "Open Source"],
    external: {
      url: "https://medium.com/the-first-digit/cve-lite-cli-the-dependency-scanner-that-actually-tells-you-what-to-run-not-just-whats-broken-f6b518199981",
      image: "https://miro.medium.com/v2/resize:fit:700/1*DNhreD_uV3I51LpRllhmmQ.png",
      platform: "Medium",
    },
  },
  {
    slug: "ai-security-6-open-source-tools",
    title: "AI Security Is Changing Fast — These 6 Open-Source Tools Prove It",
    excerpt:
      "Six open-source projects reshaping AI security — from agent guardrails to MCP scanners and the tooling stack security teams are adopting in 2026.",
    date: "2026-05-22",
    readingTime: 10,
    tags: ["Security", "AI", "Open Source"],
    external: {
      url: "https://medium.com/the-first-digit/ai-security-is-changing-fast-these-6-open-source-tools-prove-it-5c5c9081cff7",
      image: "https://miro.medium.com/v2/resize:fit:700/1*m7r9pgGdY_IWJquV9ab7bw.png",
      platform: "Medium",
    },
  },
  {
    slug: "12-open-source-github-repos-replacing-saas",
    title:
      "12 Open-Source GitHub Repos Quietly Replacing Billion-Dollar SaaS Companies",
    excerpt:
      "Twelve GitHub repos doing serious SaaS displacement — auth, observability, databases, and the open-source alternatives worth self-hosting today.",
    date: "2026-05-21",
    readingTime: 5,
    tags: ["Open Source", "Engineering", "DevTools"],
    external: {
      url: "https://medium.com/faun/12-open-source-github-repos-quietly-replacing-billion-dollar-saas-companies-b064bebfebb6",
      image: "https://miro.medium.com/v2/resize:fit:700/1*hp8kzW5HODet_9W5C4m5tw.png",
      platform: "Medium",
    },
  },
] as Post[];

rawPosts.sort((a, b) => b.date.localeCompare(a.date));

export const posts: Post[] = rawPosts;

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
