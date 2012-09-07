var notifications = [];

var setBackgroundNotifications = function(alarmList) {
  Ti.API.info(alarmList);
  for (var i=0; i<alarmList.length; i++) {
	  if (new Date() < alarmList[i].date){
      Ti.API.info(alarmList[i]);
      var notification = Ti.App.iOS.scheduleLocalNotification({
        date: alarmList[i].date,
        alertBody: "Torimari Alarm",
        alertAction: "Open the app",
        sound: 'voice/nos.mp3',
        userInfo: {id: i}
      });
      notifications.push(notification);
      Ti.API.info('set notification id ' + i);
      Ti.API.info(notifications[i]);
    }
  } 
};

setBackgroundNotifications(Ti.App.Properties.getList('alarmList'));
