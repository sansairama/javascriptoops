//static methods are those that are not used by users but used by classes
class User_info{
    static id = 1;
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.id = User_info.id++
    }
    static compareage(user1,user2)
    {
        return user1.age-user2.age
    }
}

const user1= new User_info('Shashwat',24)
const user2= new User_info('Karan',44)
const user3= new User_info('Smriti',35)

const users = [user1,user2,user3]
users.sort(User_info.compareage)
console.log(users)
