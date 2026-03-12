export const WalletFortuneData = {
  id: "jp-wallet-fortune",
  title: "金運を呼ぶ『魔法の財布』診断",
  relatedPostUrl: "https://zakkarank.com/2026-wallet-fortune-habits/",
  subTitle: "あなたのお財布は「お金の家」です。2026年の金運を劇的に高める、財布の整え方とラッキーカラーを診断します。",
  isReady: true,
  mainImg: "/images/jpWalletMain.jpg",
  questions: [
    {
      q: "現在お使いの財布の「色」は、次のうちどれに近いですか？",
      img: "/images/jpWalletQ1.jpg",
      a: [
        { text: "ゴールド・イエロー系 (華やかな金運)", type: "GOLD" },
        { text: "ブラック・ネイビー系 (財産を守る力)", type: "SAVE" },
        { text: "ブラウン・ベージュ系 (安定した蓄財)", type: "STABLE" },
        { text: "ピンク・ホワイト系 (浄化と新しい縁)", type: "FLOW" }
      ]
    },
    {
      q: "お財布の中の「レシート」の状態はどうなっていますか？",
      img: "/images/jpWalletQ2.jpg",
      a: [
        { text: "毎日整理して、一枚も入っていない", type: "GOLD" },
        { text: "数日分溜まっているが、整理はしている", type: "STABLE" },
        { text: "レ시피와 카드로 지갑이 빵빵하다", type: "FLOW" },
        { text: "家計簿をつけるまで入れっぱなし", type: "SAVE" }
      ]
    },
    {
      q: "お財布を「休ませる場所」は決まっていますか？",
      img: "/images/jpWalletQ3.jpg",
      a: [
        { text: "鞄に入れっぱなしにしている", type: "FLOW" },
        { text: "暗くて静かな引き出しや箱の中", type: "SAVE" },
        { text: "リビングや棚の決まった定位置", type: "STABLE" },
        { text: "北側にある専用の「財布のお布団」", type: "GOLD" }
      ]
    },
    {
      q: "お財布を新調（購入）した時期はいつ頃ですか？",
      img: "/images/jpWalletQ4.jpg",
      a: [
        { text: "一粒万倍日や天赦日などの吉日", type: "GOLD" },
        { text: "誕生日や自分へのご褒美の記念日", type: "STABLE" },
        { text: "特に気にせず、必要になった時", type: "SAVE" },
        { text: "セールや安くなっていた時", type: "FLOW" }
      ]
    },
    {
      q: "お札の「向き」は揃えて入れていますか？",
      img: "/images/jpWalletQ5.jpg",
      a: [
        { text: "頭を下にして、お金が出ていかないように", type: "SAVE" },
        { text: "頭を上にして、循環を良くするように", type: "GOLD" },
        { text: "向きはあまり気にしていない", type: "FLOW" },
        { text: "お札の種類ごとに綺麗に分けている", type: "STABLE" }
      ]
    }
  ],
  results: {
    GOLD: {
      name: "最強の金運！「お金のマグネット」状態",
      img: "/images/jpWalletRes01.jpg",
      desc: "おめでとうございます！あなたの財布はお金を引き寄せる強力な磁石になっています。今の習慣を続ければ、2026年は大きな臨時収入や昇給が期待できるでしょう。さらに運気を高めるには、金色の「種銭」をお守りとして入れてみてください。",
      ctaText: "最強金운を呼ぶ「蛇革のお守り」を見る",
      affiliateLink: "https://amzn.to/4uqGLlu"
    },
    SAVE: {
      name: "堅実な蓄財！「守護の黒龍」タイプ",
      img: "/images/jpWalletRes02.jpg",
      desc: "あなたはお金を守り、着実に増やす力に長けています。無駄遣いが減り, 貯蓄が順調に進む運気です。今の財布を大切に手入れ（クリーニング）することで、入ってくるお金の質がさらに向上し、一生困らない財産を築けるはずです。",
      ctaText: "財布を浄化する「専用クリーナー」",
      affiliateLink: "https://amzn.to/4uv73U2"
    },
    STABLE: {
      name: "安定の極み！「大地の恵み」タイプ",
      img: "/images/jpWalletRes03.jpg",
      desc: "土の気を持つあなたの財布は、お金が安心して根付く安定した状態です。派手な増え方はしませんが、着実に豊かさが積み上がります。お財布の中に「香りのカード」を忍ばせると、お金の循環がさらにスムーズになり、幸福感が増します。",
      ctaText: "金運を招く「お財布専用の香木」",
      affiliateLink: "https://amzn.to/4rsq4n9"
    },
    FLOW: {
      name: "要注意！お金が旅する「渡り鳥」状態",
      img: "/images/jpWalletRes04.jpg",
      desc: "今のあなたの財布は、お金が留まる暇もなく出ていってしまう状態かもしれません。レシートを捨て、お財布を鞄から出して休ませるだけで、金運は劇的に改善します！まずは北側の静かな場所に財布の定位置を作ってあげましょう。",
      ctaText: "お金を休ませる「財布専用のお布団」",
      affiliateLink: "https://amzn.to/3MYcI43"
    }
  }
};