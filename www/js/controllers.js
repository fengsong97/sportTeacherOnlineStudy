angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$state,$rootScope,$http) {


  if($rootScope.loginData){
    $scope.loginData=$rootScope.loginData
  }

  $scope.goto=function (jjj) {
    $state.go(jjj)
  }


  





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

  var max_behot_time=''
  $scope.doRefresh=function () {
    var a=new Date() 
    var b=a.getTime()+"";
    var c=b.substring(0,b.length-3)

    $http({     url: 
      // "http://www.toutiao.com/api/pc/feed/?category=news_sports",
        "http://www.toutiao.com/api/pc/feed/?category=news_sports&utm_source=toutiao&widen=1&"
        +"max_behot_time="+c
        +"&max_behot_time_tmp="+c
        +"&tadrequire=false&as=A1E578BEB418E23&cp=58E458EEC2D3AE1",
                method: 'get',
            }).success(function(response) {
              
              $scope.$broadcast('scroll.refreshComplete');
              $scope.sportNews=response.data;
            }).error(function(response) {
                 $scope.sportNews=[
                        {
                            "chinese_tag": "其它",
                            "is_feed_ad": false,
                            "tag_url": "search/?keyword=%E5%85%B6%E5%AE%83",
                            "title": "刘国梁到底有多厉害？",
                            "single_mode": true,
                            "middle_mode": false,
                            "abstract": "去年里约奥运乒乓的金牌还没决出，先被张继科强势刷屏了……　　你可能已经听过这一段，说刘国梁摇着张继科的肩膀，大呼“醒醒！醒醒啊！这是奥运会！”　　但必须遗憾的说，这一段在今日最佳里只能排第二。　　第一是……　　微博网友扒出台湾网友的一段话。",
                            "group_source": 10,
                            "image_list": [
                                {
                                    "url": "http://p1.pstatp.com/list/18a200060e2d9cd8860d"
                                },
                                {
                                    "url": "http://p1.pstatp.com/list/18a40002d32e55e94c60"
                                },
                                {
                                    "url": "http://p3.pstatp.com/list/18a3000625d8c1e7d471"
                                }
                            ],
                            "behot_time": 1491267521,
                            "source_url": "/group/6396892611977675010/",
                            "source": "头条问答",
                            "more_mode": true,
                            "article_genre": "article",
                            "comments_count": 139,
                            "has_gallery": false,
                            "tag": "news",
                            "image_url": "img/myimg/111.jpg",
                            "group_id": "6396892611977675010"
                        },
                        {
                            "chinese_tag": "体育",
                            "media_avatar_url": "http://p3.pstatp.com/large/1232000a30012f766c07",
                            "is_feed_ad": false,
                            "tag_url": "news_sports",
                            "title": "1994~2001·碎片·全兴记忆",
                            "single_mode": true,
                            "middle_mode": false,
                            "abstract": "11994年，美好开始一支靠着甲A扩班才勉强挤进顶级联赛的球队，历史最好成绩是全运会第五名。没有球星，没有名教头，主教练也是由当年的川中快马余东风仓促就任的。几乎所有行家都认定，这一年的降级名额已经有一个提前预定了。",
                            "group_source": 2,
                            "image_list": [
                                {
                                    "url": "http://p1.pstatp.com/list/17810017695ad5416073"
                                },
                                {
                                    "url": "http://p3.pstatp.com/list/1a6c00072f9ba39541da"
                                },
                                {
                                    "url": "http://p3.pstatp.com/list/1a6b00073cd1f158b0d8"
                                }
                            ],
                            "behot_time": 1491267510,
                            "source_url": "/group/6404781723825488129/",
                            "source": "爱体育aiSports",
                            "more_mode": true,
                            "article_genre": "article",
                            "comments_count": 15,
                            "has_gallery": false,
                            "tag": "news_sports",
                            "image_url": "img/myimg/222.jpg",
                            "group_id": "6404781723825488129",
                            "media_url": "/c/user/52797041592/"
                        },
                        {
                            "chinese_tag": "体育",
                            "media_avatar_url": "http://p10.pstatp.com/large/1354000f8699ddc4e115",
                            "is_feed_ad": false,
                            "tag_url": "news_sports",
                            "title": "2分7板，威少寒心！亿元合同给错人，皆在为5百万弃哈登填坑！",
                            "single_mode": true,
                            "middle_mode": false,
                            "abstract": "NBA常规赛战火再燃，雷霆主场以101-113输给黄蜂。威少40分13篮板10助攻，得到赛季第40次三双，黄蜂核心沃克29分4助攻4抢断这又是典型的威少式的比赛，威少独揽40分，其余首发四人合计37分。",
                            "group_source": 2,
                            "image_list": [
                                {
                                    "url": "http://p3.pstatp.com/list/1a6b00073aa1796ee9a8"
                                },
                                {
                                    "url": "http://p3.pstatp.com/list/1a6b00073aaa3a83ef22"
                                },
                                {
                                    "url": "http://p9.pstatp.com/list/1a6c00072d89e9de518b"
                                }
                            ],
                            "behot_time": 1491267500,
                            "source_url": "/group/6404786146563326466/",
                            "source": "Fire体坛",
                            "more_mode": true,
                            "article_genre": "article",
                            "comments_count": 45,
                            "has_gallery": false,
                            "tag": "news_sports",
                            "image_url": "img/myimg/333.jpg",
                            "group_id": "6404786146563326466",
                            "media_url": "/c/user/50428903328/"
                        },
                        {
                            "chinese_tag": "体育",
                            "media_avatar_url": "http://p3.pstatp.com/large/e590003b36cfc412f9a",
                            "is_feed_ad": false,
                            "tag_url": "news_sports",
                            "title": "拉西奇受伤不在场 朱婷就把副攻拦网的活也包了",
                            "single_mode": true,
                            "middle_mode": false,
                            "abstract": "前几天拉西奇受伤不能在场上比赛，结果朱婷一场球光拦网就拿下6分，当然这不是她的最高记录，朱婷曾经在世俱杯的比赛中一场球拦网创下9分的记录，朱婷的全面性就在这个地方，不仅仅强攻让对手害怕，还有拦网这一个杀手锏，真的可以和一些明星副攻相媲美，下面就为大家准备了一组好玩又看着过瘾的朱婷",
                            "group_source": 2,
                            "image_list": [
                                {
                                    "url": "http://p3.pstatp.com/list/1af400014306f72bb615"
                                },
                                {
                                    "url": "http://p9.pstatp.com/list/19fc0006fb4b962f921b"
                                },
                                {
                                    "url": "http://p3.pstatp.com/list/19f60006ffd15b928525"
                                }
                            ],
                            "behot_time": 1491267489,
                            "source_url": "/group/6404697814082011393/",
                            "source": "土土女排",
                            "more_mode": true,
                            "article_genre": "article",
                            "comments_count": 37,
                            "has_gallery": false,
                            "tag": "news_sports",
                            "image_url": "img/myimg/444.jpg",
                            "group_id": "6404697814082011393",
                            "media_url": "/c/user/2923685358/"
                        },
                        {
                            "chinese_tag": "体育",
                            "media_avatar_url": "http://p3.pstatp.com/large/97d001afb38bb2a1ec9",
                            "is_feed_ad": false,
                            "tag_url": "news_sports",
                            "title": "论抠门连火箭莫雷都甘拜下风，这队5年送走一套总冠军首发",
                            "single_mode": true,
                            "middle_mode": false,
                            "abstract": "休斯敦火箭的总经理莫雷时常被冠以精明、算计的标签。这个精于数据分析的总经理，总会以他的方式做出最有利于球队建设的决定。特别是在球员合同的签订上，莫雷可谓是精明到了极致：像阿里扎、贝弗利、内内、戈登这样的高性价比合同，都出自莫雷之手。",
                            "group_source": 2,
                            "image_list": [
                                {
                                    "url": "http://p3.pstatp.com/list/1af400009d606da70e67"
                                },
                                {
                                    "url": "http://p3.pstatp.com/list/19ff00064aa2ef29711c"
                                },
                                {
                                    "url": "http://p9.pstatp.com/list/19fd00066dc5caefb286"
                                }
                            ],
                            "behot_time": 1491267479,
                            "source_url": "/group/6404557559188947457/",
                            "source": "何氏佬侃球",
                            "more_mode": true,
                            "article_genre": "article",
                            "comments_count": 164,
                            "has_gallery": false,
                            "tag": "news_sports",
                            "image_url": "img/myimg/555.jpg",
                            "group_id": "6404557559188947457",
                            "media_url": "/c/user/50085479671/"
                        },
                        {
                            "chinese_tag": "体育",
                            "media_avatar_url": "http://p3.pstatp.com/large/e5800122c702c67f604",
                            "is_feed_ad": false,
                            "tag_url": "news_sports",
                            "title": "赢了比赛却输了未来！赛评湖人主场胜灰熊！",
                            "single_mode": true,
                            "middle_mode": false,
                            "abstract": "湖人资讯官方微信：lakerszx湖人资讯官方头条号：lakerszx来源丨 湖人资讯作者丨 墙泥钉赢了？是的，赢了，赢的还是连勇士、骑士这类豪强遇上都会惧怕的灰熊！今天的比赛依旧是北京时间3:30的当地下午场，本以为又是一场下午茶型比赛。让该赢的赢下，让想输的输掉。",
                            "group_source": 2,
                            "image_list": [
                                {
                                    "url": "http://p2.pstatp.com/list/19fc0006e221863c76ad"
                                },
                                {
                                    "url": "http://p9.pstatp.com/list/1af400012a8f77b9ebb3"
                                },
                                {
                                    "url": "http://p3.pstatp.com/list/19fc0006e4ae35838d60"
                                }
                            ],
                            "behot_time": 1491267468,
                            "source_url": "/group/6404776864602358017/",
                            "source": "lakerszx",
                            "more_mode": true,
                            "article_genre": "article",
                            "comments_count": 21,
                            "has_gallery": false,
                            "tag": "news_sports",
                            "image_url": "img/myimg/666.jpg",
                            "group_id": "6404776864602358017",
                            "media_url": "/c/user/51534900989/"
                        },
                        {
                            "chinese_tag": "体育",
                            "is_feed_ad": false,
                            "tag_url": "news_sports",
                            "title": "为什么一个冰壶的价格高达万元？",
                            "single_mode": true,
                            "middle_mode": false,
                            "abstract": "冰壶之所以特别贵，在于其原石只产于苏格兰西部海面的克里格岛。虽然石材出于该岛，但冰壶成品并非在岛上生产，而是运送到距该岛50公里的南艾尔郡加工厂，再经由格拉斯哥销往世界各地。冰壶运动对材质有特殊要求，一是要求其足够坚硬；二是要求其在低温条件下不会因撞击破裂。",
                            "group_source": 10,
                            "image_list": [
                                {
                                    "url": "http://p3.pstatp.com/list/ef7000ad7f73b39db82"
                                },
                                {
                                    "url": "http://p3.pstatp.com/list/ef6000b35c2305fc78b"
                                },
                                {
                                    "url": "http://p3.pstatp.com/list/ef7000ada20598ff92d"
                                }
                            ],
                            "behot_time": 1491267458,
                            "source_url": "/group/6347636929181253889/",
                            "source": "头条问答",
                            "more_mode": true,
                            "article_genre": "article",
                            "comments_count": 660,
                            "has_gallery": false,
                            "tag": "news_sports",
                            "image_url": "img/myimg/777.jpg",
                            "group_id": "6347636929181253889"
                        }
                    ]

               $scope.$broadcast('scroll.refreshComplete');
            })
  }

  $scope.doRefresh()
  
})

.controller('LoginCtrl', function($scope,$rootScope, $ionicModal, $timeout,$state) {

  // Form data for the login modal
  $scope.loginData = {
      username:"刘海燕",
      password:"123456"
  };


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
      $rootScope.loginData=  $scope.loginData;
    console.log('Doing login', $rootScope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    // $timeout(function() {
      $state.go("app.start")
    // }, 1000);
  };
})
