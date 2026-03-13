export const EntranceFengShuiData = {
  id: "jp-entrance-fengshui",
  title: "運気の入り口！『開運玄関』診断",
  relatedPostUrl: "https://zakkarank.com/2026-entrance-fengshui-tips/",
  subTitle: "玄関は幸運が最初に入ってくる場所です。あなたの家の玄関が「福」を招いているか、今すぐ診断しましょう。",
  isReady: true,
  mainImg: "/images/jpEntranceMain.jpg",
  questions: [
    {
      q: "玄関のたたき（床）に、現在「靴」は何足出ていますか？",
      img: "/images/jpEntranceQ1.jpg",
      a: [
        { text: "一足も出ていない（すべて収納済み）", type: "BRIGHT" },
        { text: "今日履いた一足だけ出している", type: "STABLE" },
        { text: "家族全員分の靴が並んでいる", type: "BLOCK" },
        { text: "脱ぎっぱなしで散らかっている", type: "DRAIN" }
      ]
    },
    {
      q: "玄関を入って「正面」に何が見えますか？",
      img: "/images/jpEntranceQ2.jpg",
      a: [
        { text: "何も置かれていない壁", type: "STABLE" },
        { text: "大きな鏡", type: "DRAIN" },
        { text: "明るい絵画や観葉植物", type: "BRIGHT" },
        { text: "トイレや他の部屋のドア", type: "BLOCK" }
      ]
    },
    {
      q: "玄関に「傘立て」や「濡れた傘」を置いていますか？",
      img: "/images/jpEntranceQ3.jpg",
      a: [
        { text: "外に置いている、または乾燥させて収納している", type: "BRIGHT" },
        { text: "室内の玄関隅に置いている", type: "STABLE" },
        { text: "濡れたまま放置していることが多い", type: "DRAIN" },
        { text: "傘が何本も出しっぱなしになっている", type: "BLOCK" }
      ]
    },
    {
      q: "玄関の「明るさ」や「香り」はどうですか？",
      img: "/images/jpEntranceQ4.jpg",
      a: [
        { text: "照明が明るく、爽やかな香りがする", type: "BRIGHT" },
        { text: "少し暗いが、清潔に保たれている", type: "STABLE" },
        { text: "暗くて、少しこもった匂いがする", type: "BLOCK" },
        { text: "特に何も気にしていない", type: "DRAIN" }
      ]
    }
  ],
  results: {
    BRIGHT: {
      name: "幸運の通り道！「龍穴玄関」",
      img: "/images/jpEntranceRes01.jpg",
      desc: "素晴らしいです！あなたの玄関は幸運の神様が喜んで入ってくる『龍の通り道』になっています。今の状態を維持するだけで、2026年は家全体に活気が満ち、家族全員の運気が上昇するでしょう。",
      ctaText: "さらに幸運を呼ぶ「天然石の置物」を見る",
      affiliateLink: "https://amzn.to/4sIapkL"
    },
    STABLE: {
      name: "安定した幸福！「平穏無事玄関」",
      img: "/images/jpEntranceRes02.jpg",
      desc: "とても清潔で落ち着いた玄関です。大きなトラブルを防ぎ, 安定した毎日を守ってくれるパワーがあります。たたき（床）を毎日水拭きする習慣を加えると、金運がさらに安定して入ってくるようになります。",
      ctaText: "玄関を清める「盛り塩セット」を見る",
      affiliateLink: "https://amzn.to/4rx8FK2"
    },
    BLOCK: {
      name: "気が停滞中！「お疲れ玄関」",
      img: "/images/jpEntranceRes03.jpg",
      desc: "少し物が多く、良い気が入ってくる隙間がなくなっています。特に使わない靴や段ボールは今すぐ片付けましょう。空気が循環し始めるだけで, 滞っていた物事がスムーズに動き出します。",
      ctaText: "玄関を明るく照らす「人感センサーライト」",
      affiliateLink: "https://amzn.to/3NeH966"
    },
    DRAIN: {
      name: "運気漏れ注意！「エネルギー漏れ玄関」",
      img: "/images/jpEntranceRes04.jpg",
      desc: "入ってきた運気がそのまま外へ逃げ出している可能性があります。鏡の向きを変えたり, 明るい色の玄関マットを敷いて『気のクッション』を作ってください。小さな工夫で、あなたの家はもっと豊かになれます。",
      ctaText: "金運を止める「明るい色の玄関マット」",
      affiliateLink: "https://amzn.to/4diabvZ"
    }
  }
};