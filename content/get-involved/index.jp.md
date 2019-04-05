---
title: "プロトコルに貢献する"
date: 2018-03-20T07:41:22+13:00
draft: false
type: "default"
description: "NavCoin プロトコルに貢献する方法はいくつかあります。もし貴方がプロジェクトをサポートしたいと考えているなら、以下に示す方法を見てみて下さい。"
---
{{< hero_section
titleText="参加する"
paragraphText="NavCoin プロトコルに貢献する方法はいくつかありますが、全てが高いプログラミングのスキルを必要とするわけではありません。もし貴方がNavCoinプロジェクトをサポートしたいと考えているなら、以下に示す方法を&nbsp;ご覧下さい。"
imgSrc="/images/get-involved/con-hero.svg"
>}}
{{< zig_section
titleText="翻訳"
imgSrc="/images/get-involved/con-translate.svg"
  buttonText="Transifexのアカウントを開設する"
  buttonUrl="https://www.transifex.com/signup/"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
    reversed="true"
    newTab="true"
>}}
NavCoin Core はすでに、24か国以上の言語に翻訳されています。さらに１２か国の言語に部分的に翻訳されています。 しかし、さらなる手助けはいつでも大歓迎です。 NavCoin は、Transifexを使って翻訳を行います。ですので、アカウントを開設する必要が &nbsp;あります。<br><br>翻訳の分野で貢献する為には、Transifex上で、NavCoin プロジェクトを開いてください。 <br><a href="https://www.transifex.com/navcoin/navcoin-core" style="text-decoration:underline;">https://www.transifex.com/navcoin/navcoin-core</a><br><br>「Join Team」ボタンをクリックして、貴方が翻訳可能な言語を私達に教えて下さい。そして実際に翻訳を&nbsp;始めましょう！
{{< /zig_section>}}

{{< zig_section
  titleText="ドキュメンテーション"
  imgSrc="/images/get-involved/con-doc.svg"
  buttonText="デベロッパーdocsに貢献する"
  buttonUrl="https://github.com/NAVCoin/navcoin-dev-docs"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
現在私達は、NavCoin Coreの、オープンソースのデベロッパーのドキュメンテーションリソースをオンラインにできるように努力しています。 もし貴方が力になってくれるのなら、GitHub に参加して、どのような形で貴方が力になれるか見てみて下さい。このページ上に解説されている GitHubコンベンションに従って、今貴方がどのドキュメンテーションを作成しているのか分かるように必ず「issue」を提出して下さい。そうする事で、作業が誰か他の人と重複してしまう可能性を&nbsp;防ぎます。
{{< /zig_section>}}

{{< zig_section
titleText="issueを提出する"
imgSrc="/images/get-involved/con-issue.svg"
buttonText="Submit an issue"
buttonUrl="https://github.com/NAVCoin/navcoin-core/issues"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
newTab="true"
>}}
NavCoin Coreに関する、致命的ではない全ての問題については、まず類似した問題を検索してみて下さい。見つからなかった場合にのみ、新しい問題として、下記の情報を含めて&nbsp;提出して下さい。

<br>
<ul class="article-ul" style="color: rgba(0, 0, 0, 0.55);">
  <li>問題についての明確な説明と、問題を再現する為の&nbsp;手順。</li>
  <li>貴方が使っている NavCoin Coreのバージョン、及びコミット。</li><li>貴方のデバッグログファイルからの全ての関連するエントリー。 デバッグログエントリーを公開する前に、必ず全ての細かい情報も記入するように&nbsp;して下さい。</li>
</ul>
<p class="paragraph-text">貴方のissueを迅速に解決してもらう為にベストな作戦は、開発チームがその問題部分になるべく簡単に行きつけるようにする事、そうすれば修正が簡単になります。なるべく多くの情報を提供する事、そして、わかり易いように問題を整理する事、この２つで劇的に問題解決のスピードが&nbsp;速くなります。</p>
{{< /zig_section>}}

{{< zig_section
  titleText="問題を解決する"
  imgSrc="/images/get-involved/con-resolve.svg"
  buttonText="readmeを見る"
  buttonUrl="https://github.com/navcoin/navcoin-core/blob/master/CONTRIBUTING.md"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
「issue tracker」は、NavCoin Coreに貢献する為に便利な方法を見つける為のベストな&nbsp;場所です。貴方が見つけた問題について報告書を書き始める前に、まず、問題にコメントして、他の誰も既にこの問題に取り組んでいる人がいない事を確かめるのが良いでしょう。 自分が見つけ出した問題について今取り組もうとしている場合にでも、まずは「issue tracker 」において「issue」を作成する&nbsp;必要があります。
<br><br>
問題を解決するには、以下の手順に従って下さい。
<br>
<ul class="article-ul" style="color: rgba(255,255,255,0.55);">
  <li>NavCoin/navcoin-coreを、自分の GitHubアカウントに&nbsp;フォークする。</li>
  <li>問題を解決する為のブランチを作成し、&nbsp;作業を始める。</li>
  <li>ユニットとインテグレーションテストについてアップデートし、自分が行った変更点について&nbsp;書く。</li>
  <li>あなたのブランチから、NavCoin Core のメインレポジトリーに戻す為のリクエストを作成する。問題の種類と、タイトル内の番号を記入する。 （例： Trivial: スペリングの間違いを修正する #145）。</li>
  <li> DiscordまたはGitHubを通じて、NavCoin Coreの他の貢献者と話し、Pull のリクエストが待機中になっていないかどうか注意するようにして下さい。彼らは可能な限り早く、チェック as&nbsp;します。</li>
</ul>
<p class="paragraph-text">貢献するに当たってのワークフローの詳細を全て見るには、GitHub内のreadmeを &nbsp;お読み下さい。</p>
{{< /zig_section>}}

{{< zig_section
titleText="テストを書く"
imgSrc="/images/get-involved/con-test.svg"
reversed="true"
newTab="true"
>}}
NavCoin Core は幾度ものテストを重ねられてきました。しかし、さらなるテストの為のパッチはいつでも歓迎ですし、コードベースをより良く知る為のとても良い方法です。
<br><br>
デベロッパーには、新しいコードの為の <a href="https://github.com/NAVCoin/navcoin-core/blob/master/doc/unit-tests.md" target="e" style="text-decoration:underline;">ユニットテスト</a> を書く事が強く推奨されます。そして古いコードの為の新しいテストを提出する事も同様に強く推奨されます。ユニットテストは、（設定で無効にされていない状態で）makecheckを使ってコンパイルされ実行される事が&nbsp;できます。
<br><br>
また、パイソンによって書かれた <a href="https://github.com/NAVCoin/navcoin-core/tree/master/qa" target="e" style="text-decoration:underline;">回帰テストと統合テスト</a>, もあります。これらはサーバー上で自動的に&nbsp;実行されます。
{{< /zig_section>}}

{{< zig_section
  titleText="コードのレビュー"
  imgSrc="/images/get-involved/con-bug.svg"
    buttonText="pullリクエストのレビュー"
  buttonUrl="https://github.com/navcoin/navcoin-core/pulls"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
NavCoin Core は、何億ドルもの資産を守る為のセキュリティソフトウェアです。従って、全てのコード変更は、熟練したデベロッパー達によって入念にチェックされる必要が&nbsp;あります。<br><br>他のデベロッパーが貴方のpull リクエストを見直すまでに長い時間がかかる可能性があります。 しかし全てのデベロッパーが、自らのプロジェクトに取り組む合間の時間を使って貴方のリクエストを見直ししているという事を念頭に置いて、辛抱強くお待ちくださいそして彼らの時間を尊重して&nbsp;下さい。<br><br>また、皆さんにもぜひ、他のデベロッパーのリクエストをレビューをして頂ければと思います。NavCoin、NavCoin Coreコードベース、 C++ についてのエキスパートでなくてもレビューは可能です。（もちろん知っていればいるほど良いですが）。大体いつでも、全てのプログラマーがレビュー可能なオープンのpull リクエストが&nbsp;出ています。
{{< /zig_section>}}

{{< zig_section
titleText="プロトコルの改善を提案する"
imgSrc="/images/get-involved/con-npips.svg"
buttonText="NPIPを見る"
buttonUrl="https://github.com/NAVCoin/npips"
buttonImgSrc="/images/icons/rightward-arrow.svg"
reversed="true"
newTab="true"
>}}
NavCoin Core は、常にNavCoinのプロトコルを改良する努力を続けています。 私達の目標は常に、分散化を進めながら使いやすさを向上しつつ、セキュリティーとプライバシーを強化し、効率性を上げて行く事にあります。もし貴方が NavCoinプロトコルを改良する手伝いをして下さるのであれば、貴方の提案を記入するに当たって最適な場所はNPIPs (NavCoin Protocol Improvement Proposals)の GitHub&nbsp;レポジトリーです。<br><br>NPIPsを提出しようと考えている人々はまず、 NavCoin Core デベロップメントコミュニティに Discord またはIRC (irc.freenode.net #navcoin)を通じて、アイデアを提案します。ディスカッションの後、NPIPs のレポジトリーへのPRを開いて下さい。整理編集と受理の後、貴方の提案がそこで&nbsp;発表されます。<br><br>私達はNPIPsの承認にはかなり自由です。そしてコミュニティの意思決定にはあまり巻き込まれないように細心の注意が払われています。ただ、例外として、とても稀ではありますが、決定が論争の元になり、合意に達しない場合があります。そのような場合には、より保守的な選択肢が取られる事と&nbsp;なります。<br><br>NPIPを持っていても、そのステータスがFinal またはActiveになるまでは、正式に受理されたスタンダードとはみなされません。<br><br>こういった変化もふまえ、最終的な合意はNavCoinユーザーの合意によってなるものという事を&nbsp;意味します。
{{< /zig_section>}}

{{< zig_section
  titleText="セキュリティにおける脆弱性の開示"
  imgSrc="/images/get-involved/con-disclosure.svg"
  paragraphText="NavCoin は、実験的なテクノロジーであり、時に致命的なバグが見つかる事があります。もし貴方がリサーチを行っていてセキュリティの脆弱性を発見した際には「Responsible Disclosure」のページに行き、報告を&nbsp;行って下さい。"
    buttonText="責任ある開示"
  buttonUrl="/responsible-disclosure/"
  buttonImgSrc="/images/icons/rightward-arrow.svg"
  bgPurple="true"
  newTab="true"
>}}
{{< /zig_section>}}

<style>
.article-ul>li{
    margin-bottom: 8px;
    font-size: 16px;
    font-family: roboto;
    line-height: 25px;
    text-align: justify;
    margin-top: 0;
    margin-bottom: 10px;
}
</style>
