# Irene and Dani's Homewood: GitHub Pages + Firebase

This folder is the whole app. GitHub Pages hosts the files and Firebase stores your shared save. Firebase also handles sign-in, so only your two accounts can get in. Everything stays on Firebase's free plan.

Setup takes about 10 minutes.

## 1. Create the Firebase project
1. Go to https://console.firebase.google.com and click **Create a project**. Name it whatever you like, for example `homewood`. You can turn Google Analytics off.
2. On the project home page, click the **web** icon (`</>`) to add a web app. Give it a nickname and skip "Firebase Hosting".
3. Firebase shows a `firebaseConfig` block. Copy `apiKey`, `authDomain`, `projectId` and `appId` into **firebase-config.js** in this folder.

## 2. Turn on sign-in
1. Go to **Build → Authentication → Get started**.
2. Under **Sign-in method**, enable **Email/Password**. You can also enable **Google**, which is optional.
3. Open **Settings → Authorized domains → Add domain** and add `danielxie2026.github.io`.

## 3. Create the database
1. Go to **Build → Firestore Database → Create database**.
2. Choose a location near Baltimore, such as `nam5 (United States)` or `us-east4`, and start in **production mode**.
3. Open the **Rules** tab and paste in the rules Claude gave you (your two emails are already in them), then click **Publish**. They're kept out of this folder so your emails aren't public on GitHub.

## 4. Put it on GitHub Pages
1. Copy this `homewood` folder into your `for-bub` repo, then commit and push.
2. If Pages isn't on already: go to the repo's **Settings → Pages**, set Source to *Deploy from a branch*, choose `main` and `/ (root)`, and save.
3. The app will be at **https://danielxie2026.github.io/for-bub/homewood/** about a minute after you push.

## 5. First run
1. **Dani:** open the link in Safari, tap Start, then **Create account** with your email. Tap the link in the verification email, go back to the app, and tap **I verified**. Choose **Dani** and set the day you met.
2. **Load the notes:** go to **More → Settings → Load notes.json** and choose `notes.json`, which you can get onto your phone by AirDrop or the Files app. The 17 hearts on the map unlock for both of you. Then delete `notes.json` from your phone and computer, and **never commit it**. It's what keeps your notes private.
3. **Irene:** opens the same link, creates an account with *her* email (it has to match the list), verifies it, and picks **Irene**.
4. **Each of you:** in Safari tap Share → **Add to Home Screen**, open it from the Home Screen, and sign in once more. The Home Screen app keeps its own sign-in, separate from Safari.

## Good to know
- **Why the notes aren't in the code:** this repo is public, so anything in the HTML is public. The notes now live in Firestore, behind sign-in.
- **The old `irenemap/` folder** still has the notes written into its HTML. Delete that folder if you want them off the internet. Git history still keeps old versions, so to remove them completely, delete and recreate the repo, or rewrite its history with `git filter-repo`.
- **Photos** are shrunk and saved inside the database, so you don't need Firebase Storage, which requires the paid Blaze plan.
- **If Google sign-in won't open** inside the Home Screen app, use email and password instead.
- **If something says "not allowed":** check that the account's email matches one in the Firestore rules exactly and that it's verified.
- **Firebase config keys are not passwords.** They're meant to be public. The rules are what protect your data.
- Opening `index.html` without filling in the config runs a preview that saves on that device only.
