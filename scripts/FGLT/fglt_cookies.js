
var fglt = $request.headers["Cookie"];

if (fglt) {
    if ($prefs.valueForKey("Cookiefglt") != fglt) {
      var cookie = $prefs.setValueForKey(fglt, "Cookiefglt");
      if (!cookie) {
        $notify("更新富贵论坛Cookie失败‼️", "", "")
      } else {
        $notify("更新富贵论坛Cookie成功 🎉", "", "")
      }
  } else {
    var cookie = $prefs.setValueForKey(fglt, "Cookiefglt");
    if (!cookie) {
      $notify("写入富贵论坛Cookie失败‼️", "", "")
    } else {
      $notify("写入富贵论坛Cookie成功 🎉", "", "")
    }
  }
}
$done({})