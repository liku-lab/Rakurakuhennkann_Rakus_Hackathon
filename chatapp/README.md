楽々変換
====

チャットアプリのソースコード

## アプリの起動

1. 次のコマンドを実行します

    ```bash
    # アプリのディレクトリに移動
    cd ~/hackathon/chatapp
    # アプリの開発で使用するライブラリをインストール（初回のみ）
    npm install
    # 起動コマンドを実行
    npm start
    ```

2. `http://サーバのIPアドレス:ポート番号/` にブラウザでアクセスします

    例：`http://127.0.0.1:3000/`

## 機能

### 堅いテキストを無くし，誰もがテキストでコミュニケーションのしやすい世界を実現

#### ログイン画面

* ログイン画面からユーザ名を入力して「入室する」ボタンでチャット画面に遷移
    * ユーザ名が未入力で「入室する」が押されたらエラーダイアログを表示

#### チャット画面

* 上司から部下へのチャットは，部下の画面では柔らかい表現に変換
    * 上司側での送信内容「お疲れ様です．例の書類は完成していますでしょうか．」
    * 部下側での受信内容「お疲れ〜🤗書類間に合いそう〜〜？🥰」
* 部下から上司へのチャットは，部下がラフな内容を送っても上司の画面では適切な表現に変換
    * 部下側での送信内容「ごめん．まだ．」
    * 上司側での受信内容「申し訳ありません．まだ完成しておりません．」


