/** @type {import('next').NextConfig} */

// Security headers required by VAPT findings VAPT-FIND-03 and VAPT-FIND-05
const securityHeaders = [
  // ── 1. Content Security Policy (CSP) ─────────────────────────────────────
  // Restricts which resources the browser is allowed to load.
  // Tailored for Verifieze stack:
  //   - Google Fonts (Geist font via next/font/google)
  //   - Next.js requires 'unsafe-inline' for style and 'self' + nonce for scripts
  //   - SVG xmlns used in inline SVG icons (fire-drills page etc.)
  //   - data: URIs used in some image components
  //   - verifieze.com & checkengine.verifieze.com (internal navigation links)
  {
    key: "Content-Security-Policy",
    value: [
      // Only load scripts from same origin and Next.js requires unsafe-inline for hydration
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      // Styles from same origin + Google Fonts (Geist)
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fonts: same origin + Google Fonts CDN
      "font-src 'self' https://fonts.gstatic.com",
      // Images: same origin + data URIs (used in components) + HTTPS images
      "img-src 'self' data: blob: https:",
      // Connect (fetch/XHR): same origin only (contact form API is /api/contact on same origin)
      "connect-src 'self'",
      // No frames allowed from third parties (pairs with X-Frame-Options below)
      "frame-src 'none'",
      // Block plugins (Flash, etc.)
      "object-src 'none'",
      // Base URI restricted to same origin
      "base-uri 'self'",
      // Form actions restricted to same origin (contact form posts to /api/contact)
      "form-action 'self'",
      // Upgrade HTTP to HTTPS automatically
      "upgrade-insecure-requests",
    ].join("; "),
  },

  // ── 2. X-Frame-Options ────────────────────────────────────────────────────
  // Prevents the site from being embedded in iframes on other domains.
  // Protects against Clickjacking attacks. (VAPT-FIND-03, CWE-1021)
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },

  // ── 3. X-Content-Type-Options ────────────────────────────────────────────
  // Prevents browsers from MIME-sniffing responses away from the declared Content-Type.
  // Stops browsers from interpreting JS/CSS files as a different type. (VAPT-FIND-05)
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  // ── 4. Referrer-Policy ───────────────────────────────────────────────────
  // Controls how much referrer information is included with requests.
  // strict-origin-when-cross-origin: sends full URL for same-origin, only origin
  // for cross-origin HTTPS→HTTPS, and nothing for HTTPS→HTTP. (VAPT-FIND-05)
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },

  // ── Bonus: Permissions-Policy ─────────────────────────────────────────────
  // Disables browser features that Verifieze does not use, reducing attack surface.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

