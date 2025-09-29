let pin_=prompt("Enter your pincode: ");
let pin = Number(pin_);
let bal=10000
if(pin==1234)
    {
        let c=prompt("Enter your requirement:\n1.Withdraw\n2.Deposit\n3.Ckeck your balance");
        if (c=="1"){
            let w=prompt("Enter the amount: ");
            let wd=Number(w);
            bal-=wd;
            alert(
                "Withdrawal succesful! New Balance:"+bal
            );
        }
        else if(c=="2"){
            var d=Number(prompt("Enter the amount:"));
            bal+=d;
            alert("Withdrawal successful!\nNew Balance:"+bal);
        }
        else{
            alert("Your current balance is"+bal)
        }
    }
    else{alert("Invalid Login");}