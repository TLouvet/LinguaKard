export interface Hangeul {
  character: string;
  romanization: string;
  name: string;
  category: 'consonnes de base' | 'consonnes doubles' | 'voyelles de base' | 'voyelles composées';
}

export const hangeulData: Hangeul[] = [
  // Consonnes de base (기본 자음)
  { character: 'ㄱ', romanization: 'g/k', name: '기역 (giyeok)', category: 'consonnes de base' },
  { character: 'ㄴ', romanization: 'n', name: '니은 (nieun)', category: 'consonnes de base' },
  { character: 'ㄷ', romanization: 'd/t', name: '디귿 (digeut)', category: 'consonnes de base' },
  { character: 'ㄹ', romanization: 'r/l', name: '리을 (rieul)', category: 'consonnes de base' },
  { character: 'ㅁ', romanization: 'm', name: '미음 (mieum)', category: 'consonnes de base' },
  { character: 'ㅂ', romanization: 'b/p', name: '비읍 (bieup)', category: 'consonnes de base' },
  { character: 'ㅅ', romanization: 's', name: '시옷 (siot)', category: 'consonnes de base' },
  { character: 'ㅇ', romanization: 'ng / —', name: '이응 (ieung)', category: 'consonnes de base' },
  { character: 'ㅈ', romanization: 'j', name: '지읒 (jieut)', category: 'consonnes de base' },
  { character: 'ㅊ', romanization: 'ch', name: '치읓 (chieut)', category: 'consonnes de base' },
  { character: 'ㅋ', romanization: 'k', name: '키읔 (kieuk)', category: 'consonnes de base' },
  { character: 'ㅌ', romanization: 't', name: '티읕 (tieut)', category: 'consonnes de base' },
  { character: 'ㅍ', romanization: 'p', name: '피읖 (pieup)', category: 'consonnes de base' },
  { character: 'ㅎ', romanization: 'h', name: '히읗 (hieut)', category: 'consonnes de base' },

  // Consonnes doubles (쌍자음)
  { character: 'ㄲ', romanization: 'kk', name: '쌍기역 (ssang giyeok)', category: 'consonnes doubles' },
  { character: 'ㄸ', romanization: 'tt', name: '쌍디귿 (ssang digeut)', category: 'consonnes doubles' },
  { character: 'ㅃ', romanization: 'pp', name: '쌍비읍 (ssang bieup)', category: 'consonnes doubles' },
  { character: 'ㅆ', romanization: 'ss', name: '쌍시옷 (ssang siot)', category: 'consonnes doubles' },
  { character: 'ㅉ', romanization: 'jj', name: '쌍지읒 (ssang jieut)', category: 'consonnes doubles' },

  // Voyelles de base (기본 모음)
  { character: 'ㅏ', romanization: 'a', name: '아 (a)', category: 'voyelles de base' },
  { character: 'ㅐ', romanization: 'ae', name: '애 (ae)', category: 'voyelles de base' },
  { character: 'ㅑ', romanization: 'ya', name: '야 (ya)', category: 'voyelles de base' },
  { character: 'ㅒ', romanization: 'yae', name: '얘 (yae)', category: 'voyelles de base' },
  { character: 'ㅓ', romanization: 'eo', name: '어 (eo)', category: 'voyelles de base' },
  { character: 'ㅔ', romanization: 'e', name: '에 (e)', category: 'voyelles de base' },
  { character: 'ㅕ', romanization: 'yeo', name: '여 (yeo)', category: 'voyelles de base' },
  { character: 'ㅖ', romanization: 'ye', name: '예 (ye)', category: 'voyelles de base' },
  { character: 'ㅗ', romanization: 'o', name: '오 (o)', category: 'voyelles de base' },
  { character: 'ㅛ', romanization: 'yo', name: '요 (yo)', category: 'voyelles de base' },
  { character: 'ㅜ', romanization: 'u', name: '우 (u)', category: 'voyelles de base' },
  { character: 'ㅠ', romanization: 'yu', name: '유 (yu)', category: 'voyelles de base' },
  { character: 'ㅡ', romanization: 'eu', name: '으 (eu)', category: 'voyelles de base' },
  { character: 'ㅣ', romanization: 'i', name: '이 (i)', category: 'voyelles de base' },

  // Voyelles composées (복합 모음)
  { character: 'ㅘ', romanization: 'wa', name: '와 (wa)', category: 'voyelles composées' },
  { character: 'ㅙ', romanization: 'wae', name: '왜 (wae)', category: 'voyelles composées' },
  { character: 'ㅚ', romanization: 'oe', name: '외 (oe)', category: 'voyelles composées' },
  { character: 'ㅝ', romanization: 'wo', name: '워 (wo)', category: 'voyelles composées' },
  { character: 'ㅞ', romanization: 'we', name: '웨 (we)', category: 'voyelles composées' },
  { character: 'ㅟ', romanization: 'wi', name: '위 (wi)', category: 'voyelles composées' },
  { character: 'ㅢ', romanization: 'ui', name: '의 (ui)', category: 'voyelles composées' },
];

export const hangeulCategories = [
  'consonnes de base',
  'consonnes doubles',
  'voyelles de base',
  'voyelles composées',
] as const;

export type HangeulCategory = typeof hangeulCategories[number];
