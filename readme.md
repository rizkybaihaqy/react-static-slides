# React Static Slides

Make presentation in html using react.

## Feature

- Generate to single HTML, host anywhere
- Routing using `#anchor` suffix and the `:target` CSS selector inspired by [cadars/john-doe](https://github.com/cadars/john-doe)
- Easily organize slide
- Customizable, bring your own favorite styling tool
- Barely Typescript

## How To

1. Clone this project
2. Install dependencies `npm install`
3. Create your slides in `src/slides` directory
4. Add your slides component to `src/presentation.ts` files (order matters)
5. Run `npm run dev` to view it in your web page or `npm run render` to to get your html in `public/` directory

## Folder Structure

- `components/` : contains building block of the app
- `slides/` : contains your slides
- `app.tsx/` : html document representation
- `presentation.tsx` : list of your presentation slides (order matters)

## Available Component Api

You can freely style the building block components

```tsx
<Slide id={...} prev={...} next={...}>...</Slide>
```

```tsx
<Slides>...</Slides>
```

```tsx
<Navigation prev={...} next={...}>...</Navigation>
```

```tsx
<Start first={...} last={...}>...</Start>
```

```tsx
<End first={...} last={...}>...</End>
```
