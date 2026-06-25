# ulmasuraev.com

Landing page for actor Ulmas Uraev. Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com).

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Adding real images

Drop files into `public/images/` using these exact names — every component already points at these paths,
so the site picks them up automatically with no code changes needed:

```
public/images/
  hero.jpg                      Hero section photo (Hero.astro)
  headshot.jpg                  About section headshot (About.astro)
  diploma.jpg                   Recognition section diploma scan (Recognition.astro)
  film-blind-sherlock.jpg        Filmography card
  film-grand-amir.jpg
  film-out.jpg
  film-qora-kitob.jpg
  film-ofitser-55.jpg
  film-alteration.jpg
  gallery-1.jpg ... gallery-8.jpg   Gallery grid (8 images)
```

Anything in `public/` is served from the site root (`public/images/hero.jpg` → `/images/hero.jpg`).
Until a file exists at one of these paths, the browser will show a broken-image icon for that spot.

## Deploy

Configured for static output, ready to deploy to Netlify from GitHub. Domain `ulmasuraev.com` (Spaceship) should point
to Netlify's nameservers.
