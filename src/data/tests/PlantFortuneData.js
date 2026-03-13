export const PlantFortuneData = {
  id: "jp-plant-fortune",
  title: "2026年限定：運気を整える『開運植物』診断",
  relatedPostUrl: "https://zakkarank.com/2026-lucky-plants-interior/",
  subTitle: "2026年のあなたのバイオリズムに最適な植物は？生命の力で家中の気を浄化し、幸運を呼び込む一鉢を導き出します。",
  isReady: true,
  mainImg: "/images/jpPlantMain.jpg",
  questions: [
    {
      q: "現在、あなたが最も「上げたい」と感じている運気はどれですか？",
      img: "/images/jpPlantQ1.jpg",
      a: [
        { text: "溢れるような「財運・金運」", type: "MONEY" },
        { text: "健やかで穏やかな「健康・家庭運」", type: "HEALING" },
        { text: "直感とチャンスを掴む「仕事・勝負運」", type: "SUCCESS" },
        { text: "素敵な縁を引き寄せる「対人・恋愛運」", type: "RELATION" }
      ]
    },
    {
      q: "植物を置きたいと考えている場所の「日当たり」はどうですか？",
      img: "/images/jpPlantQ2.jpg",
      a: [
        { text: "太陽の光がたっぷり入る明るい窓際", type: "SUCCESS" },
        { text: "レースのカーテン越しの柔らかな光", type: "MONEY" },
        { text: "あまり日が当たらない、落ち着いた室内", type: "HEALING" },
        { text: "照明は明るいが、直射日光は入らない", type: "RELATION" }
      ]
    },
    {
      q: "あなたが選ぶ「理想の葉の形」はどちらに近いですか？",
      img: "/images/jpPlantQ3.jpg",
      a: [
        { text: "上に向かって鋭く伸びる、エネルギッシュな形", type: "SUCCESS" },
        { text: "丸みを帯びた、心を落ち着かせる形", type: "HEALING" },
        { text: "ハート型や可愛らしい小さな葉の形", type: "RELATION" },
        { text: "肉厚で力強く、存在感のある形", type: "MONEY" }
      ]
    },
    {
      q: "植物のお手入れ（水やりなど）に、どのくらい時間をかけられますか？",
      img: "/images/jpPlantQ4.jpg",
      a: [
        { text: "毎日こまめに様子を見て、触れ合いたい", type: "RELATION" },
        { text: "週に数回、決まったペースで世話をしたい", type: "HEALING" },
        { text: "忙しいので、乾燥に強く手のかからないものがいい", type: "SUCCESS" },
        { text: "お手入れのしやすさと見た目の美しさを両立したい", type: "MONEY" }
      ]
    },
    {
      q: "2026年、あなたが家の中に求めている「空気感」は？",
      img: "/images/jpPlantQ5.jpg",
      a: [
        { text: "高級感があり、背筋が伸びるような空間", type: "SUCCESS" },
        { text: "カフェのようにリラックスできる空間", type: "HEALING" },
        { text: "明るい光に満ちた、ポジティブな空間", type: "MONEY" },
        { text: "優しさに包まれた、温かみのある空間", type: "RELATION" }
      ]
    }
  ],
  results: {
    MONEY: {
      name: "金運を招く黄金の葉！「パキラ」",
      img: "/images/jpPlantRes01.jpg",
      desc: "2026年のあなたには『Money Tree』とも呼ばれるパキラが最適です。力強い幹と手のひらを広げたような葉が、入ってくる運気をしっかりと掴み取ります。リビングの隅に置くことで、家全体の財運が安定し、豊かな流れが生まれるでしょう。",
      ctaText: "財運を高める「高品質パキラ」をチェック",
      affiliateLink: "https://amzn.to/3NkyChO"
    },
    HEALING: {
      name: "癒やしと安定の象徴！「ゴムの木（フィカス）」",
      img: "/images/jpPlantRes02.jpg",
      desc: "心身のバランスを整えたいあなたには、丸い葉が特徴的なゴムの木がおすすめです。風水では丸い葉は『穏やかさ』を象徴し、寝室や書斎に置くことでストレスを浄化してくれます。2026年は、この木と共にゆとりある時間を過ごすことが幸運への近道です。",
      ctaText: "空気清浄効果も高い「ゴムの木」を見る",
      affiliateLink: "https://amzn.to/413AaA2"
    },
    SUCCESS: {
      name: "鋭い直感で成功を掴む！「サンスベリア」",
      img: "/images/jpPlantRes03.jpg",
      desc: "勝負の年となる2026年のあなたには、剣のような葉を持つサンスベリアがぴったりです。悪い気を跳ね除け、集中力を高める力があります。仕事場のデスク横や玄関に置くことで、邪気を払い、最短距離で目標達成へと導いてくれるはずです。",
      ctaText: "邪気を払う「サンスベリア」を探す",
      affiliateLink: "https://amzn.to/4bDHRmC"
    },
    RELATION: {
      name: "良縁を結ぶ愛の形！「モンステラ」",
      img: "/images/jpPlantRes04.jpg",
      desc: "対人運や恋愛運を華やかに彩りたいなら、モンステラが一番の味方です。独特な葉の切れ込みは、遠くからの良い知らせや素敵な縁を通す道となります。南東の方角に飾ることで、あなたの魅力が周囲に伝わり、温かい人間関係が広がっていくでしょう。",
      ctaText: "良縁を呼び込む「元気なモンステラ」",
      affiliateLink: "https://amzn.to/4usAMNg"
    }
  }
};