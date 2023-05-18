function end_C() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet1 = ss.getSheetByName("シート1");
  var sheet2 = ss.getSheetByName("シート2");
  var field1 = sheet1.getRange(2,1);
  var field2 = sheet1.getRange(2,2);
  var lastRow = sheet2.getLastRow();
  //警告
  if(field1.isBlank() || field2.isBlank()){
    Browser.msgBox("No.と作業者名を入力してください",Browser.Buttons.OK);
  }else{
    //No.と作業者名を記録
    sheet1.getRange(2,1,1,2).copyTo(sheet2.getRange(lastRow+1,1), {contentsOnly:true});
    //日付を記録
    var today = Utilities.formatDate(new Date(), "JST", "yyyy/MM/dd");
    sheet2.getRange(lastRow+1,3).setValue(today);
    //時間を記録
    var time = Utilities.formatDate(new Date(), "JST", "HH:mm");
    sheet2.getRange(lastRow+1,4).setValue(time);
    //作業種別を記録
    sheet1.getRange(8,4).copyTo(sheet2.getRange(lastRow+1,5), {contentsOnly:true});
    //開始／終了を記録
    sheet2.getRange(lastRow+1,6).setValue("終了");
    //No.と作業者名をクリア
    sheet1.getRange(2,1,1,2).clearContent();
    //完了メッセージを表示
    Browser.msgBox("記録が完了しました",Browser.Buttons.OK);

  }


}
