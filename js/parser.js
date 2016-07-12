(function () {
  var theme = {
    color: [
      '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
      '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
    ],

    title: {
      itemGap: 8,
      textStyle: {
        fontWeight: 'normal',
        color: '#408829'
      }
    },

    dataRange: {
      color: ['#1f610a', '#97b58d']
    },

    toolbox: {
      color: ['#408829', '#408829', '#408829', '#408829']
    },

    tooltip: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: '#408829',
          type: 'dashed'
        },
        crossStyle: {
          color: '#408829'
        },
        shadowStyle: {
          color: 'rgba(200,200,200,0.3)'
        }
      }
    },

    dataZoom: {
      dataBackgroundColor: '#eee',
      fillerColor: 'rgba(64,136,41,0.2)',
      handleColor: '#408829'
    },
    grid: {
      borderWidth: 0
    },

    categoryAxis: {
      axisLine: {
        lineStyle: {
          color: '#408829'
        }
      },
      splitLine: {
        lineStyle: {
          color: ['#eee']
        }
      }
    },

    valueAxis: {
      axisLine: {
        lineStyle: {
          color: '#408829'
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
        }
      },
      splitLine: {
        lineStyle: {
          color: ['#eee']
        }
      }
    },
    timeline: {
      lineStyle: {
        color: '#408829'
      },
      controlStyle: {
        normal: {color: '#408829'},
        emphasis: {color: '#408829'}
      }
    },

    k: {
      itemStyle: {
        normal: {
          color: '#68a54a',
          color0: '#a9cba2',
          lineStyle: {
            width: 1,
            color: '#408829',
            color0: '#86b379'
          }
        }
      }
    },
    map: {
      itemStyle: {
        normal: {
          areaStyle: {
            color: '#ddd'
          },
          label: {
            textStyle: {
              color: '#c12e34'
            }
          }
        },
        emphasis: {
          areaStyle: {
            color: '#99d2dd'
          },
          label: {
            textStyle: {
              color: '#c12e34'
            }
          }
        }
      }
    },
    force: {
      itemStyle: {
        normal: {
          linkStyle: {
            strokeColor: '#408829'
          }
        }
      }
    },
    chord: {
      padding: 4,
      itemStyle: {
        normal: {
          lineStyle: {
            width: 1,
            color: 'rgba(128, 128, 128, 0.5)'
          },
          chordStyle: {
            lineStyle: {
              width: 1,
              color: 'rgba(128, 128, 128, 0.5)'
            }
          }
        },
        emphasis: {
          lineStyle: {
            width: 1,
            color: 'rgba(128, 128, 128, 0.5)'
          },
          chordStyle: {
            lineStyle: {
              width: 1,
              color: 'rgba(128, 128, 128, 0.5)'
            }
          }
        }
      }
    },
    gauge: {
      startAngle: 225,
      endAngle: -45,
      axisLine: {
        show: true,
        lineStyle: {
          color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#408829']],
          width: 8
        }
      },
      axisTick: {
        splitNumber: 10,
        length: 12,
        lineStyle: {
          color: 'auto'
        }
      },
      axisLabel: {
        textStyle: {
          color: 'auto'
        }
      },
      splitLine: {
        length: 18,
        lineStyle: {
          color: 'auto'
        }
      },
      pointer: {
        length: '90%',
        color: 'auto'
      },
      title: {
        textStyle: {
          color: '#333'
        }
      },
      detail: {
        textStyle: {
          color: 'auto'
        }
      }
    },
    textStyle: {
      fontFamily: 'Arial, Verdana, sans-serif'
    }
  };
  var total;
  //var traffic = [];
  init ();
  function init () {
    total = {};
    total.dos = 0;
    total.blockCount = 0;
    total.injection = 0;
    total.unauthorized = 0;
    total.monitoredCount = 0;
    total.blockedIP = [];
    total.monitoredIP = [];
    total.totalCount = 0;
    total.illegalURL = 0;
    total.notAllowedURL = 0;
    total.getCount = 0;
    total.postCount = 0;
    total.patchCount = 0;
    total.deleteCount = 0;
    total.putCount = 0;
    total.ipCount = {};
    total.pollution = 0;
    total.abuse = 0;
    total.crawler = 0;
    total.traversal = 0;

    total.osCount = {
      "AIX": 0,
      "Amiga OS": 0,
      "Android": 0,
      "Arch": 0,
      "Bada": 0,
      "BeOS": 0,
      "BlackBerry": 0,
      "CentOS": 0,
      "Chromium OS": 0,
      "Contiki": 0,
      "Fedora": 0,
      "Firefox OS": 0,
      "FreeBSD": 0,
      "Debian": 0,
      "DragonFly": 0,
      "Gentoo": 0,
      "GNU": 0,
      "Haiku": 0,
      "Hurd": 0,
      "iOS": 0,
      "Joli": 0,
      "Linpus": 0,
      "Linux": 0,
      "Mac OS": 0,
      "Mageia": 0,
      "Mandriva": 0,
      "MeeGo": 0,
      "Minix": 0,
      "Mint": 0,
      "Morph OS": 0,
      "NetBSD": 0,
      "Nintendo": 0,
      "OpenBSD": 0,
      "OpenVMS": 0,
      "OS/2": 0,
      "Palm": 0,
      "PCLinuxOS": 0,
      "Plan9": 0,
      "Playstation": 0,
      "QNX": 0,
      "RedHat": 0,
      "RIM Tablet OS": 0,
      "RISC OS": 0,
      "Sailfish": 0,
      "Series40": 0,
      "Slackware": 0,
      "Solaris": 0,
      "SUSE": 0,
      "Symbian": 0,
      "Tizen": 0,
      "Ubuntu": 0,
      "UNIX": 0,
      "VectorLinux": 0,
      "WebOS": 0,
      "Windows": 0,
      "Windows Phone": 0,
      "Windows Mobile": 0,
      "Zenwalk": 0
    };
    total.browserCount = {
      "Amaya": 0,
      "Android Browser": 0,
      "Arora": 0,
      "Avant": 0,
      "Baidu": 0,
      "Blazer": 0,
      "Bolt": 0,
      "Camino": 0,
      "Chimera": 0,
      "Chrome": 0,
      "Chromium": 0,
      "Comodo Dragon": 0,
      "Conkeror": 0,
      "Dillo": 0,
      "Dolphin": 0,
      "Doris": 0,
      "Edge": 0,
      "Epiphany": 0,
      "Fennec": 0,
      "Firebird": 0,
      "Firefox": 0,
      "Flock": 0,
      "GoBrowser": 0,
      "iCab": 0,
      "ICE Browser": 0,
      "IceApe": 0,
      "IceCat": 0,
      "IceDragon": 0,
      "Iceweasel": 0,
      "IE": 0,
      "IE Mobile": 0,
      "Iron": 0,
      "Jasmine": 0,
      "K-Meleon": 0,
      "Konqueror": 0,
      "Kindle": 0,
      "Links": 0,
      "Lunascape": 0,
      "Lynx": 0,
      "Maemo": 0,
      "Maxthon": 0,
      "Midori": 0,
      "Minimo": 0,
      "MIUI Browser": 0,
      "Safari": 0,
      "Mobile Safari": 0,
      "Mosaic": 0,
      "Mozilla": 0,
      "Netfront": 0,
      "Netscape": 0,
      "NetSurf": 0,
      "Nokia": 0,
      "OmniWeb": 0,
      "Opera": 0,
      "Opera Mini": 0,
      "Opera Mobi": 0,
      "Opera Tablet": 0,
      "PhantomJS": 0,
      "Phoenix": 0,
      "Polaris": 0,
      "QQBrowser": 0,
      "RockMelt": 0,
      "Silk": 0,
      "Skyfire": 0,
      "SeaMonkey": 0,
      "SlimBrowser": 0,
      "Swiftfox": 0,
      "Tizen": 0,
      "UCBrowser": 0,
      "Vivaldi": 0,
      "w3m": 0,
      "Yandex": 0
    };
  }


  function processLog (log) {
    var logArray = log.split (/\r|\n/);
    for (var i = 0; i < logArray.length; i++) {
      var content = logArray[i];
      if (!content.startsWith ("#"))
        processContent (content)
    }
    analysisCount ();
    analysisType ();
    analysisTotalObject (total.ipCount, 'IP分析', doBarChart);
    analysisTotalObject (total.browserCount, '瀏覽器分析', doPieChart);
    analysisTotalObject (total.osCount, '作業系統分析', doPieChart);
    showTime ();
    //console.log (JSON.stringify(total))
    console.log (total);
  }

  function analysisOperatingSystem () {
    var name = 'a_operating';
    sorted = Object.keys (total.osCount).sort (function (a, b) {
      return total.osCount[a] - total.osCount[b]
    });
    data = [];
    label = [];
    for (var i = sorted.length - 1; i >= 0; i--) {
      if (total.osCount[sorted[i]] === 0)
        break;
      label.push (sorted[i]);
      data.push (total.osCount[sorted[i]]);
    }
    createBlock ('作業系統統計', name);
    var lineData = [['作業系統統計', [total.getCount, total.monitoredCount, total.blockCount]]];
    createBarChart (name, createBarData (lineData, label));
  }

  function analysisBrowser () {
    var name = 'a_browser';
    sorted = Object.keys (total.browserCount).sort (function (a, b) {
      return total.browserCount[a] - total.browserCount[b]
    });
    data = [];
    label = [];
    for (var i = sorted.length - 1; i >= 0; i--) {
      if (total.browserCount[sorted[i]] === 0)
        break;
      label.push (sorted[i]);
      data.push (total.browserCount[sorted[i]]);
    }
    if (Math.random () > 0.5) {
      createBlock ('瀏覽器分析', name);
      createDonutChart (name, createDonutData (data, label));
    } else {
      createBlock ('瀏覽器分析', name);
      createPieChart (name, createPieData (data, label));
    }
  }

  function processContent (content) {
    /*
     TODO 這裡採用的解析方法如果LOG FORMAT改掉則會完全失效
     */
    var separator = ' ; ';
    var rawData = {};
    var contentArray = content.split (separator);
    rawData.date = contentArray[0];
    rawData.time = contentArray[1];
    rawData.siteInstance = contentArray[2];
    if (rawData.siteInstance && rawData.siteInstance.startsWith ("W3SVC")) {
      /*
       event有重要的四種
       1. OnReadRawData 在IIS7不支援
       當請求被接收時會被web server呼叫，可以觀察raw data
       2. OnPreprocHeaders
       當headers被處理時被呼叫，可以觀察headers, url, method, version
       3. OnUrlMap
       當web server需要rewrite url時被呼叫，可以觀察原本的url以及最後的path
       4. OnSendRawData
       當web server傳送東西給clien時被呼叫，在這裡我們更改或移除server header
       */
      rawData.event = contentArray[3];
      switch (rawData.event) {
        //case "OnReadRawData":
        //  processOnReadRawData (contentArray, rawData);
        //  break;
        case "OnPreprocHeaders":
          processOnPreprocHeaders (contentArray, rawData);
          break;
        case "OnUrlMap":
          processOnUrlMap (contentArray, rawData);
          break;
        case "OnSendRawData":
          processOnSendRawData (contentArray, rawData);
          break;
        default:
          console.log ("[!]\n" + content);
          break;
      }
    }

    function processOnUrlMap (contentArray, rawData) {
      rawData.clientIP = contentArray[4];
      rawData.username = contentArray[5];
      rawData.host = contentArray[6];
      rawData.url = contentArray[7];
      for (var i = 8; i < contentArray.length; i++) {
        if (contentArray[i].startsWith ("BLOCKED")) {
          rawData.blocked = true;
          var checkInjection = /Possible SQL injection/g.exec (contentArray[i]);
          if (checkInjection !== null)
            rawData.injection = true;
          else
            console.log(contentArray[i]);
        }
        if (contentArray[i].startsWith ("MONITORED")) {
          rawData.monitored = true;
          rawData.referer = /'(.*)'/g.exec (contentArray[i + 1])[1];
          rawData.userAgent = /'(.*)'/g.exec (contentArray[i + 2])[1];
          rawData.from = /'(.*)'/g.exec (contentArray[i + 3])[1];
          rawData.acceptLanguage = /'(.*)'/g.exec (contentArray[i + 4])[1];
          rawData.accept = /'(.*)'/g.exec (contentArray[i + 5])[1];
          rawData.contentType = /'(.*)'/g.exec (contentArray[i + 6])[1];
        }
      }
      processRawData (rawData, contentArray);
    }

    function processOnSendRawData (contentArray, rawData) {
      rawData.clientIP = contentArray[4];
      rawData.username = contentArray[5];
      rawData.host = contentArray[6];
      rawData.method = contentArray[7];
      rawData.scriptName = contentArray[8];
      rawData.pathInfo = contentArray[9];
      rawData.queryString = contentArray[10];
      rawData.error = contentArray[11]; // HTTP Client Error || HTTP Server Error
      rawData.errorStatus = contentArray[12];
      rawData.referer = /'(.*)'/g.exec (contentArray[13])[1];
      rawData.userAgent = /'(.*)'/g.exec (contentArray[14])[1];
      rawData.from = /'(.*)'/g.exec (contentArray[15])[1];
      rawData.acceptLanguage = /'(.*)'/g.exec (contentArray[16])[1];
      rawData.accept = /'(.*)'/g.exec (contentArray[17])[1];
      rawData.contentType = /'(.*)'/g.exec (contentArray[18])[1];

      rawData.originHeader = contentArray[19];
      if (contentArray.length === 21) {
        rawData.hint = contentArray[20];
      }

      processRawData (rawData, contentArray);
    }

    function processOnPreprocHeaders (contentArray, rawData) {
      //TODO 加入解析Settings
      var reMonitoredIP = /IP address '((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))'/g;
      var reBlockedIP = /IP address '((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))' not allowed/g;
      rawData.clientIP = contentArray[4];
      rawData.username = contentArray[5];
      rawData.host = contentArray[6];
      rawData.method = contentArray[7];
      rawData.url = contentArray[8];
      for (var i = 9; i < contentArray.length; i++) {
        if (contentArray[i].startsWith ('BLOCKED')) {
          var checkInjection = /Possible SQL injection/g.exec (contentArray[i]);
          var checkAuth = /accessing\/running/g.exec (contentArray[i]);
          var checkAuth2 = /not allowed in filename/g.exec (contentArray[i]);
          var checkPollution = /Parameter pollution in querystring/g.exec (contentArray[i]);
          var checkCrawler = /User Agent is switching too much on this IP address/g.exec (contentArray[i]);
          var cookiePollution = /Parameter pollution in cookie/g.exec (contentArray[i]);
          var checkURL = /URL not in allowed list/g.exec(contentArray[i]);
          var checkIllegalURL = /not allowed in URL/g.exec(contentArray[i]);
          var checkIllegalURL2 = /not allowed in querystring/g.exec(contentArray[i]);
          var check = reBlockedIP.exec (contentArray[i]);
          rawData.blocked = true;
          if (check !== null)
            rawData.blockedIP = check[1];
          else if (checkInjection !== null)
            rawData.injection = true;
          else if (checkAuth !== null || checkAuth2 !== null)
            rawData.unauth = true;
          else if (checkPollution !== null)
            rawData.pollution = true;
          else if (checkCrawler !== null)
            rawData.crawler = true;
          else if (cookiePollution)
            rawData.pollution = true;
          else if (checkURL)
            rawData.notAllowedURL = true;
          else if (checkIllegalURL || checkIllegalURL2)
            rawData.illegalURL = true;
          else
            console.log(contentArray[i]);

        }
        if (contentArray[i].startsWith ('ALERT')) {
          var check = /Reached URL requests limit/g.exec (contentArray[i]);
          if (check)
            rawData.dos = true;
          var checkAbuse = /Encoding exploit in querystring/g.exec (contentArray[i]);
          var checkAbuse2 = /Querystring embedded encoding exploit/g.exec (contentArray[i]);
          var checkAbuse3 = /Encoding exploit in cookie/g.exec (contentArray[i]);
          var checkTraversal = /Directory traversal not allowed in querystring/g.exec (contentArray[i]);
          if (checkAbuse !== null || checkAbuse2 !== null || checkAbuse3 !== null)
            rawData.abuse = true;
          if (checkTraversal !== null)
            rawData.traversal = true;
        }
        if (contentArray[i].startsWith ('MONITORED')) {
          rawData.monitored = true;
          var check = reMonitoredIP.exec (contentArray[i]);
          if (check !== null)
            rawData.monitoredIP = check[1];
          rawData.referer = /'(.*)'/g.exec (contentArray[i + 1])[1];
          rawData.userAgent = /'(.*)'/g.exec (contentArray[i + 2])[1];
          rawData.from = /'(.*)'/g.exec (contentArray[i + 3])[1];
          rawData.acceptLanguage = /'(.*)'/g.exec (contentArray[i + 4])[1];
          rawData.accept = /'(.*)'/g.exec (contentArray[i + 5])[1];
          rawData.contentType = /'(.*)'/g.exec (contentArray[i + 6])[1];
          break;
        }
      }
      processRawData (rawData, contentArray);
    }

    function processRawData (rawData, debug) {

      try {
        //traffic.push ({Date: rawData.date});
        //traffic.push ({Time: rawData.time});
        //traffic.push ({Event: rawData.event});
        //traffic.push ({IP: rawData.clientIP});
        //traffic.push ({Host: rawData.host});
        ++total.totalCount;
        if (rawData.illegalURL)
          ++total.illegalURL
        if (rawData.notAllowedURL)
          ++total.notAllowedURL;
        if (rawData.crawler)
          ++total.crawler;
        if (rawData.traversal)
          ++total.traversal;
        if (rawData.abuse)
          ++total.abuse;
        if (rawData.pollution)
          ++total.pollution;
        if (rawData.dos)
          ++total.dos;
        if (rawData.blockedIP)
          total.blockedIP.push (rawData.blockedIP);
        if (rawData.monitoredIP)
          total.monitoredIP.push (rawData.monitoredIP);
        if (rawData.injection)
          ++total.injection;
        if (rawData.blocked)
          ++total.blockCount;
        if (rawData.monitored)
          ++total.monitoredCount;
        if (rawData.unauth)
          ++total.unauthorized;
        if (rawData.method !== undefined) {
          if (rawData.method.toLowerCase ().startsWith ('get'))
            ++total.getCount;
          if (rawData.method.toLowerCase ().startsWith ('post'))
            ++total.postCount;
          if (rawData.method.toLowerCase ().startsWith ('put'))
            ++total.putCount;
          if (rawData.method.toLowerCase ().startsWith ('delete'))
            ++total.deleteCount;
          if (rawData.method.toLowerCase ().startsWith ('patch'))
            ++total.patchCount;
        }

        var parser = new UAParser ();
        parser.setUA (rawData.userAgent);
        var result = parser.getResult ();
        if (total.browserCount[result.browser.name] !== undefined)
          ++total.browserCount[result.browser.name];
        if (total.osCount[result.os.name] !== undefined)
          ++total.osCount[result.os.name];
        if (typeof total.ipCount[rawData.clientIP] === "undefined")
          total.ipCount[rawData.clientIP] = 1;
        else
          ++total.ipCount[rawData.clientIP];
      } catch (e) {
        console.log (e + '\n' + debug);
      }
    }
  }


  function readSingleFile (e) {
    init ();
    var file = e.target.files[0];
    if (!file) {
      console.error ("fail to read file");
      return;
    }
    var reader = new FileReader ();
    reader.onload = function (e) {
      var contents = e.target.result;
      $ ('#rowPanel').html ('<div class="row"></div><div class="clearfix"></div>');
      processLog (contents);
    };
    reader.readAsText (file);
  }


  document.getElementById ('file-input')
    .addEventListener ('change', readSingleFile, false);

  processLog (global_data);

  function createBlock (id) {
    var template = $ ('#template_div');
    if (id === undefined)
      id = Math.random ();
    var rows = $ ('.row');
    var row = rows[rows.length - 1];
    if ($ (row).children ().length === 2) {
      var role_main = $ ('#rowPanel');
      role_main.append ($ ('<div class="row"></div><div class="clearfix"></div>'));
      rows = $ ('.row');
      row = rows[rows.length - 1];
    }
    $ (row).append (template.html ()
      .replace ('{{id}}', id));
  }

  function createChart (id, option) {
    echarts.init (document.getElementById (id), theme).setOption (option);
  }

  function getPie2Option (name, _legend, _data) {
    return {
      title: {
        text: name,
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        x: 'center',
        y: 'bottom',
        data: _legend
      },
      calculable: true,
      series: [{
        name: 'Area Mode',
        type: 'pie',
        radius: [25, 90],
        center: ['50%', 170],
        roseType: 'area',
        x: '50%',
        max: 40,
        sort: 'ascending',
        data: _data
      }]
    };
  }

  function getLineOption (name, _legend, _data) {
    return {
      title: {
        text: '線型圖',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
      },
      legend: {
        left: 'left',
        data: ['2的指数', '3的指数']
      },
      xAxis: {
        type: 'category',
        name: 'x',
        splitLine: {show: false},
        data: ['一', '二', '三', '四', '五', '六', '七', '八', '九']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      yAxis: {
        type: 'log',
        name: 'y'
      },
      series: [
        {
          name: '3的指数',
          type: 'line',
          data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669]
        },
        {
          name: '2的指数',
          type: 'line',
          data: [1, 2, 4, 8, 16, 32, 64, 128, 256]
        },
        {
          name: '1/2的指数',
          type: 'line',
          data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512]
        }
      ]
    };

  }

  function getPieOption (name, _legend, _data) {
    return {
      title: {
        text: name,
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: _legend
      },
      series: [
        {
          name: name,
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: _data,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

  }

  function getBarOption (name, _legend, _data) {
    return {
      title: {
        text: name,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['IP統計']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: _legend
      },
      series: _data
    };

  }

  function getFunnelOption (name, _legend, _data) {
    return {
      title: {
        text: name
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
        feature: {
          dataView: {readOnly: false},
          restore: {},
          saveAsImage: {}
        }
      },
      legend: {
        data: _legend
      },
      calculable: true,
      series: [
        {
          name: '漏斗圖',
          type: 'funnel',
          left: '10%',
          top: 60,
          //x2: 80,
          bottom: 60,
          width: '80%',
          // height: {totalHeight} - y - y2,
          min: 0,
          max: 100,
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          gap: 2,
          label: {
            normal: {
              show: true,
              position: 'inside'
            },
            emphasis: {
              textStyle: {
                fontSize: 20
              }
            }
          },
          labelLine: {
            normal: {
              length: 10,
              lineStyle: {
                width: 1,
                type: 'solid'
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 1
            }
          },
          data: _data
        }
      ]
    };

  }

  function getRadarOption (name, _legend, _data) {
    return {
      title: {
        text: '雷達圖'
      },
      tooltip: {},
      legend: {
        data: ['預算', '開銷']
      },
      radar: {
        // shape: 'circle',
        indicator: [
          {name: '銷售', max: 6500},
          {name: '管理', max: 16000},
          {name: '信息', max: 30000},
          {name: '客服', max: 38000},
          {name: '研發', max: 52000},
          {name: '市場', max: 25000}
        ]
      },
      series: [{
        name: '雷達圖',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: '預算'
          },
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: '開銷'
          }
        ]
      }]
    };
  }

  function getDonutOption (name, _legend, _data) {
    return {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: _legend
      },
      series: [
        {
          name: name,
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: _data
        }
      ]
    };
  }

  function analysisCount () {
    $ ('#count').html (total.totalCount);
    $ ('#block').html (total.blockCount);
    $ ('#monitor').html (total.monitoredCount);
    var legend = ["已分析", "已阻擋", "已監控"];
    var data = [];
    data.push ({name: '已分析', value: total.totalCount});
    data.push ({name: '已阻擋', value: total.blockCount});
    data.push ({name: '已監控', value: total.monitoredCount});
    createBlock ('analysisCount');
    createChart ('analysisCount', getDonutOption ('主要統計', legend, data));
  }

  function analysisTotalObject (element, name, callback) {
    //var element = total.ipCount;
    sorted = Object.keys (element).sort (function (a, b) {
      return element[a] - element[b]
    });
    data = [];
    label = [];
    for (var i = sorted.length - 1; i >= 0; i--) {
      if (element[sorted[i]] === 0)
        break;
      label.push (sorted[i]);
      data.push (element[sorted[i]]);
    }
    callback (data, name, label);
  }

  function analysisType () {
    var dir = total.traversal;
    var dos = total.dos;
    var inj = total.injection;
    var cra = total.crawler;
    var abu = total.abuse;
    var ill = total.illegalURL;
    var not = total.notAllowedURL;
    var _data = [dir, dos, inj, cra, abu, ill, not]
    var _label = ['目錄遍歷', '阻斷服務', '隱碼注入', '網路爬蟲', '模糊測試', '非法網址', '越權訪問'];
    label = [];
    var data = [];
    for(var i=0;i<_data.length;i++){
      if(_data[i] > 0){
        data.push({value:_data[i], name:_label[i]});
        label.push(_label[i]);
      }
      
    }
    var _id = Math.random ();
    createBlock (_id);
    console.log(getPie2Option('攻擊類型', label, data));
    createChart (_id, getPie2Option('攻擊類型', label, data));
  }


  function doPieChart (_data, name, label) {
    var _id = Math.random ();
    createBlock (_id);
    var data = [];
    for (var i = 0; i < _data.length; i++) {
      data.push ({value: _data[i], name: label[i]});
    }
    createChart (_id, getPieOption (name, label, data));
  }

  function doBarChart (_data, name, label) {
    var _id = Math.random ();
    createBlock (_id);
    var data = {name: 'IP統計', type: 'bar', data: _data};
    createChart (_id, getBarOption (name, label, data));
  }

  function showTime () {
    var _id1 = Math.random ();
    var _id3 = Math.random ();
    var _id4 = Math.random ();
    createBlock (_id1);
    createBlock (_id3);
    createBlock (_id4);
    createChart (_id1, getLineOption ());
    createChart (_id3, {
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: '',
          type: 'gauge',
          detail: {formatter: '{value}%'},
          data: [{value: 50, name: '已完成'}]
        }
      ]
    });
    createChart (_id4, getRadarOption ());
  }


}) ();