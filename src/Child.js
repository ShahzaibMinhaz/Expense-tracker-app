import React, { useContext, useState } from 'react';
import { TransactionContext } from './transContext';


function Child() {
    let { transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);   


    const Handleadd = (event) => {
         event.preventDefault()

         if (Number(newAmount) === 0) {
            alert("Please enter correct value");
            return false;
        } 

        // DeleteTransaction({
        //     amount: Number(Amount),
        //     desc : Desc
        // })

        addTransaction({
            amount: Number(newAmount),
            desc : newDesc
        })
        
        
        setDesc('');
        setAmount(0)
    }

    const getIncome = () => {
        let Income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                Income = Income + transactions[i].amount
        }
        return Income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (
        <div className="Container">
            <h1 className="text-center">Expense Tracker</h1>
            <h3 className="Balance">Your Balance <br/><span className="bal-amount">${getIncome() + getExpense()}</span></h3>

            <div className="Exp-Container">
                <h3 >Income <br/><span className="Income">${getIncome()}</span></h3>
                <hr />
                <h3 >Expense <br/><span className="Expense">${getExpense()}</span></h3>
            </div>
            <h3>History</h3>
            <hr/>

            <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return (
                        <li className={transObj.amount > 0 ? "green" : "red"} key={ind}>
                        <span>{transObj.desc}</span>
                        <span>${transObj.amount}</span>
                    </li>
                    )
                })}

            </ul>

            <h3>Add New Transaction</h3>
            <hr/>
            <form className="Transaction-Form" onSubmit={Handleadd}>
                <label>
                    Enter Description <br />
                    <input type="text" value={newDesc} required placeholder="Enter Description" onChange={(ev) => setDesc(ev.target.value)}/> 
                </label>
                <br/>
                <label>
                    Enter Amount <br />
                    <input type="number" value={newAmount} required placeholder="Enter Amount" onChange={(ev)=> setAmount(ev.target.value)}/>
                </label>
                <br/><br/>

                <input className="Btn" type='submit' value="Add Transaction"   />
            </form>


            
        </div>
    );
}

export default Child;