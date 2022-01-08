
var fv$GMockData = {Columns : "",Htype10:{} }

$.ajax({
    type: "GET",
    url:  '/Mock/info.txt',
    async: false,
    // dataType: "json",
    success: function(data) {
      fv$GMockData.Columns = JSON.parse(data)
    },
    error: function(err){
        console.log(err);
    }
  })

  $.ajax({
    type: "GET",
    url:  '/Mock/Htype/10/5320/info.txt',
    async: false,
    // dataType: "json",
    success: function(data) {
      fv$GMockData.Htype10['5320'] = JSON.parse(data)
    },
    error: function(err){
        console.log(err);
    }
  })

  var fv$MockPagingFn = function(rows, pageSize, pageIndex, total){
    var fv$MockEnd = pageIndex*pageSize
    // let ttt= {
    //   rows,
    //   pageIndex,
    //   pageSize,
    //   total
    // }
    // alert(JSON.stringify(ttt))
    return  Object.prototype.toString.call(rows) === '[object Array]'?
      rows.slice((pageIndex-1)*pageSize,fv$MockEnd <total?fv$MockEnd : total) : []
  }
  var fv$MockisEmpty = function(obj) {
		if(typeof obj == "undefined" || obj == null || obj == "") {
			return true;
		} else {
			return false;
		}
	}
var fv$mockServer = {
    GetNavColumnsByDid: function() {
        return  [{"ID":3436,"Name":"学院概况","FID":0,"Type":0,"Logo":"","Url":"http://byhvatc.com/list.html?HType=1&CId=3437","Aliase":null,"Describe":null,"Special":false},{"ID":3437,"Name":"学院简介","FID":3436,"Type":1,"Logo":"","Url":null,"Aliase":null,"Describe":null,"Special":false},{"ID":3438,"Name":"专业介绍","FID":3436,"Type":2,"Logo":"","Url":null,"Aliase":null,"Describe":null,"Special":false},{"ID":3439,"Name":"学院影像","FID":3436,"Type":3,"Logo":"","Url":null,"Aliase":null,"Describe":null,"Special":false},{"ID":3440,"Name":"校园风光","FID":3436,"Type":3,"Logo":"","Url":null,"Aliase":null,"Describe":null,"Special":false},{"ID":3441,"Name":"新闻动态","FID":0,"Type":0,"Logo":" UploadFile/2021/7/1/0a38a529-7f74-4855-bcea-1a638f43af95.jpg","Url":"http://byhvatc.com/list.html?HType=2&CId=3442","Aliase":null,"Describe":null,"Special":false},{"ID":3442,"Name":"学院要闻","FID":3441,"Type":2,"Logo":"","Url":null,"Aliase":null,"Describe":null,"Special":false},{"ID":3444,"Name":"通知公告","FID":3441,"Type":2,"Logo":"","Url":null,"Aliase":null,"Describe":null,"Special":false},{"ID":3445,"Name":"媒体关注","FID":3441,"Type":2,"Logo":"","Url":null,"Aliase":null,"Describe":null,"Special":false},{"ID":3446,"Name":"机构设置","FID":0,"Type":0,"Logo":" UploadFile/2021/7/1/eaef5202-6b26-4c1e-99ff-1769abe1aade.jpg","Url":"http://byhvatc.com/list.html?HType=2&CId=3447","Aliase":null,"Describe":null,"Special":false},{"ID":3447,"Name":"职能部门","FID":3446,"Type":2,"Logo":"","Url":null,"Aliase":null,"Describe":null,"Special":false},{"ID":3449,"Name":"教学科研","FID":0,"Type":0,"Logo":" UploadFile/2021/7/1/f0519b73-2941-4a3d-ab93-1871f351c7c5.jpg","Url":"http://byhvatc.com/list.html?HType=2&CId=3450","Aliase":null,"Describe":null,"Special":false},{"ID":3450,"Name":"教育教学","FID":3449,"Type":2,"Logo":"","Url":null,"Aliase":null,"Describe":null,"Special":false},{"ID":3452,"Name":"师资队伍","FID":0,"Type":0,"Logo":" UploadFile/2021/7/1/fa9c43c5-6491-405f-b6cd-0834ac958014.jpg","Url":"http://byhvatc.com/list.html?HType=1&CId=3453","Aliase":null,"Describe":null,"Special":false},{"ID":3453,"Name":"师资概况","FID":3452,"Type":1,"Logo":"","Url":null,"Aliase":null,"Describe":null,"Special":false},{"ID":3455,"Name":"招生动态","FID":0,"Type":0,"Logo":" UploadFile/2021/7/1/553bbe57-4944-49a8-9a91-5bbafac09168.jpg","Url":"http://byhvatc.com/list.html?HType=2&CId=3457","Aliase":null,"Describe":null,"Special":false},{"ID":3458,"Name":"留学项目","FID":3455,"Type":2,"Logo":"","Url":null,"Aliase":null,"Describe":null,"Special":false},{"ID":5318,"Name":"招生信息","FID":3455,"Type":2,"Logo":"","Url":null,"Aliase":null,"Describe":null,"Special":false},{"ID":3463,"Name":"公共服务","FID":0,"Type":0,"Logo":" UploadFile/2021/7/1/baedddc9-af64-413c-b1f6-b0253d2be4c7.jpg","Url":"http://byhvatc.com/list.html?HType=8&CId=3466","Aliase":null,"Describe":null,"Special":false},{"ID":3466,"Name":"院长信箱","FID":3463,"Type":8,"Logo":"","Url":null,"Aliase":null,"Describe":null,"Special":false},{"ID":5320,"Name":"录取查询","FID":0,"Type":10,"Logo":"","Url":null,"Aliase":null,"Describe":null,"Special":false}]
    },
    GetNewsInfoByCid: function(opt){
        var GETDATE = ''
        $.ajax({
            type: "GET",
            url:  '/Mock/Htype/2/'+opt.CID+'/info.txt',
            async: false,
            // dataType: "json",
            success: function(data) {
              // alert(data)
              var fv$MockTotal = fv$GMockData.Columns[opt.CID].total 
              fv$MockisEmpty(opt.PageIndex)&&(opt.PageIndex = '1')
              fv$MockisEmpty(opt.PageSize)&&(opt.PageSize = '10000')
              fv$MockisEmpty(fv$MockTotal)&&(fv$MockTotal = 0)
                GETDATE = { 
                   row: fv$MockPagingFn(JSON.parse(data)||[],parseInt(opt.PageSize||'10000') ,parseInt(opt.PageIndex||'1'), fv$MockTotal||0),
                   total: fv$MockTotal 
                 }
            },
            error: function(err){
                console.log(err);
            }
          })
          return GETDATE
    },
    GetFilesInfoByCid: function(opt){
      var GETDATE = ''
      // alert(JSON.stringify(opt) )
      // console.log(opt);
      $.ajax({
          type: "GET",
          url:  '/Mock/Htype/'+fv$GMockData.Columns[opt.CID].Type+'/'+opt.CID+'/info.txt',
          async: false,
          // dataType: "json",
          success: function(data) {
            // alert(data)
            var fv$MockTotal = fv$GMockData.Columns[opt.CID].total 
            // fv$MockisEmpty(opt.PageIndex)&&(opt.PageIndex = '1')
            // fv$MockisEmpty(opt.PageSize)&&(opt.PageSize = '10000')
            // fv$MockisEmpty(fv$MockTotal)&&(fv$MockTotal = 0)
            GETDATE = { 
              row: fv$MockPagingFn(JSON.parse(data)||[], parseInt(opt.PageSize||'10000') ,parseInt(opt.PageIndex||'1'), fv$MockTotal||0),
              total: fv$MockTotal 
            }
          },
          error: function(err){
              console.log(err);
          }
        })
        return GETDATE
  },
  GetColumnByid: function(opt){
   return fv$GMockData.Columns[opt.CID]
  },
  GetFNavColumnsByCid: function(opt) {
    return {p:fv$GMockData.Columns[fv$GMockData.Columns[opt.CID].Fid],nav:fv$GMockData.Columns[fv$GMockData.Columns[opt.CID].Fid].Children}
  },
  GetNewsInfoByNid: function(opt) {
    var GETDATE = ''
    // console.log(opt);
    $.ajax({
        type: "GET",
        url:  '/Mock/NID/'+opt.NID+'.txt',
        async: false,
        // dataType: "json",
        success: function(data) {
         
          GETDATE =JSON.parse(data)
        },
        error: function(err){
            console.log(err);
        }
      })
      return GETDATE

  },
  GetAdmission: function (opt) {
   return fv$GMockData.Htype10[fv$GMockData.Columns[opt.Type]]
  },
  GetSinglePageInfoByCid: function(opt) {
    var GETDATE = ''
    // alert(JSON.stringify(opt) )
    // console.log(opt);
    $.ajax({
        type: "GET",
        url:  '/Mock/Htype/1/'+opt.CID+'/info.txt',
        async: false,
        // dataType: "json",
        success: function(data) {
         
          GETDATE =JSON.parse(data)
        },
        error: function(err){
            console.log(err);
        }
      })
      return GETDATE
  }
}


var fv$MockGetQueryString = function(strUrl,name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = strUrl.substr(1).match(reg);
    if(r != null) {
      return decodeURI(r[2]);
    }
    return null;
  }

  var mockData = function(options){
 
    var fv$Mk ={}
    var fv$MkAPI = options.url.replace(RegExp('/API/WebAPI'),'')
    fv$Mk.path = fv$MkAPI 
    fv$Mk.API = fv$MkAPI.split('?')[0].replace(/\//,'')
    fv$Mk.Seach = '&'+fv$MkAPI.split('?')[1]
    fv$Mk.HType = fv$MockGetQueryString(fv$Mk.Seach,'HType')
    fv$Mk.CID = fv$MockGetQueryString(fv$Mk.Seach,'Cid')||fv$MockGetQueryString(fv$Mk.Seach,'CId')
    fv$Mk.DID = fv$MockGetQueryString(fv$Mk.Seach,'Did')
    fv$Mk.NID = fv$MockGetQueryString(fv$Mk.Seach,'Nid')
    fv$Mk.PageSize = fv$MockGetQueryString(fv$Mk.Seach,'PageSize')||fv$MockGetQueryString(fv$Mk.Seach,'pageSize')
    fv$Mk.PageIndex = fv$MockGetQueryString(fv$Mk.Seach,'PageIndex')
    fv$Mk.descNum = fv$MockGetQueryString(fv$Mk.Seach,'descNum')
    fv$Mk.needPhoto = fv$MockGetQueryString(fv$Mk.Seach,'needPhoto')
  if(fv$mockServer[fv$Mk.API]){
    var FvData =  fv$mockServer[fv$Mk.API](fv$Mk)
    
    return JSON.stringify(FvData)
  }


  }
  var  mockData2 = function(options){
 alert(JSON.stringify(options))
 
    // return JSON.stringify(FvData)
  }


  // }


 
  //  FvMock.mock(RegExp(".*"), 'get', mockData2)
  var interceptUrl = function(e) {
    e.stopPropagation();
    if(e.preventDefault){
          e.preventDefault();
      }else {
          e.returnValue = false;
      }
     
      return false;
     
  }
  
//   EventTarget.prototype.on=function (type,...arg) {
//     let str,data,callback;
//     arg.forEach((item)=>{
//         //str要么是一个false要么是一个字符串
//         typeof item=="string"?str=item:item.toString()=="[object Object]"?data=item: typeof item=="function"?callback=item:null;
//     });

//     function run(e) {
//         if(data)e.data=data;
//         if(str){
//             if(e.target.tagName==str.toUpperCase()){
//                 callback&&callback.call(e.target,e)
//             }
//         }else {
//             callback&&callback.call(this,e);
//         }
//     }
//     this.addEventListener(type,run);
// };

// function fn(e) {
//     console.log(this,e.data);//事件源li
// }

// $(document).ready(function() {
 
// })
// setTimeout(function() {
//   $('#app').on('click',function(e) {
//     console.log(this)
//     alert(e.target.href)
//       return false
//   })
// },1000)

FvMock.mock(RegExp('/API/WebAPI' + ".*"), 'get', mockData)
//  document.addEventListener('click',function(e) {
//     // console.log(e);
//     e.target.tagName === 'A' &&interceptUrl(e)
//     // return false
//     e.stopPropagation();
//     if(e.preventDefault){
//           e.preventDefault();
//       }else {
//           e.returnValue = false;
//       }
  
//       console.log(e.target.href)
// },false)