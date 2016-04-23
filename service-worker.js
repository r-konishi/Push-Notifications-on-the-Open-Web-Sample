self.addEventListener('push', function(event) {
  // event.waitUntil(
  //   fetch(SOME_API_ENDPOINT).then(function(response) {
  //     if(response.status !== 200) {
  //       console.log('問題が発生しました。 Status Code: ' + response.status);
  //       throw new Error();
  //     }

  //     return response.json().then(function(data) {
  //       if(data.error || !data.notification) {
  //         console.error('エラーが発生しました。', data.error);
  //         throw new Error();
  //       }

  //       var title = data.notification.title;
  //       var message = data.notification.message;
  //       var icon = data.notification.icon;
  //       var notificationTag = data.notification.tag;

  //       return self.registration.showNotification(title, {
  //         body: message,
  //         icon: icon,
  //         tag: notificationTag
  //       });
  //     });
  //   }).catch(function(error) {
  //     console.error('データを取得できませんでした。', error);

  //     var title = 'エラーが発生しました';
  //     var message = 'Push通知の情報が取得できませんでした。'
  //     var icon = '/';
  //     var notificationTag = 'notification-error';
  //     return self.registration.showNotification(title, {
  //       body: message,
  //       icon: icon,
  //       tag: notificationTag
  //     });
  //   })
  // );

  event.waitUntil(
    self.registration.showNotification(
      '(プッシュ通知に表示するタイトル)',
      {
        icon: '/images/icon-180x180.png',
        body: '(プッシュ通知に表示する説明テキスト)',
        tag: 'notification-tag'
      }
    )
  );
});