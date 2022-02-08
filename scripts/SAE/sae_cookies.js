
var SAE = $request.headers["Cookie"];

if (SAE) {
    if ($prefs.valueForKey("CookieSAE") != SAE) {
      var cookie = $prefs.setValueForKey(SAE, "CookieSAE");
      if (!cookie) {
        $notify("更新新浪云Cookie失败‼️", "", "")
      } else {
        $notify("更新新浪云Cookie成功 🎉", "", "")
      }
  } else {
    var cookie = $prefs.setValueForKey(SAE, "CookieSAE");
    if (!cookie) {
      $notify("写入新浪云Cookie失败‼️", "", "")
    } else {
      $notify("写入新浪云Cookie成功 🎉", "", "")
    }
  }
}
$done({})