const UserData = {
    firstName: "John",
    LastName: "Doe",
    age: 30,
    email: "john@example",
    isAdmin: false,
    user: function(){
        return `
            Fullname: ${this.firstName} ${this.LastName}
            Age: ${this.age}
            Email: ${this.email}
            Role: ${this.userInformation()}
        `;
    },

    userInformation: function(){
        if(this.isAdmin === true){
            return "Admin";
        }else{
            return "User";
        }
    },

    admin: function(){
        return `
            Fullname: ${this.firstName} ${this.LastName}
            Age: ${this.age}
            Email: ${this.email}
            Role: ${this.adminInformation()}
        `;
    },

    adminInformation: function(){
        this.isAdmin = true;
        if(this.isAdmin == true){
        return "Admin";
        }else{
            return "User";
        }
                
        
    },

}

console.log("User Information");
console.log(UserData.user());


console.log("Admin Information");
console.log(UserData.admin());
