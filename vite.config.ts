import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 10000, // Render के लिए dynamic port handling
  },
  preview: {
    host: "0.0.0.0",
    port: process.env.PORT || 10000,
    allowedHosts: ["interview-ai-x3wd.onrender.com"] // Render domain allow करें
  }
});
