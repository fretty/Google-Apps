function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menuEngineer = [];
  menuEngineer.push({ name: "Новый водитель", functionName: "showUserForm" });
  //menuEngineer.push(null); // line separator
  menuEngineer.push({ name: "Уволить водителя", functionName: "firingEngineer" });

  ss.addMenu("Водители", menuEngineer)
}