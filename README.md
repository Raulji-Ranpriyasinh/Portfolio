# Ranpriyasinh - Solo Freelance Developer Portfolio

Warm, neo-brutalist tactile portfolio website crafted for Ranpriyasinh (Solo Full-Stack Developer in Vadodara, Gujarat). 
Faithfully implements the design specification from `stitch_freelance_developer_portfolio_website.zip`.

---

## 🚀 How to Run Locally

### Option 1: React + Vite Development Server (Recommended)

1. Open your terminal in this project directory:
   ```bash
   cd /home/ranpriyasinh/Desktop/Projects/Personal/Portfolio
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

### Option 2: Production Build & Preview

```bash
npm run build
npm run preview
```

---

### Option 3: Instant Standalone HTML (Zero Node/NPM Needed)

Open [`preview.html`](file:///home/ranpriyasinh/Desktop/Projects/Personal/Portfolio/preview.html) directly in any web browser.

---

## 📬 Receiving Form Inquiries with Resend

The portfolio is pre-configured to send form inquiries to your email (`ranpriyasinhraulji@gmail.com`) using **Resend**!

### 1. Get your free Resend API key
1. Sign up or log in at **[resend.com](https://resend.com)**.
2. Go to **API Keys** and click **Create API Key**.
3. Copy your API key.

### 2. Add it to your `.env` file
Open the `.env` file in the root folder and paste your key:
```env
RESEND_API_KEY=your_key_here
RESEND_TO_EMAIL=ranpriyasinhraulji@gmail.com
RESEND_FROM_EMAIL=onboarding@resend.dev
```

### 3. Deploying to Production (Vercel / Netlify)
An API route is provided in [`api/send-email.ts`](file:///home/ranpriyasinh/Desktop/Projects/Personal/Portfolio/api/send-email.ts). When deploying to Vercel or Netlify:
- Add `RESEND_API_KEY` to your project's Environment Variables in the hosting dashboard.
- Every form submission will be delivered instantly to `ranpriyasinhraulji@gmail.com`.
- Clients are also offered a 1-tap WhatsApp redirection to message you directly at `+91 63594 55789`.
