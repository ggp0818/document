
var bonus = {
  url: 'https://www.sinacloud.com/score/get_score',
  headers: {
    "Cookie": $prefs.valueForKey("CookieSAE"),
    "Referer": "https://www.sinacloud.com/ucenter.html?from=topnav",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
  }
};

$task.fetch(bonus).then(response => {
var obj = JSON.parse(response.body);
var title = obj.title;
var message = obj.message;
      $notify("新浪云签到", "", title + "！" + message);
}, reason => {
    $notify("新浪云签到失败‼️‼️‼️", "", reason.error)
});
