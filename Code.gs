function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('AIS Customer Dashboard')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getDashboardData() {
  var ss = SpreadsheetApp.openById('1uhGOgV-27KBrkx1h6SmDFyAWxiV045fKr0R87Ak-Yas');
  var sheet = ss.getSheetByName('AIS');
  var data = sheet.getDataRange().getValues();
  return data;
}
