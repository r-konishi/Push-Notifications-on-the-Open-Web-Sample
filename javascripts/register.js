var isPushEnabled = false;

window.addEventListener('load', function() {
  var pushButton = document.getElementById('push-button');
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