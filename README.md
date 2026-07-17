# Clinic CRM Prototype

A front-end prototype of the Clinic CRM described in the Product Brief and Wireframe Specification (V96). Built with plain HTML/CSS/JavaScript so it can be opened directly in a browser or hosted via GitHub Pages — no build step or backend required.

## What's included

- **Dashboard** — live metrics, today's schedule, follow-ups, doctor load, lead sources
- **All Appointments** — list, card and calendar views with search/filter/sort and status actions
- **Patients** — searchable directory with a detailed Patient File (info, history, billing, medications, labs, therapy, communications tabs)
- **Receptionist** — walk-in queue view (waiting / confirmed / no-show)
- **Pipeline** — kanban-style appointment stage tracker
- **Follow-Ups** — task list with priority, channel and completion state
- **Billing** — invoices, mark paid/unpaid, unpaid-invoice bulk follow-up
- **Medications** — prescriptions with stock and Shopify-link status
- **Lab Tests** — requests, handling method and report status
- **Therapy** — sessions, therapist assignment and concern flags
- **Products** — Shopify-linked catalog
- **Resources** — patient-facing guides, videos, worksheets
- **Email Campaigns** — newsletter drafts and send history
- **Reports** — revenue, doctor load and treatment mix analytics
- **Settings** — users, roles and integration placeholders
- **Patient Portal** — patient-facing self-service view
- **AI Assistant** — natural-language Q&A with confirmation cards before any write action
- **Role switching** — sidebar selector filters visible navigation by role (Administrator, Doctor, Receptionist, Therapist, Patient Portal User)
- **Mobile Emergency Mode** — toggle to preview the simplified mobile navigation with bottom tab bar

## Running it

Open `index.html` directly in a browser, or serve the folder with any static file server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

This is a functional prototype using in-memory mock data (resets on page reload). It is intended to validate navigation, layout and workflow structure ahead of a production build with a real backend, authentication and integrations (email, WhatsApp, Shopify, payments, AI providers) as described in the product brief.
