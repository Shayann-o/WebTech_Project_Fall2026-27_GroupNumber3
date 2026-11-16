# ClubKit

ClubKit is a frontend web application for managing university clubs and their activities. It provides separate interfaces for club members, club executives, event coordinators, and treasurers.

The current project is a static frontend prototype built with:

- HTML for page structure
- CSS for layout and styling
- Vanilla JavaScript for page interactions
- Browser-side mock data and form interactions

There is currently no backend, database, or authentication service connected to the project. The existing login, registration, club, event, volunteer, schedule, finance, and reporting pages represent the planned frontend workflows.

## User Roles

### Member

Members can:

- Register and log in
- View their member dashboard
- Apply to join clubs
- Update their profile
- Update their availability schedule
- View and provide event feedback

### Club Executive

Executives can:

- Register and log in
- View the executive dashboard
- Manage club members
- Manage club events
- Publish announcements
- Manage club registration information

### Event Coordinator

Event coordinators can:

- Register and log in
- View the event coordinator dashboard
- Create and manage events
- Update event schedules
- Assign volunteers
- View event reports

### Treasurer

Treasurers can:

- Register and log in
- View the treasurer dashboard
- Manage club budgets
- Record financial transactions
- View financial reports

## Main Features

- Role-specific dashboards and navigation
- Member registration and login pages
- Club application workflow
- Member profile and availability management
- Event creation and schedule management
- Volunteer assignment
- Club announcements
- Budget and transaction management
- Event, activity, and financial reports
- Separate styling and scripts for different roles

## Project Structure

```text
.
├── index.html
├── pages/
│   ├── event_coordinator/
│   │   ├── dashboard.html
│   │   ├── login.html
│   │   ├── register.html
│   │   ├── report.html
│   │   ├── update_schedule.html
│   │   └── volunteer_assignment.html
│   ├── executive/
│   │   ├── announcements.html
│   │   ├── dashboard.html
│   │   ├── events.html
│   │   ├── login.html
│   │   ├── members.html
│   │   └── registration.html
│   ├── member/
│   │   ├── apply_for_club.html
│   │   ├── event_feedback.html
│   │   ├── Login.html
│   │   ├── member_dashboard.html
│   │   ├── registration_page.html
│   │   ├── update_profile.html
│   │   └── update_time_schedule.html
│   └── treasurer/
│       ├── budget.html
│       ├── dashboard.html
│       ├── login.html
│       ├── registration.html
│       ├── reports.html
│       └── transactions.html
├── css/
│   ├── style.css
│   ├── event-Co/
│   │   └── Estyle.css
│   ├── executive/
│   │   ├── announcements.css
│   │   ├── dashboard.css
│   │   ├── events.css
│   │   ├── login.css
│   │   ├── members.css
│   │   └── registration.css
│   └── member/
│       └── member.css
├── js/
│   └── pages/
│       ├── event_coordinator/
│       │   ├── event.js
│       │   ├── event_time.js
│       │   ├── login.js
│       │   ├── report.js
│       │   ├── signup.js
│       │   └── volunteer.js
│       ├── executive/
│       │   ├── announcements.js
│       │   ├── events.js
│       │   ├── login.js
│       │   ├── members.js
│       │   └── registration.js
│       ├── member/
│       │   ├── apply_club.js
│       │   ├── login.js
│       │   ├── registration.js
│       │   ├── update_profile.js
│       │   └── update_schedule.js
│       └── treasurer/
│           ├── budget.js
│           ├── login.js
│           ├── registration.js
│           ├── reports.js
│           └── transactions.js
└── README.md
```

## Folder Responsibilities

- `index.html` — Main entry page for the project.
- `pages/` — HTML pages grouped by user role.
- `css/` — Shared and role-specific stylesheets.
- `js/pages/` — JavaScript files grouped by role and feature.
- `README.md` — Project documentation and structure reference.

## Running the Project

Because this is a static frontend project, it can be opened directly in a browser by opening `index.html`.

For a better development experience, serve the repository with a local web server. For example:

```bash
python3 -m http.server
```

Then open `http://localhost:8000` in a browser.

## Current Status

The project currently provides the frontend page structure and role-specific files. Backend integration, persistent data storage, secure authentication, API validation, and database connectivity are not yet included.
