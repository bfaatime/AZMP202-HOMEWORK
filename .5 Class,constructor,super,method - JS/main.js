// 1)
// class Rectangle {
//     constructor(width, height) {
//       this.width = width; 
//       this.height = height;
//     }
//     calculateArea() {
//       return this.width * this.height;
//     }

//     calculatePerimeter() {
//       return 2 * (this.width + this.height);
//     }
//   }
  
//   const myRectangle = new Rectangle(5, 10);
  
//   console.log("Area of the rectangle:", myRectangle.calculateArea());       // 50
//   console.log("Perimeter of the rectangle:", myRectangle.calculatePerimeter()); // 30




// // 2)



// class BankAccount {
//     constructor(accountNumber, balance = 0) {
//       this.accountNumber = accountNumber;
//       this.balance = balance;
//     }

//     deposit(amount) {
//       if (amount <= 0) {
//         console.log("Error: əlavə ediləcən məbləğ müsbət deyil");
//       } else {
//         this.balance += amount;
//         console.log(`Deposited ${amount}. New balance: ${this.balance}`);
//       }
//     }
  
//     withdraw(amount) {
//       if (amount <= 0) {
//         console.log("Error:  Hesabda kifayət qədər vəsait yoxdur");
//       } else if (this.balance < amount) {
//         console.log("Error:  çıxarılacaq məbləğ sıfır və ya mənfidir");
//       } else {
//         this.balance -= amount;
//         console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
//       }
//     }
//   }
  
//   const account1 = new BankAccount('101', 1000);  
//   const account2 = new BankAccount('102', 500);  
  
//   account1.deposit(500); 
//   account1.withdraw(200);
  
//   account2.withdraw(100); 
//   account2.deposit(700);  
  
//   console.log(`Hesab 1-in balansi ${account1.accountNumber}: ${account1.balance}`);
//   console.log(`Hesab 2-nin balansi ${account2.accountNumber}: ${account2.balance}`);