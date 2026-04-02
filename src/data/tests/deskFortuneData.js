export const deskFortuneData = {
  id: "jp-desk-fortune",
  title: "昇進と合格を引き寄せる！成果を最大化する「集中力アップ」デスク診断",
  relatedPostUrl: "https://zakkarank.com/desk-feng-shui-career-success-2026/",
  subTitle: "机はあなたの「運命の操縦席」。配置と環境を整えるだけで、脳の疲れが消え, 驚くほど成果が出始めます。",
  isReady: true,
  mainImg: "/images/jpDeskMain.jpg",
  questions: [
    {
      q: "デスクに座ったとき、背後に「ドア」や「入り口」がありませんか？",
      img: "/images/jpDeskQ1.jpg",
      a: [
        { text: "壁を背にして座り、入り口が視界に入る位置にいる。", type: "COMMAND" },
        { text: "背後にドアがあり、誰かが入ってくるとビクッとする。", type: "ANXIETY" },
        { text: "壁に向かって座っており、背後はオープンな空間だ。", type: "FOCUS" },
        { text: "部屋の真ん中にデスクがあり、背後に窓がある。", type: "LEAK" }
      ]
    },
    {
      q: "デスクの上に「出しっぱなし」になっているものはどれくらい？",
      img: "/images/jpDeskQ2.jpg",
      a: [
        { text: "今使っている書類やPC以外、何も置いていない。", type: "COMMAND" },
        { text: "ペン立てや書類、飲みかけのコップなどが散乱している。", type: "LEAK" },
        { text: "フィギュアや趣味の小物がたくさん並んでいる。", type: "ANXIETY" },
        { text: "必要なものだけを右側にまとめて置いている。", type: "FOCUS" }
      ]
    },
    {
      q: "デスクの上の「照明（デスクライト）」はどうしていますか？",
      img: "/images/jpDeskQ3.jpg",
      a: [
        { text: "利き手と反対側にライトを置き、手元を明るくしている。", type: "FOCUS" },
        { text: "部屋の天井照明のみで、手元は少し暗めだ。", type: "ANXIETY" },
        { text: "PCの画面の光だけで作業することが多い。", type: "LEAK" },
        { text: "自然光が入る明るい場所で作業している。", type: "COMMAND" }
      ]
    },
    {
      q: "デスク周りに「植物」や「クリスタル」などの癒やしはありますか？",
      img: "/images/jpDeskQ4.jpg",
      a: [
        { text: "小さな観葉植物（パキラなど）を置いている。", type: "COMMAND" },
        { text: "何も置いておらず、無機質な状態だ。", type: "FOCUS" },
        { text: "ドライフラワーや枯れかけた植物がある。", type: "LEAK" },
        { text: "お守りやパワーストーンを置いている。", type: "ANXIETY" }
      ]
    },
    {
      q: "2026年、このデスクで成し遂げたい最大の目標は？",
      img: "/images/jpDeskQ5.jpg",
      a: [
        { text: "昇進やキャリアアップ、売上向上を目指す「成功運」", type: "COMMAND" },
        { text: "難関資格や志望校への「合格運」", type: "FOCUS" },
        { text: "人間関係を円滑にし、楽しく働きたい「対人運」", type: "ANXIETY" },
        { text: "クリエイティブなアイデアを出し続けたい「才能運」", type: "LEAK" }
      ]
    }
  ],
  results: {
    COMMAND: {
      name: "運命を支配する「成功者のコックピット」",
      img: "/images/jpDeskRes01.jpg",
      desc: "完璧です！入り口を見渡せる「龍穴」のポジションを確保できていますね。この配置は、周囲の状況を把握しやすく、チャンスを逃さないリーダーの相です。2026年はあなたの決断力が研ぎ澄まされ、大きな仕事や昇進の話が舞い込んでくるでしょう。自信を持って突き進んでください。",
      ctaText: "成功の象徴「高級デスクオーガナイザー」",
      affiliateLink: "https://amzn.to/example_desk1"
    },
    FOCUS: {
      name: "才能が開花する「静寂の知聖所」",
      img: "/images/jpDeskRes02.jpg",
      desc: "非常に高い集中力を発揮できる環境です。無駄を省き、目標に向かって一直線に進む力が備わっています。特に合格や資格取得を目指す方には最高の状態です。時々、デスクの右側に小さな青色の小物を置くと、さらに知的な運気が高まり、難問もスラスラ解けるようになるでしょう。",
      ctaText: "集中力を研ぎ澄ます「高性能デスクライト」",
      affiliateLink: "https://amzn.to/example_desk2"
    },
    ANXIETY: {
      name: "ノイズに振り回される「迷いの操縦席」",
      img: "/images/jpDeskRes03.jpg",
      desc: "少し注意が必要です。背後の空間が気になったり、趣味のものが視界に入りすぎて、脳が常に「マルチタスク状態」で疲弊しています。まずは視界に入る色味を統一し、背後にパーテーションを置くか、椅子をハイバックのものに変えてみてください。それだけで「守られている安心感」が生まれ、集中力が倍増します。",
      ctaText: "安心感を確保する「ハイバックワークチェア」",
      affiliateLink: "https://amzn.to/example_desk3"
    },
    LEAK: {
      name: "運気がすり抜ける「停滞のデスク」",
      img: "/images/jpDeskRes04.jpg",
      desc: "警告です！デスクの乱れは心の乱れ、そして運気の漏洩を意味します。出しっぱなしの書類は「古い気」を放ち、あなたの新しいチャンスを邪魔しています。まずは「1日5分」の片付けから始めましょう。PCの画面をきれいに拭き、水晶や小さな岩塩を置くことで、デスクに溜まった邪気を浄化してください。",
      ctaText: "邪気を払い浄化する「天然水晶クラスター」",
      affiliateLink: "https://amzn.to/example_desk4"
    }
  }
};