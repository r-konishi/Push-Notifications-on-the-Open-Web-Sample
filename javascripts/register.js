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
      .register('/service-worker.js')
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

/**
 * 現在の状態を判定する
 */
var initialiseState = function() {
  // Service Worker で通知に対応しているか
  if(!('showNotification' in serviceWorkerRegistration.prototype)) {
    console.warn('Service Worker からの通知に対応していなかった！残念！');
    return;
  }

  // 現在の通知権限がどうなっているかの判定
  if(Notification.permission === 'denied') {
    console.warn('通知がブロックされているよ！残念！');
    return;
  }

  // Push通知に対応しているか
  if(!('PushManager' in window)) {
    console.warn('Push通知に対応していなかった！残念！');
    return;
  }

  // Service Worker の準備ができたら
  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    // 正常に準備できた
    serviceWorkerRegistration.pushManager.getSubscription()
      // Push通知の許可状況を取得成功
      .then(function(subscription) {
        // ID が push-button のエレメントを取得
        var pushButton = document.getElementById('push-button');
        // push-button を押せなくする
        pushButton.disabled = false;

        // サブスクリプションが取得できたか (許可されている場合は、subscription には subscriptionId が入ってる)
        if(!subscription) {
          return;
        }

        // TODO: サブスクリプションID をサーバに保存する処理
        sendSubscriptionToServer(subscription);

        pushButton.textContent = 'Push通知を無効にする';
        isPushEnabled = true;
      })
      // Push通知の許可状況の取得失敗
      .catch(function(error) {
        console.warn('getSubscription() 実行時にエラーが発生しちゃった！', error);
      });
  });
};





























