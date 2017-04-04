angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$state,$rootScope) {

  //Sidemenu Links for showcasing all pages

  // $scope.sideMenuLinks  = [
  //   {text: 'Home', url: '#/app/home'},
  //   {text: 'Feed', url: '#/app/feed'},
  //   {text: 'Start (Fullscreen)', url: '#/app/start'},
  //   {text: 'View Post', url: '#/app/viewpost'},
  //   {text: 'View Post 2', url: '#/app/viewposttwo'},
  //   {text: 'Friend (Grid)', url: '#/app/fgrid'},
  //   {text: 'Friend (List)', url: '#/app/flist'},
  //   {text: 'New Post', url: '#/app/newpost'},
  //   {text: 'Send Mail', url: '#/app/email'},
  //   {text: 'Profile', url: '#/app/profile'},
  //   {text: 'Profile 2', url: '#/app/profiletwo'},
  //   {text: 'Profile 3', url: '#/app/profilethree'},
  //   {text: 'Invite', url: '#/app/invite'},
  //   {text: 'News', url: '#/app/news'}
  // ]; 

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/social/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.goto=function (jjj) {
    $state.go(jjj)
  }


  
  var datas={"has_more": false, "message": "success", "data": [{"chinese_tag": "\u5176\u5b83", "is_feed_ad": false, "tag_url": "search/?keyword=%E5%85%B6%E5%AE%83", "title": "\u5218\u56fd\u6881\u5230\u5e95\u6709\u591a\u5389\u5bb3\uff1f", "single_mode": true, "middle_mode": false, "abstract": "\u53bb\u5e74\u91cc\u7ea6\u5965\u8fd0\u4e52\u4e53\u7684\u91d1\u724c\u8fd8\u6ca1\u51b3\u51fa\uff0c\u5148\u88ab\u5f20\u7ee7\u79d1\u5f3a\u52bf\u5237\u5c4f\u4e86\u2026\u2026\u3000\u3000\u4f60\u53ef\u80fd\u5df2\u7ecf\u542c\u8fc7\u8fd9\u4e00\u6bb5\uff0c\u8bf4\u5218\u56fd\u6881\u6447\u7740\u5f20\u7ee7\u79d1\u7684\u80a9\u8180\uff0c\u5927\u547c\u201c\u9192\u9192\uff01\u9192\u9192\u554a\uff01\u8fd9\u662f\u5965\u8fd0\u4f1a\uff01\u201d\u3000\u3000\u4f46\u5fc5\u987b\u9057\u61be\u7684\u8bf4\uff0c\u8fd9\u4e00\u6bb5\u5728\u4eca\u65e5\u6700\u4f73\u91cc\u53ea\u80fd\u6392\u7b2c\u4e8c\u3002\u3000\u3000\u7b2c\u4e00\u662f\u2026\u2026\u3000\u3000\u5fae\u535a\u7f51\u53cb\u6252\u51fa\u53f0\u6e7e\u7f51\u53cb\u7684\u4e00\u6bb5\u8bdd\u3002", "group_source": 10, "image_list": [{"url": "http://p1.pstatp.com/list/18a200060e2d9cd8860d"}, {"url": "http://p1.pstatp.com/list/18a40002d32e55e94c60"}, {"url": "http://p3.pstatp.com/list/18a3000625d8c1e7d471"}], "behot_time": 1491267521, "source_url": "/group/6396892611977675010/", "source": "\u5934\u6761\u95ee\u7b54", "more_mode": true, "article_genre": "article", "comments_count": 139, "has_gallery": false, "tag": "news", "image_url": "http://p1.pstatp.com/list/190x124/18a200060e2d9cd8860d", "group_id": "6396892611977675010"}, {"chinese_tag": "\u4f53\u80b2", "media_avatar_url": "http://p3.pstatp.com/large/1232000a30012f766c07", "is_feed_ad": false, "tag_url": "news_sports", "title": "1994~2001\u00b7\u788e\u7247\u00b7\u5168\u5174\u8bb0\u5fc6", "single_mode": true, "middle_mode": false, "abstract": "11994\u5e74\uff0c\u7f8e\u597d\u5f00\u59cb\u4e00\u652f\u9760\u7740\u7532A\u6269\u73ed\u624d\u52c9\u5f3a\u6324\u8fdb\u9876\u7ea7\u8054\u8d5b\u7684\u7403\u961f\uff0c\u5386\u53f2\u6700\u597d\u6210\u7ee9\u662f\u5168\u8fd0\u4f1a\u7b2c\u4e94\u540d\u3002\u6ca1\u6709\u7403\u661f\uff0c\u6ca1\u6709\u540d\u6559\u5934\uff0c\u4e3b\u6559\u7ec3\u4e5f\u662f\u7531\u5f53\u5e74\u7684\u5ddd\u4e2d\u5feb\u9a6c\u4f59\u4e1c\u98ce\u4ed3\u4fc3\u5c31\u4efb\u7684\u3002\u51e0\u4e4e\u6240\u6709\u884c\u5bb6\u90fd\u8ba4\u5b9a\uff0c\u8fd9\u4e00\u5e74\u7684\u964d\u7ea7\u540d\u989d\u5df2\u7ecf\u6709\u4e00\u4e2a\u63d0\u524d\u9884\u5b9a\u4e86\u3002", "group_source": 2, "image_list": [{"url": "http://p1.pstatp.com/list/17810017695ad5416073"}, {"url": "http://p3.pstatp.com/list/1a6c00072f9ba39541da"}, {"url": "http://p3.pstatp.com/list/1a6b00073cd1f158b0d8"}], "behot_time": 1491267510, "source_url": "/group/6404781723825488129/", "source": "\u7231\u4f53\u80b2aiSports", "more_mode": true, "article_genre": "article", "comments_count": 15, "has_gallery": false, "tag": "news_sports", "image_url": "http://p1.pstatp.com/list/190x124/17810017695ad5416073", "group_id": "6404781723825488129", "media_url": "/c/user/52797041592/"}, {"chinese_tag": "\u4f53\u80b2", "media_avatar_url": "http://p10.pstatp.com/large/1354000f8699ddc4e115", "is_feed_ad": false, "tag_url": "news_sports", "title": "2\u52067\u677f\uff0c\u5a01\u5c11\u5bd2\u5fc3\uff01\u4ebf\u5143\u5408\u540c\u7ed9\u9519\u4eba\uff0c\u7686\u5728\u4e3a5\u767e\u4e07\u5f03\u54c8\u767b\u586b\u5751\uff01", "single_mode": true, "middle_mode": false, "abstract": "NBA\u5e38\u89c4\u8d5b\u6218\u706b\u518d\u71c3\uff0c\u96f7\u9706\u4e3b\u573a\u4ee5101-113\u8f93\u7ed9\u9ec4\u8702\u3002\u5a01\u5c1140\u520613\u7bee\u677f10\u52a9\u653b\uff0c\u5f97\u5230\u8d5b\u5b63\u7b2c40\u6b21\u4e09\u53cc\uff0c\u9ec4\u8702\u6838\u5fc3\u6c83\u514b29\u52064\u52a9\u653b4\u62a2\u65ad\u8fd9\u53c8\u662f\u5178\u578b\u7684\u5a01\u5c11\u5f0f\u7684\u6bd4\u8d5b\uff0c\u5a01\u5c11\u72ec\u63fd40\u5206\uff0c\u5176\u4f59\u9996\u53d1\u56db\u4eba\u5408\u8ba137\u5206\u3002", "group_source": 2, "image_list": [{"url": "http://p3.pstatp.com/list/1a6b00073aa1796ee9a8"}, {"url": "http://p3.pstatp.com/list/1a6b00073aaa3a83ef22"}, {"url": "http://p9.pstatp.com/list/1a6c00072d89e9de518b"}], "behot_time": 1491267500, "source_url": "/group/6404786146563326466/", "source": "Fire\u4f53\u575b", "more_mode": true, "article_genre": "article", "comments_count": 45, "has_gallery": false, "tag": "news_sports", "image_url": "http://p3.pstatp.com/list/190x124/1a6b00073aa1796ee9a8", "group_id": "6404786146563326466", "media_url": "/c/user/50428903328/"}, {"chinese_tag": "\u4f53\u80b2", "media_avatar_url": "http://p3.pstatp.com/large/e590003b36cfc412f9a", "is_feed_ad": false, "tag_url": "news_sports", "title": "\u62c9\u897f\u5947\u53d7\u4f24\u4e0d\u5728\u573a \u6731\u5a77\u5c31\u628a\u526f\u653b\u62e6\u7f51\u7684\u6d3b\u4e5f\u5305\u4e86", "single_mode": true, "middle_mode": false, "abstract": "\u524d\u51e0\u5929\u62c9\u897f\u5947\u53d7\u4f24\u4e0d\u80fd\u5728\u573a\u4e0a\u6bd4\u8d5b\uff0c\u7ed3\u679c\u6731\u5a77\u4e00\u573a\u7403\u5149\u62e6\u7f51\u5c31\u62ff\u4e0b6\u5206\uff0c\u5f53\u7136\u8fd9\u4e0d\u662f\u5979\u7684\u6700\u9ad8\u8bb0\u5f55\uff0c\u6731\u5a77\u66fe\u7ecf\u5728\u4e16\u4ff1\u676f\u7684\u6bd4\u8d5b\u4e2d\u4e00\u573a\u7403\u62e6\u7f51\u521b\u4e0b9\u5206\u7684\u8bb0\u5f55\uff0c\u6731\u5a77\u7684\u5168\u9762\u6027\u5c31\u5728\u8fd9\u4e2a\u5730\u65b9\uff0c\u4e0d\u4ec5\u4ec5\u5f3a\u653b\u8ba9\u5bf9\u624b\u5bb3\u6015\uff0c\u8fd8\u6709\u62e6\u7f51\u8fd9\u4e00\u4e2a\u6740\u624b\u950f\uff0c\u771f\u7684\u53ef\u4ee5\u548c\u4e00\u4e9b\u660e\u661f\u526f\u653b\u76f8\u5ab2\u7f8e\uff0c\u4e0b\u9762\u5c31\u4e3a\u5927\u5bb6\u51c6\u5907\u4e86\u4e00\u7ec4\u597d\u73a9\u53c8\u770b\u7740\u8fc7\u763e\u7684\u6731\u5a77", "group_source": 2, "image_list": [{"url": "http://p3.pstatp.com/list/1af400014306f72bb615"}, {"url": "http://p9.pstatp.com/list/19fc0006fb4b962f921b"}, {"url": "http://p3.pstatp.com/list/19f60006ffd15b928525"}], "behot_time": 1491267489, "source_url": "/group/6404697814082011393/", "source": "\u571f\u571f\u5973\u6392", "more_mode": true, "article_genre": "article", "comments_count": 37, "has_gallery": false, "tag": "news_sports", "image_url": "http://p3.pstatp.com/list/190x124/1af400014306f72bb615", "group_id": "6404697814082011393", "media_url": "/c/user/2923685358/"}, {"chinese_tag": "\u4f53\u80b2", "media_avatar_url": "http://p3.pstatp.com/large/97d001afb38bb2a1ec9", "is_feed_ad": false, "tag_url": "news_sports", "title": "\u8bba\u62a0\u95e8\u8fde\u706b\u7bad\u83ab\u96f7\u90fd\u7518\u62dc\u4e0b\u98ce\uff0c\u8fd9\u961f5\u5e74\u9001\u8d70\u4e00\u5957\u603b\u51a0\u519b\u9996\u53d1", "single_mode": true, "middle_mode": false, "abstract": "\u4f11\u65af\u6566\u706b\u7bad\u7684\u603b\u7ecf\u7406\u83ab\u96f7\u65f6\u5e38\u88ab\u51a0\u4ee5\u7cbe\u660e\u3001\u7b97\u8ba1\u7684\u6807\u7b7e\u3002\u8fd9\u4e2a\u7cbe\u4e8e\u6570\u636e\u5206\u6790\u7684\u603b\u7ecf\u7406\uff0c\u603b\u4f1a\u4ee5\u4ed6\u7684\u65b9\u5f0f\u505a\u51fa\u6700\u6709\u5229\u4e8e\u7403\u961f\u5efa\u8bbe\u7684\u51b3\u5b9a\u3002\u7279\u522b\u662f\u5728\u7403\u5458\u5408\u540c\u7684\u7b7e\u8ba2\u4e0a\uff0c\u83ab\u96f7\u53ef\u8c13\u662f\u7cbe\u660e\u5230\u4e86\u6781\u81f4\uff1a\u50cf\u963f\u91cc\u624e\u3001\u8d1d\u5f17\u5229\u3001\u5185\u5185\u3001\u6208\u767b\u8fd9\u6837\u7684\u9ad8\u6027\u4ef7\u6bd4\u5408\u540c\uff0c\u90fd\u51fa\u81ea\u83ab\u96f7\u4e4b\u624b\u3002", "group_source": 2, "image_list": [{"url": "http://p3.pstatp.com/list/1af400009d606da70e67"}, {"url": "http://p3.pstatp.com/list/19ff00064aa2ef29711c"}, {"url": "http://p9.pstatp.com/list/19fd00066dc5caefb286"}], "behot_time": 1491267479, "source_url": "/group/6404557559188947457/", "source": "\u4f55\u6c0f\u4f6c\u4f83\u7403", "more_mode": true, "article_genre": "article", "comments_count": 164, "has_gallery": false, "tag": "news_sports", "image_url": "http://p3.pstatp.com/list/190x124/1af400009d606da70e67", "group_id": "6404557559188947457", "media_url": "/c/user/50085479671/"}, {"chinese_tag": "\u4f53\u80b2", "media_avatar_url": "http://p3.pstatp.com/large/e5800122c702c67f604", "is_feed_ad": false, "tag_url": "news_sports", "title": "\u8d62\u4e86\u6bd4\u8d5b\u5374\u8f93\u4e86\u672a\u6765\uff01\u8d5b\u8bc4\u6e56\u4eba\u4e3b\u573a\u80dc\u7070\u718a\uff01", "single_mode": true, "middle_mode": false, "abstract": "\u6e56\u4eba\u8d44\u8baf\u5b98\u65b9\u5fae\u4fe1\uff1alakerszx\u6e56\u4eba\u8d44\u8baf\u5b98\u65b9\u5934\u6761\u53f7\uff1alakerszx\u6765\u6e90\u4e28 \u6e56\u4eba\u8d44\u8baf\u4f5c\u8005\u4e28 \u5899\u6ce5\u9489\u8d62\u4e86\uff1f\u662f\u7684\uff0c\u8d62\u4e86\uff0c\u8d62\u7684\u8fd8\u662f\u8fde\u52c7\u58eb\u3001\u9a91\u58eb\u8fd9\u7c7b\u8c6a\u5f3a\u9047\u4e0a\u90fd\u4f1a\u60e7\u6015\u7684\u7070\u718a\uff01\u4eca\u5929\u7684\u6bd4\u8d5b\u4f9d\u65e7\u662f\u5317\u4eac\u65f6\u95f43:30\u7684\u5f53\u5730\u4e0b\u5348\u573a\uff0c\u672c\u4ee5\u4e3a\u53c8\u662f\u4e00\u573a\u4e0b\u5348\u8336\u578b\u6bd4\u8d5b\u3002\u8ba9\u8be5\u8d62\u7684\u8d62\u4e0b\uff0c\u8ba9\u60f3\u8f93\u7684\u8f93\u6389\u3002", "group_source": 2, "image_list": [{"url": "http://p2.pstatp.com/list/19fc0006e221863c76ad"}, {"url": "http://p9.pstatp.com/list/1af400012a8f77b9ebb3"}, {"url": "http://p3.pstatp.com/list/19fc0006e4ae35838d60"}], "behot_time": 1491267468, "source_url": "/group/6404776864602358017/", "source": "lakerszx", "more_mode": true, "article_genre": "article", "comments_count": 21, "has_gallery": false, "tag": "news_sports", "image_url": "http://p2.pstatp.com/list/190x124/19fc0006e221863c76ad", "group_id": "6404776864602358017", "media_url": "/c/user/51534900989/"}, {"chinese_tag": "\u4f53\u80b2", "is_feed_ad": false, "tag_url": "news_sports", "title": "\u4e3a\u4ec0\u4e48\u4e00\u4e2a\u51b0\u58f6\u7684\u4ef7\u683c\u9ad8\u8fbe\u4e07\u5143\uff1f", "single_mode": true, "middle_mode": false, "abstract": "\u51b0\u58f6\u4e4b\u6240\u4ee5\u7279\u522b\u8d35\uff0c\u5728\u4e8e\u5176\u539f\u77f3\u53ea\u4ea7\u4e8e\u82cf\u683c\u5170\u897f\u90e8\u6d77\u9762\u7684\u514b\u91cc\u683c\u5c9b\u3002\u867d\u7136\u77f3\u6750\u51fa\u4e8e\u8be5\u5c9b\uff0c\u4f46\u51b0\u58f6\u6210\u54c1\u5e76\u975e\u5728\u5c9b\u4e0a\u751f\u4ea7\uff0c\u800c\u662f\u8fd0\u9001\u5230\u8ddd\u8be5\u5c9b50\u516c\u91cc\u7684\u5357\u827e\u5c14\u90e1\u52a0\u5de5\u5382\uff0c\u518d\u7ecf\u7531\u683c\u62c9\u65af\u54e5\u9500\u5f80\u4e16\u754c\u5404\u5730\u3002\u51b0\u58f6\u8fd0\u52a8\u5bf9\u6750\u8d28\u6709\u7279\u6b8a\u8981\u6c42\uff0c\u4e00\u662f\u8981\u6c42\u5176\u8db3\u591f\u575a\u786c\uff1b\u4e8c\u662f\u8981\u6c42\u5176\u5728\u4f4e\u6e29\u6761\u4ef6\u4e0b\u4e0d\u4f1a\u56e0\u649e\u51fb\u7834\u88c2\u3002", "group_source": 10, "image_list": [{"url": "http://p3.pstatp.com/list/ef7000ad7f73b39db82"}, {"url": "http://p3.pstatp.com/list/ef6000b35c2305fc78b"}, {"url": "http://p3.pstatp.com/list/ef7000ada20598ff92d"}], "behot_time": 1491267458, "source_url": "/group/6347636929181253889/", "source": "\u5934\u6761\u95ee\u7b54", "more_mode": true, "article_genre": "article", "comments_count": 660, "has_gallery": false, "tag": "news_sports", "image_url": "http://p3.pstatp.com/list/190x124/ef7000ad7f73b39db82", "group_id": "6347636929181253889"}], "next": {"max_behot_time": 1491267458}}
  $scope.sportNews=datas.data;


  var dataOfmyImg=[

  ]
  for (var i = 3; i <=21; i++) {
    dataOfmyImg.push("img/myimg/"+i+".jpg");
  }
  $scope.dataOfmyImg=dataOfmyImg ;


  $scope.datasOfReads=[
      "体育学科的思想要从体育课程标准开中的健康第一的指导思想开始说起。",
      "'健康的体魄是青少年为祖国和人民服务的基本前提，搜索是中华民族旺盛生命力的体现，学校要加强“健康第一”的指导思，切实加强体育工作'。这是《中共中央国务院关于深化教育改革全面推进素质教育的决定》的内容。那么，要实现健康第一，要加强体育工作，就是从学生的体育教学活动开始抓起，教学活动过程重在教学主体性的体现。正确的理解教学过程中的主客体关系，充分的体现学生的主体性，将健康第一和主体性教学的指导思想贯穿于我们体育教学的始终，因为它是实现每一个人生理想的基石。",
      "确定了健康第一的指导思想后，就要为学生终生体育锻炼意识考虑了。",
      "学校教育只能伴随人们的学生时代，而想要所有人都能在离开学校后还能积极主动地参与到体育锻炼中来，就要从小培养，从学生时代培养。",
      "我国课程理论的研究开始于20世纪30年代。新中国成立后,我国学习苏联的教育科学,而苏联的教育科学是把课程论放在教学论中进行研究的,因此,我国在一个相当长的时期没有把课程论作为教育学的一门分支学科来研究。1980年以后,课程理论的研究日益受到学者们的重视"
  ]

if($rootScope.datakk){
  if($rootScope.datakk.title){
    $scope.detail=$rootScope.datakk

  }else{
    $scope.detail=$rootScope.datakk
  }
  
}
  


  $scope.goBack=function () {
    if($rootScope.stateNamejj){
      var dd=$rootScope.stateNamejj
      delete $rootScope.stateNamejj
      delete $rootScope.datakk
      $state.go(dd)
    }else{
      $state.go("app.start")
    }

  // if ($ionicHistory.backView() == null) {
    //     $ionicHistory.goBack(); 
    // }
    // $ionicHistory.goBack(); 
  } 

  $scope.goToDetail=function (kk) {
    $rootScope.datakk=kk;
    $rootScope.stateNamejj= $state.current.name
    $state.go("app.viewposttwo",{},{reload:true})
  }


  
})

.controller('LoginCtrl', function($scope, $ionicModal, $timeout,$state) {

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/social/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };

  // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    // $timeout(function() {
      $state.go("app.start")
    // }, 1000);
  };
})
