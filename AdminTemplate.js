class Admin{
  constructor(){
    if(this.constructor == Admin){
      throw new Error("Object of abstract class cannot be created")
    }
  }

  retrieveLinks(){
    throw new Error("Abstract method has no implementation.")
  }

  checkAdminType(){
    throw new Error("Abstract method has no implementation.")
  }
}
