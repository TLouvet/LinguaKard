export interface KoreanWord {
  korean: string;
  romanization: string;
  french: string;
  category: string;
}

export const koreanWordsData: KoreanWord[] = [
  // Salutations
  { korean: '안녕하세요', romanization: 'annyeonghaseyo', french: 'bonjour', category: 'salutations' },
  { korean: '안녕', romanization: 'annyeong', french: 'salut', category: 'salutations' },
  { korean: '감사합니다', romanization: 'gamsahamnida', french: 'merci', category: 'salutations' },
  { korean: '죄송합니다', romanization: 'joesonghamnida', french: 'désolé (formel)', category: 'salutations' },
  { korean: '미안해', romanization: 'mianhae', french: 'désolé (informel)', category: 'salutations' },
  { korean: '네', romanization: 'ne', french: 'oui', category: 'salutations' },
  { korean: '아니요', romanization: 'aniyo', french: 'non', category: 'salutations' },
  { korean: '괜찮아요', romanization: 'gwaenchanayo', french: 'ça va / d\'accord', category: 'salutations' },
  { korean: '이름', romanization: 'ireum', french: 'prénom / nom', category: 'salutations' },
  { korean: '만나서 반가워요', romanization: 'mannaseo bangawoyo', french: 'enchanté', category: 'salutations' },

  // Famille
  { korean: '가족', romanization: 'gajok', french: 'famille', category: 'famille' },
  { korean: '엄마', romanization: 'eomma', french: 'maman', category: 'famille' },
  { korean: '아빠', romanization: 'appa', french: 'papa', category: 'famille' },
  { korean: '오빠', romanization: 'oppa', french: 'grand frère (dit par une femme)', category: 'famille' },
  { korean: '형', romanization: 'hyeong', french: 'grand frère (dit par un homme)', category: 'famille' },
  { korean: '언니', romanization: 'eonni', french: 'grande sœur (dit par une femme)', category: 'famille' },
  { korean: '누나', romanization: 'nuna', french: 'grande sœur (dit par un homme)', category: 'famille' },
  { korean: '동생', romanization: 'dongsaeng', french: 'petit frère / petite sœur', category: 'famille' },
  { korean: '친구', romanization: 'chingu', french: 'ami(e)', category: 'famille' },
  { korean: '선생님', romanization: 'seonsaengnim', french: 'professeur', category: 'famille' },

  // Corps
  { korean: '머리', romanization: 'meori', french: 'tête / cheveux', category: 'corps' },
  { korean: '얼굴', romanization: 'eolgul', french: 'visage', category: 'corps' },
  { korean: '눈', romanization: 'nun', french: 'œil / yeux', category: 'corps' },
  { korean: '코', romanization: 'ko', french: 'nez', category: 'corps' },
  { korean: '입', romanization: 'ip', french: 'bouche', category: 'corps' },
  { korean: '귀', romanization: 'gwi', french: 'oreille', category: 'corps' },
  { korean: '손', romanization: 'son', french: 'main', category: 'corps' },
  { korean: '발', romanization: 'bal', french: 'pied', category: 'corps' },
  { korean: '배', romanization: 'bae', french: 'ventre', category: 'corps' },
  { korean: '다리', romanization: 'dari', french: 'jambe', category: 'corps' },

  // Nourriture
  { korean: '밥', romanization: 'bap', french: 'riz cuit', category: 'nourriture' },
  { korean: '물', romanization: 'mul', french: 'eau', category: 'nourriture' },
  { korean: '김치', romanization: 'kimchi', french: 'kimchi', category: 'nourriture' },
  { korean: '고기', romanization: 'gogi', french: 'viande', category: 'nourriture' },
  { korean: '빵', romanization: 'ppang', french: 'pain', category: 'nourriture' },
  { korean: '과일', romanization: 'gwail', french: 'fruit', category: 'nourriture' },
  { korean: '채소', romanization: 'chaeso', french: 'légume', category: 'nourriture' },
  { korean: '커피', romanization: 'keopi', french: 'café', category: 'nourriture' },
  { korean: '차', romanization: 'cha', french: 'thé', category: 'nourriture' },
  { korean: '술', romanization: 'sul', french: 'alcool', category: 'nourriture' },

  // Couleurs
  { korean: '빨간색', romanization: 'ppalgansaek', french: 'rouge', category: 'couleurs' },
  { korean: '파란색', romanization: 'paransaek', french: 'bleu', category: 'couleurs' },
  { korean: '노란색', romanization: 'noransaek', french: 'jaune', category: 'couleurs' },
  { korean: '초록색', romanization: 'choroksaek', french: 'vert', category: 'couleurs' },
  { korean: '흰색', romanization: 'huinsaek', french: 'blanc', category: 'couleurs' },
  { korean: '검은색', romanization: 'geomeunsaek', french: 'noir', category: 'couleurs' },
  { korean: '분홍색', romanization: 'bunhongsaek', french: 'rose', category: 'couleurs' },
  { korean: '보라색', romanization: 'borasaek', french: 'violet', category: 'couleurs' },

  // Nombres
  { korean: '일', romanization: 'il', french: 'un (sino-coréen)', category: 'nombres' },
  { korean: '이', romanization: 'i', french: 'deux (sino-coréen)', category: 'nombres' },
  { korean: '삼', romanization: 'sam', french: 'trois', category: 'nombres' },
  { korean: '사', romanization: 'sa', french: 'quatre', category: 'nombres' },
  { korean: '오', romanization: 'o', french: 'cinq', category: 'nombres' },
  { korean: '육', romanization: 'yuk', french: 'six', category: 'nombres' },
  { korean: '칠', romanization: 'chil', french: 'sept', category: 'nombres' },
  { korean: '팔', romanization: 'pal', french: 'huit', category: 'nombres' },
  { korean: '구', romanization: 'gu', french: 'neuf', category: 'nombres' },
  { korean: '십', romanization: 'sip', french: 'dix', category: 'nombres' },

  // Temps / Nature
  { korean: '오늘', romanization: 'oneul', french: 'aujourd\'hui', category: 'temps' },
  { korean: '내일', romanization: 'naeil', french: 'demain', category: 'temps' },
  { korean: '어제', romanization: 'eoje', french: 'hier', category: 'temps' },
  { korean: '날씨', romanization: 'nalssi', french: 'météo / temps', category: 'temps' },
  { korean: '비', romanization: 'bi', french: 'pluie', category: 'temps' },
  { korean: '눈', romanization: 'nun', french: 'neige', category: 'temps' },
  { korean: '바람', romanization: 'baram', french: 'vent', category: 'temps' },
  { korean: '해', romanization: 'hae', french: 'soleil', category: 'temps' },
  { korean: '달', romanization: 'dal', french: 'lune', category: 'temps' },
  { korean: '별', romanization: 'byeol', french: 'étoile', category: 'temps' },

  // Lieux
  { korean: '집', romanization: 'jip', french: 'maison', category: 'lieux' },
  { korean: '학교', romanization: 'hakgyo', french: 'école', category: 'lieux' },
  { korean: '병원', romanization: 'byeongwon', french: 'hôpital', category: 'lieux' },
  { korean: '식당', romanization: 'sikdang', french: 'restaurant', category: 'lieux' },
  { korean: '카페', romanization: 'kape', french: 'café', category: 'lieux' },
  { korean: '편의점', romanization: 'pyeonuijeom', french: 'supérette', category: 'lieux' },
  { korean: '지하철', romanization: 'jihacheol', french: 'métro', category: 'lieux' },
  { korean: '공항', romanization: 'gonghang', french: 'aéroport', category: 'lieux' },
  { korean: '시장', romanization: 'sijang', french: 'marché', category: 'lieux' },
  { korean: '화장실', romanization: 'hwajangsil', french: 'toilettes', category: 'lieux' },

  // Verbes courants
  { korean: '먹다', romanization: 'meokda', french: 'manger', category: 'verbes' },
  { korean: '마시다', romanization: 'masida', french: 'boire', category: 'verbes' },
  { korean: '자다', romanization: 'jada', french: 'dormir', category: 'verbes' },
  { korean: '가다', romanization: 'gada', french: 'aller', category: 'verbes' },
  { korean: '오다', romanization: 'oda', french: 'venir', category: 'verbes' },
  { korean: '보다', romanization: 'boda', french: 'voir / regarder', category: 'verbes' },
  { korean: '듣다', romanization: 'deutda', french: 'écouter', category: 'verbes' },
  { korean: '말하다', romanization: 'malhada', french: 'parler', category: 'verbes' },
  { korean: '읽다', romanization: 'ikda', french: 'lire', category: 'verbes' },
  { korean: '사다', romanization: 'sada', french: 'acheter', category: 'verbes' },
];

export const koreanWordsCategories = [
  'salutations', 'famille', 'corps', 'nourriture',
  'couleurs', 'nombres', 'temps', 'lieux', 'verbes',
] as const;

export type KoreanWordsCategory = typeof koreanWordsCategories[number];
