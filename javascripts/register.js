// push通知が登録されているか
var isPushEnabled = false;

// window のロードイベントを追加
window.addEventListener('load', function() {
  // ID が push-button のエレメントを取得
  var pushButton = document.getElementById('push-button');
  // pushButton にクリックイベントを追加
  pushButton.addEventListener('click', function() {
    if(isPushEnabled) {
      // push通知を解除する
      console.log('unsubscribe');
      isPushEnabled = false;
    } else {
      // push通知を登録する
      console.log('subscribe');
      isPushEnabled = true;
    }
  });

  // Service Worker がサポートされているブラウザかどうかの判定を行う
  if('serviceWorker' in navigator) {
    // Service Worker に対応しているブラウザ
    navigator.serviceWorker
      // Service Worker の js を登録する
      .register('./service-worker.js')
      // Service Worker が無事登録されたら
      .then(function(result){
        console.log(result);
        console.log('Service Worker の登録が完了したよ！');
      })
      .catch(function(error) {
        console.log(error);
        console.log('Service Worker の登録に失敗しちゃった！');
      });
  } else {
    // Service Worker に対応していないブラウザの場合
    console.warn('このブラウザは Service Worker に対応してないよ！');
  }
});