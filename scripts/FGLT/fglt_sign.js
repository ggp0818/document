
var bonus = {
  url: 'https://www.fglt.net/plugin.php?id=dsu_amupper&ppersubmit=true&formhash=5281b4b6&mobile=2',
  headers: {
    "Cookie": $prefs.valueForKey("Cookiefglt"),
    "Referer": "https://www.fglt.net/forum.php",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.2 Mobile/15E148 Safari/604.1"
  }
};

$task.fetch(bonus).then(response => {
var obj = response.body;
console.log("response: \n" + response.body);
if (obj.indexOf("特奖励") >= 0) {
  // var jiangli = str.match(/由于您(.*?)明日/)[1];
  $notify("富贵论坛", "", "签到成功。");
} else {
if (obj.indexOf("签到完毕") >= 0) {
  $notify("富贵论坛", "", "您已签到完毕。");
} else {
    $notify("富贵论坛", "", "请更新Cookies！");
}
}
});
