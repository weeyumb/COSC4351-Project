class SupportAdmin extends Admin{

  constructor(){
    super();
  }

  retrieveLinks(){
   return ["Manage User Accounts", "Assign Roles", "Help Desk"];
  }

  getAdminType() {
    return "ADMIN";
  }
}

