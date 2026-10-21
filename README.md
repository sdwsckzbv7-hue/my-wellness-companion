# My Wellness Companion — public app shell

This repository contains generic, client-side, offline-first wellness tracking software. **No user profile, prescription, diagnosis, symptoms, meal log, private configuration, or personal health information is included.**

Install as an iPhone Home Screen web app: open the GitHub Pages site in Safari, tap Share > Add to Home Screen. On first launch, use **Import my private setup** to select a configuration JSON stored separately in your iPhone Files app, or **Start fresh**.

Records and configuration are stored locally in browser IndexedDB. Export backups regularly from Settings, as clearing website data, uninstalling the Home Screen site, or switching devices may delete local data. Exporting or importing uses the browser's local file selector and does not upload records to GitHub. A person with access to the unlocked device/browser profile may access local records.

Background reminders are **not** provided by this static site. Optional calendar exports are user-triggered and may duplicate existing reminders; review before importing. The chat is a local command assistant, not a remotely hosted generative AI model. Apple Health and food-delivery services are not integrated. There is no backend, tracking analytics, or account login.

Do not commit a personal configuration JSON or a backup of user data into this public repository.
