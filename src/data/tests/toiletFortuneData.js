export const toiletFortuneData = {
  id: "jp-toilet-fortune",
  title: "金運の出口を塞げ！あなたのトイレは「宝の山」か「浪費の源」か？金運浄化診断",
  relatedPostUrl: "https://zakkarank.com/2026-toilet-fengshui-money-luck/",
  subTitle: "トイレは家の中で最も「邪気」が溜まりやすい場所。ここを整えるだけで、出ていくお金が止まり、入るお金が増え始めます。",
  isReady: true,
  mainImg: "/images/jpToiletMain.jpg",
  questions: [
    {
      q: "トイレの「便器の蓋（ふた）」、使い終わった後はどうしていますか？",
      img: "/images/jpToiletQ1.jpg",
      a: [
        { text: "常に閉めている。開けっぱなしはありえない。", type: "PURE" },
        { text: "時々忘れるが, 基本的には閉めるようにしている。", type: "FLOW" },
        { text: "開けたままにしていることが多い。", type: "LEAK" },
        { text: "家族が閉めないので、自分だけ気をつけている。", type: "MIXED" }
      ]
    },
    {
      q: "トイレの中に「専用のスリッパ」は置いていますか？",
      img: "/images/jpToiletQ2.jpg",
      a: [
        { text: "お気に入りの清潔なスリッパを置いている。", type: "PURE" },
        { text: "スリッパは置かず, 素足や靴下のまま入る。", type: "LEAK" },
        { text: "廊下と共通のスリッパを使っている。", type: "MIXED" },
        { text: "古いスリッパをずっと使い続けている。", type: "FLOW" }
      ]
    },
    {
      q: "トイレの「カレンダー」や「本・スマホ」について、当てはまるのは？",
      img: "/images/jpToiletQ3.jpg",
      a: [
        { text: "カレンダーを壁に貼って、予定をチェックしている。", type: "LEAK" },
        { text: "本や雑誌を置いて、長居することが多い。", type: "MIXED" },
        { text: "何も置かず、用を足したらすぐに出る。", type: "PURE" },
        { text: "スマホを持ち込んで動画などを見ている。", type: "FLOW" }
      ]
    },
    {
      q: "トイレの「タオル」や「マット」の色や清潔感は？",
      img: "/images/jpToiletQ4.jpg",
      a: [
        { text: "明るい色（パステルカラー等）で、こまめに洗濯している。", type: "PURE" },
        { text: "暗い色や地味な色で、あまり目立たないようにしている。", type: "MIXED" },
        { text: "タオルが濡れたままになっていることが多い。", type: "FLOW" },
        { text: "マットは敷かず、床掃除を優先している。", type: "LEAK" }
      ]
    },
    {
      q: "2026年、あなたがトイレ掃除で一番スッキリさせたいのは？",
      img: "/images/jpToiletQ5.jpg",
      a: [
        { text: "無駄遣いを減らし、貯金を増やしたい「貯蓄運」", type: "PURE" },
        { text: "健康不安を解消し、元気に過ごしたい「健康運」", type: "FLOW" },
        { text: "悪い縁を切り、新しいチャンスを呼びたい「浄化運」", type: "REFRESH" },
        { text: "仕事のストレスを流し、成果を出したい「成功運」", type: "MIXED" }
      ]
    }
  ],
  results: {
    PURE: {
      name: "金運が根付く「聖域のトイレ」",
      img: "/images/jpToiletRes01.jpg",
      desc: "素晴らしい！あなたのトイレは、悪い気を浄化し、良い運気を定着させる「聖域」となっています。蓋を閉め、専用のスリッパを使う習慣は、無駄な支出を抑え、着実に富を築く基盤となります。2026年は、守りの金運が非常に強く、大きな資産を築くチャンスが訪れるでしょう。",
      ctaText: "聖域をさらに輝かせる「高級トイレタリー」",
      affiliateLink: "https://amzn.to/4rUW2Jb"
    },
    FLOW: {
      name: "変化の兆し！「リセットが必要な浄化空間」",
      img: "/images/jpToiletRes02.jpg",
      desc: "悪くはありませんが、運気の「鮮度」が落ちています。タオルの交換頻度を上げたり、明るい色の生花を一輪飾るだけで、金運の巡りが劇的に良くなります。特に「香り」にこだわってみてください。柑橘系の香りは、停滞したお金の流れを加速させ、新しい収入源を運んできます。",
      ctaText: "金運を加速させる「天然シトラス消臭剤」",
      affiliateLink: "https://amzn.to/4boJQLL"
    },
    MIXED: {
      name: "運気の迷い子？「境界線を引くべき空間」",
      img: "/images/jpToiletRes03.jpg",
      desc: "家の中の気とトイレの気が混ざり合っています。専用スリッパを置くことで、厄を部屋に持ち込まないようにしましょう。トイレは短時間でリフレッシュする場所。長居を避けることで、仕事の判断力や決단力が向上し、結果として大きな利益を掴むことができるようになります。",
      ctaText: "厄除けの基本「開運トイレ専用スリッパ」",
      affiliateLink: "https://amzn.to/4bdGPxE"
    },
    LEAK: {
      name: "金運の警告！「穴の空いた財布状態」",
      img: "/images/jpToiletRes04.jpg",
      desc: "注意が必要です！蓋を開けたままにしたり、カレンダーを貼る行為は、金運や未来の計画が「水に流れてしまう」ことを意味します。今すぐ蓋を閉め、カレンダーを外してください。この小さなアクションだけで、不思議と出費が減り、お金が貯まりやすい体質へと変わっていくはずです。",
      ctaText: "金運を漏らさない「自動閉鎖補助グッズ」",
      affiliateLink: "https://amzn.to/4lwth3T"
    }
  }
};