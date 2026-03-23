export interface ArabicLetter {
  letter: string;
  nameRoman: string;
  arabicName: string;
  transliteration: string;
  category: string;
}

export const arabicData: ArabicLetter[] = [
  // Non-connectantes (ne se lient jamais à la lettre suivante)
  { letter: 'ا', nameRoman: 'alif',  arabicName: 'أَلِف', transliteration: 'a / ā',  category: 'non-connectantes' },
  { letter: 'د', nameRoman: 'dal',   arabicName: 'دَال',  transliteration: 'd',       category: 'non-connectantes' },
  { letter: 'ذ', nameRoman: 'dhal',  arabicName: 'ذَال',  transliteration: 'dh',      category: 'non-connectantes' },
  { letter: 'ر', nameRoman: 'ra',    arabicName: 'رَاء',  transliteration: 'r',       category: 'non-connectantes' },
  { letter: 'ز', nameRoman: 'zay',   arabicName: 'زَاي',  transliteration: 'z',       category: 'non-connectantes' },
  { letter: 'و', nameRoman: 'waw',   arabicName: 'وَاو',  transliteration: 'w / ū',  category: 'non-connectantes' },

  // Famille ب (même base en cuvette, distinguées par les points)
  { letter: 'ب', nameRoman: 'ba',  arabicName: 'بَاء', transliteration: 'b',      category: 'famille ب' },
  { letter: 'ت', nameRoman: 'ta',  arabicName: 'تَاء', transliteration: 't',      category: 'famille ب' },
  { letter: 'ث', nameRoman: 'tha', arabicName: 'ثَاء', transliteration: 'th',     category: 'famille ب' },
  { letter: 'ن', nameRoman: 'nun', arabicName: 'نُون', transliteration: 'n',      category: 'famille ب' },
  { letter: 'ي', nameRoman: 'ya',  arabicName: 'يَاء', transliteration: 'y / ī', category: 'famille ب' },

  // Famille ج (forme arrondie en crochet)
  { letter: 'ج', nameRoman: 'jim',   arabicName: 'جِيم', transliteration: 'j',  category: 'famille ج' },
  { letter: 'ح', nameRoman: 'ha',    arabicName: 'حَاء', transliteration: 'ḥ',  category: 'famille ج' },
  { letter: 'خ', nameRoman: 'kha',   arabicName: 'خَاء', transliteration: 'kh', category: 'famille ج' },
  { letter: 'ع', nameRoman: 'aïn',   arabicName: 'عَيْن', transliteration: 'ʿ', category: 'famille ج' },
  { letter: 'غ', nameRoman: 'ghaïn', arabicName: 'غَيْن', transliteration: 'gh', category: 'famille ج' },

  // Famille س (dents ou emphatiques)
  { letter: 'س', nameRoman: 'sin',  arabicName: 'سِين', transliteration: 's',  category: 'famille س' },
  { letter: 'ش', nameRoman: 'shin', arabicName: 'شِين', transliteration: 'sh', category: 'famille س' },
  { letter: 'ص', nameRoman: 'sad',  arabicName: 'صَاد', transliteration: 'ṣ',  category: 'famille س' },
  { letter: 'ض', nameRoman: 'dad',  arabicName: 'ضَاد', transliteration: 'ḍ',  category: 'famille س' },
  { letter: 'ط', nameRoman: 'ṭa',   arabicName: 'طَاء', transliteration: 'ṭ',  category: 'famille س' },
  { letter: 'ظ', nameRoman: 'ẓa',   arabicName: 'ظَاء', transliteration: 'ẓ',  category: 'famille س' },

  // Lettres uniques
  { letter: 'ف', nameRoman: 'fa',  arabicName: 'فَاء', transliteration: 'f', category: 'lettres uniques' },
  { letter: 'ق', nameRoman: 'qaf', arabicName: 'قَاف', transliteration: 'q', category: 'lettres uniques' },
  { letter: 'ك', nameRoman: 'kaf', arabicName: 'كَاف', transliteration: 'k', category: 'lettres uniques' },
  { letter: 'ل', nameRoman: 'lam', arabicName: 'لَام', transliteration: 'l', category: 'lettres uniques' },
  { letter: 'م', nameRoman: 'mim', arabicName: 'مِيم', transliteration: 'm', category: 'lettres uniques' },
  { letter: 'ه', nameRoman: 'ha',  arabicName: 'هَاء', transliteration: 'h', category: 'lettres uniques' },
];

export const arabicCategories = [
  'non-connectantes',
  'famille ب',
  'famille ج',
  'famille س',
  'lettres uniques',
] as const;

export type ArabicCategory = typeof arabicCategories[number];
