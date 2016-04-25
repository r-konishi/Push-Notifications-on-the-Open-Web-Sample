# ブラウザでPush通知 サンプル

### curl で Push 通知を行う方法  
```
curl --header "Authorization: key=GCM_API_Key" --header Content-Type:"application/json" https://android.googleapis.com/gcm/send -d "{\"registration_ids\":[\"REGISTRATION_ID\"]}"
```

### Chrome で Service Worker 一覧表示  
```
chrome://serviceworker-internals/
```


### 参考にしたサイト  
[Push Notifications on the Open Web](https://developers.google.com/web/updates/2015/03/push-notifications-on-the-open-web)  
[ChromeでW3C Push APIを使ってみた](http://qiita.com/tomoyukilabs/items/8fffb4280c1914b6aa3d)  
[Webでプッシュ通知するサービスを個人開発で作ってみた＋ServiceWorkerPushAPIの実装方法まとめ](http://qiita.com/zaru/items/f6e821052abb1b18bb0b)  
[Send a request from the command line for GCM to push a message](https://developers.google.com/web/fundamentals/getting-started/push-notifications/step-07)  
[Service Worker 開発するときのデバッグ方法](http://qiita.com/tmtysk/items/f77e31d6e9380e1c94a2) 
[Web Pushでブラウザにプッシュ通知を送ってみる](http://qiita.com/tomoyukilabs/items/217915676603fda73b0a#_reference-edee1ebfaae4be7a09b6)