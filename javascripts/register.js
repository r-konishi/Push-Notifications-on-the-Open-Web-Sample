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


});