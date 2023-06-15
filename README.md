# memo(for me)
## blog or memoを投稿するまでの大まかな流れ
  - memo_blogにmdファイルを保存
  - 以下のコマンドを適宜実行する
  ```bash
  # ビルド（markdownファイルのメタデータから日付を基準にソート）。メモなどを作成した時にはこのコマンドを実行する。
  $ ./python_build/build.py

  # 本番用ファイルの作成と公開用のディレクトリ(docs)にコピー。Reactの機能追加や修正の際にはこのコマンドを実行する。
  $ npm run github-build
  ```
## 修正・追加メモ
- tagによるfilterがどうしてもand検索になってしまう。。。とりあえず大事ではないので、時間があるときに。。。はい。。。
- dark or lightのthemeを作り簡単に変更できるようにする。これを先にやりたいなぁ。。。