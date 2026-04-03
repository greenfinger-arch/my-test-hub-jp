export const healingFortuneData = {
  id: "jp-healing-fortune",
  title: "心と体を再生させる！明日への活力を取り戻す「養生」の空間診断",
  relatedPostUrl: "https://zakkarank.com/healing-feng-shui-mental-physical-recovery-2026/",
  subTitle: "家はあなたを癒やす「薬」となります。光、香り、配置を整え、心身の回復を助ける聖域を作りましょう。",
  isReady: true,
  mainImg: "/images/jpHealingMain.jpg",
  questions: [
    {
      q: "朝、起きたときに一番最初に「光」をどのように取り入れていますか？",
      img: "/images/jpHealingQ1.jpg",
      a: [
        { text: "すぐにカーテンを開けて、太陽の光を全身で浴びる。", type: "REGEN" },
        { text: "遮光カーテンを閉めたまま、しばらく照明で過ごす。", type: "STAGNANT" },
        { text: "レースのカーテン越しに、柔らかい光を感じるようにしている。", type: "PEACE" },
        { text: "窓を開けて、空気の入れ替えを同時に行う。", type: "FLOW" }
      ]
    },
    {
      q: "「寝室」や「リラックススペース」の色調（カラー）は？",
      img: "/images/jpHealingQ2.jpg",
      a: [
        { text: "ベージュやオフホワイトなど、目に優しいアースカラー。", type: "PEACE" },
        { text: "白一色、あるいは寒色系で少し冷たい印象がある。", type: "STAGNANT" },
        { text: "パステルグリーンや木目調を取り入れている。", type: "REGEN" },
        { text: "特に統一感はなく, 好きな色が混ざっている。", type: "FLOW" }
      ]
    },
    {
      q: "部屋の「香り」について、今の状態に近いものは？",
      img: "/images/jpHealingQ3.jpg",
      a: [
        { text: "天然のアロマや、お香などで心を落ち着かせている。", type: "PEACE" },
        { text: "無臭だが、時々こもったような匂いが気になる。", type: "STAGNANT" },
        { text: "消臭剤や芳香剤の化学的な香りが強い。", type: "FLOW" },
        { text: "季節の生花を飾り、自然の香りを大切にしている。", type: "REGEN" }
      ]
    },
    {
      q: "寝ている時の「頭の向き（枕の位置）」はどうしていますか？",
      img: "/images/jpHealingQ4.jpg",
      a: [
        { text: "北枕（北向き）で、深く静かな眠りを優先している。", type: "REGEN" },
        { text: "東向きで、朝のエネルギーを吸収しようとしている。", type: "FLOW" },
        { text: "特に気にせず、家具の配置に合わせて決めている。", type: "PEACE" },
        { text: "ドアの正面や窓のすぐ下に頭が来ている。", type: "STAGNANT" }
      ]
    },
    {
      q: "今のあなたが、この空間で最も求めている「再生」は？",
      img: "/images/jpHealingQ5.jpg",
      a: [
        { text: "病気やケガからの早期回復「身体の養生」", type: "REGEN" },
        { text: "ストレスや不安を消し去りたい「心の養生」", type: "PEACE" },
        { text: "乱れた生活リズムを整えたい「生活の浄化」", type: "FLOW" },
        { text: "孤独感を癒やし、愛を感じたい「魂の調和」", type: "STAGNANT" }
      ]
    }
  ],
  results: {
    REGEN: {
      name: "生命力が溢れ出す「再生の聖域」",
      img: "/images/jpHealingRes01.jpg",
      desc: "素晴らしい状態です。あなたの住まいは、傷ついた細胞や心を修復する『自然治癒力』を最大化させるエネルギーに満ちています。北枕の活用や自然光の取り入れ方が見事です。2026年は、この場所で蓄えたエネルギーがあなたの新しい挑戦を支える強力なエンジンとなるでしょう。今の環境を維持してください。",
      ctaText: "再生の力を高める「国産ヒノキの精油セット」",
      affiliateLink: "https://amzn.to/4t0IxZq"
    },
    PEACE: {
      name: "慈愛に包まれた「安らぎのシェルター」",
      img: "/images/jpHealingRes02.jpg",
      desc: "とても穏やかで、優しい気が流れています。今のあなたは、自分自身を丁寧に守り、慈しむことができています。少し疲れたときも、この部屋に帰ればすぐにリセットできるはず。さらに運気を上げたいときは、寝室の四隅に『盛り塩』を置くか、水晶を置くことで、より深い安眠と癒やしが得られます。",
      ctaText: "深い眠りへと誘う「極上シルクのアイマスク」",
      affiliateLink: "https://amzn.to/4e0fhgS"
    },
    FLOW: {
      name: "変化を予感させる「リセットの通過点」",
      img: "/images/jpHealingRes03.jpg",
      desc: "運気が動き出そうとしていますが、まだ少し『外の雑音』が部屋に残っています。化学的な香りよりも、窓を開けて風を通し、天然のハーブを取り入れることで、浄化のスピードが上がります。枕元に水晶のさざれ石を置くと、寝ている間に不要なエネルギーをデトックスしてくれるでしょう。",
      ctaText: "邪気を流し去る「浄化用ホワイトセージ・セット」",
      affiliateLink: "https://amzn.to/48rUPBU"
    },
    STAGNANT: {
      name: "冬眠状態？「目覚めを待つ停滞空間」",
      img: "/images/jpHealingRes04.jpg",
      desc: "警告です。空気や気が淀んでしまい、心身の回復を妨げています。遮光カーテンの閉め切りや、窓際の問題がエネルギーの枯渇を招いているかもしれません。まずは枕の位置を変え、朝一番に窓を全開にしてください。停滞した気が動くだけで、あなたの顔色は明るくなり, 明日への希望が湧いてくるはずです。",
      ctaText: "光の気を取り込む「クリスタル・サンキャッチャー」",
      affiliateLink: "https://amzn.to/47GNqOW"
    }
  }
};