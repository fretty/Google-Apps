function makeEngineerFilles(nameEngineer, emailEngineer) {

  var folder = DriveApp.getFoldersByName("CRM").next();

  var engineerFolder = folder.getFoldersByName('Engineer').next()
  var engineerFille = folder.getFilesByName('Водитель Шаблон заказы').next()

  engineerFille.makeCopy(engineerFolder).setName(nameEngineer + " заказы").addEditor(emailEngineer)

}