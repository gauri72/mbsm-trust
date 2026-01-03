# Vercel Deployment Guide for MBSM Trust Website

## Method 1: Deploy via GitHub (Recommended)

### Step 1: Sign up/Login to Vercel
1. Go to [https://vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Sign in with your GitHub account (recommended since your code is on GitHub)

### Step 2: Import Your Repository
1. After logging in, click "Add New..." → "Project"
2. You'll see a list of your GitHub repositories
3. Find and select `mbsm-trust` repository
4. Click "Import"

### Step 3: Configure Project Settings
1. **Framework Preset**: Vercel will auto-detect Next.js (should show "Next.js")
2. **Root Directory**: Set to `mbsm` (since your Next.js project is in the mbsm folder)
   - Click "Edit" next to Root Directory
   - Enter: `mbsm`
3. **Build Command**: Leave as default (`npm run build` or `next build`)
4. **Output Directory**: Leave as default (`.next`)
5. **Install Command**: Leave as default (`npm install`)

### Step 4: Environment Variables (if needed)
- If you have any environment variables, add them here
- For this project, you likely don't need any unless you add API keys later

### Step 5: Deploy
1. Click "Deploy" button
2. Vercel will:
   - Install dependencies
   - Build your Next.js application
   - Deploy it to a production URL
3. Wait for the build to complete (usually 2-3 minutes)

### Step 6: Access Your Website
- Once deployed, you'll get a URL like: `https://mbsm-trust.vercel.app`
- You can also set up a custom domain later

---

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Navigate to Project Directory
```bash
cd "/Users/gaurikolekar/Career/Projects/mbsm trust/mbsm"
```

### Step 4: Deploy
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? Select your account
- Link to existing project? **No** (for first deployment)
- What's your project's name? **mbsm-trust** (or your preferred name)
- In which directory is your code located? **./** (current directory)

### Step 5: Production Deployment
For production deployment:
```bash
vercel --prod
```

---

## Important Configuration Notes

### Root Directory Setting
Since your Next.js project is inside the `mbsm` folder, you **MUST** set the Root Directory to `mbsm` in Vercel settings when using GitHub integration.

### Build Settings
- **Framework**: Next.js (auto-detected)
- **Build Command**: `npm run build` (or `cd mbsm && npm run build` if root directory is not set)
- **Output Directory**: `.next` (default)
- **Node Version**: 18.x or higher (Vercel auto-detects)

### Custom Domain (Optional)
1. Go to your project settings on Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

---

## Troubleshooting

### Build Fails
- Check that Root Directory is set to `mbsm`
- Ensure all dependencies are in `package.json`
- Check build logs in Vercel dashboard

### Assets Not Loading
- Ensure all assets are in `public/` folder
- Check that image paths use `/assets/` (absolute paths)

### Environment Variables
- Add any required environment variables in Vercel project settings
- Redeploy after adding variables

---

## Post-Deployment

After successful deployment:
1. Your site will be live at `https://your-project-name.vercel.app`
2. Every push to the `main` branch will trigger automatic deployments
3. You can preview deployments from other branches
4. Check deployment logs in the Vercel dashboard

---

## Quick Reference Commands (CLI Method)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# View deployments
vercel ls

# View logs
vercel logs
```


