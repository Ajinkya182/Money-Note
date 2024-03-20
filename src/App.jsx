import React, { useState } from "react";

function App() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const[editId,setEditId]= useState(null)

  const addTransaction = (e) => {
    e.preventDefault();
    if(editId){
           const newTransaction = transactions.map((t)=>(
               t.id=== editId ? {id: editId, description,amount} : t
           ))
           setTransactions(newTransaction);
           setEditId(null)
    }else{
      setTransactions([...transactions, { id: Date.now(), description, amount }])
      
    }
    setDescription('')
      setAmount(0)
   
  }
  const handleEdit =(t) =>{
    setEditId(t.id);
    setDescription(t.setDescription);
    setAmount(t.amount);

  }
  const handleDelete=(id) => {
    setTransactions(transactions.filter(t => t.id !==id))
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center pt-12">
        <span className="border-b-2 border-green-300">Money Note</span>
      </h1>
      <div className="container mt-20 mx-auto px-5">
        <div className="p-5 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-5">Transactions</h2>
            <table className="w-full table-fixed flex flex-col items-between text-left">
              <thead>
                <tr className='flex w-full justify-between'>
                  <th className="text-xl font-bold w-full md:w-1/4 px-2 py-2">Description</th>
                  <th className="text-xl font-bold w-full md:w-1/4 px-2 py-2">Amount</th>
                  <th className="text-xl font-bold w-full md:w-1/4 px-2 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t) => (
                  <tr key={t.id} className='flex w-full justify-between'>
                    <td className="py-2 px-2 w-full md:w-1/4">{t.description}</td>
                    <td className="py-2 px-2 w-full md:w-1/4">{t.amount}</td>
                    <td className="py-2 px-2 w-full md:w-1/4">
                      <button className="bg-yellow-500 px-4 py-2 text-white" onClick={e => handleEdit(t)}>Edit</button>
                      <button className="bg-red-500 px-4 py-2 text-white mr-2" onClick={ e =>handleDelete(t.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          <div className="mt-16 mb-4 w-full lg:w-1/2 xl:w-1/3 p-5 mx-auto rounded shadow-lg border-gray-700">
           
            <h1 className="text-xl font-bold text-center mb-5">Add Transactions</h1>
            <form onSubmit={addTransaction} className="flex text-center flex-col mx-auto border-1 border-double border-gray-600 w-full justify-between my-5">
              <input
                type="text"
                className="border border-gray-500 rounded-md w-full px-2 py-2 mb-2 bg-gray-700 text-white"
                placeholder="Description"
                onChange={e => setDescription(e.target.value)}
                value={description}
              />
              <input
                type="number"
                className="border border-gray-500 rounded-md w-full px-2 py-2 mb-2 bg-gray-700 text-white"
                placeholder="Amount"
                onChange={e => setAmount(parseFloat(e.target.value))}
                value={amount}
              />
              <button
                className="bg-gray-900 hover:bg-gray-600 active:bg-gray-800 focus:ring-gray-300 px-4 py-2 text-white"
                type="submit"
              >
                Save Transactions
              </button>
            </form>
          </div>
        </div>
      </div>
         <p className="text-center text-gray-500 mt-4">Made By Ajinkya</p>
    </div>
  );
}

export default App;
