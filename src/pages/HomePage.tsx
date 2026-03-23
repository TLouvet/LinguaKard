import { Link } from 'react-router-dom';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';
import { Accordion } from '../ui/Accordion';

const faqItems = [
  {
    question: "Par où commencer ?",
    answer: "Si vous débutez en japonais, commencez par les Kana (hiragana puis katakana). Pour le coréen, le Hangeul est un excellent point d'entrée car l'alphabet s'apprend en quelques heures.",
  },
  {
    question: "Comment fonctionne le quiz ?",
    answer: "Chaque question affiche un caractère ou un mot, et vous devez choisir la bonne réponse parmi 4 propositions. Votre score est suivi en temps réel et le meilleur score est sauvegardé localement.",
  },
  {
    question: "Mes scores sont-ils sauvegardés ?",
    answer: "Oui, le meilleur score de chaque quiz est enregistré dans le stockage local de votre navigateur. Il persiste entre les sessions tant que vous ne videz pas le cache.",
  },
  {
    question: "L'application fonctionne-t-elle hors ligne ?",
    answer: "Toutes les données sont intégrées dans l'application, donc une fois la page chargée, vous pouvez l'utiliser sans connexion internet.",
  },
];

interface FeatureCardProps {
  title: string;
  description: string;
  to: string;
  badges?: React.ReactNode;
  icon: string;
}

function FeatureCard({ title, description, to, badges, icon }: FeatureCardProps) {
  return (
    <Card className="flex flex-col gap-3 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <span className="text-4xl">{icon}</span>
        <div className="flex flex-wrap gap-1 justify-end">{badges}</div>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
      <Link
        to={to}
        className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
      >
        Commencer <span aria-hidden>→</span>
      </Link>
    </Card>
  );
}

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 py-20 flex flex-col items-center text-center gap-6">
          <div className="flex gap-4 text-5xl" aria-hidden>
            <span>あ</span><span>ア</span><span>漢</span><span>ㄱ</span><span>한</span><span>ع</span>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight">LinguaKard</h1>
          <p className="text-xl text-blue-100 max-w-xl">
            Apprenez les alphabets et le vocabulaire japonais, coréen et arabe à votre rythme, grâce à des fiches et des quiz interactifs.
          </p>
          <Link
            to="/kana"
            className="px-6 py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-md"
          >
            Commencer maintenant →
          </Link>
        </div>
      </section>

      {/* Feature cards */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Nos modules</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FeatureCard
            icon="あ"
            title="Kana"
            description="Maîtrisez les 46 hiragana et 46 katakana, les deux syllabaires fondamentaux du japonais."
            to="/kana"
            badges={
              <>
                <Badge variant="blue">Disponible</Badge>
                <Badge variant="orange">Populaire</Badge>
              </>
            }
          />
          <FeatureCard
            icon="漢"
            title="Kanji"
            description="Découvrez les 96 kanji JLPT N5 classés par thème, avec leurs lectures on'yomi et kun'yomi."
            to="/kanji"
            badges={<Badge variant="blue">Disponible</Badge>}
          />
          <FeatureCard
            icon="ㄱ"
            title="Hangeul"
            description="Apprenez les consonnes et voyelles de l'alphabet coréen, simples et logiques."
            to="/hangeul"
            badges={<Badge variant="blue">Disponible</Badge>}
          />
          <FeatureCard
            icon="한"
            title="Vocabulaire coréen"
            description="80 mots essentiels du coréen répartis en 9 catégories du quotidien."
            to="/korean-words"
            badges={<Badge variant="blue">Disponible</Badge>}
          />
          <FeatureCard
            icon="ع"
            title="Alphabet arabe"
            description="Découvrez les 28 lettres de l'alphabet arabe, regroupées par famille de formes."
            to="/arabic"
            badges={<Badge variant="blue">Disponible</Badge>}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Questions fréquentes</h2>
        <Accordion items={faqItems} />
      </section>
    </div>
  );
}
