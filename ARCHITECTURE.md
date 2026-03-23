# LinguaKard — Architecture

## Stack

- **React 19** + **TypeScript** — UI
- **Vite** — bundler
- **Tailwind CSS v4** — styling (via `@tailwindcss/vite`, no config file)
- **React Router DOM** — routing (`HashRouter` for GitHub Pages compatibility)
- **react-toastify** — error notifications

## Folder structure

```
src/
├── data/          # Raw data + types for each language/topic
├── hooks/         # Reusable logic hooks
├── components/    # Feature components (study/quiz modes, cards, navbar)
├── pages/         # One file per route
├── ui/            # Primitive UI components (no business logic)
└── schemas/       # Zod schemas (currently unused after quiz refactor, kept for reference)
```

---

## Layers

### `src/data/`

One file per dataset. Each file exports:
- An **interface** describing one entry
- A **data array**
- A **categories array** (`as const`) for tab iteration
- A **category type** inferred from the array

```ts
export interface Kana { hiragana: string; katakana: string; romanji: string; row: string }
export const kanaData: Kana[] = [...]
export const kanaRows = ['a', 'ka', ...] as const
```

### `src/hooks/`

| Hook | Purpose |
|---|---|
| `useQuiz` | Kana quiz logic (shuffle, options, score, answer) |
| `useKanjiQuiz` | Kanji quiz logic (same pattern, quizzes on `meaning`) |
| `useHangeulQuiz` | Hangeul quiz logic (quizzes on `romanization`) |
| `useKoreanWordsQuiz` | Korean vocabulary quiz (quizzes on `french`) |
| `useArabicQuiz` | Arabic quiz logic (quizzes on `transliteration`) |
| `useQueryState` | Like `useState` but synced with a URL search param (survives refresh) |
| `useBestScore` | Wraps `useLocalStorage` + `useEffect` to track a persistent high score |
| `useLocalStorage` | Generic typed localStorage hook with toast error handling |

### `src/components/`

Feature components. Each language/topic has:
- `*Card` — displays one entry (character or word)
- `*StudyMode` — grid of cards, tabbed by category
- `*QuizMode` — uses the matching quiz hook + `QuizOptionCard`

Shared:
- `Navbar` — uses `NavDropdown` to group languages

### `src/pages/`

One file per route. Pages own top-level state (active tab, script selection) and compose feature components.

| Route | Page |
|---|---|
| `/kana` | `KanaPage` — study/quiz tabs + hiragana/katakana toggle |
| `/kanji` | `KanjiPage` — study/quiz tabs |
| `/hangeul` | `HangeulPage` — study/quiz tabs |
| `/korean-words` | `KoreanWordsPage` — study/quiz tabs |

### `src/ui/`

Stateless (or near-stateless) primitives with no domain knowledge.

| Component | Usage |
|---|---|
| `Button` | Toggle button with `active` prop (blue/gray) |
| `IconButton` | Icon-only button with `active` prop and `label` for accessibility |
| `Card` | White rounded box, spreads `HTMLDivElement` attrs |
| `Badge` | Small pill label with `variant` prop (blue/green/orange/gray) |
| `NavLink` | Router `<Link>` with active style via `useLocation` |
| `NavDropdown` | Click-to-open dropdown with outside-click dismiss |
| `QuizOptionCard` | Quiz answer card — owns correct/wrong/neutral styling |
| `TabsList` / `TabsTrigger` | Underline-style tabs, horizontally scrollable on mobile |
| `Table` / `TableHead` / `TableBody` / `TableRow` / `TableHeader` / `TableCell` | Compound table primitive |

---

## Adding a new language

### 1. Create the data file — `src/data/myLanguage.ts`

```ts
export interface MyEntry {
  character: string;
  romanization: string;
  meaning: string;      // or whatever fields apply
  category: string;
}

export const myData: MyEntry[] = [ ... ]

export const myCategories = ['cat1', 'cat2'] as const
export type MyCategory = typeof myCategories[number]
```

### 2. Create a quiz hook — `src/hooks/useMyQuiz.ts`

Copy any existing quiz hook (e.g. `useKanjiQuiz`). Change:
- The type import
- The field used as the correct answer (e.g. `entry.meaning`)
- The field mapped for distractors

### 3. Create components

- `src/components/MyCard.tsx` — display one entry using `<Card>`
- `src/components/MyStudyMode.tsx` — `<TabsList>` + grid of `<MyCard>`
- `src/components/MyQuizMode.tsx` — quiz hook + `useBestScore` + `<QuizOptionCard>`

### 4. Create the page — `src/pages/MyPage.tsx`

```tsx
export function MyPage() {
  const [tab, setTab] = useState<'study' | 'quiz'>('study')
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1>...</h1>
      <TabsList>
        <TabsTrigger active={tab === 'study'} onClick={() => setTab('study')}>Étude</TabsTrigger>
        <TabsTrigger active={tab === 'quiz'} onClick={() => setTab('quiz')}>Quiz</TabsTrigger>
      </TabsList>
      {tab === 'study' ? <MyStudyMode /> : <MyQuizMode key="my-quiz" />}
    </div>
  )
}
```

### 5. Register the route — `src/App.tsx`

```tsx
import { MyPage } from './pages/MyPage'
// ...
<Route path="/my-language" element={<MyPage />} />
```

### 6. Add to the navbar — `src/components/Navbar.tsx`

Either add to an existing `NavDropdown` items array, or add a new `NavDropdown` for the language:

```tsx
const myLanguageItems = [
  { to: '/my-language', label: 'My section' },
]
// ...
<NavDropdown label="My Language" items={myLanguageItems} />
```

---

## Rules & conventions

### Quiz modes — never reveal the answer

Quiz components must **never display any field that hints at the correct answer** alongside the question character. This includes romanizations, names, or readings shown below the character.

The only safe fields to show in a quiz are those that are not the answer and do not imply it. When in doubt, show only the bare character/word being tested.

```tsx
// ✅ correct — bare character only
<span>{current.letter}</span>

// ❌ wrong — nameRoman contains the answer (e.g. "alif" → transliteration "a")
<span>{current.letter}</span>
<span>{current.nameRoman}</span>
```

### URL state

Tab and script selection must use `useQueryState` instead of `useState` so the URL reflects the current view and survives refresh.

```tsx
const [tab, setTab] = useQueryState<'study' | 'quiz'>('tab', 'study');
```

---

## Deployment

Deployed to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).

- Triggers on push to `main`
- Runs `npm ci` + `npm run build`
- Uploads `dist/` as a Pages artifact — **no `dist/` commit needed**
- Live at: `https://tlouvet.github.io/LinguaKard/`

To activate: **repo Settings → Pages → Source → GitHub Actions**
