---
Title: 簡単な自己紹介
Summary: 器用貧乏なわたしについて
Filename: profile.md
Datetime: 2023-09-30 00:00:00
Tags: 自己紹介
---

# 自己紹介

どこかでエンジニアをしています。うふふ。簡単に言うと以下のような特徴を持っています。
- 現代形而上学、倫理学、数学、プログラミングなどが好き。最近はソケットプログラミングを勉強中。
- Django(Python), React(JavaScript)が好き。これまで業務では、PythonとC#を使ったことがある。
- 転職活動中

## エンジニアとして

- 持続可能な開発のためテストやCI/CDと仲良くしたい。
- 信頼できそうな書籍やドキュメントで学ぶことと、実際に手を動かすことを大事にしてます。両立可能なので。
- ただ実装するのではなく、よりよいソフトウェアにするために何が必要か考えて取り組みたい。
- [github](https://github.com/metamasao)

## 作ったアプリなど

- [書評SNS](https://github.com/metamasao/review-sns)
  - 1年半前くらいに転職活動でアピールするために作ったアプリ。個人的なモチベーションとしては、大人になってから信頼できる書籍を選んで勉強するというのがとても難しいと思い、そのような問題を解決したいというのがあった(ある)。
  - 頑張った点は、Coverage（98％）、テストの高速化、モデルへのロジックの集約など。ここまでCoverageを高める必要はなかったけど、よくわからないまま頑張っていた。ただ、この時は3A(Arrange, Act, Assert)の書き方を知らず、テストコードはあまり奇麗じゃない。。。
  - 主な使用技術: Django, Bootstrap, Docker

- [このブログ](https://github.com/metamasao/metamasao.github.io)
  - GatsbyやJekyllといったSSGを使ってGithub Pagesを作ってもよかったけど、『React ハンズオンラーニング』を読んで勉強したのでせっかくなので、PythonとReactで自作SSGを作ってみた。メタデータを利用して日付によるソートとタグの作成が可能。本書で関数型プログラミングを学んで、Pythonでも関数型ぽく書けるようになってよかった。
  - ReactのCoverageは50%程度。あまり必要性を感じず、ロジックに関して気になる点だけテストした。
  - 主な使用技術: React, Python

- [markdown-metadata-parser](https://github.com/metamasao/markdown-metadata-parser)
  - markdonwファイルのメタデータを解析したり、便利なデータを作成するライブラリ（開発中）。GatsbyやJekyllといった他のSSGだと、ページのデザインとMarkdownのメタデータの解析がほぼ一緒になってるけど、別々にしたら使いやすいのではないかと本ブログを作る際に思い、現在作成中。Markdownのメタデータを解析して、日付などによるソートとタグの作成などをCLIから可能にする機能を実装するつもり。内包表記を使ったり、必要に応じてdequeを使うなど計算量を意識して書いてる。
  - OSS使ってばかりではなく、作らないと、という気持ちがある(なお、使ってもらえるほどの質なのかはわからないが、Github ActionsとCodecovを利用してcoverage計測するの単純に楽しい。楽しいのは大事。よかったらどうぞ。 [Codecov Guide Github Tutorial](https://docs.codecov.com/docs/github-tutorial) )
  - Coverageは今のところ94%。ターゲットを90%にしている。楽しい。
  - 主な使用技術: Python

## エンジニアとして好きな本

- 清水川貴之他著『自走プログラマー ~Pythonの先輩が教えるプロジェクト開発のベストプラクティス120』（技術評論社）
- 株式会社ビープラウド『Pythonプロフェッショナルプログラミング 第3版 （単行本）』（秀和システム）
- Micha Jaworski, Tarek Ziade(新井正貴他訳)『エキスパートPythonプログラミング 第3版』（KADOKAWA）
  - どれも仕事でもプライベートでも本当に参考になった。『自走プログラマー』は広く浅くといった感じで、コードの設計やテスト、DB設計周り、開発の進め方など、参考になることが多かった。『プロフェッショナルPython』はPythonでのトピックに加えて、devops周りの話もあり助かるし、最後の『エキスパートPythonプログラミング』はもっと深くPythonの仕様やその計算量などについて学べてよかったし、最適化の章や最後にはPythonicなデザインパターンの章もあり、とても勉強になった。訳者による補足も勉強になる。

- 辻真吾著『Pythonで学ぶアルゴリズムとデータ構造』（講談社サイエンティフィック）
  - よくあるアルゴリズムとデータ構造についてPythonを使って学ぶ本。本書のお陰で、計算複雑性などを学べてよかった。本書を読んだからこそ、DB設計やPythonの各データ構造とそのメソッドの計算量などを理解したりできた。ありがとうございますありがとうございます。

- ミック『達人に学ぶDB設計』（翔泳社）
  - 正規化、チューニング、アンチパターン(本書では「グレーゾーン」と呼ばれている典型例)を学べる。DB設計周りで困ったら本書を参照するようにしている。『SQLアンチパターン』は1/3ほど読んで放置しているので、こちらも読まねば。。。

- Alex Banks、Eve Porcello著（宮崎空訳）『Reactハンズオンラーニング 第2版―Webアプリケーション開発のベストプラクティス』
  - フロントエンドよくわからないマンから、少しわかる…かも？マンになれた気がする本。本当に勉強になった。でもwebpackはもう。。。
  - [読んだ時のメモ](https://metamasao.github.io/#/blogs/first_react_app.md)

- Danie Roy Greenfeld, Audrey Roy Greenfeld “Two Scoops of Django”
- Will Vincent ”Django for ~” シリーズ
  - Djangoでのベストプラクティスを学ぶ際にとても役に立った本。Two Scoops of Djangoはリファレンス本として、Django for シリーズはチュートリアル本として利用できる。前者はもうちょっと深くDjangoについての知識を提供してくれる所が、後者は公式ドキュメントやDjangoリポジトリの読み方、信頼できるライブラリ集を教えてくれる所がよかった。英語は簡単なので、ちょっと得意な人なら読めると思う。

- 大澤文孝他『Amazon Web Services 基礎からのネットワーク＆サーバー構築　改訂3版』（日経BP）
- 馬場俊彰『Webエンジニアが知っておきたいインフラの基本』（マイナビ）
  - 『ネットワークはなぜつながるのか　第２版知っておきたいTCP/IP、LAN、光ファイバの基礎知識』読んでて苦しんでいる時に助けていただいた本が前者。ネットワークの基本的な知識に加えて基本的なセキュリティの話もあり勉強になった。後者はもう少しインフラの知識を付けたいなと思い読んだ本。正直消化不良感は否めないが、後半のチューニングに関する所はとても参考になった。どちらの本もバックエンドの知識だけではなく、インフラの知識もある程度あったほうがより良いという方針で、信念を改訂させられた。

## その他わたしについて
人間を含めた世界について、一般的な構造や存在にとりわけ強い興味を私は持っています。

学生時代（経済的な理由で最終的には学費未納除籍になりましたが、、、）は哲学倫理学を専攻しており、とりわけ分析的伝統での哲学的時間論、現代普遍論争、人格の同一性に強く関心を持ち、Sider, Zimmerman, Lewis, Parfitといった著者らの論文等を好んで読んでいました。それ以外に非古典論理や英米系の倫理学（生命倫理やメタ倫理など）も勉強していました。最近は心の哲学や生物学の哲学の勉強もしています。

大学を辞めて以降は、数学や物理に疎い自分が哲学的観点から時間について何か有意義なことを述べることは難しいと思い、ラング『解析入門』といった簡単な本から学びなおし、数学や物理についての知識をちょっとずつ深めようとしています。そのような反省から、数理的な知識を深め始めたのですが、これがまた面白く世界についての理解が深まり端的に言ってよきです。正直に言うと遅々とした歩みではありますが、楽しいです。

またこのような過程で、統計学や統計的学習、プログラミング、データ構造とアルゴリズムなどを学びました。まさかデータ構造とアルゴリズムを学ぶとは露にも思ってなかったのですが、人生という感じがしてよいです。まぁ器用貧乏という感じですね。現在ではこれまで勉強した中で、形而上学、倫理学、生物学の哲学、非古典論理、数学、物理、プログラミングにとりわけ強い関心を持っています（とりわけ現在面白いってことです）。

昼休憩にも好んで勉強（この時間は主に数学と物理の復習）しているのでちょっと怪訝な顔をされる時もありますが、セネカが述べるように、余生があるかもわからないのにやりたいことを先延ばししていると、運命から不意打ちを喰らい終わりを迎えてしまいますので。
