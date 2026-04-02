export const kitchenFortuneData = {
  id: "jp-kitchen-fortune",
  title: "家計の赤字を止める！金運を呼ぶ「火と水の調和」キッチン診断",
  relatedPostUrl: "https://zakkarank.com/kitchen-feng-shui-wealth-tips-2026/",
  subTitle: "キッチンは家庭の「金庫」。火と水のバランスを整えるだけで、無駄遣いが減り, お金が貯まる体質に変わります。",
  isReady: true,
  mainImg: "/images/jpKitchenMain.jpg",
  questions: [
    {
      q: "コンロ（火）とシンク（水）の間に、何を置いていますか？",
      img: "/images/jpKitchenQ1.jpg",
      a: [
        { text: "小さな観葉植物や木製のまな板を置いている。", type: "HARMONY" },
        { text: "何も置いていない、または調理器具が散乱している。", type: "CLASH" },
        { text: "洗剤やスポンジ、水に関係するものを置いている。", type: "LEAK" },
        { text: "調味料（油や塩など）をたくさん並べている。", type: "STAGNANT" }
      ]
    },
    {
      q: "冷蔵庫の扉に、メモやマグネットをたくさん貼っていませんか？",
      img: "/images/jpKitchenQ2.jpg",
      a: [
        { text: "何も貼らず、スッキリと清潔に保っている。", type: "HARMONY" },
        { text: "ゴミ出しカレンダーやレシピ、メモがびっしり貼ってある。", type: "LEAK" },
        { text: "お気に入りのマグネットを数個だけ貼っている。", type: "STAGNANT" },
        { text: "扉ではなく、側面にまとめて貼るようにしている。", type: "CLASH" }
      ]
    },
    {
      q: "「ゴミ箱」の状態について、当てはまるのは？",
      img: "/images/jpKitchenQ3.jpg",
      a: [
        { text: "蓋（ふた）付きのゴミ箱を使い、中身が見えないようにしている。", type: "HARMONY" },
        { text: "蓋のないゴミ箱で、中身が常に見える状態だ。", type: "CLASH" },
        { text: "ビニール袋をそのまま下げて、ゴミ入れにしている。", type: "LEAK" },
        { text: "ゴミ箱が汚れていたり、臭いが気になったりする。", type: "STAGNANT" }
      ]
    },
    {
      q: "コンロ周りの「油汚れ」や、シンクの「水垢」はどうしていますか？",
      img: "/images/jpKitchenQ4.jpg",
      a: [
        { text: "使った後は必ず拭き取り、常にピカピカにしている。", type: "HARMONY" },
        { text: "週末にまとめて掃除するが、普段は汚れが溜まりがちだ。", type: "STAGNANT" },
        { text: "焦げ付きや油のベタつきが、正直かなり気になる。", type: "LEAK" },
        { text: "掃除はするが、排水口のヌメリなどは見ないふりをしている。", type: "CLASH" }
      ]
    },
    {
      q: "2026年、あなたのキッチンから呼び込みたい「福」は？",
      img: "/images/jpKitchenQ5.jpg",
      a: [
        { text: "無駄な出費を抑え、貯蓄を増やしたい「蓄財運」", type: "HARMONY" },
        { text: "家族が病気せず、元気に過ごせる「健康運」", type: "STAGNANT" },
        { text: "新しい仕事や副業で収入を増やしたい「増収運」", type: "CLASH" },
        { text: "懸賞に当たったり、臨時収入が欲しい「勝負運」", type: "LEAK" }
      ]
    }
  ],
  results: {
    HARMONY: {
      name: "金運が湧き出る「黄金の泉キッチン」",
      img: "/images/jpKitchenRes01.jpg",
      desc: "おめでとうございます！火と水の気が見事に調和しています。特にコンロとシンクの間に「木」の気（観葉植物や木製器具）を取り入れているのは素晴らしいテクニックです。このキッチンで作る料理は家族に強い活力を与え、家計は常に潤い、2026年は驚くほどお金が貯まる年になるでしょう。",
      ctaText: "金運をさらに安定させる「木製高級カッティングボード」",
      affiliateLink: "https://amzn.to/4sd2MSJ"
    },
    STAGNANT: {
      name: "運気が足踏み中？「リフレッシュ待ちキッチン」",
      img: "/images/jpKitchenRes02.jpg",
      desc: "悪くはありませんが、運気の流れが少し重たくなっています。冷蔵庫のメモを整理し、賞味期限切れの調味料を処分するだけで、金運の『詰まり』が解消されます。特に「香り」を意識して、レモンやミント系の天然芳香剤を置くと、停滞していたお金の流れが再び活発に動き出します。",
      ctaText: "キッチンの気を浄化する「天然ユーカリプタススプレー」",
      affiliateLink: "https://amzn.to/4v2PBXf"
    },
    CLASH: {
      name: "散財の危機！「火花散るバトルの空間」",
      img: "/images/jpKitchenResQ3.jpg",
      desc: "注意が必要です。火と水の気が直接ぶつかり合い、感情の起伏が激しくなったり、突発的な出費が増えやすい状態です。蓋のないゴミ箱は「負の気」を撒き散らす原因に。まずはゴミ箱を蓋付きに変え、排水口を掃除して『陰の気』を流し去りましょう。それだけで家庭内のトラブルが減り、お金が守られるようになります。",
      ctaText: "厄を閉じ込める「高機能・蓋付きダストボックス」",
      affiliateLink: "https://amzn.to/4sPcprW"
    },
    LEAK: {
      name: "家計に穴が？「金運ダダ漏れキッチン」",
      img: "/images/jpKitchenRes04.jpg",
      desc: "警告です！冷蔵庫に貼られたメモや、出しっぱなしのビニール袋は、金運を吸い取る『ブラックホール』となります。これらは未来の計画を曇らせ、財布からお金を逃がしてしまいます。今すぐ扉をスッキリさせ、マットを明るい色（黄色や明るい緑）に変えてみてください。失われていた金運が、少しずつ戻ってくるはずです。",
      ctaText: "金運をキャッチする「イエロー・キッチンマット」",
      affiliateLink: "https://amzn.to/4tuommR"
    }
  }
};