export interface Kanji {
  kanji: string;
  onyomi: string;
  kunyomi: string;
  meaning: string;
  category: string;
}

export const kanjiData: Kanji[] = [
  // Nombres
  { kanji: '一', onyomi: 'イチ', kunyomi: 'ひと', meaning: 'un', category: 'nombres' },
  { kanji: '二', onyomi: 'ニ', kunyomi: 'ふた', meaning: 'deux', category: 'nombres' },
  { kanji: '三', onyomi: 'サン', kunyomi: 'みっ', meaning: 'trois', category: 'nombres' },
  { kanji: '四', onyomi: 'シ', kunyomi: 'よっ', meaning: 'quatre', category: 'nombres' },
  { kanji: '五', onyomi: 'ゴ', kunyomi: 'いつ', meaning: 'cinq', category: 'nombres' },
  { kanji: '六', onyomi: 'ロク', kunyomi: 'むっ', meaning: 'six', category: 'nombres' },
  { kanji: '七', onyomi: 'シチ', kunyomi: 'なな', meaning: 'sept', category: 'nombres' },
  { kanji: '八', onyomi: 'ハチ', kunyomi: 'やっ', meaning: 'huit', category: 'nombres' },
  { kanji: '九', onyomi: 'ク・キュウ', kunyomi: 'ここの', meaning: 'neuf', category: 'nombres' },
  { kanji: '十', onyomi: 'ジュウ', kunyomi: 'とお', meaning: 'dix', category: 'nombres' },
  { kanji: '百', onyomi: 'ヒャク', kunyomi: '—', meaning: 'cent', category: 'nombres' },
  { kanji: '千', onyomi: 'セン', kunyomi: 'ち', meaning: 'mille', category: 'nombres' },
  { kanji: '万', onyomi: 'マン', kunyomi: '—', meaning: 'dix-mille', category: 'nombres' },

  // Temps
  { kanji: '年', onyomi: 'ネン', kunyomi: 'とし', meaning: 'année', category: 'temps' },
  { kanji: '月', onyomi: 'ゲツ・ガツ', kunyomi: 'つき', meaning: 'mois / lune', category: 'temps' },
  { kanji: '日', onyomi: 'ニチ・ジツ', kunyomi: 'ひ', meaning: 'jour / soleil', category: 'temps' },
  { kanji: '時', onyomi: 'ジ', kunyomi: 'とき', meaning: 'heure / moment', category: 'temps' },
  { kanji: '分', onyomi: 'フン・ブン', kunyomi: 'わか', meaning: 'minute / partie', category: 'temps' },
  { kanji: '間', onyomi: 'カン', kunyomi: 'ま・あいだ', meaning: 'intervalle / entre', category: 'temps' },
  { kanji: '週', onyomi: 'シュウ', kunyomi: '—', meaning: 'semaine', category: 'temps' },
  { kanji: '今', onyomi: 'コン', kunyomi: 'いま', meaning: 'maintenant', category: 'temps' },
  { kanji: '前', onyomi: 'ゼン', kunyomi: 'まえ', meaning: 'avant / devant', category: 'temps' },
  { kanji: '後', onyomi: 'ゴ・コウ', kunyomi: 'うしろ・あと', meaning: 'après / derrière', category: 'temps' },
  { kanji: '毎', onyomi: 'マイ', kunyomi: '—', meaning: 'chaque', category: 'temps' },
  { kanji: '半', onyomi: 'ハン', kunyomi: 'なか', meaning: 'moitié', category: 'temps' },

  // Nature
  { kanji: '山', onyomi: 'サン', kunyomi: 'やま', meaning: 'montagne', category: 'nature' },
  { kanji: '川', onyomi: 'セン', kunyomi: 'かわ', meaning: 'rivière', category: 'nature' },
  { kanji: '田', onyomi: 'デン', kunyomi: 'た', meaning: 'rizière', category: 'nature' },
  { kanji: '木', onyomi: 'モク', kunyomi: 'き', meaning: 'arbre / bois', category: 'nature' },
  { kanji: '火', onyomi: 'カ', kunyomi: 'ひ', meaning: 'feu', category: 'nature' },
  { kanji: '水', onyomi: 'スイ', kunyomi: 'みず', meaning: 'eau', category: 'nature' },
  { kanji: '金', onyomi: 'キン', kunyomi: 'かね', meaning: 'or / argent', category: 'nature' },
  { kanji: '土', onyomi: 'ド', kunyomi: 'つち', meaning: 'terre / sol', category: 'nature' },
  { kanji: '空', onyomi: 'クウ', kunyomi: 'そら', meaning: 'ciel', category: 'nature' },
  { kanji: '雨', onyomi: 'ウ', kunyomi: 'あめ', meaning: 'pluie', category: 'nature' },
  { kanji: '花', onyomi: 'カ', kunyomi: 'はな', meaning: 'fleur', category: 'nature' },
  { kanji: '魚', onyomi: 'ギョ', kunyomi: 'さかな', meaning: 'poisson', category: 'nature' },

  // Personnes / Famille
  { kanji: '人', onyomi: 'ジン・ニン', kunyomi: 'ひと', meaning: 'personne', category: 'personnes' },
  { kanji: '子', onyomi: 'シ', kunyomi: 'こ', meaning: 'enfant', category: 'personnes' },
  { kanji: '女', onyomi: 'ジョ', kunyomi: 'おんな', meaning: 'femme', category: 'personnes' },
  { kanji: '男', onyomi: 'ダン', kunyomi: 'おとこ', meaning: 'homme', category: 'personnes' },
  { kanji: '父', onyomi: 'フ', kunyomi: 'ちち', meaning: 'père', category: 'personnes' },
  { kanji: '母', onyomi: 'ボ', kunyomi: 'はは', meaning: 'mère', category: 'personnes' },
  { kanji: '友', onyomi: 'ユウ', kunyomi: 'とも', meaning: 'ami', category: 'personnes' },
  { kanji: '名', onyomi: 'メイ', kunyomi: 'な', meaning: 'nom', category: 'personnes' },

  // Direction / Position
  { kanji: '上', onyomi: 'ジョウ', kunyomi: 'うえ', meaning: 'dessus / haut', category: 'direction' },
  { kanji: '下', onyomi: 'カ', kunyomi: 'した', meaning: 'dessous / bas', category: 'direction' },
  { kanji: '中', onyomi: 'チュウ', kunyomi: 'なか', meaning: 'milieu / intérieur', category: 'direction' },
  { kanji: '左', onyomi: 'サ', kunyomi: 'ひだり', meaning: 'gauche', category: 'direction' },
  { kanji: '右', onyomi: 'ウ', kunyomi: 'みぎ', meaning: 'droite', category: 'direction' },
  { kanji: '東', onyomi: 'トウ', kunyomi: 'ひがし', meaning: 'est', category: 'direction' },
  { kanji: '西', onyomi: 'セイ', kunyomi: 'にし', meaning: 'ouest', category: 'direction' },
  { kanji: '南', onyomi: 'ナン', kunyomi: 'みなみ', meaning: 'sud', category: 'direction' },
  { kanji: '北', onyomi: 'ホク', kunyomi: 'きた', meaning: 'nord', category: 'direction' },
  { kanji: '外', onyomi: 'ガイ', kunyomi: 'そと', meaning: 'extérieur', category: 'direction' },

  // Taille / Qualité
  { kanji: '大', onyomi: 'ダイ', kunyomi: 'おお', meaning: 'grand', category: 'qualité' },
  { kanji: '小', onyomi: 'ショウ', kunyomi: 'ちい', meaning: 'petit', category: 'qualité' },
  { kanji: '高', onyomi: 'コウ', kunyomi: 'たか', meaning: 'haut / cher', category: 'qualité' },
  { kanji: '安', onyomi: 'アン', kunyomi: 'やす', meaning: 'pas cher / sûr', category: 'qualité' },
  { kanji: '長', onyomi: 'チョウ', kunyomi: 'なが', meaning: 'long', category: 'qualité' },
  { kanji: '新', onyomi: 'シン', kunyomi: 'あたら', meaning: 'nouveau', category: 'qualité' },
  { kanji: '古', onyomi: 'コ', kunyomi: 'ふる', meaning: 'vieux / ancien', category: 'qualité' },
  { kanji: '白', onyomi: 'ハク', kunyomi: 'しろ', meaning: 'blanc', category: 'qualité' },
  { kanji: '黒', onyomi: 'コク', kunyomi: 'くろ', meaning: 'noir', category: 'qualité' },
  { kanji: '赤', onyomi: 'セキ', kunyomi: 'あか', meaning: 'rouge', category: 'qualité' },
  { kanji: '青', onyomi: 'セイ', kunyomi: 'あお', meaning: 'bleu', category: 'qualité' },

  // Vie quotidienne
  { kanji: '口', onyomi: 'コウ', kunyomi: 'くち', meaning: 'bouche', category: 'quotidien' },
  { kanji: '手', onyomi: 'シュ', kunyomi: 'て', meaning: 'main', category: 'quotidien' },
  { kanji: '目', onyomi: 'モク', kunyomi: 'め', meaning: 'œil', category: 'quotidien' },
  { kanji: '耳', onyomi: 'ジ', kunyomi: 'みみ', meaning: 'oreille', category: 'quotidien' },
  { kanji: '足', onyomi: 'ソク', kunyomi: 'あし', meaning: 'pied / jambe', category: 'quotidien' },
  { kanji: '電', onyomi: 'デン', kunyomi: '—', meaning: 'électricité', category: 'quotidien' },
  { kanji: '車', onyomi: 'シャ', kunyomi: 'くるま', meaning: 'voiture', category: 'quotidien' },
  { kanji: '駅', onyomi: 'エキ', kunyomi: '—', meaning: 'gare', category: 'quotidien' },
  { kanji: '店', onyomi: 'テン', kunyomi: 'みせ', meaning: 'magasin', category: 'quotidien' },
  { kanji: '道', onyomi: 'ドウ', kunyomi: 'みち', meaning: 'route / chemin', category: 'quotidien' },
  { kanji: '円', onyomi: 'エン', kunyomi: 'まる', meaning: 'yen / cercle', category: 'quotidien' },
  { kanji: '肉', onyomi: 'ニク', kunyomi: '—', meaning: 'viande', category: 'quotidien' },

  // École / Langue
  { kanji: '国', onyomi: 'コク', kunyomi: 'くに', meaning: 'pays', category: 'école' },
  { kanji: '語', onyomi: 'ゴ', kunyomi: 'かた', meaning: 'langue / mot', category: 'école' },
  { kanji: '学', onyomi: 'ガク', kunyomi: 'まな', meaning: 'étudier / apprendre', category: 'école' },
  { kanji: '生', onyomi: 'セイ', kunyomi: 'い', meaning: 'vie / naissance', category: 'école' },
  { kanji: '校', onyomi: 'コウ', kunyomi: '—', meaning: 'école', category: 'école' },
  { kanji: '本', onyomi: 'ホン', kunyomi: 'もと', meaning: 'livre / origine', category: 'école' },
  { kanji: '先', onyomi: 'セン', kunyomi: 'さき', meaning: 'avant / supérieur', category: 'école' },
  { kanji: '気', onyomi: 'キ', kunyomi: 'け', meaning: 'esprit / énergie', category: 'école' },

  // Verbes courants
  { kanji: '食', onyomi: 'ショク', kunyomi: 'た', meaning: 'manger / nourriture', category: 'verbes' },
  { kanji: '飲', onyomi: 'イン', kunyomi: 'の', meaning: 'boire', category: 'verbes' },
  { kanji: '見', onyomi: 'ケン', kunyomi: 'み', meaning: 'voir / regarder', category: 'verbes' },
  { kanji: '行', onyomi: 'コウ', kunyomi: 'い', meaning: 'aller', category: 'verbes' },
  { kanji: '来', onyomi: 'ライ', kunyomi: 'く', meaning: 'venir', category: 'verbes' },
  { kanji: '帰', onyomi: 'キ', kunyomi: 'かえ', meaning: 'rentrer', category: 'verbes' },
  { kanji: '聞', onyomi: 'ブン', kunyomi: 'き', meaning: 'écouter / entendre', category: 'verbes' },
  { kanji: '書', onyomi: 'ショ', kunyomi: 'か', meaning: 'écrire', category: 'verbes' },
  { kanji: '読', onyomi: 'ドク', kunyomi: 'よ', meaning: 'lire', category: 'verbes' },
  { kanji: '話', onyomi: 'ワ', kunyomi: 'はな', meaning: 'parler', category: 'verbes' },
  { kanji: '買', onyomi: 'バイ', kunyomi: 'か', meaning: 'acheter', category: 'verbes' },
];

export const kanjiCategories = ['nombres', 'temps', 'nature', 'personnes', 'direction', 'qualité', 'quotidien', 'école', 'verbes'] as const;
export type KanjiCategory = typeof kanjiCategories[number];
