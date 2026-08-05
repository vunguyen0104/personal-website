# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Zero-build static HTML + CSS, hand-authored, deployed to GitHub Pages at the custom domain `vunguyen.io` (see `CNAME`). No npm, no bundler, no build step — a push publishes. User-confirmed constraint; future work must not introduce a required build pipeline or a Pages Action.

Incumbent implementation is Bootstrap 5 (`assets/bootstrap/`) plus Font Awesome / Ionicons icon fonts and AOS scroll animation from CDN. These are implementation details of the current look, not product commitments.

## Users

Three audiences, all confirmed, in priority order as a single page must serve all of them:

- **Engineering peers and collaborators** — arrive from GitHub, LinkedIn, or a shared project link. They want to see what he actually builds and judge it as engineers.
- **Recruiters and hiring managers** — screening in under a minute for stack fit, tenure, and credentials before deciding whether to reach out.
- **General professional presence** — the durable link on a resume or profile. No active job search is underway; the site is not optimized for a single hiring funnel and should not read as one.

## Product Purpose

A personal professional site for Vu Nguyen, Database Developer and Software Engineer. It exists so anyone who encounters his name has one authoritative, credible place to understand what he has built, where he has worked, and what he is credentialed in — and to reach him.

Success: a peer leaves with a real sense of his engineering; a recruiter leaves with enough to make an informed contact decision; neither has to hunt for proof.

## Positioning

**An engineer who ships end-to-end.** He designs, builds, and supports real applications solo — from database schema through deployed UI — rather than owning one layer of someone else's system. This is the claim the site must earn. Supporting truth, not the headline: the range is unusual (Oracle/SQL Server and J2EE through React, AWS, and data science) and the tenure is long (state public-safety agency since 2005).

## Operating Context

Single-page site, one scroll, anchor navigation between sections: Home, Projects, Experience, Education, Contact. Visitors typically arrive from an external profile link (LinkedIn, GitHub, resume) rather than search, and often on mobile.

Content is maintained by hand, directly in the markup, infrequently. Markup that a non-tooling author can still edit years later is a real requirement.

## Capabilities and Constraints

- **Static only.** No server, no database, no backend runtime. Anything dynamic must be client-side or third-party embedded.
- **Contact form (confirmed must-keep).** A working way to message him from the page. The incumbent form posts through a third-party Bootstrap Studio "smart-forms" handler (`assets/js/smart-forms.min.js`, `data-bss-recipient`). The *capability* is committed; that specific handler is not, and its continued operation is unverified. A `mailto:` fallback to `nguyentranvu0104@gmail.com` already exists in the footer.
- **Copilot Studio chatbot — not a commitment.** An iframe embed of a Microsoft Copilot Studio bot exists in the markup with its launch button commented out (currently disabled). The user did not mark it as must-keep. It may be removed or left dormant; do not treat re-enabling it as required.
- **Two projects are deliberately hidden.** Mass RMV Service Wait-Time and Images Finder are commented out in `index.html` and the user did not ask for them back. Leave them out. `ImageFinderAPI.swift` at the repo root is an orphan of that removed project.
- **Languages.** Fluent in Vietnamese and English. (Site copy is English only; no i18n requirement established.)

## Brand Commitments

- Name and identity: **Vu Nguyen**. The **VTN** monogram is the durable mark. Redrawn as `assets/img/vtn-mark.svg` (with `vtn-favicon.svg` for small sizes). The legacy raster it derives from is retained unreferenced at `assets/img/VTN_Logo_Color.eldp.png` as identity history. No raster of the new mark exists yet, so the site ships with no `og:image` and social previews are text-only.
- Domain: `vunguyen.io`.
- Current self-description: "Database Developer + Software Engineer." Kept unless the user changes it.
- No committed palette, typeface, or visual reference — the incumbent look carries no user-endorsed constraint and is evidence, not authority.

## Evidence on Hand

Real, linkable, verified present in the repo or as live external URLs:

- **Certificates and credentials (confirmed must-keep).**
  - Microsoft Professional Program Data Science — PDF at `certificates/MPP_Data_Science_Certificate_Letter.pdf`
  - AWS Certified Developer Associate — badge at `youracclaim.com/badges/84f067ca-cc52-4c61-966a-85c6efc58241`
  - Microsoft SQL Database Development; MongoDB for Java Developer (listed, no artifact on file)
- **Live projects with working links.**
  - Microsoft Data Science Project (loan-approval predictive modeling) — Azure AI Gallery competition
  - GitHub Profile Finder (React + GitHub API) — `github-finder-app-vunguyen.vercel.app`
  - Movie Finder (React + TMDB API, built with Codux) — `movie-finder-app-vunguyen.vercel.app`
- **Profiles.** GitHub `vunguyen0104` · LinkedIn `vu-nguyen-054221160` · Twitter `@vhml` · UMass Boston pages at `cs.umb.edu/~vtnguyen`
- **Employment history.** Executive Office of Public Safety and Security, Sr. Programmer/Analyst, Dec 2005–present · Wentworth Institute of Technology, Sr. Programmer/Analyst, Jun 2012–Jun 2014 · Bunker Hill Community College, Application Developer, Oct 2011–Jun 2012.
- **Education.** MS Computer Science, UMass Boston, 2005 · BS Civil Engineering Technology, Wentworth Institute of Technology, 1999, summa cum laude · BS, Ho Chi Minh City University of Technology, 1994.
- **Images.** Project screenshots at `assets/img/` (`github-finder.jpg`, `movie-finder.jpg`, `project-data-science.jpg`), resized to 1400px and JPEG-encoded. No photograph of Vu is on file; a usable one exists as his GitHub avatar (`github.com/vunguyen0104.png`). Artwork for the two withdrawn projects and the old Unsplash section background were deleted in the redesign and are recoverable from git if either project returns.

**Absent — must never be fabricated:** no testimonials, no client references, no performance metrics or benchmarks, no user/download numbers, no press, no photograph of Vu, no case-study writeups beyond the project blurbs above, no open-source contribution stats.

## Product Principles

1. **Every claim carries its receipt.** Credentials link to the certificate, projects link to the running app or repo. Nothing asserts what a visitor cannot go verify.
2. **Skimmable in a minute, deep on request.** A recruiter's 45-second scan and a peer's ten-minute read are the same page — hierarchy carries the first, detail rewards the second.
3. **End-to-end is the throughline.** Where a project or role shows ownership from data layer to shipped interface, that is the part worth surfacing.
4. **Hand-maintainable forever.** Markup a person can edit directly, years later, without reconstructing a toolchain. Cleverness that costs future editability is a defect.
5. **Credibility over performance.** The register is a working senior engineer's, not a personal-brand pitch. No invented achievements, no inflated language, no fake urgency about availability.

## Accessibility & Inclusion

No product-specific standard was established by the user. Baseline web accessibility applies as craft, not as a recorded product requirement.
