module.exports = class Cars {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
 
    companyData(){
return this.name + " " + this.address  
    }

    companyPhone(){
        return this.phone   
            }

}