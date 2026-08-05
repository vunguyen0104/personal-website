---
name: vunguyen.io — Transit Authority
description: Massachusetts civic signage as a personal site — navy enamel panels on concrete ground, four functional route colours, a tactile yellow edge.
colors:
  ink: "#0d1b2a"
  ink-raised: "#16293d"
  ink-rule: "#2c435c"
  ground: "#e6e5e0"
  paper: "#f3f2ee"
  white: "#ffffff"
  red: "#c8102e"
  orange: "#d96d00"
  green: "#00693e"
  blue: "#1268c3"
  yellow: "#ffc72c"
  orange-ink: "#8f4a00"
  ink-body: "#33414f"
  ink-muted: "#4a5a6b"
  panel-body: "#d8e0e9"
  panel-muted: "#93a2b2"
  hairline: "#b9bdc0"
  alert: "#ff8a80"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 9.5vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 122"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 5vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.1rem, 2.2vw, 1.375rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 108"
  body:
    fontFamily: "Archivo, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Barlow Condensed, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.14em"
  data:
    fontFamily: "Barlow Condensed, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  none: "0"
  focus: "2px"
  bullet: "50%"
spacing:
  rule: "2px"
  gap: "clamp(1rem, 2.5vw, 1.75rem)"
  pad-x: "clamp(1.25rem, 5vw, 4.5rem)"
  section-y: "clamp(4.5rem, 10vw, 9rem)"
  bar-h: "68px"
  measure: "58ch"
components:
  action:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.9rem 1.4rem"
  action-hover:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.white}"
  dest:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1.15rem"
  dest-hover:
    backgroundColor: "#1f3752"
    textColor: "{colors.white}"
  bar-link:
    backgroundColor: "{colors.ink}"
    textColor: "#cfd8e3"
    typography: "{typography.label}"
    padding: "0.6rem 0.85rem"
  bar-link-current:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  station-panel:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-body}"
    rounded: "{rounded.none}"
    padding: "clamp(1.25rem, 3vw, 1.85rem)"
  stop-plate:
    backgroundColor: "{colors.red}"
    textColor: "{colors.white}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1.25rem"
  year-chip:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.data}"
    rounded: "{rounded.none}"
    padding: "0.2rem 0.6rem"
  field-input:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.85rem 1rem"
  legend-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.55rem 1rem"
  legend-toggle-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  interchange:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.panel-body}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.25rem"
  bullet:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.bullet}"
    size: "1.75em"
---

# Design System: vunguyen.io — Transit Authority

## Overview

**Creative North Star: "The Transit Authority"**

This is a public-transport wayfinding system asked to carry one engineer's career. Everything borrows from Massachusetts civic signage: deep navy enamel panels bolted onto a concrete-grey ground, a tactile yellow edge along the platform, coloured route bands that mean something, and timetable rules setting dates in condensed caps. Nothing here is a card grid and nothing is a dark terminal. A visitor reads the page the way they read a station: find the colour, follow the line, arrive at the destination.

The density is that of real signage — generous air around a small number of very confident, very large elements, then tight, tabular data inside each panel. The register is institutional rather than personal: authoritative, plain, no persuasion in the ornament. Depth comes from material, not from software convention. A panel is a physical plate with a hard coloured edge and a shadow it casts on the ground; it is never a floating rounded rectangle with a soft glow. There are no gradients anywhere in the build, and none may be introduced.

The system is deliberately narrow so it stays hand-editable forever: two typefaces from Google Fonts loaded by `<link>`, one stylesheet, one script, no npm and no bundler. Every rule below must be achievable in plain HTML and CSS on GitHub Pages, because that is the whole delivery mechanism.

**Key Characteristics:**
- Navy enamel panels (`ink`) on a concrete ground (`ground`), with a tactile yellow platform edge at 14px
- Four route colours that are functional labels, not decoration: red projects, orange work, green study, blue contact
- Archivo's variable `wdth` axis genuinely worked — 122 down to 100 as type size falls
- Barlow Condensed reserved entirely for timetable data: years, legends, chips, nav, buttons
- Hard rectangles everywhere; the only curve in the system is a route bullet
- Authored inline SVG pictograms at a single 2.25 stroke weight; no icon font, no icon library
- One authored motion moment in the entire page, and it defaults to finished

## Colors

A civic signage palette: one dark enamel, one concrete ground, and five saturated signal colours that never appear except to mean something.

### Primary

- **Enamel Navy** (`ink`): the panel material. Header bar, hero panel, contact section, footer, primary buttons, image frames, the interchange band. When a surface is meant to read as a manufactured sign rather than as page, it is this navy.
- **Raised Navy** (`ink-raised`): the second plane inside a navy surface — destination chips, form fields, the direct-contact block, the portrait frame. It is how one navy element sits on another without a shadow.
- **Rule Navy** (`ink-rule`): hairlines and borders inside navy — the divider under the hero name, form-field strokes, the footer's dividing rule, the mobile nav row separators.

### Secondary — the route colours

Four hues, one per destination. They are assigned once at the section or link level via the `--bullet` custom property and inherited by everything beneath.

- **Signal Red** (`red`): Projects. Section head rule, section bullet, project title plates, project action buttons.
- **Signal Orange** (`orange`): Work. Station dots, panel top rules and year chips for every job; the work track on the line diagram; the Experience destination and legend toggle.
- **Signal Green** (`green`): Study. The same four carriers for every degree and certificate; the study track; certificate links; the Education destination and legend toggle.
- **Signal Blue** (`blue`): Contact. Contact section head rule, the direct-contact block's top rule, the Contact destination.
- **Deepened Orange** (`orange-ink`): reserved text-safe orange for the light ground. Signal Orange is a band and a chip colour only; it does not carry small text on concrete. Declared in the token block, currently unused by the build.

### Tertiary

- **Tactile Yellow** (`yellow`): the platform edge. The 14px strip under the hero and above the footer, the 4px bar under the sticky header, focus rings on navy, the you-are-here dot, the interchange band's rules, default year chips, text selection. It is a system colour, not a route.

### Neutral

- **Concrete Ground** (`ground`): the page. Everything not on a navy panel sits on this.
- **Timetable Paper** (`paper`): the line section only — a half-step lighter than the ground so the corridor reads as its own sheet.
- **Sign White** (`white`): station panel fill, all text on navy panels at full strength, the hollow of every station dot.
- **Body Ink** (`ink-body`): running prose on the light ground. Softer than `ink` so headings keep their authority.
- **Muted Ink** (`ink-muted`): section notes, organisation lines, sub-legends — secondary information on the light ground.
- **Panel Body** (`panel-body`) and **Panel Muted** (`panel-muted`): the same two-step demotion inside navy, for intro copy and for field labels/placeholders respectively.
- **Hairline** (`hairline`): unfilled chip and toggle borders on the light ground; also the muted top-rule colour when a station's line is not being traced.
- **Alert Coral** (`alert`): field validation only, on navy. It is not a sixth route colour and never labels a section.

### Named Rules

**The Route Colour Rule.** A colour names a destination; it never decorates. Red is projects, orange is work, green is study, blue is contact. If a new element cannot be assigned to one of those four, it takes navy or yellow. Adding a fifth hue means adding a fifth destination.

**The Bullet Inheritance Rule.** Route colour enters a subtree exactly once, as `style="--bullet: var(--red)"` on the section or link. Every child — the head rule, the route bullet, the button's underline, the link underline, the list marker — reads `var(--bullet)`. Never hard-code a route hex on a descendant.

**The Yellow-Is-Not-A-Route Rule.** Yellow marks the tactile edge, focus on navy, the current position, and the interchange. It never labels a section and never competes with a route colour for meaning.

## Typography

**Display Font:** Archivo (variable, `wdth` 62–125 / `wght` 400–900), with Helvetica Neue, Helvetica, Arial
**Body Font:** Archivo at `wdth` 100 — the same family, unexpanded
**Label/Data Font:** Barlow Condensed (400/500/600/700), with Helvetica Neue, Helvetica, Arial

**Character:** Signage lettering over timetable lettering. Archivo, pushed wide and heavy, is what gets routed into an enamel plate; Barlow Condensed, narrow and letter-spaced, is what gets printed in the departure column. The split is not display-versus-body — it is *sign* versus *data*.

### Hierarchy

- **Display** — the name on the hero panel and nothing else. Uppercase, at panel scale, at the widest the axis is taken.
- **Headline** — section heads and the footer wordmark. Uppercase, negative tracking, tight leading.
- **Title** — station panel headings, project title plates (`wdth` 112 on the red plate), the direct-contact heading (`wdth` 112). Uppercase.
- **Body** — running prose in Archivo at normal width, capped at the `measure` token (58ch). Set in Body Ink on the ground, Panel Body on navy.
- **Label** — the `.legend` pattern: uppercase Barlow Condensed at 0.14em tracking. Nav links, buttons, destination chips, stack chips, field labels, sub-legends, footer column heads, the interchange text.
- **Data** — year chips, the interchange year, the direct-contact tag. Heavier and slightly tighter than Label; this is the timetable numeral voice.

### Named Rules

**The Two-Voice Rule.** Archivo speaks; Barlow Condensed labels. Nothing that is a sentence is set in Barlow Condensed, and nothing that is a date, a legend, a chip, a nav item or a button is set in Archivo. There is no third face and no italic anywhere in the build.

**The Width-Follows-Scale Rule.** Archivo's `wdth` axis widens as type gets larger and narrows as it gets smaller: 122 at the name, 118 at section heads and the wordmark, 112 at plates, 108 at station headings, 100 for prose. Never set a heading at 100, and never expand body copy.

**The Caps-Are-Signage Rule.** Uppercase means the text is signage or data — headings, labels, chips, buttons, years. Body copy is never uppercased and never letter-spaced.

## Layout

One scrolling page, anchor-navigated, with a sticky navy signage bar (`bar-h`, 68px) whose height also sets `scroll-padding-top`. Sections are full-bleed bands: the hero and contact are navy, projects sit on the ground, the line section sits on paper, the footer returns to navy. Horizontal padding is a single fluid token (`pad-x`), vertical section rhythm another (`section-y`); every content shell caps at 1400px and centres.

Projects are two-column at 1fr/1fr with the lead project at 1.15fr/1fr, and alternate sides by reordering the screenshot on even rows. The hero is 1.55fr/0.85fr — text left, portrait plate right, aligned to their bottom edges.

The line corridor is the exception to the 1400px shell. Above 62rem it caps at **1080px and left-aligns** (`margin-inline: 0`); a corridor at full width leaves the lane without a station in it reading as dead page rather than as track. Its head rule deliberately stays at the full 1400px shell so the line section's right edge matches Projects and Contact — cutting the rule down to the corridor was tried and reverted, because it traded an inset inside one section for the page's right edge stepping 1368 → 1152 → 1368 as you scroll. Lanes are split at **42.5%** — 0.85fr study / 1.15fr work — because study entries are short and work entries carry long contribution lists. The two 8px tracks sit at `42.5% - 13px` and `42.5% + 5px`; station dots and the distance ticks are positioned off that same 42.5% figure. Below 62rem the whole corridor collapses to a single left spine at 10px/20px with 6px tracks and everything to its right.

Breakpoints, in the order the build uses them: **62rem** (corridor split ↔ single spine; hero, projects, contact and line head all stack), **52rem** (nav collapses to a Menu toggle and a full-width dropdown panel), **30rem** (destinations go full-width column; the three-state line legend becomes an even 3-column grid rather than wrapping 2 + 1).

### Named Rules

**The Corridor Rule.** Everything in the line section measures from 42.5% — tracks, dots, panel columns, distance ticks. Move that number and all four move together; never nudge one carrier independently.

**The Empty-Lane Rule.** The lane without a station in it is still corridor, not margin. It carries the distance tick for that row, and the corridor is narrowed to 1080px so the lane stays legible as track.

## Elevation & Depth

Depth is structural, not atmospheric. It is carried first by **hard coloured borders** — the 14px yellow edge under the hero and above the footer, the 4px yellow rule under the sticky bar, 6px route-coloured top rules on station panels and the direct-contact block, 6px navy frames around every image, 4px route-coloured rules under every section head — and only second by shadow. Tonal layering does the rest: `ink-raised` on `ink` inside navy, `paper` against `ground` for the corridor.

Where shadow appears it is a cast shadow, offset downward with a soft blur and a negative spread so the plate looks lit from above rather than glowing. There are three shadow values in the whole build and no gradients at all.

### Shadow Vocabulary

- **Lift** (`box-shadow: 0 14px 34px -20px rgba(13, 27, 42, 0.55)`): station panels, project screenshot frames, the interchange band. The standard plate-on-ground shadow.
- **Lift Large** (`box-shadow: 0 26px 60px -28px rgba(13, 27, 42, 0.6)`): the hero portrait plate only — the single most forward object on the page.
- **Dot Shadow** (`box-shadow: 0 3px 10px -3px rgba(13, 27, 42, 0.5)`): station dots, so a bullet reads as a fixture on the track rather than a printed circle.
- **Focus Glow** (`box-shadow: 0 0 0 3px rgba(255, 199, 44, 0.25)`): form fields at focus, alongside a yellow border. The one non-cast shadow, and it is a focus indicator, not depth.

### Named Rules

**The No-Halo Rule.** Every depth shadow has downward offset and negative spread. No centred glows, no `0 0 Npx` ambient rings, no gradients — not in a background, not in an overlay, not in an SVG.

**The Border-Carries-Structure Rule.** If an element needs to read as a separate physical object, give it a hard border in ink or its route colour before you reach for a shadow. Shadow lifts a plate that is already framed; it never substitutes for the frame.

## Shapes

Rectangles, flush and unrounded. Panels, chips, plates, fields, buttons, the interchange band and every image frame have zero radius — inputs carry an explicit `border-radius: 0` so no user-agent style softens them. Frames are drawn as thick borders on the element itself rather than as wrappers, which keeps the silhouette a single solid block.

The one recurring curve is the **route bullet**: a perfect circle used at four sizes — the 1.75em lettered bullet in section heads, the 0.9rem dot in nav links and legend toggles, the 0.85rem dot before a destination chip, and the 26px white-hollow, 7px-ring station dot on the corridor (22px / 6px below 62rem). Station list markers are the opposite geometry on purpose: a 0.7rem × 3px hard bar, a track segment rather than a dot.

### Named Rules

**The Square-Except-Bullets Rule.** Zero radius on everything that holds content. The only curved things in the system are route bullets and station dots, which are always full circles, never pills. The 2px on the global focus ring is the sole tolerated exception, and it exists so the ring does not read as a fifth border style.

## Components

### Buttons

- **Shape:** hard rectangle (0 radius), with a 5px route-coloured bottom rule that reads as an underlining track.
- **Primary (`.action`):** navy fill, white Label type at 0.13em tracking, `0.9rem 1.4rem` padding, an authored 16px SVG glyph at the end. The bottom rule takes `var(--bullet)` and falls back to yellow.
- **Hover / Focus:** background lifts to Raised Navy and the button rises 2px; `:active` returns it to 0. Focus is the global ring — ink on light ground, yellow on navy.
- **Disabled:** 0.55 opacity, `not-allowed`, transform suppressed. Used by the form's send-in-progress state.
- **Destination chip (`.dest`):** the hero's four route links. Raised Navy fill, a route-coloured circular `::before` bullet in the same grammar as the nav, and a 3px *horizontal* nudge on hover — it moves along the line, not up off it.

### Chips

- **Stack chips (on navy):** transparent fill, 2px Rule Navy border, Panel Body text, Label type at 0.1em. Static; not interactive.
- **Tech chips (on ground):** transparent fill, 2px Hairline border, dark ink text, same type. Static.
- **Year chips:** filled, not outlined — yellow with ink text by default, orange with ink text on a work station, green with white text on a study station. This is the one place a route colour becomes a background for small text.

### Cards / Containers

- **Station panel:** white fill, 2px `#d6d5d0` frame, **6px route-coloured top rule**, `clamp(1.25rem, 3vw, 1.85rem)` padding, Lift shadow. Zero radius.
- **Project plate:** a red band with an SVG pictogram and the project title in Title type, sitting directly above the project body — a routed nameplate, not a card header.
- **Screenshot frame:** 6px navy border with Lift shadow, 16:10, `object-position: top center`.
- **Direct-contact block:** Raised Navy fill with a 6px blue top rule, matching the station-panel grammar rather than inventing a side tab.

### Inputs / Fields

- **Style:** Raised Navy fill, 2px Rule Navy border, white Archivo body text, `0.85rem 1rem` padding, explicit zero radius. Labels sit above in yellow Label type.
- **Hover:** border lightens to `#3d5570`.
- **Focus:** yellow border, native outline suppressed, plus the translucent yellow Focus Glow. This is the only component that replaces the global focus ring, and it does so with a stronger indicator.
- **Error:** `:user-invalid` turns the border Alert Coral and reveals the field's own message in Alert Coral Label type — errors are never announced before the visitor has interacted.

### Navigation

- Sticky navy bar with a 4px yellow bottom rule. Links are Label type in `#cfd8e3` with a route-coloured circular dot ahead of each and a transparent 3px bottom border that fills with the link's own route colour on hover.
- **Current:** white text and a yellow bottom border, driven by `aria-current="true"` from a scroll observer. The line section owns two destinations, so the traced track decides which of Experience/Education reads as current.
- **Mobile (≤52rem):** a bordered Menu toggle replaces the list; the panel drops full-width in navy with a yellow bottom rule and stacked rows separated by Rule Navy.

### Brand mark

The VTN monogram as an **interchange roundel**: four route arcs at 6px stroke around a `paper` disc carrying the letters in `ink`. Arc colours run clockwise in the site's destination order — red, orange, green, blue — so the mark is built from the same wayfinding system as the page. It is a redraw of the legacy PNG, not a replacement identity: the original was VTN in navy inside three arcs of sage, blue and gold, and the monogram, the navy lettering and the arc surround all carry over.

- `assets/img/vtn-mark.svg` — the full mark. Nav and any use at 32px or above.
- `assets/img/vtn-favicon.svg` — single-letter V variant, 7px arcs. Below ~32px only; three letterforms are illegible at favicon size.

**The No-Text-In-SVG Rule.** Both files carry their letterforms as outlined paths. An SVG loaded through `<img src>` or as a favicon is an isolated document that cannot reach the page's webfonts, so an `<text>` element silently falls back to the platform sans. Any future standalone SVG that needs lettering outlines it or sets the type in HTML over the image — `hero-plate.svg` sidesteps the question entirely by carrying no lettering at all.

### Hero plate

`assets/img/hero-plate.svg` fills the second focal slot of the first viewport: a drafted elevation of an inverted-Y cable-stayed pylon, off-centre, with a long main-span fan and short back stays. It is the civil-engineering half of the record — the discipline Vu trained in twice before software — and it is Boston. Construction rules that hold if it is ever redrawn:

- **Stays carry the route colours, lifted in tint.** `#E2495C` `#E8873A` `#3BA277` `#4593DD` against `ink-raised`. The page's own `red`/`orange`/`green`/`blue` are mixed for light grounds and go muddy on navy; the tints keep the hue identity while clearing the ground. This is the one sanctioned departure from the literal route values, and it applies only to artwork sitting on navy.
- **Structure is `ground`, never white.** Pylon and deck in `#E6E5E0`, pier and water in the grid neutrals, tactile yellow on the deck edge and the survey benchmark — the same three-tier reading as the rest of the page.
- **The bands below the deck are deliberately double-coded**, harbour water or rows in a table. Do not resolve the ambiguity in either direction.
- **No gradients, no perspective, no photorealism.** It is an elevation drawn on a drafting grid, not a picture of a bridge.

### The Line (signature component)

Two parallel 8px tracks — orange for work, green for study — sharing one chronological corridor, with every job and degree a dated station hung off it. Each track's vertical extent is **measured from its own first and last station dots** in JS, so the work line begins at the first job rather than at the top of the corridor; without JS both tracks simply run the full height, which still reads as a corridor.

- **Interchange band:** a full-width navy bar with yellow rules top and bottom, painted *over* the corridor at the one year the record changes discipline. The tracks run into it and out again.
- **Distance ticks:** in the lane a station does not occupy, a 30px hairline and a year in muted Label type at `#5d6670` — 5.2:1 on paper, quiet but above the text floor, because these carry the corridor. Repetition of information already in the panel, so they are `aria-hidden`. Under a traced line the tick's hairline mutes with the other colour carriers; its year does not, following the Muted-Carrier rule.
- **Terminus marker:** the ongoing role carries a navy chip with a yellow dot, reading "Current post".
- **Tracing:** a three-state legend (Both / Experience / Education) plus any link carrying `data-focus` sets `data-focus` on the corridor.

**The Muted-Carrier Rule.** Tracing one line desaturates exactly four things on the other: the track, the station dot, the panel's top rule, and the year chip. Text colour, size, weight and position never change. Colour is the only channel the interaction is allowed to touch.

### Motion

One authored moment in the entire page: the two tracks scale up from `scaleY(0)` over 1.5s on `cubic-bezier(0.16, 1, 0.3, 1)`, the work track trailing the study track by 0.18s, triggered once by an IntersectionObserver at 5% with a −15% bottom margin. Everything else is a 0.2s state transition on colour, border and small transforms.

**The Drawn-By-Default Rule.** The finished state is the CSS default. The draw-from-zero rule is scoped to `.js .line:not(.is-drawn)`, and the `js` class is set by an inline script, so no-JS, failed-script and reduced-motion visitors all get the completed diagram rather than an empty corridor. Any future animation must be built the same way round.

## Do's and Don'ts

### Do:

- **Do** assign route colour once with `style="--bullet: var(--green)"` on the section or link and let every descendant read `var(--bullet)`.
- **Do** use Archivo for anything that is a sentence or a heading and Barlow Condensed for anything that is a label, a date, a chip or a button.
- **Do** widen Archivo's `wdth` axis as type scales up — 108 at station headings, 118 at section heads, 122 at the name — and leave prose at 100.
- **Do** frame a plate with a hard border (6px route colour on top, 6px ink around images, 14px yellow at the page edges) before considering a shadow.
- **Do** keep the focus ring ink on the light ground and yellow on navy; yellow reads at roughly 1.2:1 against concrete and is not a visible indicator there.
- **Do** author new icons as inline `<symbol>` entries in the sheet at `stroke-width: 2.25`, 24×24, round caps and joins, `fill="none"`, `currentColor`.
- **Do** ship every animation with its finished state as the CSS default, gated behind the `js` class.
- **Do** cap prose at the `measure` token; long-form paragraphs get a line length, signage lines get `max-width: none`.

### Don't:

- **Don't** use a gradient anywhere — background, overlay, border or SVG. The build has zero and the material is enamel, which is flat.
- **Don't** round a container, chip, field or button. Circles are for route bullets only, and pills are not part of this system.
- **Don't** introduce a fifth accent hue. Five signal colours exist because five things need naming; a sixth needs a destination first.
- **Don't** set Signal Orange as text on the concrete ground — use the deepened `orange-ink` variant.
- **Don't** change text colour, size or weight when a filter or focus state changes. Mute the colour carriers only.
- **Don't** add an icon font, an icon package, or an `<img src>` icon. The symbol sheet is the whole vocabulary; the two filled brand marks (GitHub, LinkedIn, X) are a deliberate second tier and the only filled glyphs allowed.
- **Don't** put `<text>` inside an SVG that is loaded through `<img src>` — it is an isolated document and cannot reach the page webfonts. Set the lettering in HTML over the plate.
- **Don't** introduce anything that requires npm, a bundler, a framework or a Pages Action. Every rule above has to survive a plain `git push`.
- **Don't** promote a second animated moment. The track draw is the page's one authored gesture; adding a second spends what makes it read as authored.
