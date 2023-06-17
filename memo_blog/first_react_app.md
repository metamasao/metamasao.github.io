---
Filename: first_react_app.md
Title: ReactとPythonで自作SSGをGithub Pagesにデプロイ
Summary: 関数型プログラミング。。。好きになりそう。。。
Tags: react,npm,関数型プログラミング
Datetime: 2023-06-16 21:00:00
---

# ReactとPythonで自作SSGをGithub Pagesにデプロイ

[React ハンズオンラーニング](https://www.oreilly.co.jp/books/9784873119380/)

フロントエンドよくわからないマンを克服したいのと面白そうだなと思い、上記の本を1か月前くらいから読んでた。この本の美点について簡単にまとめると以下の通りで、フロントエンドの定石だったりエコシステムを理解したい人にはお勧めできる。
- アロー関数、デストラクチャリング、スプレッド構文といったモダンなJavaScriptが学べる。
- 関数型プログラミングの基本が学べる。
  - 必要というわけではないし、Reactで何か書くときに関数型プログラミングの条件を満たさない時もあるけど次のような利点があると思われる。
  - 結果を得るための手順(how)が重要な命令型に比べて、何をするのか(what)を重視する宣言型プログラミングは読みやすい。
  - mapやfilterのような高階関数やラムダ計算を使えばネストを避けることができるから読みやすい。ネストが深いと辛いので。。。
  - 副作用のない純粋関数が増えれば増えるほどテストはしやすい。
  - また著者が以下に述べるようにスケーラビリティにも寄与する。
  > 結局のところ、宣言型プログラミングの価値は読みやすいコードにあり、アプリケーションのコードが読みやすいということは、スケールが容易であることを表します（Alex Banks, Eve Porcello『React ハンズオンラーニング Webアプリケーション開発のベストプラクティス』, p. 41）
- Reactの定石を学べるのはもちろん、フロントエンドのエコシステムが学べる。例えば、どのような定番ライブラリがあり、またそのライブラリがフロントエンドアプリを作る際にどのような役割を担うのか、ということを理解できる。私はこの辺本当によくわからなかったので助かった。。。
  - webpack恐怖症とnpx create-react-app恐怖症を克服した（つもり）。

ついでにこのブログを作ってみた。。。いやついでではなく作りたい気持ちが前からあったのだけどねフフフ。以下では、作成過程で学んだことを簡単に書いておく。

- forEach() と map()
  - map()は非破壊的で関数型プログラミングにとっては都合が良いのだが、戻り値を利用しない場合は別の高階関数forEachを使ったほうが良いみたい。[mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) では次のように書かれている。
  > Since map builds a new array, calling it without using the returned array is an anti-pattern; use forEach or for...of instead.
- npm audit is broken for front-end tooling by design
  - これまで先送りしてたやつです。適当に調べて「ふ～ん、そういうことね」と知ったかぶりしていた事柄です。
  - ```npx create-react-app``` (以下CRAとする)でReactアプリを作成すると、 ```npm audit``` がすぐに脆弱性あるよ～と心臓をバクバクさせるのですが、これは
    - ```npm audit``` が nodeでつくられたアプリケーションのための脆弱性発見ツールで、本番環境でNodeアプリケーションを走らせたときに生じる静寂性を教えてくれる
    - 一方で、CRAは開発環境でのみ利用されて静的アセットを作るだけなので、大丈夫だと。
    - 気になる場合は ```react-scripts``` をdevDependenciesに移動してから ```npm audit --production``` してあげたら、脆弱性がないことを確認できるので大丈夫大丈夫。
    ```javascript
    "dependencies": {
      "react": "^17.0.2",
      "react-dom": "^17.0.2"
    },
    "devDependencies": {
      "react-scripts": "4.0.3"
    },
    ```
    - 詳しくは以下のリンクを見てください。
      - [Help, npm audit says I have a vulnerability in react-scripts!](https://github.com/facebook/create-react-app/issues/11174)

## 終わりに
終わりです。