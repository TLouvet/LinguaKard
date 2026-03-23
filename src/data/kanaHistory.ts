import type { HistoryEntry } from '../ui/HistorySection';

export const hiraganaHistory: HistoryEntry[] = [
  {
    title: "Origine (IXe siècle)",
    body: "Les hiragana sont nés à l'époque Heian (794–1185) de la simplification cursive des man'yōgana — des kanji utilisés uniquement pour leur valeur phonétique. Les femmes de la noblesse, n'ayant pas accès à l'instruction du chinois classique, ont développé ce style arrondi. Chaque caractère est la cursive d'un kanji entier : あ vient du kanji 安 (an).",
  },
  {
    title: "Standardisation et usage",
    body: "Initialement ~300 variantes par syllabe, les hiragana ont été réduits à 46 caractères par la réforme de 1900, puis réformés en 1946. Leur ancien nom onnate (« main des femmes ») reflète leur origine. Aujourd'hui ils servent aux particules grammaticales (は, が), aux terminaisons verbales, et comme furigana au-dessus des kanji.",
  },
];

export const katakanaHistory: HistoryEntry[] = [
  {
    title: "Origine (IXe siècle)",
    body: "Les katakana ont été développés en parallèle des hiragana, non pas par les femmes de la noblesse mais par les moines bouddhistes. Contrairement aux hiragana (cursive complète d'un kanji), chaque katakana est extrait d'un fragment angulaire d'un man'yōgana. Exemple : ル (ru) vient du kanji 流. Leur usage initial était d'annoter la prononciation des textes sacrés chinois.",
  },
  {
    title: "Usage moderne",
    body: "Les katakana transcrivent les mots d'origine étrangère (gairaigo) : コーヒー (café), コンピュータ (ordinateur) ; les noms propres étrangers : フランス (France) ; les onomatopées et les termes scientifiques. Leur aspect angulaire contraste visuellement avec les hiragana arrondis, couvrant les mêmes 46 sons de base.",
  },
];
