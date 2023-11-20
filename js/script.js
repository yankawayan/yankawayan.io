var downloadButton = document.getElementById('downloadButton');
  downloadButton.addEventListener('click', function() {
    // ZIPファイルのURLを指定
    var zipFileURL = 'files\bunsu_karuta.zip';
    // ダウンロード用のリンクを作成
    var downloadLink = document.createElement('a');
    // リンクの属性を設定
    downloadLink.href = zipFileURL;
    downloadLink.download = 'downloaded_file.zip'; // ダウンロード後のファイル名を指定
    // リンクをクリックしてダウンロードを開始
    downloadLink.click();
  });